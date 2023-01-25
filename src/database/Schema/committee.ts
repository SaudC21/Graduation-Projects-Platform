import { Schema } from 'mongoose';

// Create an interface representing a document in MongoDB
export interface CommitteeMember {
   uid: number;
   first_name: string;
   last_name: string;
   email: string;
   password_digest: string;
   phone_number: string;
   major: string;
}

// Create a Schema corresponding to the document interface
export const committeeSchema = new Schema<CommitteeMember>({
   uid: { type: Number, required: true },
   first_name: { type: String, required: true },
   last_name: { type: String, required: true },
   email: { type: String, required: true },
   password_digest: { type: String, required: true },
   phone_number: { type: String, required: true },
   major: { type: String, required: true },
});