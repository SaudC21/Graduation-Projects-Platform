import { model, connect } from 'mongoose';
import { supervisorSchema, Supervisor } from '../Schema/supervisor';

// Create a Model
export const supervisorModel = model<Supervisor>('supervisors', supervisorSchema);

export class SupervisorStore {
   async connect() {
      // Connect to MongoDB
      await connect(process.env['MONGODB_URI'] as string);
   }

   async show() {
      await this.connect();
      return await supervisorModel.find();
   }

   async index(uid: string) {
      await this.connect();
      return await supervisorModel.findOne({ uid: uid });
   }

   async insert(record: Supervisor) {
      await this.connect();
      const supervisor = new supervisorModel(record);

      await supervisor.save(function (err) {
         if (err) {
            console.log(err);
            return err;
         }
         return supervisor;
      });
   }

   async update(record: object, uid: string) {
      await this.connect();
      await supervisorModel.findOneAndUpdate({ uid: uid }, record);
   }

   async delete(uid: number) {
      await this.connect();

      supervisorModel.find({ uid: uid }).deleteOne(() => {
         console.log(`deleting ${uid}`);
         return `${uid} was deleted`;
      });

      return `There was an issue deleting ${uid}`;
   }
}