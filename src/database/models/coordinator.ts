import { model, connect } from 'mongoose';
import { coordinatorSchema, Coordinator } from '../Schema/coordinator';

// Create a Model
export const coordinatorModel = model<Coordinator>('coordinators', coordinatorSchema);

export class CoordinatorStore {
   async connect() {
      // Connect to MongoDB
      await connect(process.env['MONGODB_URI'] as string);
   }

   async show() {
      await this.connect();
      return await coordinatorModel.find();
   }

   async index(uid: Number) {
      await this.connect();
      return await coordinatorModel.findOne({ uid: uid });
   }

   async insert(record: Coordinator) {
      this.connect();
      const coordinator = new coordinatorModel(record);

      await coordinator.save(function (err){
         if (err){
             console.log(err);
             return err;
         }
         console.log(`${coordinator.first_name} ${coordinator.last_name} was saved to the database!`);
         return coordinator;
       });
   }

   async update(record: object, uid: string) {
      await this.connect();
      await coordinatorModel.findOneAndUpdate({ uid: uid }, record);
   }

   async delete(uid: number) {
      await this.connect();

      coordinatorModel.find({ uid: uid }).deleteOne(() => {
         console.log(`deleting ${uid}`);
         return `${uid} was deleted`;
      });

      return `There was an issue deleting ${uid}`;
   }
}