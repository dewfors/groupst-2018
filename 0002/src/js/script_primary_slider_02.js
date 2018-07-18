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
    let slideIndex_s2 = 1,
        slides_s2 = document.getElementsByClassName('slider-item-sl2'),
        prev_s2 = document.querySelector('.prev-sl2'),
        next_s2 = document.querySelector('.next-sl2'),
        dotWrap_s2 = document.querySelector('.slider-dots-sl2'),
        dots_s2 = document.getElementsByClassName('dot-sl2');


    showSlides_s2(slideIndex_s2);

    //функция показа слайда
    function showSlides_s2(n) {
        //зацикливаем
        if (n > slides_s2.length){
            slideIndex_s2 = 1;
        }
        if (n < 1){
            slideIndex_s2 = slides_s2.length;
        }

        //скрываем все слайды
        for (let i = 0; i < slides_s2.length; i++){
            slides_s2[i].style.display = 'none';
        }
        //убираем с всех дотов класс dot-active
        for (let i = 0; i < dots_s2.length; i++){
            dots_s2[i].classList.remove('dot-active');
        }

        // показываем нужный слайд
        slides_s2[slideIndex_s2-1].style.display = 'block';
        // к  активной точке добавляем класс dot-active
        dots_s2[slideIndex_s2-1].classList.add('dot-active');


    }

    //функция, добавляющая или отнимающая количество сладов
    // к текущему slideIndex
    function plusSlides_s2(n) {
        showSlides_s2(slideIndex_s2 += n);
    }

    // функция определяющая какой слайд сейчас текущий
    function currentSlide_s2(n) {
        showSlides_s2(slideIndex_s2 = n);
    }

    // обработчики событий на точки и стрелки
    prev_s2.addEventListener('click', function () {
        plusSlides_s2(-1);
    });
    next_s2.addEventListener('click', function () {
        plusSlides_s2(1);
    });

    dotWrap_s2.addEventListener('click', function (event) {

        for (let i=0; i < dots_s2.length+1; i++){
            if (event.target.classList.contains('dot') && event.target == dots[i-1]){
                currentSlide_s2(i);
                //console.log(event.target);
            }
        }
    });
}