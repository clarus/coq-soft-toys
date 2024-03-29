// @flow
import bodyParser from "body-parser";
import express from "express";
import {Pool} from "pg";
import Stripe from "stripe";
import configPrivate from "../config/private.json";

const stripe = Stripe(configPrivate.stripe.key);
const pool = new Pool(configPrivate.database);
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get("/", (request: express$Request, response: express$Response) => {
  response.json({info: "Node.js, Express, and Postgres API"});
});

app.get(
  "/skus",
  async (request: express$Request, response: express$Response) => {
    const skus = await stripe.skus.list();
    response.setHeader("Access-Control-Allow-Origin", request.headers.origin);
    response.json(skus);
  },
);

app.get(
  "/users",
  async (request: express$Request, response: express$Response) => {
    const users = await pool.query("SELECT * FROM users ORDER BY id ASC");
    response.json(users.rows);
  },
);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
