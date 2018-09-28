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
    let slideIndex_s3 = 1,
        //slides_s3 = document.getElementsByClassName('slider-item-sl3'),
        slides_s3 = 9,
        // prev_s3 = document.querySelector('.prev-sl3'),
        // next_s3 = document.querySelector('.next-sl3'),
        prev_s3 = document.querySelector('.prevSL3'),
        next_s3 = document.querySelector('.nextSL3'),
        sl3_slide1 = document.getElementById('sl3_slide1'),
        sl3_slide2 = document.getElementById('sl3_slide2'),
        sl3_slide3 = document.getElementById('sl3_slide3'),
        sl3_slide4 = document.getElementById('sl3_slide4'),
        dotWrap_s3 = document.querySelector('.slider-dots-sl3'),
        dots_s3 = document.getElementsByClassName('dot-sl3');

    var div1 = `<a href="#avia">
                    <div class="img">
                        <img src="img/icons/services/airplane.png" alt="Авиа перевозка">
                        <div class="sm-title">Авиа перевозки</div>
                    </div>
                </a>`;

    var div2 = `<a href="#jd_l">
                    <div class="img">
                        <img src="img/icons/services/subway.png" alt="ЖД перевозка">
                        <div class="sm-title">ЖД перевозка - личный контейнер</div>
                    </div>
                </a>`;

    var div3 = `<a href="#jd_s">
                    <div class="img">
                        <img src="img/icons/services/subway.png" alt="ЖД перевозка">
                        <div class="sm-title">ЖД перевозка - сборный груз</div>
                    </div>
                </a>`;

    var div4 = `<a href="#exp">
                    <div class="img">
                        <img src="img/icons/services/subpost.png" alt="Экспресс доставка">
                        <div class="sm-title">Экспресс доставка</div>
                    </div>
                </a>`;

    var div5 = `<a href="#multi">
                    <div class="img">
                        <img src="img/icons/services/hook.png" alt="Мультимодальная перевозка">
                        <div class="sm-title">Мультимодальная перевозка</div>
                    </div>
                </a>`;

    var div6 = `<a href="#more">
                    <div class="img">
                        <img src="img/icons/services/cruise.png" alt="Морская перевозка">
                        <div class="sm-title">Морская перевозка</div>
                    </div>
                </a>`;

    var div7 = `<div class="img">
                        <img src="img/icons/services/truck.png" alt="Автодоставка">
                        <div class="sm-title">Автодоставка</div>
                </div>`;
    var div8 = `<div class="img">
                        <img src="img/icons/services/shield.png" alt="Страхование перевозок">
                        <div class="sm-title">Страхование перевозок</div>
                </div>`;
    var div9 = `<div class="img">
                        <img src="img/icons/services/file.png" alt="Оформление справок СЭС">
                        <div class="sm-title">Оформление справок СЭС</div>
                </div>`;

    var services_txt = [];
    services_txt[0] = `avia`;
    services_txt[1] = `jd_lich`;
    services_txt[2] = `jd_sbor`;
    services_txt[3] = `express`;
    services_txt[4] = `multi`;
    services_txt[5] = `more`;
    services_txt[6] = `avto`;
    services_txt[7] = `strah`;
    services_txt[8] = `ses`;


    var services = [];
    services[0] = div1;
    services[1] = div2;
    services[2] = div3;
    services[3] = div4;
    services[4] = div5;
    services[5] = div6;
    services[6] = div7;
    services[7] = div8;
    services[8] = div9;

    //console.log(sl3_slide4);

    showSlides_s3();

    //функция, добавляющая или отнимающая количество сладов
    // к текущему slideIndex
    function plusSlides_s3(n) {
        slideIndex_s3 += n;

        if (slideIndex_s3 > slides_s3){
            slideIndex_s3 = 1;
        }
        if (slideIndex_s3 < 1){
            slideIndex_s3 = slides_s3;
        }


        showSlides_s3();
    }

    // обработчики событий на точки и стрелки
    prev_s3.addEventListener('click', function () {
        plusSlides_s3(-1);
        console.log(slideIndex_s3);
    });
    next_s3.addEventListener('click', function () {
        plusSlides_s3(1);
        console.log(slideIndex_s3);
    });


    //services.map(x => console.log(x));




    function showSlides_s3() {
        var index1 = slideIndex_s3;
        var index2 = slideIndex_s3+1;
        if (index2 > slides_s3) index2 -= slides_s3;
        var index3 = slideIndex_s3+2;
        if (index3 > slides_s3) index3 -= slides_s3;
        var index4 = slideIndex_s3+3;
        if (index4 > slides_s3) index4 -= slides_s3;

        sl3_slide1.innerHTML = services[index1-1];
        sl3_slide2.innerHTML = services[index2-1];
        sl3_slide3.innerHTML = services[index3-1];
        sl3_slide4.innerHTML = services[index4-1];


    }

    sl3_slide1.addEventListener('click', function () {
        var index1 = slideIndex_s3;
        var service = services_txt[index1-1];
        //plusSlides_s3(1);
        console.log(service);
    });

    sl3_slide2.addEventListener('click', function () {
        var index2 = slideIndex_s3+1;
        if (index2 > slides_s3) index2 -= slides_s3;
        var service = services_txt[index2-1];
        //plusSlides_s3(1);
        console.log(service);
    });

    sl3_slide3.addEventListener('click', function () {
        var index3 = slideIndex_s3+2;
        if (index3 > slides_s3) index3 -= slides_s3;
        var service = services_txt[index3-1];
        //plusSlides_s3(1);
        console.log(service);
    });

    sl3_slide4.addEventListener('click', function () {
        var index4 = slideIndex_s3+3;
        if (index4 > slides_s3) index4 -= slides_s3;
        var service = services_txt[index4-1];
        //plusSlides_s3(1);
        console.log(service);
    });










}