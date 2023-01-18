const fs = require("fs");

const dataAgama = fs.readFileSync("json/DataAgama.json");
const dataMenikah = fs.readFileSync("json/DataMenikah.json");
const dataPekerjaan = fs.readFileSync("json/DataPekerjaan.json");
const dataUmur = fs.readFileSync("json/DataUmur.json");
const strDataAgama = JSON.parse(dataAgama);
const strDataMenikah = JSON.parse(dataMenikah);
const strDataPekerjaan = JSON.parse(dataPekerjaan);
const strDataUmur = JSON.parse(dataUmur);

const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const getDataAgama = (request, response) => {
  response.send(strDataAgama);
};

const getDataMenikah = (request, response) => {
  response.send(strDataMenikah);
};

const getDataPekerjaan = (request, response) => {
  response.send(strDataPekerjaan);
};

const getDataUmur = (request, response) => {
  response.send(strDataUmur);
};

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: "GET, PUT, POST"
};

app.listen(PORT, () => console.log("Server Start at 5000 Port"));
app.use(express.static("public"));
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "Public API for RSPA" });
});
app.get("/agama", getDataAgama);
app.get("/menikah", getDataMenikah);
app.get("/pekerjaan", getDataPekerjaan);
app.get("/umur", getDataUmur);

