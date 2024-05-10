const express = require("express");
const app = express();
app.get("/api", (req, res) => {
    res.json({"key1": ["val1", "val2", "val3"]});
});
app.listen(5000, () => {console.log("server listen 5000")});
