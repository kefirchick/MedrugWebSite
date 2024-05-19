const express = require("express");
const app = express();

const fs = require("fs");

const db = [
    {id: "aspirator", caption: "NEW ASKIR 30", tags: ["endoscopy"]},
    {id: "e1", caption: "E1", tags: ["ultrasound"]},
    {id: "e2", caption: "E2", tags: ["ultrasound"]},
    {id: "e3", caption: "E3", tags: ["ultrasound"]},
    {id: "eb-500", caption: "EB-500", tags: ["endoscopy"]},
    {id: "eg-500", caption: "EG-500", tags: ["endoscopy"]},
    {id: "ed-5gt", caption: "ED-5GT", tags: ["endoscopy"]},
    {id: "eg-550", caption: "EG-550", tags: ["endoscopy"]},
    {id: "hd-320", caption: "HD-320", tags: ["endoscopy"]},
    {id: "hd-350", caption: "HD-350", tags: ["endoscopy"]},
    {id: "hd-500", caption: "HD-500", tags: ["Эндоскопия"]},
    {id: "hd-550", caption: "HD-550", tags: ["Эндоскопия"]},
    {id: "helicobacter", caption: "HUBT-20P", tags: ["helicobacter"]},
    {id: "insuflator", caption: "JSQB-P1", tags: ["endoscopy"]},
    {id: "irrigator", caption: "JSFB-P1", tags: ["endoscopy"]},
    {id: "p9", caption: "P9", tags: ["ultrasound"]},
    {id: "p10", caption: "P10", tags: ["ultrasound"]},
    {id: "p15", caption: "P15", tags: ["ultrasound"]},
    {id: "p20", caption: "P20", tags: ["ultrasound"]},
    {id: "p25", caption: "P25", tags: ["ultrasound"]},
    {id: "p40", caption: "P40", tags: ["ultrasound"]},
    {id: "p50", caption: "P50", tags: ["ultrasound"]},
    {id: "p60", caption: "P60", tags: ["ultrasound"]},
    {id: "propet60", caption: "ProPet 60", tags: ["ultrasound"]},
    {id: "propet70", caption: "ProPet 70", tags: ["ultrasound"]},
    {id: "propet80", caption: "ProPet 80", tags: ["ultrasound"]},
    {id: "s2", caption: "S2", tags: ["ultrasound"]},
    {id: "s2n", caption: "S2N", tags: ["ultrasound"]},
    {id: "s8exp", caption: "S8Exp", tags: ["ultrasound"]},
    {id: "s20exp", caption: "S20Exp", tags: ["ultrasound"]},
    {id: "s40exp", caption: "S40Exp", tags: ["ultrasound"]},
    {id: "tests", caption: "Катридж HUBT-20P", tags: ["helicobacter"]},
    {id: "v2000", caption: "V2000", tags: ["endoscopy"]},
    {id: "x3v", caption: "X3V / X5V", tags: ["ultrasound"]},
]

for (let i in db) {
    fs.readFile("./src/server/products/html/" + db[i].id + ".html", function(error, data){
        if (error) return console.log(error);
        db[i].html = data.toString();
    });
}

app.get("/api", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json(db);
});
app.listen(5000, () => {console.log("server listen 5000")});
