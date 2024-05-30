const express = require("express");
const app = express();

const fs = require("fs");

const products = [
    {id: "aspirator", caption: "NEW ASKIR 30", tags: ["endoscopy"]},
    {id: "e1", caption: "E1", tags: ["ultrasound"]},
    {id: "e2", caption: "E2", tags: ["ultrasound"]},
    {id: "e3", caption: "E3", tags: ["ultrasound"]},
    {id: "eb-500", caption: "EB-500", tags: ["endoscopy"]},
    {id: "ec-430t", caption: "EC-430T", tags: ["endoscopy"]},
    {id: "ec-500t", caption: "EC-500T", tags: ["endoscopy"]},
    {id: "ec-550t", caption: "EC-550T", tags: ["endoscopy"]},
    {id: "eg-430", caption: "EG-430", tags: ["endoscopy"]},
    {id: "eg-500", caption: "EG-500", tags: ["endoscopy"]},
    {id: "ed-5gt", caption: "ED-5GT", tags: ["endoscopy"]},
    {id: "eg-550", caption: "EG-550", tags: ["endoscopy"]},
    {id: "hd-320", caption: "HD-320", tags: ["endoscopy"]},
    {id: "hd-350", caption: "HD-350", tags: ["endoscopy"]},
    {id: "hd-500", caption: "HD-500", tags: ["endoscopy"]},
    {id: "hd-550", caption: "HD-550", tags: ["endoscopy"]},
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
    {id: "propet60", caption: "ProPet 60", tags: ["veterinary"]},
    {id: "propet70", caption: "ProPet 70", tags: ["veterinary"]},
    {id: "propet80", caption: "ProPet 80", tags: ["veterinary"]},
    {id: "s2", caption: "S2", tags: ["ultrasound"]},
    {id: "s2n", caption: "S2N", tags: ["ultrasound"]},
    {id: "s8exp", caption: "S8Exp", tags: ["ultrasound"]},
    {id: "s20exp", caption: "S20Exp", tags: ["ultrasound"]},
    {id: "s40exp", caption: "S40Exp", tags: ["ultrasound"]},
    {id: "tests", caption: "Катридж HUBT-20P", tags: ["helicobacter"]},
    {id: "v2000", caption: "V2000", tags: ["veterinary"]},
    {id: "x3v", caption: "X3V / X5V", tags: ["veterinary"]},
    {id: "brush", caption: "Чистящие щетки", tags: ["instruments"]},
    {id: "forcepsneedle", caption: "Щипцы биопсийные с иглой", tags: ["instruments"]},
    {id: "forceps", caption: "Щипцы биопсийные", tags: ["instruments"]},
    {id: "snare", caption: "Петли для полипэктомии", tags: ["instruments"]},
    {id: "clip", caption: "Клипсы", tags: ["instruments"]},
    {id: "hooks", caption: "Щипцы захватывающие", tags: ["instruments"]},
    {id: "basket", caption: "Корзина захватывающая", tags: ["instruments"]},
    {id: "mouthpiece", caption: "Загубник", tags: ["instruments"]},
    {id: "l741", caption: "Датчик линейный L741", tags: ["probes"]},
    {id: "12l-a", caption: "Датчик линейный 12L-A", tags: ["probes"]},
    {id: "3c-a", caption: "Датчик конвексный 3C-A", tags: ["probes"]},
    {id: "c1-6a", caption: "Датчик конвексный монокристальный C1-6A", tags: ["probes"]},
    {id: "6v1", caption: "Датчик ректовагинальный 6V1", tags: ["probes"]},
    {id: "6v3", caption: "Датчик ректовагинальный 6V3", tags: ["probes"]},
    {id: "2p1", caption: "Датчик фазированный 2P1", tags: ["probes"]},
    {id: "4p-a", caption: "Датчик фазированный 4P-A", tags: ["probes"]},
    {id: "vc6-2", caption: "Датчик объемный конвексный VC6-2", tags: ["probes"]},
]

const news = [
    {id: 6, caption: "IX СЪЕЗД ОНКОЛОГОВ И РАДИОЛОГОВ КАЗАХСТАНА", description: "26 октября 2023 года"},
    {id: 5, caption: "VIII Центрально-Азиатская гастроэнтерологическая неделя", description: "5 октября 2023 года"},
    {id: 4, caption: "Конференция \"1-й Эндоскопический форум Центральной Азии\"", description: "Казахское Эндоскопическое Общество"},
    {id: 3, caption: "KIHE-2023", description: "28-Я КАЗАХСТАНСКАЯ МЕЖДУНАРОДНАЯ ВЫСТАВКА \"ЗДРАВООХРАНЕНИЕ\""},
    {id: 2, caption: "Выставка \"ЗДРАВООХРАНЕНИЕ\"", description: "27-Я КАЗАХСТАНСКАЯ МЕЖДУНАРОДНАЯ ВЫСТАВКА ПО ЗДРАВООХРАНЕНИЮ"},
    {id: 1, caption: "ASTANA ZDOROVIE 2021", description: "17-Я КАЗАХСТАНСКАЯ МЕЖДУНАРОДНАЯ ВЫСТАВКА ПО ЗДРАВООХРАНЕНИЮ"},
]

for (let i in products) {
    fs.readFile("./src/server/products/" + products[i].id + ".html", function(error, data){
        if (error) return console.log(error);
        products[i].html = data.toString();
    });
}

for (let i in news) {
    fs.readFile("./src/server/news/" + news[i].id + ".html", function(error, data){
        if (error) return console.log(error);
        news[i].html = data.toString();
    });
}

app.get("/api/products", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json(products);
});
app.get("/api/news", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json(news);
});

app.listen(5000, () => {console.log("server listen 5000")});
