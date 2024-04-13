const express = require("express");
const app = express();
app.get("/", (req, res) =>
    res.json({ message: "Azure branch deploy test pipeline 👍" })
);
app.listen(process.env.PORT || 80);