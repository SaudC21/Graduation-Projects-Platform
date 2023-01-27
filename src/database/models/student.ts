import * as mongoose from 'mongoose';
import { studentSchema, Student } from '../Schema/student';
import { environment } from '../../environments/environment';
import * as bcrypt from 'bcrypt';
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
    await mongoose.connect(environment.MONGODB_URI);
  }

  async authenticate(uid: number, password: string) {
    await this.connect();
    const student: Student = (await this.index(uid)) as Student;
    if (student == null) {
      throw new Error('Could not find student with uid');
    }

    console.log(password + pepper);

    if (bcrypt.compareSync(password + pepper, student.password_digest)) {
      console.log(`correct password`);

      return student;
    } else {
      console.log(`wrong password: ${student.password_digest}`);

      throw new Error('Invalid password');
    }
  }

  async show() {
    await this.connect();
    return await studentModel.find();
  }

  async index(uid: Number) {
    await this.connect();
    return await studentModel.findOne({ uid: uid });
  }

  async insert(record: Student) {
    await this.connect();
    const student = new studentModel(record);

    await student.save(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
      console.log(
        `${student.first_name} ${student.last_name} was saved to the database!`
      );
      return student;
    });
  }

  async update(record: object, uid: string) {
    await this.connect();
    await studentModel.findOneAndUpdate({ uid: uid }, record);
  }

  async delete(uid: number) {
    await this.connect();

    studentModel.find({ uid: uid }).deleteOne(() => {
      console.log(`deleting ${uid}`);
      return `${uid} was deleted`;
    });

    return `There was an issue deleting ${uid}`;
  }
}
