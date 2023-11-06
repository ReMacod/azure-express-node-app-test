const express = require("express");
const app = express();
app.get("/", (req, res) =>
  res.json({ message: "Hello Codelivery on Express app for Azure test 1" })
);
app.listen(process.env.PORT || 80);
