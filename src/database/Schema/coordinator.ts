import { Schema } from 'mongoose';

// Create an interface representing a document in MongoDB
export interface Coordinator {
   uid: number;
   first_name: string;
   last_name: string;
   email: string;
   password_digest: string;
   phone_number: string;
   major: string;
   year: string;
}

// Create a Schema corresponding to the document interface
export const coordinatorSchema = new Schema<Coordinator>({
   uid: { type: Number, required: true },
   first_name: { type: String, required: true },
   last_name: { type: String, required: true },
   email: { type: String, required: true },
   password_digest: { type: String, required: true },
   phone_number: { type: String, required: true },
   major: { type: String, required: true },
   year: { type: String, required: true },
});