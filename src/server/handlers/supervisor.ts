import { NextFunction, Request, Response, Application } from "express";
import { SupervisorStore } from "../../database/models/supervisor";
import { Supervisor } from "../../database/Schema/supervisor";

const store = new SupervisorStore();

const show = async (req: Request, res: Response) => {
   try {
      const supervisorRecords = await store.show();
      for (let i = 0; i < supervisorRecords.length; i++) {
         supervisorRecords[i].password_digest = '';
      }
      res.send(supervisorRecords);
   } catch (err) { res.send(err) }
}

const index = async (req: Request, res: Response) => {
   try {
      const uid = req.params['uid'];
      const supervisorRecord = await store.index(uid);
      res.send(supervisorRecord);
   } catch (err) { res.send(err) }
}

const create = async (req: Request, res: Response) => {
   try {
      const supervisor: Supervisor = {
         uid: req.body.uid,
         first_name: req.body.first_name,
         last_name: req.body.last_name,
         email: req.body.email,
         password_digest: req.body.password_digest,
         phone_number: req.body.phone_number,
         major: req.body.major,
         interests: req.body.interests
      }
      const supervisorRecord = await store.insert(supervisor);
      res.send('inshallah its been added');
   } catch (err) { res.send(err) }
}

const update = async (req: Request, res: Response) => {
   try {
      const supervisorRecord = await store.update(req.body, req.params['uid']);
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

export const supervisorRoutes = (app: Application) => {
   app.post('/supervisor', create);
   app.put('/supervisor/:uid', update);
   app.delete('/supervisor/:uid', destory);
   app.get('/supervisor', show);
   app.get('/supervisor/:uid', index);
}