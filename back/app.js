const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const names = [
  { name: "Gedas", surname: "Inčirauskas" },
  { name: "Jonas", surname: "Jonaitis" },
];

app.get("/names", (req, res) => {
  res.send(names);
});

app.post("/names", (req, res) => {
  if (req.body.name.length > 0 && req.body.surname.length) {
    names.push({ name: req.body.name, surname: req.body.surname });
    res.send({ msg: "All good" });
  } else {
    res.send({ msg: "NOT good" });
  }
});

const port = 3000;
app.listen(port, () => console.log("Portas veikia"));
