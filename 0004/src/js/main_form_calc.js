/*
 чтоб дождаться загрузки всей страницы
 window.addEventListener('load')
 */

/*
 ждем загрузки структуры DOM

 */


window.addEventListener("DOMContentLoaded", ready);

function ready() {

    let check1div = document.getElementById('check1div');
    let check1img = document.getElementById('check-img1');

    let check2div = document.getElementById('check2div');
    let check2img = document.getElementById('check-img2');

    let check3div = document.getElementById('check3div');
    let check3img = document.getElementById('check-img3');

    let divNegabarit = document.getElementById('negabarit');
    let divSupportSend = document.getElementById('supportSend');
    let divSupportAccept = document.getElementById('supportAccept');



    //*******************************************************************
    //флаг - 01 -отключаем флаг негабаритного груза
    let check1 = document.getElementById('check1');
    check1.checked = false;
    //check1img.style.display = 'none';
    showHideDivFromFlag(divNegabarit, false);
    //console.log(check1.checked);

    //*******************************************************************
    //флаг - 02 -отключаем флаг сопровождение в пункте отправки
    let check2 = document.getElementById('check2');
    check2.checked = false;
    //check2img.style.display = 'none';
    showHideDivFromFlag(divSupportSend, false);
    //console.log(check1.checked);

    //*******************************************************************
    //флаг - 03 -отключаем флаг сопровождение в пункте приемки
    let check3 = document.getElementById('check3');
    check3.checked = false;
    //check3img.style.display = 'none';
    showHideDivFromFlag(divSupportAccept, false);
    //console.log(check1.checked);


    function showHideDivFromFlag(dv, bool) {
        if (bool){
            dv.style.display = 'block';
        }else {
            dv.style.display = 'none';
        }
    }


    document.getElementById('check1').onclick = function () {
        console.log(this);
        if (this.checked){

            //alert(this.value);
            // check1div.style.backgroundColor = "#222222";
            // check1img.style.display = 'flex';
            showHideDivFromFlag(divNegabarit, true);
        }else {
            // check1img.style.display = 'none';
            showHideDivFromFlag(divNegabarit, false);
        }
    }



    document.getElementById('check2').onclick = function () {
        if (this.checked){
            //alert(this.value);
            // check2div.style.backgroundColor = "#222222";
            // check2img.style.display = 'flex';
            showHideDivFromFlag(divSupportSend, true);
        }else {
            // check2img.style.display = 'none';
            showHideDivFromFlag(divSupportSend, false);
        }
    }

    document.getElementById('check3').onclick = function () {
        if (this.checked){
            //alert(this.value);
            // check3div.style.backgroundColor = "#222222";
            // check3img.style.display = 'flex';
            showHideDivFromFlag(divSupportAccept, true);
        }else {
            // check3img.style.display = 'none';
            showHideDivFromFlag(divSupportAccept, false);

        }
    }



}