import { model, connect, disconnect } from 'mongoose';
import { committeeSchema, CommitteeMember } from '../Schema/committee';
import { environment } from '../../environments/environment';

// Create a Model
const committeeMemberModel = model<CommitteeMember>('committee_members', committeeSchema);

export class CommitteeStore {
   async connect() {
      // Connect to MongoDB
      await connect(environment.MONGODB_URI);
   }

   async show() {
      await this.connect();
      return await committeeMemberModel.find();
   }

   async index(uid: Number) {
      await this.connect();
      return await committeeMemberModel.findOne({ uid: uid });
   }

   async insert(record: CommitteeMember) {
      await this.connect();
      const committeeMember = new committeeMemberModel(record);

      await committeeMember.save(function (err) {
         if (err) {
            console.log(err);
            return err;
         }
         console.log(`${committeeMember.first_name} ${committeeMember.last_name} was saved to the database!`);
         return committeeMember;
      });
   }

   async update(record: object, uid: string) {
      await this.connect();
      await committeeMemberModel.findOneAndUpdate({ uid: uid }, record);
   }

   async delete(uid: number) {
      await this.connect();

      committeeMemberModel.find({ uid: uid }).deleteOne(() => {
         console.log(`deleting ${uid}`);
         return `${uid} was deleted`;
      });

      return `There was an issue deleting ${uid}`;
   }
}