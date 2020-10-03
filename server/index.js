// require("dotenv").config();
const express = require("express");
// const massive = require("massive");
const controller = require("./controller")

const app = express();

app.use(express.json());

app.listen(5555, () => console.log(`Server is running on 5555`));