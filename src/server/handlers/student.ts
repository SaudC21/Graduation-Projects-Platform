import { NextFunction, Request, Response, Application } from "express";
import { StudentStore } from "../../database/models/student";
import { Student } from "../../database/Schema/student";

const store = new StudentStore();

const show = async (req: Request, res: Response) => {
   const studentRecord = await store.show();
   res.send(studentRecord);
}

const index = async (req: Request, res: Response) => {
    const uid = parseInt(req.params['uid']);
    const studentRecord = await store.index(uid);
    res.send(studentRecord);
}

const create = async (req: Request, res: Response) => {
   const student: Student = {
    uid: req.body.uid,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password_digest: req.body.password_digest,
    phone_number: req.body.phone_number,
    major: req.body.major,
    group_id: req.body.group_id
   }
   const studentRecord = await store.insert(student);
   res.send('inshallah its been added');
}

const update = async (req: Request, res: Response) => {
   const studentRecord = await store.update(req.body, req.params['uid']);
   res.send('inshallah its been updated');
}

const destory = async (req: Request, res: Response) => {
   const uid = parseInt(req.params["uid"]);
   await store.delete(uid);
   res.send('inshallah its been deleted');
}

export const studentRoutes = (app: Application) => {
   app.post('/student', create);
   app.put('/student/:uid', update);
   app.delete('/student/:uid', destory);
   app.get('/student', show);
   app.get('/student/:uid', index);
}