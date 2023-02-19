import { model, connect } from 'mongoose';
import { projectSchema, Project } from '../Schema/project';
import keyword_extractor from 'keyword-extractor';

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

  async index(groupId: string) {
    await this.connect();
    const data = await projectModel.findOne({ id: groupId });
    return data;
  }

  async insert(record: Project) {
    await this.connect();
    const project = new projectModel(record);

    await project.save(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
      return project;
    });
  }

  async update(record: any, id: string) {
    await this.connect();
    record.semester = id.split('-')[1];

    try {
      const data = await projectModel.findOneAndUpdate({ id: id }, record, { new: true }).clone().catch(err => {
        console.log(err);
        return err;

      });
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async delete(id: string) {
    await this.connect();

    projectModel.find({ id: id }).deleteOne(() => {
      return `${id} was deleted`;
    });
    return `There was an issue deleting ${id}`;
  }
}
