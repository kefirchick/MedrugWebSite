const express = require("express");
const app = express();

const fs = require("fs");

const db = [
    {id: "aspirator", caption: "NEW ASKIR 30", tags: ["Эндоскопия"]},
    {id: "e1", caption: "E1", tags: ["УЗИ"]},
    {id: "e2", caption: "E2", tags: ["УЗИ"]},
    {id: "e3", caption: "E3", tags: ["УЗИ"]},
    {id: "eb-500", caption: "EB-500", tags: ["Эндоскопия"]},
    {id: "ed-5gt", caption: "ED-5GT", tags: ["Эндоскопия"]},
    {id: "eg-500", caption: "EG-500", tags: ["Эндоскопия"]},
    {id: "eg-550", caption: "EG-550", tags: ["Эндоскопия"]},
    {id: "hd-320", caption: "HD-320", tags: ["Эндоскопия"]},
    {id: "hd-350", caption: "HD-350", tags: ["Эндоскопия"]},
    {id: "hd-500", caption: "HD-500", tags: ["Эндоскопия"]},
    {id: "hd-550", caption: "HD-550", tags: ["Эндоскопия"]},
    {id: "helicobacter", caption: "HUBT-20P", tags: ["Хеликобактер"]},
    {id: "insuflator", caption: "JSQB-P1", tags: ["Эндоскопия"]},
    {id: "irrigator", caption: "JSFB-P1", tags: ["Эндоскопия"]},
    {id: "p9", caption: "P9", tags: ["УЗИ"]},
    {id: "p10", caption: "P10", tags: ["УЗИ"]},
    {id: "p15", caption: "P15", tags: ["УЗИ"]},
    {id: "p20", caption: "P20", tags: ["УЗИ"]},
    {id: "p25", caption: "P25", tags: ["УЗИ"]},
    {id: "p40", caption: "P40", tags: ["УЗИ"]},
    {id: "p50", caption: "P50", tags: ["УЗИ"]},
    {id: "p60", caption: "P60", tags: ["УЗИ"]},
    {id: "propet60", caption: "ProPet 60", tags: ["УЗИ"]},
    {id: "propet70", caption: "ProPet 70", tags: ["УЗИ"]},
    {id: "propet80", caption: "ProPet 80", tags: ["УЗИ"]},
    {id: "s2", caption: "S2", tags: ["УЗИ"]},
    {id: "s2n", caption: "S2N", tags: ["УЗИ"]},
    {id: "s8exp", caption: "S8Exp", tags: ["УЗИ"]},
    {id: "s20exp", caption: "S20Exp", tags: ["УЗИ"]},
    {id: "s40exp", caption: "S40Exp", tags: ["УЗИ"]},
    {id: "tests", caption: "Катридж HUBT-20P", tags: ["Хеликобактер"]},
    {id: "v2000", caption: "V2000", tags: ["Эндоскопия"]},
    {id: "x3v", caption: "X3V / X5V", tags: ["УЗИ"]},
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
