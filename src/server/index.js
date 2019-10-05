import bodyParser from "body-parser";
import express from "express";
import {Pool} from "pg";
import config from "./config.json";

const pool = new Pool(config.database);
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({info: "Node.js, Express, and Postgres API"});
});

app.get("/users", async (request, response) => {
  const users = await pool.query("SELECT * FROM users ORDER BY id ASC");
  response.json(users.rows);
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
