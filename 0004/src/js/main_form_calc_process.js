/**
 * Created by zm on 14.12.2018.
 */


/*
 ждем загрузки структуры DOM
 */
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}


window.addEventListener("DOMContentLoaded", ready);

function ready() {



    // подключаем тарифы
    //include("/calc/tarifs.js");


     //console.log("a: " + _aaa);
    //console.log("a: ");


    let calc_btn = document.getElementById("calculate");

    let fromCitySelect = document.getElementById("fromCity"),
        fromCity = "",
        toCitySelect = document.getElementById("toCity"),
        toCity = "",
        weightInput = document.getElementById("weight"),
        w=0,
        volumeInput = document.getElementById("volume"),
        v=0,
        plotnost = 0,
        cargoInput = document.getElementById("cargo");


        let tarifsArray = [];
        tarifsArray = fillTarifsArray();
        console.log(tarifsArray);


    //init();


    calc_btn.onclick = function () {
        fromCity = fromCitySelect.options[fromCitySelect.selectedIndex].value;
        toCity = toCitySelect.options[toCitySelect.selectedIndex].value;

        w = getNumber(weightInput.value);
        v = getNumber(volumeInput.value);
        plotnost = getPlotnost(w, v);

        //w = weightInput.value;

        console.log(plotnost);

        let m = [1.0, "m3"]

        console.log("a: " + _aaa);

    }






















}








function getNumber(a) {
    let n = parseFloat(a);

    //console.log(isNumeric(a));

    if (isNaN(n)) return 0;
    return n;

}

function getPlotnost(w, v) {
    if (v == 0) return 0;


    return w/v;

}

function isNumeric(n) {

    return !isNaN(parseFloat(n)) && isFinite(n);

    // Метод isNaN пытается преобразовать переданный параметр в число.
    // Если параметр не может быть преобразован, возвращает true, иначе возвращает false.
    // isNaN("12") // false
}
