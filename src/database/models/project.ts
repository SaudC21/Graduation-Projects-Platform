import { model, connect } from 'mongoose';
import { projectSchema, Project } from '../Schema/project';

// Create a Model
export const projectModel = model<Project>('projects', projectSchema);

export class ProjectStore {
  async connect() {
    // Connect to MongoDB
    await connect(process.env['MONGODB_URI'] as string);
  }

  async show() {
    await this.connect();
    return await projectModel.find();
  }

  async index(uid: Number) {
    await this.connect();
    return await projectModel.findOne({ uid: uid });
  }

  async insert(record: Project) {
    await this.connect();
    const project = new projectModel(record);

    await project.save(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
      console.log(`${project.title} was saved to the database!`);
      return project;
    });
  }

  async update(record: object, uid: string) {    
    await this.connect();
    return await projectModel.findOneAndUpdate({ uid: uid }, record);
  }

  async delete(uid: number) {
    await this.connect();

    projectModel.find({ uid: uid }).deleteOne(() => {
      console.log(`deleting ${uid}`);
      return `${uid} was deleted`;
    });

    return `There was an issue deleting ${uid}`;
  }
}
