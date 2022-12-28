import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const address = "localhost:3000";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// cross origin resource sharing
app.use(cors());

// parse application/json
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
