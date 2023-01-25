import { NextFunction, Request, Response, Application } from "express";
import { CoordinatorStore } from "../../database/models/coordinator";
import { Coordinator } from "../../database/Schema/coordinator";

const store = new CoordinatorStore();

const show = async (req: Request, res: Response) => {
   try {
      const coordinatorRecord = await store.show();
      res.send(coordinatorRecord);
   } catch (err) { res.send(err) }
}

const index = async (req: Request, res: Response) => {
   try {
      const uid = parseInt(req.params['uid']);
      const coordinatorRecord = await store.index(uid);
      res.send(coordinatorRecord);
   } catch (err) { res.send(err) }
}

const create = async (req: Request, res: Response) => {
   try {
      const coordinator: Coordinator = {
         uid: req.body.uid,
         first_name: req.body.first_name,
         last_name: req.body.last_name,
         email: req.body.email,
         password_digest: req.body.password_digest,
         phone_number: req.body.phone_number,
         major: req.body.major,
         year: req.body.year,
      }
      const coordinatorRecord = await store.insert(coordinator);
      res.send('inshallah its been added');
   } catch (err) { res.send(err) }
}

const update = async (req: Request, res: Response) => {
   try {
      const coordinatorRecord = await store.update(req.body, req.params['uid']);
      res.send('inshallah its been updated');
   } catch (err) { res.send(err) }
}

const destory = async (req: Request, res: Response) => {
   try {
      const uid = parseInt(req.params["uid"]);
      await store.delete(uid);
      res.send('inshallah its been deleted');
   } catch (err) { res.send(err) }
}

export const coordinatorRoutes = (app: Application) => {
   app.post('/coordinator', create);
   app.put('/coordinator/:uid', update);
   app.delete('/coordinator/:uid', destory);
   app.get('/coordinator', show);
   app.get('/coordinator/:uid', index);
}