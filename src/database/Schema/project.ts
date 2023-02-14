import { Schema } from 'mongoose';

// Create an interface representing a document in MongoDB
export interface Project {
   id: string;
   title: string;
   description: string;
   repo_link: string;
   supervisor_id: string;
   dept: string;
   semester: string;
}

// Create a Schema corresponding to the document interface
export const projectSchema = new Schema<Project>({
   id: { type: String, required: true },
   title: { type: String, required: true },
   description: { type: String, required: true },
   repo_link: { type: String, required: true },
   supervisor_id: { type: String, required: true },
   dept: { type: String, required: true },
   semester: { type: String, required: true}
});