// src/app.js

const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("pg");
const sheetRoutes = require("./routes/sheetRoutes");
const app = express();
const port = 3000;

app.use(bodyParser.json());

const client = new Client({
  user: "your_username",
  host: "your_host",
  database: "excel_sheet",
  password: "your_password",
  port: 5432,
});

client.connect();

app.use("/api", sheetRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
