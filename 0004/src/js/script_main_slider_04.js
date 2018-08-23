/*
 чтоб дождаться загрузки всей страницы
 window.addEventListener('load')
 */

/*
 ждем загрузки структуры DOM

 */


window.addEventListener("DOMContentLoaded", ready);

function ready() {

    //Slider
    let slideIndex_s4 = 1,
        slides_s4 = 6,
        // prev_s4 = document.querySelector('.prev-sl3'),
        // next_s4 = document.querySelector('.next-sl3'),
        prev_s4 = document.getElementById('prev_sl4'),
        next_s4 = document.getElementById('next_sl4'),


        sl4_slide1 = document.getElementById('sl4_slide1'),
        sl4_slide2 = document.getElementById('sl4_slide2'),
        sl4_slide3 = document.getElementById('sl4_slide3'),
        sl4_slide4 = document.getElementById('sl4_slide4'),
        dotWrap_s4 = document.querySelector('.slider-dots-sl3'),
        dots_s4 = document.getElementsByClassName('dot-sl3');

    var div1 = `<div class="img">
                        <img src="img/icons/services/airplane.png" alt="Авиа перевозка">
                        <div class="sm-title">Авиа перевозки</div>
                </div>`;
    var div2 = `<div class="img">
                        <img src="img/icons/services/subway.png" alt="ЖД перевозка">
                        <div class="sm-title">ЖД перевозка - личный контейнер</div>
                </div>`;

    var div3 = `<div class="img">
                        <img src="img/icons/services/subway.png" alt="ЖД перевозка">
                        <div class="sm-title">ЖД перевозка - сборный груз</div>
                </div>`;

    var div4 = `<div class="img">
                        <img src="img/icons/services/subpost.png" alt="Экспресс доставка">
                        <div class="sm-title">Экспресс доставка</div>
                </div>`;
    var div5 = `<div class="img">
                        <img src="img/icons/services/hook.png" alt="Мультимодальная перевозка">
                        <div class="sm-title">Мультимодальная перевозка</div>
                </div>`;
    var div6 = `<div class="img">
                        <img src="img/icons/services/cruise.png" alt="Морская перевозка">
                        <div class="sm-title">Морская перевозка</div>
                </div>`;


    var services_txt = [];
    services_txt[0] = `avia`;
    services_txt[1] = `jd_lich`;
    services_txt[2] = `jd_sbor`;
    services_txt[3] = `express`;
    services_txt[4] = `multi`;
    services_txt[5] = `more`;



    var services = [];
    services[0] = div1;
    services[1] = div2;
    services[2] = div3;
    services[3] = div4;
    services[4] = div5;
    services[5] = div6;


    //console.log(sl3_slide4);

    showSlides_s4();

    //функция, добавляющая или отнимающая количество сладов
    // к текущему slideIndex
    function plusSlides_s4(n) {
        slideIndex_s4 += n;

        if (slideIndex_s4 > slides_s4){
            slideIndex_s4 = 1;
        }
        if (slideIndex_s4 < 1){
            slideIndex_s4 = slides_s4;
        }


        showSlides_s4();
    }

    // обработчики событий на точки и стрелки
    prev_s4.addEventListener('click', function () {
        plusSlides_s4(-1);
        console.log(slideIndex_s4);
    });
    next_s4.addEventListener('click', function () {
        plusSlides_s4(1);
        console.log(slideIndex_s4);
    });


    //services.map(x => console.log(x));




    function showSlides_s4() {
        var index1 = slideIndex_s4;
        var index2 = slideIndex_s4+1;
        if (index2 > slides_s4) index2 -= slides_s4;
        var index3 = slideIndex_s4+2;
        if (index3 > slides_s4) index3 -= slides_s4;
        var index4 = slideIndex_s4+3;
        if (index4 > slides_s4) index4 -= slides_s4;

        sl4_slide1.innerHTML = services[index1-1];
        sl4_slide2.innerHTML = services[index2-1];
        sl4_slide3.innerHTML = services[index3-1];
        sl4_slide4.innerHTML = services[index4-1];


    }

    sl4_slide1.addEventListener('click', function () {
        var index1 = slideIndex_s4;
        var service = services_txt[index1-1];
        //plusSlides_s3(1);
        console.log(service);
    });

    sl4_slide2.addEventListener('click', function () {
        var index2 = slideIndex_s4+1;
        if (index2 > slides_s4) index2 -= slides_s4;
        var service = services_txt[index2-1];
        //plusSlides_s3(1);
        console.log(service);
    });

    sl4_slide3.addEventListener('click', function () {
        var index3 = slideIndex_s4+2;
        if (index3 > slides_s4) index3 -= slides_s4;
        var service = services_txt[index3-1];
        //plusSlides_s3(1);
        console.log(service);
    });

    sl4_slide4.addEventListener('click', function () {
        var index4 = slideIndex_s4+3;
        if (index4 > slides_s4) index4 -= slides_s4;
        var service = services_txt[index4-1];
        //plusSlides_s3(1);
        console.log(service);
    });










}