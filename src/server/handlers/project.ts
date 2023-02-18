import { NextFunction, Request, Response, Application } from 'express';
import { ProjectStore } from '../../database/models/project';
import { Project } from '../../database/Schema/project';
import keyword_extractor from "keyword-extractor";

const store = new ProjectStore();

const show = async (req: Request, res: Response) => {
  try {
    const projectRecord = await store.show();
    res.send(projectRecord);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

const index = async (req: Request, res: Response) => {
  try {
    const groupId = req.params['id'];

    const projectRecord = await store.index(groupId);
    res.send(projectRecord);
  } catch (err) {
    res.send(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    console.log(`adding`);
    const project: Project = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      keywords: keyword_extractor?.extract(req.body.description, {
        return_changed_case: true,
        remove_duplicates: true,
      }),
      repo_link: req.body.repo_link,
      supervisor_id: req.body.supervisor_id,
      dept: req.body.dept,
      semester: (req.body.id as string).split('-')[1]
    };
    console.log(project);
    
    const projectRecord = await store.insert(project);
    console.log(projectRecord);
    
    res.send(projectRecord);
  } catch (err) {
    console.log(err);
    
    res.send(err);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    console.log(`updating`);

    const projectRecord = await store.update(req.body, req.params['id']);
    res.send('inshallah its been updated');
  } catch (err) {
    res.send(err);
  }
};

const destory = async (req: Request, res: Response) => {
  try {
    await store.delete(req.params['id']);
    res.send('inshallah its been deleted');
  } catch (err) {
    res.send(err);
  }
};

export const projectRoutes = (app: Application) => {
  app.post('/project', create);
  app.put('/project/:id', update);
  app.delete('/project/:id', destory);
  app.get('/project', show);
  app.get('/project/:id', index);
};
