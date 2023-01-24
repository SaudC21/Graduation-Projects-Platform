import * as express from 'express';
import * as bodyParser from "body-parser";
import  * as cors from "cors";

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


app.listen(4000, () => {
  console.log(`listening on port 4000`);
});

committeeRoutes(app);
studentRoutes(app);
supervisorRoutes(app);
coordinatorRoutes(app);
projectRoutes(app);

app.get('/', async (req: express.Request, res: express.Response) => {
  res.send('Use committee, student, supervisor, project, or coordinator routes with any of the CRUD operations (Get, Put, Delte, Show, and Index)');
});



