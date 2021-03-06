const express = require("express");
const cors = require("cors");
const port = process.env.SERVER_PORT || 3001;

const app = express();
app.use(cors({ origin: true, credentials: true }));

app.get("/api/v1/get-todo-list/", (req, res) => {
  res.setHeader("end-time", Date.now());
  res.setHeader("Access-Control-Expose-Headers", "end-time");
  res.send(require("./json/response.json"));
});

app.get("/api/Items/", (req, res) => {
  res.setHeader("end-time", Date.now());
  res.setHeader("Access-Control-Expose-Headers", "end-time");
  res.send(require("./json/items.json"));
});

app.post("/trip/", (req, res) => {
  res.setHeader("end-time", Date.now());
  res.setHeader("Access-Control-Expose-Headers", "end-time");
  res.send(require("./json/trip.json"));
});

// /Trip/CreateTrip
app.post("/Trip/CreateTrip", (req, res) => {
  res.setHeader("end-time", Date.now());
  res.setHeader("Access-Control-Expose-Headers", "end-time");
  res.send(require("./json/createTrip.json"));
});

// /User/User/CreateUser
app.post("/User/User/CreateUser", (req, res) => {
  res.setHeader("end-time", Date.now());
  res.setHeader("Access-Control-Expose-Headers", "end-time");
  res.send(require("./json/createUser.json"));
});

app.listen(port, () => {
  console.log(`Mock server is listening at http://localhost:${port}`);
});
