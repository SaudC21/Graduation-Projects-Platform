import { Schema, Types } from 'mongoose';

// Create an interface representing a document in MongoDB
export interface Supervisor {
   uid: string;
   first_name: string;
   last_name: string;
   email: string;
   password_digest: string;
   phone_number: string;
   major: string;
   interests: Types.Array<string>;
}

// Create a Schema corresponding to the document interface
export const supervisorSchema = new Schema<Supervisor>({
   uid: { type: String, required: true },
   first_name: { type: String, required: true },
   last_name: { type: String, required: true },
   email: { type: String, required: true },
   password_digest: { type: String, required: true },
   phone_number: { type: String, required: true },
   major: { type: String, required: true },
   interests:  {type: [String], required: true },
});