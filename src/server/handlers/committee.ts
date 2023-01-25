import { NextFunction, Request, Response, Application } from "express";
import { CommitteeStore } from "../../database/models/committee";
import { CommitteeMember } from "../../database/Schema/committee";

const store = new CommitteeStore();

const show = async (req: Request, res: Response) => {
   try {
      const committeeRecord = await store.show();
      res.send(committeeRecord);
   } catch (err) { res.send(err) }
}

const index = async (req: Request, res: Response) => {
   try {
      const uid = parseInt(req.params['uid']);
      const committeeRecord = await store.index(uid);
      res.send(committeeRecord);
   } catch (err) { res.send(err) }
}

const create = async (req: Request, res: Response) => {
   try {
      const committeeMember: CommitteeMember = {
         uid: req.body.uid,
         first_name: req.body.first_name,
         last_name: req.body.last_name,
         email: req.body.email,
         password_digest: req.body.password_digest,
         phone_number: req.body.phone_number,
         major: req.body.major,
      }
      const committeeRecord = await store.insert(committeeMember);
      res.send('inshallah its been added');
   } catch (err) { res.send(err) }
}

const update = async (req: Request, res: Response) => {
   try {
      const committeeRecord = await store.update(req.body, req.params['uid']);
      res.send('inshallah its been updated');
   } catch(err) { res.send(err) }
}

const destory = async (req: Request, res: Response) => {
   try {
      const uid = parseInt(req.params["uid"]);
      await store.delete(uid);
      res.send('inshallah its been deleted');
   } catch(err) { res.send(err) }
}

export const committeeRoutes = (app: Application) => {
   app.post('/committee', create);
   app.put('/committee/:uid', update);
   app.delete('/committee/:uid', destory);
   app.get('/committee', show);
   app.get('/committee/:uid', index);
}