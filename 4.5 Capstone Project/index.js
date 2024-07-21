import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
const user = {
  name: 'admin',
  surname: 'admin'
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/main", (req, res) => {
  const { name, surname } = req.body;
  if (name === user.name && surname === user.surname) {
    res.sendFile(path.join(__dirname, "public", "success.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "fail.html"));
  }
});

app.listen(port, () => {
  console.log("Server is running");
});
