import probe2p1 from './2p1';
import probe3ca from './3c-a';
import probe4pa from './4p-a';
import probe6v1 from './6v1';
import probe6v3 from './6v3';
import probe12la from './12l-a';
import aspirator from './aspirator';
import basket from './basket';
import brush from './brush';
import probec16a from './c1-6a';
import clip from './clip';
import e1 from './e1';
import e2 from './e2';
import e3 from './e3';
import eb500 from './eb-500';
import ec430t from './ec-430t';
import ec500t from './ec-500t';
import ec550t from './ec-550t';
import ed5gt from './ed-5gt';
import eg430 from './eg-430';
import eg500 from './eg-500';
import eg550 from './eg-550';
import forceps from './forceps';
import forcepsneedle from './forcepsneedle';
import hd320 from './hd-320';
import hd350 from './hd-350';
import hd500 from './hd-500';
import hd550 from './hd-550';
import helicobacter from './helicobacter';
import hooks from './hooks';
import insuflator from './insuflator';
import irrigator from './irrigator';
import probel741 from './l741';
import mouthpiece from './mouthpiece';
import p9 from './p9';
// import p10 from './p10';
import p15 from './p15';
// import p20 from './p20';
import p25 from './p25';
import p40 from './p40';
// import p50 from './p50';
import p60 from './p60';
import propet60 from './propet60';
import propet70 from './propet70';
import propet80 from './propet80';
import p40elite from './p40elite';
import p50elite from './p50elite';
import s50elite from './s50elite';
import s2n from './s2n';
import s2 from './s2';
import s8exp from './s8exp';
import s9exp from './s9exp';
import s20exp from './s20exp';
import s40exp from './s40exp';
import snare from './snare';
import tests from './tests';
import v2000 from './v2000';
import probevc62 from './vc6-2';
import x3v from './x3v';
import x5 from './x5';

const products = [
    {id: "hd-320", caption: "HD-320", subtitle: "Видеоэндоскопическая система", group: "endoscopy", subgroup: "Видеоэндоскопические системы", content: hd320},
    {id: "hd-350", caption: "HD-350", subtitle: "Видеоэндоскопическая система", group: "endoscopy", subgroup: "Видеоэндоскопические системы", content: hd350},
    {id: "hd-500", caption: "HD-500", subtitle: "Видеоэндоскопическая система", group: "endoscopy", subgroup: "Видеоэндоскопические системы", content: hd500},
    {id: "hd-550", caption: "HD-550", subtitle: "Видеоэндоскопическая система", group: "endoscopy", subgroup: "Видеоэндоскопические системы", content: hd550},
    {id: "eb-500", caption: "EB-500", subtitle: "Видеобронхоскоп", group: "endoscopy", subgroup: "Видеоэндоскопы", content: eb500},
    {id: "ec-430t", caption: "EC-430T", subtitle: "Видеоколоноскоп", group: "endoscopy", subgroup: "Видеоэндоскопы", content: ec430t},
    {id: "ec-500t", caption: "EC-500T", subtitle: "Видеоколоноскоп", group: "endoscopy", subgroup: "Видеоэндоскопы", content: ec500t},
    {id: "ec-550t", caption: "EC-550T", subtitle: "Видеоколоноскоп", group: "endoscopy", subgroup: "Видеоэндоскопы", content: ec550t},
    {id: "eg-430", caption: "EG-430", subtitle: "Видеогастроскоп", group: "endoscopy", subgroup: "Видеоэндоскопы", content: eg430},
    {id: "eg-500", caption: "EG-500", subtitle: "Видеогастроскоп", group: "endoscopy", subgroup: "Видеоэндоскопы", content: eg500},
    {id: "ed-5gt", caption: "ED-5GT", subtitle: "Дуоденоскоп", group: "endoscopy", subgroup: "Видеоэндоскопы", content: ed5gt},
    {id: "eg-550", caption: "EG-550", subtitle: "Видеогастроскоп", group: "endoscopy", subgroup: "Видеоэндоскопы", content: eg550},
    {id: "helicobacter", caption: "HUBT-20P", subtitle: "Тестер Helicobacter Pylori", group: "helicobacter", subgroup: "", content: helicobacter},
    {id: "insuflator", caption: "JSQB-P1", subtitle: "Эндоскопический СО2 инсуфлятор", group: "endoscopy", subgroup: "Вспомогательное оборудование", content: insuflator},
    {id: "irrigator", caption: "JSFB-P1", subtitle: "Эндоскопический ирригатор", group: "endoscopy", subgroup: "Вспомогательное оборудование", content: irrigator},
    {id: "aspirator", caption: "NEW ASKIR 30", subtitle: "Хирургический аспиратор", group: "endoscopy", subgroup: "Вспомогательное оборудование", content: aspirator},
    {id: "p9", caption: "P9 / P10", subtitle: "Удобное решение для точных диагнозов", group: "ultrasound", subgroup: "P - серия", content: p9},
    // {id: "p10", caption: "P10", subtitle: "Гибкие решения в ультразвуковой диагностике", group: "ultrasound", subgroup: "P - серия", content: p10},
    {id: "p15", caption: "P15 / P20", subtitle: "Улучшенные ультразвуковые технологии", group: "ultrasound", subgroup: "P - серия", content: p15},
    // {id: "p20", caption: "P20", subtitle: "Ценность и значимость", group: "ultrasound", subgroup: "P - серия", content: p20},
    {id: "p25", caption: "P25", subtitle: "Стабильная производительность", group: "ultrasound", subgroup: "P - серия", content: p25},
    {id: "p40", caption: "P40 / P50", subtitle: "Опыт и ценности", group: "ultrasound", subgroup: "P - серия", content: p40},
    // {id: "p50", caption: "P50", subtitle: "Расширьте свой взгляд", group: "ultrasound", subgroup: "P - серия", content: p50},
    {id: "p60", caption: "P60 / P60Exp", subtitle: "Выраженный интеллект", group: "ultrasound", subgroup: "P - серия", content: p60},
    {id: "s20exp", caption: "S20Exp", subtitle: "Совершенство во всем", group: "ultrasound", subgroup: "S - серия", content: s20exp},
    {id: "s40exp", caption: "S40Exp", subtitle: "Стиль и производительность", group: "ultrasound", subgroup: "S - серия", content: s40exp},
    {id: "p40elite", caption: "P40 ELITE", subtitle: "Серия Elite", group: "ultrasound", subgroup: "Серия Elite", content: p40elite},
    {id: "p50elite", caption: "P50 ELITE", subtitle: "Серия Elite", group: "ultrasound", subgroup: "Серия Elite", content: p50elite},
    {id: "s50elite", caption: "S50 ELITE", subtitle: "Серия Elite", group: "ultrasound", subgroup: "Серия Elite", content: s50elite},
    {id: "e1", caption: "E1", subtitle: "Для всех ваших потребностей", group: "ultrasound", subgroup: "Портативные УЗ системы", content: e1},
    {id: "e2", caption: "E2", subtitle: "Для всех ваших потребностей", group: "ultrasound", subgroup: "Портативные УЗ системы", content: e2},
    {id: "e3", caption: "E3", subtitle: "Для всех ваших потребностей", group: "ultrasound", subgroup: "Портативные УЗ системы", content: e3},
    {id: "s2", caption: "S2", subtitle: "Ваши ценности и приоритеты", group: "ultrasound", subgroup: "Портативные УЗ системы", content: s2},
    {id: "s2n", caption: "S2N", subtitle: "Ваши ценности и приоритеты", group: "ultrasound", subgroup: "Портативные УЗ системы", content: s2n},
    {id: "s8exp", caption: "S8Exp", subtitle: "Гибкость и универсальность", group: "ultrasound", subgroup: "Портативные УЗ системы", content: s8exp},
    {id: "s9exp", caption: "S9 / S9Exp / S9Pro", subtitle: "Гибкость и универсальность", group: "ultrasound", subgroup: "Портативные УЗ системы", content: s9exp},
    {id: "s2", caption: "S2", subtitle: "Ваши ценности и приоритеты", group: "ultrasound", subgroup: "S - серия", content: s2},
    {id: "s2n", caption: "S2N", subtitle: "Ваши ценности и приоритеты", group: "ultrasound", subgroup: "S - серия", content: s2n},
    {id: "s8exp", caption: "S8Exp", subtitle: "Гибкость и универсальность", group: "ultrasound", subgroup: "S - серия", content: s8exp},
    {id: "s9exp", caption: "S9 / S9Exp / S9Pro", subtitle: "Гибкость и универсальность", group: "ultrasound", subgroup: "S - серия", content: s9exp},
    {id: "x5", caption: "X3 / X5", subtitle: "Высокий класс", group: "ultrasound", subgroup: "Портативные УЗ системы", content: x5},
    {id: "propet60", caption: "ProPet 60", subtitle: "Новинка для ветеринарии", group: "veterinary", content: propet60},
    {id: "propet70", caption: "ProPet 70", subtitle: "Новинка для ветеринарии", group: "veterinary", content: propet70},
    {id: "propet80", caption: "ProPet 80", subtitle: "Новинка для ветеринарии", group: "veterinary", content: propet80},
    {id: "tests", caption: "HUBT-20P", subtitle: "Тесты Helicobacter Pylori", group: "helicobacter", subgroup: "", content: tests},
    {id: "v2000", caption: "V2000", subtitle: "Ветеринарная эндоскопическая система", group: "veterinary", subgroup: "", content: v2000},
    {id: "x3v", caption: "X3V / X5V", subtitle: "Почувствуйте разницу", group: "veterinary", subgroup: "", content: x3v},
    {id: "brush", caption: "Чистящие щетки", subtitle: "", group: "instruments", subgroup: "", content: brush},
    {id: "forcepsneedle", caption: "Щипцы биопсийные с иглой", subtitle: "", group: "instruments", subgroup: "", content: forcepsneedle},
    {id: "forceps", caption: "Щипцы биопсийные", subtitle: "", group: "instruments", subgroup: "", content: forceps},
    {id: "snare", caption: "Петли для полипэктомии", subtitle: "", group: "instruments", subgroup: "", content: snare},
    {id: "clip", caption: "Клипсы", subtitle: "", group: "instruments", subgroup: "", content: clip},
    {id: "hooks", caption: "Щипцы захватывающие", subtitle: "", group: "instruments", subgroup: "", content: hooks},
    {id: "basket", caption: "Корзина захватывающая", subtitle: "", group: "instruments", subgroup: "", content: basket},
    {id: "mouthpiece", caption: "Загубник", subtitle: "", group: "instruments", subgroup: "", content: mouthpiece},
    {id: "l741", caption: "L741", subtitle: "Датчик линейный", group: "probes", subgroup: "", content: probel741},
    {id: "12l-a", caption: "12L-A", subtitle: "Датчик линейный монокристальный", group: "probes", subgroup: "", content: probe12la},
    {id: "3c-a", caption: "3C-A", subtitle: "Датчик конвексный", group: "probes", subgroup: "", content: probe3ca},
    {id: "c1-6a", caption: "C1-6A", subtitle: "Датчик конвексный монокристальный", group: "probes", subgroup: "", content: probec16a},
    {id: "6v1", caption: "6V1", subtitle: "Датчик ректовагинальный", group: "probes", subgroup: "", content: probe6v1},
    {id: "6v3", caption: "6V3", subtitle: "Датчик ректовагинальный", group: "probes", subgroup: "", content: probe6v3},
    {id: "2p1", caption: "2P1", subtitle: "Датчик фазированный", group: "probes", subgroup: "", content: probe2p1},
    {id: "4p-a", caption: "4P-A", subtitle: "Датчик фазированный", group: "probes", subgroup: "", content: probe4pa},
    {id: "vc6-2", caption: "VC6-2", subtitle: "Датчик объемный конвексный", group: "probes", subgroup: "", content: probevc62},
]

export default products;