const express = require("express");
const app = express();
app.get("/", (req, res) =>
    res.json({ message: "Hello Codelivery, testing Azure branch deploy 😜👍" })
);
app.listen(process.env.PORT || 80);