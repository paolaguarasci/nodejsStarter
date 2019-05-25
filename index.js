const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const path = require("path");

app.use(express.static(path.join(__dirname + "/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

http.listen(3000, () => {
  console.log("Server listen at: http://localhost:3000");
});
