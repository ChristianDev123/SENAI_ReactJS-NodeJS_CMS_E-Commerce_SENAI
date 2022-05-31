const express = require("express");
const path = require("path");
const app = express();
const porta = process.env.PORT || 3001;
const rotas = require("./Routes");
const cors = require("cors");

app.use("/files",express.static(path.resolve(__dirname,"public")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS")
  next();
  app.use(cors());
});

app.use(express.static('public'));
app.use(express.json());
app.use(rotas);

app.listen(porta, (req, res) => {
  console.log("servidor rodando");
});
