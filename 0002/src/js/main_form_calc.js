/*
 чтоб дождаться загрузки всей страницы
 window.addEventListener('load')
 */

/*
 ждем загрузки структуры DOM

 */


window.addEventListener("DOMContentLoaded", ready);

function ready() {

    check1div = document.getElementById('check1div');
    check1img = document.getElementById('check-img1');

    check2div = document.getElementById('check2div');
    check2img = document.getElementById('check-img2');

    check3div = document.getElementById('check3div');
    check3img = document.getElementById('check-img3');

    document.getElementById('check1').onclick = function () {
        if (this.checked){
            //alert(this.value);
            check1div.style.backgroundColor = "#222222";
            check1img.style.display = 'flex';
        }else {
            check1img.style.display = 'none';

        }
    }

    document.getElementById('check2').onclick = function () {
        if (this.checked){
            //alert(this.value);
            check2div.style.backgroundColor = "#222222";
            check2img.style.display = 'flex';
        }else {
            check2img.style.display = 'none';

        }
    }

    document.getElementById('check3').onclick = function () {
        if (this.checked){
            //alert(this.value);
            check3div.style.backgroundColor = "#222222";
            check3img.style.display = 'flex';
        }else {
            check3img.style.display = 'none';

        }
    }



}