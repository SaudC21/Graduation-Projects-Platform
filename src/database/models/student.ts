import { model, connect } from 'mongoose';
import { studentSchema, Student } from '../Schema/student';
import { environment } from '../../environments/environment';

// Create a Model
export const studentModel = model<Student>('students', studentSchema);

export class StudentStore {
   async connect() {
      // Connect to MongoDB
      await connect(environment.MONGODB_URI);
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
         console.log(`${student.first_name} ${student.last_name} was saved to the database!`);
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