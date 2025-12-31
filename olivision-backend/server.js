require('dotenv').config();

const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: 'https://olivision-front.vercel.app', // Change to your Frontend URL
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
};


app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
