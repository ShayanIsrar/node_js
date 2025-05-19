// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello i am node!");
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

// const express = require("express");
import express from "express";
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hi, i am shayan khan");
});

app.listen(PORT, () => {
  console.log(`The Server is running on http://localhost:${PORT}`);
});
