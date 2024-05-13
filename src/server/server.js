const express = require("express");
const app = express();

const fs = require("fs");

const db = [
    {id: "aspirator", caption: "Хирургический аспиратор NEW ASKIR 30", tags: ["Эндоскопия"]},
    {id: "e2", caption: "E2", tags: ["УЗИ"]},
]

for (let i in db) {
    fs.readFile("./src/server/products/html/" + db[i].id + ".html", function(error, data){
        if (error) return console.log(error);
        db[i].html = data.toString();
    });
    db[i].imgSmall = "../server/products/img/" + db[i].id + "/small.jpg";
    db[i].imgBig = "../server/products/img/" + db[i].id + "/big.jpg";
}

app.get("/api", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json(db);
});
app.listen(5000, () => {console.log("server listen 5000")});
