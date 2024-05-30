const express = require("express");
const app = express();

const fs = require("fs");

const products = [
    {id: "aspirator", caption: "NEW ASKIR 30", subtitle: "Хирургический аспиратор", tags: ["endoscopy"]},
    {id: "e1", caption: "E1", subtitle: "Для всех ваших потребностей", tags: ["ultrasound"]},
    {id: "e2", caption: "E2", subtitle: "Для всех ваших потребностей", tags: ["ultrasound"]},
    {id: "e3", caption: "E3", subtitle: "Для всех ваших потребностей", tags: ["ultrasound"]},
    {id: "eb-500", caption: "EB-500", subtitle: "Видеобронхоскоп", tags: ["endoscopy"]},
    {id: "ec-430t", caption: "EC-430T", subtitle: "Видеоколоноскоп", tags: ["endoscopy"]},
    {id: "ec-500t", caption: "EC-500T", subtitle: "Видеоколоноскоп", tags: ["endoscopy"]},
    {id: "ec-550t", caption: "EC-550T", subtitle: "Видеоколоноскоп", tags: ["endoscopy"]},
    {id: "eg-430", caption: "EG-430", subtitle: "Видеогастроскоп", tags: ["endoscopy"]},
    {id: "eg-500", caption: "EG-500", subtitle: "Видеогастроскоп", tags: ["endoscopy"]},
    {id: "ed-5gt", caption: "ED-5GT", subtitle: "Дуоденоскоп", tags: ["endoscopy"]},
    {id: "eg-550", caption: "EG-550", subtitle: "Видеогастроскоп", tags: ["endoscopy"]},
    {id: "hd-320", caption: "HD-320", subtitle: "Видеоэндоскопическая система", tags: ["endoscopy"]},
    {id: "hd-350", caption: "HD-350", subtitle: "Видеоэндоскопическая система", tags: ["endoscopy"]},
    {id: "hd-500", caption: "HD-500", subtitle: "Видеоэндоскопическая система", tags: ["endoscopy"]},
    {id: "hd-550", caption: "HD-550", subtitle: "Видеоэндоскопическая система", tags: ["endoscopy"]},
    {id: "helicobacter", caption: "HUBT-20P", subtitle: "Тестер Helicobacter Pylori", tags: ["helicobacter"]},
    {id: "insuflator", caption: "JSQB-P1", subtitle: "Эндоскопический СО2 инсуфлятор", tags: ["endoscopy"]},
    {id: "irrigator", caption: "JSFB-P1", subtitle: "Эндоскопический ирригатор", tags: ["endoscopy"]},
    {id: "p9", caption: "P9", subtitle: "Удобное решение для точных диагнозов", tags: ["ultrasound"]},
    {id: "p10", caption: "P10", subtitle: "Гибкие решения в ультразвуковой диагностике", tags: ["ultrasound"]},
    {id: "p15", caption: "P15", subtitle: "Улучшенные ультразвуковые технологии", tags: ["ultrasound"]},
    {id: "p20", caption: "P20", subtitle: "Ценность и значимость", tags: ["ultrasound"]},
    {id: "p25", caption: "P25", subtitle: "Стабильная производительность", tags: ["ultrasound"]},
    {id: "p40", caption: "P40", subtitle: "Опыт и ценности", tags: ["ultrasound"]},
    {id: "p50", caption: "P50", subtitle: "Расширьте свой взгляд", tags: ["ultrasound"]},
    {id: "p60", caption: "P60", subtitle: "Выраженный интеллект", tags: ["ultrasound"]},
    {id: "propet60", caption: "ProPet 60", subtitle: "Новинка для ветеринарии", tags: ["veterinary"]},
    {id: "propet70", caption: "ProPet 70", subtitle: "Новинка для ветеринарии", tags: ["veterinary"]},
    {id: "propet80", caption: "ProPet 80", subtitle: "Новинка для ветеринарии", tags: ["veterinary"]},
    {id: "s2", caption: "S2", subtitle: "Ваши ценности и приоритеты", tags: ["ultrasound"]},
    {id: "s2n", caption: "S2N", subtitle: "Ваши ценности и приоритеты", tags: ["ultrasound"]},
    {id: "s8exp", caption: "S8Exp", subtitle: "Гибкость и универсальность", tags: ["ultrasound"]},
    {id: "s20exp", caption: "S20Exp", subtitle: "Совершенство во всем", tags: ["ultrasound"]},
    {id: "s40exp", caption: "S40Exp", subtitle: "Стиль и производительность", tags: ["ultrasound"]},
    {id: "tests", caption: "HUBT-20P", subtitle: "Тесты Helicobacter Pylori", tags: ["helicobacter"]},
    {id: "v2000", caption: "V2000", subtitle: "Ветеринарная эндоскопическая система", tags: ["veterinary"]},
    {id: "x3v", caption: "X3V / X5V", subtitle: "Почувствуйте разницу", tags: ["veterinary"]},
    {id: "brush", caption: "Чистящие щетки", subtitle: "", tags: ["instruments"]},
    {id: "forcepsneedle", caption: "Щипцы биопсийные с иглой", subtitle: "", tags: ["instruments"]},
    {id: "forceps", caption: "Щипцы биопсийные", subtitle: "", tags: ["instruments"]},
    {id: "snare", caption: "Петли для полипэктомии", subtitle: "", tags: ["instruments"]},
    {id: "clip", caption: "Клипсы", subtitle: "", tags: ["instruments"]},
    {id: "hooks", caption: "Щипцы захватывающие", subtitle: "", tags: ["instruments"]},
    {id: "basket", caption: "Корзина захватывающая", subtitle: "", tags: ["instruments"]},
    {id: "mouthpiece", caption: "Загубник", subtitle: "", tags: ["instruments"]},
    {id: "l741", caption: "L741", subtitle: "Датчик линейный", tags: ["probes"]},
    {id: "12l-a", caption: "12L-A", subtitle: "Датчик линейный монокристальный", tags: ["probes"]},
    {id: "3c-a", caption: "3C-A", subtitle: "Датчик конвексный", tags: ["probes"]},
    {id: "c1-6a", caption: "C1-6A", subtitle: "Датчик конвексный монокристальный", tags: ["probes"]},
    {id: "6v1", caption: "6V1", subtitle: "Датчик ректовагинальный", tags: ["probes"]},
    {id: "6v3", caption: "6V3", subtitle: "Датчик ректовагинальный", tags: ["probes"]},
    {id: "2p1", caption: "2P1", subtitle: "Датчик фазированный", tags: ["probes"]},
    {id: "4p-a", caption: "4P-A", subtitle: "Датчик фазированный", tags: ["probes"]},
    {id: "vc6-2", caption: "VC6-2", subtitle: "Датчик объемный конвексный", tags: ["probes"]},
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
