import { NextFunction, Request, Response, Application } from "express";
import { ProjectStore } from "../../database/models/project";
import { Project } from "../../database/Schema/project";

const store = new ProjectStore();

const show = async (req: Request, res: Response) => {
   const projectRecord = await store.show();
   res.send(projectRecord);
}

const index = async (req: Request, res: Response) => {
   const uid = parseInt(req.params['uid']);
   const projectRecord = await store.index(uid);
   res.send(projectRecord);
}

const create = async (req: Request, res: Response) => {
   const project: Project = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      repo_link: req.body.repo_link,
      supervisor_id: req.body.supervisor_id,
   }
   const projectRecord = await store.insert(project);
   res.send('inshallah its been added');
}

const update = async (req: Request, res: Response) => {
   const projectRecord = await store.update(req.body, req.params['uid']);
   res.send('inshallah its been updated');
}

const destory = async (req: Request, res: Response) => {
   const uid = parseInt(req.params["uid"]);
   await store.delete(uid);
   res.send('inshallah its been deleted');
}

export const projectRoutes = (app: Application) => {
   app.post('/project', create);
   app.put('/project/:uid', update);
   app.delete('/project/:uid', destory);
   app.get('/project', show);
   app.get('/project/:uid', index);
}