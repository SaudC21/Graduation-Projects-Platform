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

  getKeywords(description: string) {
    console.log(`here`);
    console.log(description);
    try{
    let keywords = keyword_extractor.extract(description, {
      return_changed_case: true,
      remove_duplicates: true,
    }).forEach(keyword => {
      console.log(keyword);
      
    });
    console.log(keywords);
  }catch (e) {

console.log(e);
  }

  }

  async insert(record: Project) {
    await this.connect();
    this.getKeywords(record.description);
    const project = new projectModel(record);

    await project.save(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
      console.log(`${project.title} was saved to the database!`);
      return project;
    });
    console.log(`here?`);

  }

  async update(record: object, id: string) {
    await this.connect();
    console.log(`id: `, id);
    console.log('record: ', record);

    try {
      const data = await projectModel.findOneAndUpdate({ id: id }, record, { new: true }).clone().catch(err => {
        console.log(err);
        return err;

      });
      console.log(data);
    } catch (err) {
      console.log(err);
      return err;

    }
  }

  async delete(id: string) {
    await this.connect();

    projectModel.find({ id: id }).deleteOne(() => {
      console.log(`deleting ${id}`);
      return `${id} was deleted`;
    });

    return `There was an issue deleting ${id}`;
  }
}
