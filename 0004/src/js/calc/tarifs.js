/**
 * Created by zm on 19.12.2018.
 */



let _aaa = 13;

function fillTarifsArray() {
    let arr = [];

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush

    // avia
    // jd_lich_40
    // jd_lich_20
    // jd_sbor
    // express
    // more
    // multi

    // авиа перевозка
    addAviaTarifsMSK(arr);
    addAviaTarifsSPB(arr);
    addAviaTarifsNSB(arr);
    addAviaTarifsHBR(arr);
    addAviaTarifsVLD(arr);
    addAviaTarifsPK(arr);
    addAviaTarifsUSH(arr);

    // ЖД перевозка в личном контейнере 40 футов
    addJd_lich_40TarifsMSK(arr);
    addJd_lich_40TarifsSPB(arr);
    addJd_lich_40TarifsNSB(arr);
    addJd_lich_40TarifsHBR(arr);
    addJd_lich_40TarifsVLD(arr);
    addJd_lich_40TarifsPK(arr);
    addJd_lich_40TarifsUSH(arr);

    // ЖД перевозка в личном контейнере 20 футов
    addJd_lich_20TarifsMSK(arr);
    addJd_lich_20TarifsSPB(arr);
    addJd_lich_20TarifsNSB(arr);
    addJd_lich_20TarifsHBR(arr);
    addJd_lich_20TarifsVLD(arr);
    addJd_lich_20TarifsPK(arr);
    addJd_lich_20TarifsUSH(arr);

    // Экспресс доставка
    addExpressTarifsMSK(arr);
    addExpressTarifsSPB(arr);
    addExpressTarifsNSB(arr);
    addExpressTarifsHBR(arr);
    addExpressTarifsVLD(arr);
    addExpressTarifsPK(arr);
    addExpressTarifsUSH(arr);

    // Морская перевозка
    addMoreTarifsVLD(arr);

    // Мультимодальная перевозка
    addMultiTarifsHBR(arr);

    return arr;
}

class Tarifs {
    constructor(fromCity, toCity, vid, pl_min, pl_max, ed, price) {
        this.fromCity = fromCity;
        this.toCity = toCity;
        this.vid = vid;
        this.pl_min = pl_min;
        this.pl_max = pl_max;
        this.ed = ed;
        this.price = price;
    }

}




// АВИА
function addAviaTarifsMSK(array) {
    let arr = array;

    // авиа Москва - С-Петербург - авиа
    //arr.push(new Tarifs("msk", "spb", "avia", 0, 0, "", 0));

    // авиа Москва - Новосибирск - авиа
    arr.push(new Tarifs("msk", "nsb", "avia", 167, 99999, "kg", 90));

    // авиа Москва - Хабаровск - авиа
    arr.push(new Tarifs("msk", "hbr", "avia", 0, 99999, "kg", 150));

    // авиа Москва - Владивосток - авиа
    arr.push(new Tarifs("msk", "vld", "avia", 0, 99999, "kg", 180));

    // авиа Москва - П-Камчатский - авиа
    arr.push(new Tarifs("msk", "pk", "avia", 0, 59, "kg", 1010));
    arr.push(new Tarifs("msk", "pk", "avia", 60, 69, "kg", 860));
    arr.push(new Tarifs("msk", "pk", "avia", 70, 79, "kg", 639));
    arr.push(new Tarifs("msk", "pk", "avia", 79, 80, "kg", 580));
    arr.push(new Tarifs("msk", "pk", "avia", 80, 90, "kg", 560));
    arr.push(new Tarifs("msk", "pk", "avia", 91, 100, "kg", 539));
    arr.push(new Tarifs("msk", "pk", "avia", 101, 110, "kg", 526));
    arr.push(new Tarifs("msk", "pk", "avia", 111, 120, "kg", 518));
    arr.push(new Tarifs("msk", "pk", "avia", 121, 140, "kg", 511));
    arr.push(new Tarifs("msk", "pk", "avia", 141, 150, "kg", 508));
    arr.push(new Tarifs("msk", "pk", "avia", 151, 160, "kg", 506));
    arr.push(new Tarifs("msk", "pk", "avia", 161, 170, "kg", 503));
    arr.push(new Tarifs("msk", "pk", "avia", 171, 180, "kg", 495));
    arr.push(new Tarifs("msk", "pk", "avia", 181, 190, "kg", 490));
    arr.push(new Tarifs("msk", "pk", "avia", 191, 200, "kg", 482));
    arr.push(new Tarifs("msk", "pk", "avia", 201, 210, "kg", 478));
    arr.push(new Tarifs("msk", "pk", "avia", 211, 220, "kg", 475));
    arr.push(new Tarifs("msk", "pk", "avia", 221, 230, "kg", 474));
    arr.push(new Tarifs("msk", "pk", "avia", 231, 240, "kg", 473));
    arr.push(new Tarifs("msk", "pk", "avia", 241, 250, "kg", 471));
    arr.push(new Tarifs("msk", "pk", "avia", 251, 99999, "kg", 470));


    // авиа Москва - Ю-Сахалинск - авиа
    arr.push(new Tarifs("msk", "ush", "avia", 0, 99999, "kg", 300));




    return arr;
}
function addAviaTarifsSPB(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("spb", "msk", "avia", 0, 0, "m3", 1600));

    // arr.push(new Tarifs("spb", "spb", "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("spb", "nsb", "avia", 0, 99999, "kg", 150));

    arr.push(new Tarifs("spb", "hbr", "avia", 167, 99999, "kg", 90));

    arr.push(new Tarifs("spb", "vld", "avia", 167, 99999, "kg", 90));

    arr.push(new Tarifs("spb", "pk", "avia", 0,     60, "kg", 1020));
    arr.push(new Tarifs("spb", "pk", "avia", 61, 70, "kg", 870));
    arr.push(new Tarifs("spb", "pk", "avia", 71, 78, "kg", 649));
    arr.push(new Tarifs("spb", "pk", "avia", 79, 80, "kg", 590));
    arr.push(new Tarifs("spb", "pk", "avia", 81, 90, "kg", 570));
    arr.push(new Tarifs("spb", "pk", "avia", 91, 100, "kg", 549));
    arr.push(new Tarifs("spb", "pk", "avia", 101, 110, "kg", 536));
    arr.push(new Tarifs("spb", "pk", "avia", 111, 120, "kg", 528));
    arr.push(new Tarifs("spb", "pk", "avia", 121, 140, "kg", 521));
    arr.push(new Tarifs("spb", "pk", "avia", 141, 150, "kg", 518));
    arr.push(new Tarifs("spb", "pk", "avia", 151, 160, "kg", 517));
    arr.push(new Tarifs("spb", "pk", "avia", 161, 170, "kg", 513));
    arr.push(new Tarifs("spb", "pk", "avia", 171, 180, "kg", 505));
    arr.push(new Tarifs("spb", "pk", "avia", 181, 190, "kg", 500));
    arr.push(new Tarifs("spb", "pk", "avia", 191, 200, "kg", 492));
    arr.push(new Tarifs("spb", "pk", "avia", 201, 210, "kg", 488));
    arr.push(new Tarifs("spb", "pk", "avia", 211, 220, "kg", 486));
    arr.push(new Tarifs("spb", "pk", "avia", 221, 230, "kg", 485));
    arr.push(new Tarifs("spb", "pk", "avia", 231, 240, "kg", 484));
    arr.push(new Tarifs("spb", "pk", "avia", 241, 250, "kg", 481));
    arr.push(new Tarifs("spb", "pk", "avia", 251, 99999, "kg", 480));

    arr.push(new Tarifs("spb", "ush", "avia", 167, 99999, "kg", 90));




    return arr;
}
function addAviaTarifsNSB(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("nsb", "msk", "avia", 0, 220, "m3", 1350));

    // arr.push(new Tarifs("nsb", "spb", "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("nsb", "nsb", "avia", 0, 0, "kg", 0));

    arr.push(new Tarifs("nsb", "hbr", "avia", 167, 99999, "kg", 250));

    arr.push(new Tarifs("nsb", "vld", "avia", 167, 99999, "kg", 250));

    arr.push(new Tarifs("nsb", "pk", "avia", 167, 99999, "kg", 330));

    arr.push(new Tarifs("nsb", "ush", "avia", 167, 99999, "kg", 250));




    return arr;
}
function addAviaTarifsHBR(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("hbr", "msk",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "spb",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "nsb",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "hbr",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "vld",  "avia", 0, 0, "kg", 0));

    arr.push(new Tarifs("hbr", "pk",   "avia", 167, 99999, "kg", 300));

    arr.push(new Tarifs("hbr", "ush",  "avia", 167, 99999, "kg", 125));




    return arr;
}
function addAviaTarifsVLD(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("vld", "msk",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "spb",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "nsb",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "hbr",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "vld",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "pk",   "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "ush",  "avia", 0, 0, "kg", 0));




    return arr;
}
function addAviaTarifsPK(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("pk", "msk",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "spb",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "nsb",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "hbr",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "vld",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "pk",   "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "ush",  "avia", 0, 0, "kg", 0));




    return arr;
}
function addAviaTarifsUSH(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("ush", "msk",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "spb",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "nsb",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "hbr",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "vld",  "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "pk",   "avia", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "ush",  "avia", 0, 0, "kg", 0));




    return arr;
}


// ЖД перевозка в личном контейнере 40 футов
function addJd_lich_40TarifsMSK(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("msk", "msk",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("msk", "spb",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("msk", "nsb",  "jd_lich_40", 0, 0, "kg", 0));

    arr.push(new Tarifs("msk", "hbr",  "jd_lich_40", 0, 99999, "kg", 170000));

    arr.push(new Tarifs("msk", "vld",  "jd_lich_40", 0, 99999, "kg", 170000));

    arr.push(new Tarifs("msk", "pk",   "jd_lich_40", 0, 99999, "kg", 185000));

    // arr.push(new Tarifs("msk", "ush",  "jd_lich_40", 0, 0, "kg", 0));




    return arr;
}
function addJd_lich_40TarifsSPB(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("spb", "msk",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("spb", "spb",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("spb", "nsb",  "jd_lich_40", 0, 0, "kg", 0));

    arr.push(new Tarifs("spb", "hbr",  "jd_lich_40", 0, 999999, "kg", 140000));

    // arr.push(new Tarifs("spb", "vld",  "jd_lich_40", 0, 0, "kg", 0));

    arr.push(new Tarifs("spb", "pk",   "jd_lich_40", 0, 99999, "kg", 155000));

    // arr.push(new Tarifs("spb", "ush",  "jd_lich_40", 0, 0, "kg", 0));




    return arr;
}
function addJd_lich_40TarifsNSB(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("nsb", "msk",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("nsb", "spb",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("nsb", "nsb",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("nsb", "hbr",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("nsb", "vld",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("nsb", "pk",   "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("nsb", "ush",  "jd_lich_40", 0, 0, "kg", 0));




    return arr;
}
function addJd_lich_40TarifsHBR(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("hbr", "msk",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "spb",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "nsb",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "hbr",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "vld",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "pk",   "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "ush",  "jd_lich_40", 0, 0, "kg", 0));




    return arr;
}
function addJd_lich_40TarifsVLD(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("vld", "msk",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "spb",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "nsb",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "hbr",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "vld",  "jd_lich_40", 0, 0, "kg", 0));

    arr.push(new Tarifs("vld", "pk",   "jd_lich_40", 0, 9999999, "kg", 115000));

    // arr.push(new Tarifs("vld", "ush",  "jd_lich_40", 0, 0, "kg", 0));




    return arr;
}
function addJd_lich_40TarifsPK(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("pk", "msk",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "spb",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "nsb",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "hbr",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "vld",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "pk",   "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "ush",  "jd_lich_40", 0, 0, "kg", 0));




    return arr;
}
function addJd_lich_40TarifsUSH(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("ush", "msk",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "spb",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "nsb",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "hbr",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "vld",  "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "pk",   "jd_lich_40", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "ush",  "jd_lich_40", 0, 0, "kg", 0));




    return arr;
}


// ЖД перевозка в личном контейнере 20 футов
function addJd_lich_20TarifsMSK(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("msk", "msk",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("msk", "spb",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("msk", "nsb",  "jd_lich_20", 0, 0, "kg", 0));

    arr.push(new Tarifs("msk", "hbr",  "jd_lich_20", 0, 9999999, "kg", 112000));

    arr.push(new Tarifs("msk", "vld",  "jd_lich_20", 0, 9999999, "kg", 110000));

    arr.push(new Tarifs("msk", "pk",   "jd_lich_20", 0, 9999999, "kg", 119000));

    // arr.push(new Tarifs("msk", "ush",  "jd_lich_20", 0, 0, "kg", 0));




    return arr;
}
function addJd_lich_20TarifsSPB(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("spb", "msk",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("spb", "spb",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("spb", "nsb",  "jd_lich_20", 0, 0, "kg", 0));

    arr.push(new Tarifs("spb", "hbr",  "jd_lich_20", 0, 9999999, "kg", 196000));

    // arr.push(new Tarifs("spb", "vld",  "jd_lich_20", 0, 0, "kg", 0));

    arr.push(new Tarifs("spb", "pk",   "jd_lich_20", 0, 9999999, "kg", 210000));

    // arr.push(new Tarifs("spb", "ush",  "jd_lich_20", 0, 0, "kg", 0));




    return arr;
}
function addJd_lich_20TarifsNSB(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("nsb", "msk",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("nsb", "spb",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("nsb", "nsb",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("nsb", "hbr",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("nsb", "vld",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("nsb", "pk",   "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("nsb", "ush",  "jd_lich_20", 0, 0, "kg", 0));




    return arr;
}
function addJd_lich_20TarifsHBR(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("hbr", "msk",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "spb",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "nsb",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "hbr",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "vld",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "pk",   "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "ush",  "jd_lich_20", 0, 0, "kg", 0));




    return arr;
}
function addJd_lich_20TarifsVLD(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("vld", "msk",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "spb",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "nsb",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "hbr",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "vld",  "jd_lich_20", 0, 0, "kg", 0));

    arr.push(new Tarifs("vld", "pk",   "jd_lich_20", 0, 9999999, "kg", 75000));

    // arr.push(new Tarifs("vld", "ush",  "jd_lich_20", 0, 0, "kg", 0));




    return arr;
}
function addJd_lich_20TarifsPK(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("pk", "msk",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "spb",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "nsb",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "hbr",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "vld",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "pk",   "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "ush",  "jd_lich_20", 0, 0, "kg", 0));




    return arr;
}
function addJd_lich_20TarifsUSH(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("ush", "msk",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "spb",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "nsb",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "hbr",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "vld",  "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "pk",   "jd_lich_20", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "ush",  "jd_lich_20", 0, 0, "kg", 0));




    return arr;
}


// Экспресс доставка
function addExpressTarifsMSK(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("msk", "msk",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("msk", "spb",  "express", 0, 0, "kg", 0));

    arr.push(new Tarifs("msk", "nsb",  "express", 0, 200, "m3", 4200));
    arr.push(new Tarifs("msk", "nsb",  "express", 201, 9999999, "kg", 20));

    arr.push(new Tarifs("msk", "hbr",  "express", 0, 200, "m3", 8000));
    arr.push(new Tarifs("msk", "hbr",  "express", 201, 9999999, "kg", 36));

    arr.push(new Tarifs("msk", "vld",  "express", 0, 200, "m3", 8000));
    arr.push(new Tarifs("msk", "vld",  "express", 201, 9999999, "kg", 36));

    arr.push(new Tarifs("msk", "pk",   "express", 0, 200, "m3", 11950));
    arr.push(new Tarifs("msk", "pk",   "express", 201, 300, "kg", 58));
    arr.push(new Tarifs("msk", "pk",   "express", 301, 400, "kg", 59));
    arr.push(new Tarifs("msk", "pk",   "express", 401, 700, "kg", 60));
    arr.push(new Tarifs("msk", "pk",   "express", 701, 9999999, "kg", 63));

    arr.push(new Tarifs("msk", "ush",  "express", 0, 200, "m3", 10900));
    arr.push(new Tarifs("msk", "ush",  "express", 201, 9999999, "kg", 56));




    return arr;
}
function addExpressTarifsSPB(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("spb", "msk",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("spb", "spb",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("spb", "nsb",  "express", 0, 0, "kg", 0));

    arr.push(new Tarifs("spb", "hbr",  "express", 0, 167, "m3", 9500));
    arr.push(new Tarifs("spb", "hbr",  "express", 168, 9999999, "kg", 50));

    arr.push(new Tarifs("spb", "vld",  "express", 0, 167, "m3", 9300));
    arr.push(new Tarifs("spb", "vld",  "express", 168, 9999999, "kg", 46));

    arr.push(new Tarifs("spb", "pk",   "express", 0, 200, "m3", 12850));
    arr.push(new Tarifs("spb", "pk",   "express", 201, 300, "kg", 64));
    arr.push(new Tarifs("spb", "pk",   "express", 301, 400, "kg", 65));
    arr.push(new Tarifs("spb", "pk",   "express", 401, 700, "kg", 66));
    arr.push(new Tarifs("spb", "pk",   "express", 701, 9999999, "kg", 69));

    arr.push(new Tarifs("spb", "ush",  "express", 0, 167, "m3", 13100));
    arr.push(new Tarifs("spb", "ush",  "express", 168, 9999999, "kg", 66));




    return arr;
}
function addExpressTarifsNSB(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    arr.push(new Tarifs("nsb", "msk",  "express", 0, 220, "m3", 1350));
    arr.push(new Tarifs("nsb", "msk",  "express", 221, 9999999, "kg", 10));

    // arr.push(new Tarifs("nsb", "spb",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("nsb", "nsb",  "express", 0, 0, "kg", 0));

    arr.push(new Tarifs("nsb", "hbr",  "express", 0, 200, "m3", 4800));
    arr.push(new Tarifs("nsb", "hbr",  "express", 201, 9999999, "kg", 24));

    arr.push(new Tarifs("nsb", "vld",  "express", 0, 200, "m3", 4800));
    arr.push(new Tarifs("nsb", "vld",  "express", 201, 9999999, "kg", 24));

    arr.push(new Tarifs("nsb", "pk",   "express", 0, 200, "m3", 8200));
    arr.push(new Tarifs("nsb", "pk",   "express", 201, 9999999, "kg", 42));

    arr.push(new Tarifs("nsb", "ush",  "express", 0, 200, "m3", 7200));
    arr.push(new Tarifs("nsb", "ush",  "express", 201, 9999999, "kg", 36));




    return arr;
}
function addExpressTarifsHBR(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("hbr", "msk",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "spb",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "nsb",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "hbr",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "vld",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "pk",   "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "ush",  "express", 0, 0, "kg", 0));




    return arr;
}
function addExpressTarifsVLD(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("vld", "msk",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "spb",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "nsb",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "hbr",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "vld",  "express", 0, 0, "kg", 0));

    arr.push(new Tarifs("vld", "pk",   "express", 0, 600, "m3", 2700));
    arr.push(new Tarifs("vld", "pk",   "express", 601, 1200, "m3", 3350));
    arr.push(new Tarifs("vld", "pk",   "express", 1201, 1400, "kg", 4));
    arr.push(new Tarifs("vld", "pk",   "express", 1401, 1700, "kg", 7));
    arr.push(new Tarifs("vld", "pk",   "express", 1701, 9999999, "kg", 9));

    arr.push(new Tarifs("vld", "ush",  "express", 0, 167, "m3", 2900));
    arr.push(new Tarifs("vld", "ush",  "express", 168, 9999999, "kg", 5));




    return arr;
}
function addExpressTarifsPK(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("pk", "msk",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "spb",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "nsb",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "hbr",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "vld",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "pk",   "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("pk", "ush",  "express", 0, 0, "kg", 0));




    return arr;
}
function addExpressTarifsUSH(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("ush", "msk",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "spb",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "nsb",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "hbr",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "vld",  "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "pk",   "express", 0, 0, "kg", 0));

    // arr.push(new Tarifs("ush", "ush",  "express", 0, 0, "kg", 0));




    return arr;
}


// Морская перевозка
function addMoreTarifsVLD(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("vld", "msk",  "more", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "spb",  "more", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "nsb",  "more", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "hbr",  "more", 0, 0, "kg", 0));

    // arr.push(new Tarifs("vld", "vld",  "more", 0, 0, "kg", 0));

    arr.push(new Tarifs("vld", "pk",   "more", 0, 600, "m3", 2800));
    arr.push(new Tarifs("vld", "pk",   "more", 601, 1200, "m3", 3300));
    arr.push(new Tarifs("vld", "pk",   "more", 1201, 1600, "kg", 4));
    arr.push(new Tarifs("vld", "pk",   "more", 1601, 9999999, "kg", 5));

    arr.push(new Tarifs("vld", "ush",  "more", 0, 600, "m3", 2400));
    arr.push(new Tarifs("vld", "ush",  "more", 601, 9999999, "kg", 4));




    return arr;
}

// Мультимодальная перевозка
function addMultiTarifsHBR(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("hbr", "msk",  "multi", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "spb",  "multi", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "nsb",  "multi", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "hbr",  "multi", 0, 0, "kg", 0));

    // arr.push(new Tarifs("hbr", "vld",  "multi", 0, 0, "kg", 0));

    arr.push(new Tarifs("hbr", "pk",   "multi", 0, 200, "m3", 3900));
    arr.push(new Tarifs("hbr", "pk",   "multi", 201, 300, "kg", 15));
    arr.push(new Tarifs("hbr", "pk",   "multi", 301, 500, "kg", 15));
    arr.push(new Tarifs("hbr", "pk",   "multi", 501, 9999999, "kg", 12));

    // arr.push(new Tarifs("hbr", "ush",  "multi", 0, 0, "kg", 0));




    return arr;
}



function addMoreTarifs_(array) {
    let arr = array;

    // msk
    // spb
    // nsb
    // hbr
    // vld
    // pk
    // ush


    // arr.push(new Tarifs("", "msk",  "more", 0, 0, "kg", 0));

    // arr.push(new Tarifs("", "spb",  "more", 0, 0, "kg", 0));

    // arr.push(new Tarifs("", "nsb",  "more", 0, 0, "kg", 0));

    // arr.push(new Tarifs("", "hbr",  "more", 0, 0, "kg", 0));

    // arr.push(new Tarifs("", "vld",  "more", 0, 0, "kg", 0));

    // arr.push(new Tarifs("", "pk",   "more", 0, 0, "kg", 0));

    // arr.push(new Tarifs("", "ush",  "more", 0, 0, "kg", 0));




    return arr;
}


