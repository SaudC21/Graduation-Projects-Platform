import * as mongoDB from 'mongodb';
import * as express from 'express';
import { environment } from './environments/environment';
const uri = environment.MONGODB_URI;
const client = new mongoDB.MongoClient(uri);

const app = express();
app.listen(4000, () => {
  console.log(`listening on port 4000`);
});

/*
  The following function was created using a sample database, 
  for future reference replace "sample_restaurants" with DB name, 
  and "restaurants" with Collection name
*/
app.get('/', async (req: express.Request, res: express.Response) => {
  await client.connect();
  const db: mongoDB.Db = client.db('sample_restaurants');
  const collection: mongoDB.Collection = db.collection('restaurants');
  res.send(await collection.findOne({}));
  client.close();
});
