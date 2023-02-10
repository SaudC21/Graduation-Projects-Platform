import { NextFunction, Request, Response, Application } from 'express';
import * as expressJWT from 'express-jwt';
// @ts-ignore
import * as dotenv from 'dotenv';
import { StudentStore } from '../../database/models/student';
import { Student } from '../../database/Schema/student';

const store = new StudentStore();
const TOKEN_SECRET: any = process.env['TOKEN_SECRET'];

const isAuthenticated = expressJWT.expressjwt({
  secret: TOKEN_SECRET,
  algorithms: ['HS256'],
});

const show = async (req: Request, res: Response) => {
  try {
    const studentRecord = await store.show();
    res.send(studentRecord);
  } catch (err) {
    res.send(err);
  }
};

const index = async (req: Request, res: Response) => {
  try {
    const uid = parseInt(req.params['uid']);
    const studentRecord = await store.index(uid);
    res.send(studentRecord);
  } catch (err) {
    res.send(err);
  }
};

const create = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const student: Student = {
      uid: req.body.uid,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password_digest: req.body.password_digest,
      phone_number: req.body.phone_number,
      major: req.body.major,
      group_id: req.body.group_id,
    };
    const studentRecord = await store.insert(student);
    res.send(`${studentRecord.first_name} has been added`);
  } catch (err) {
    res.send(err);
  }
};

const authenticate = async (req: Request, res: Response) => {
  try {
    await store.authenticate(parseInt(req.body.uid), req.body.password, res);
  } catch (err) {
    res.send(err);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const studentRecord = await store.update(req.body, req.params['uid']);
    res.send('inshallah its been updated');
  } catch (err) {
    res.send(err);
  }
};

const destory = async (req: Request, res: Response) => {
  try {
    const uid = parseInt(req.params['uid']);
    await store.delete(uid);
    res.send('inshallah its been deleted');
  } catch (err) {
    res.send(err);
  }
};

const hello = async (req: Request, res: Response) => {
  res.send('sup');
};

export const studentRoutes = (app: Application) => {
  app.get('/hello', hello);
  app.post('/student', create);
  app.post('/student/authenticate', authenticate);
  app.put('/student/:uid', update);
  app.delete('/student/:uid', destory);
  app.get('/student', show);
  app.get('/student/:uid', index);
};
