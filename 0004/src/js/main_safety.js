/*
 чтоб дождаться загрузки всей страницы
 window.addEventListener('load')
 */

/*
 ждем загрузки структуры DOM

 */


window.addEventListener("DOMContentLoaded", ready);

function ready() {

    let boolShowSafetyAll = false;
    let divMainSafetyBlockTitle = document.getElementById('mainSafetyBlockTitle');
    let divMainSafetyBlock = document.getElementById('mainSafetyBlock');
    showHideDivFromFlag(divMainSafetyBlock, false);

    divMainSafetyBlockTitle.onclick = function () {
        if (!boolShowSafetyAll){
            showHideDivFromFlag(divMainSafetyBlock, true);
            boolShowSafetyAll = true;
        }else {
            showHideDivFromFlag(divMainSafetyBlock, false);
            boolShowSafetyAll = false;
        }
    }




    function showHideDivFromFlag(dv, bool) {
        if (bool){
            dv.style.display = 'block';
        }else {
            dv.style.display = 'none';
        }
    }





}