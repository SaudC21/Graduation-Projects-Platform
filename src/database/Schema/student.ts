import { Schema } from 'mongoose';

// Create an interface representing a document in MongoDB
export interface Student {
   uid: number;
   first_name: string;
   last_name: string;
   email: string;
   password_digest: string;
   phone_number: string;
   major: string;
   group_id: string;
}

// Create a Schema corresponding to the document interface
export const studentSchema = new Schema<Student>({
   uid: { type: Number, required: true },
   first_name: { type: String, required: true },
   last_name: { type: String, required: true },
   email: { type: String, required: true },
   password_digest: { type: String, required: true },
   phone_number: { type: String, required: true },
   major: { type: String, required: true },
   group_id: { type: String, required: true },
});