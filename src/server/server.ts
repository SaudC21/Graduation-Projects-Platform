import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
//@ts-ignore
import * as dotenv from 'dotenv';
dotenv.config();

import { committeeRoutes } from './handlers/committee';
import { studentRoutes } from './handlers/student';
import { supervisorRoutes } from './handlers/supervisor';
import { coordinatorRoutes } from './handlers/coordinator';
import { projectRoutes } from './handlers/project';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// cross origin resource sharing
app.use(cors());

// parse application/json
app.use(bodyParser.json());

app.listen(process.env['PORT'], () => {
  console.log(`listening on port ${process.env['PORT']}`);
});

committeeRoutes(app);
studentRoutes(app);
supervisorRoutes(app);
coordinatorRoutes(app);
projectRoutes(app);

app.get('/', async (req: express.Request, res: express.Response) => {
  res.send(
    'Use committee, student, supervisor, project, or coordinator routes with any of the CRUD operations (Get, Put, Delte, Show, and Index)'
  );
});

app.use(function (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token');
  } else {
    next(err);
  }
});
