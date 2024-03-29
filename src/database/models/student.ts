import * as mongoose from 'mongoose';
import { studentSchema, Student } from '../Schema/student';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import * as jwt from 'jsonwebtoken';

//@ts-ignore
import * as dotenv from 'dotenv';
dotenv.config();

const pepper: string = process.env['PEPPER'] as string;
const saltRounds: number = parseInt(process.env['SALT_ROUNDS'] as string);

// Create a Model
export const studentModel = mongoose.model<Student>('students', studentSchema);

export class StudentStore {
  async connect() {
    // Connect to MongoDB
    await mongoose.connect(process.env['MONGODB_URI'] as string);
  }

  async authenticate(uid: number, password: string, res: Response) {
    await this.connect().then(
      await this.index(uid).then((student: any): any => {
        if (bcrypt.compareSync(password + pepper, student.password_digest)) {
          let token = jwt.sign(
            { user: student },
            process.env['TOKEN_SECRET'] as string,
            { expiresIn: 60 * 60 * 2 }
          );
          res.status(200).json({ token: token, expiresIn: 60 * 60 * 2 });
        } else {
          res.status(401);
          res.send(`Invalid password`);
        }
      })
    );
  }

  async show() {
    await this.connect();
    return await studentModel.find();
  }

  async index(uid: Number) {
    await this.connect();
    const student = await studentModel.findOne({ uid: uid });
    return student;
  }

  async groupShow(groupId: string) {
    await this.connect();
    const students = await studentModel.find({ group_id: groupId });
    
    return students;
  }

  async insert(record: Student): Promise<any> {
    await this.connect();
    const student = new studentModel(record);
    const hash = bcrypt.hashSync(record.password_digest + pepper, saltRounds);
    student.password_digest = hash;

    await student.save(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
      
      return student;
    });
    return new Error(`Student was not added`);
  }

  async update(record: object, uid: string) {
    await this.connect();
    await studentModel.findOneAndUpdate({ uid: uid }, record);
  }

  async delete(uid: number) {
    await this.connect();

    studentModel.find({ uid: uid }).deleteOne(() => {
      return `${uid} was deleted`;
    });

    return `There was an issue deleting ${uid}`;
  }
}
