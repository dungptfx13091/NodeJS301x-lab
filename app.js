const rootDir = require("./util/path");

const express = require("express");
const path = require("path");
const exp = require("constants");

const app = express();

app.use(express.static(path.join(rootDir, "public")));

app.use("/users", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "users.html"));
});
app.use("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

app.listen(3001);
