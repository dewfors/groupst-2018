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
    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');


    showSlides(slideIndex);

    //функция показа слайда
    function showSlides(n) {
        //зацикливаем
        if (n > slides.length){
            slideIndex = 1;
        }
        if (n < 1){
            slideIndex = slides.length;
        }

        //скрываем все слайды
        for (let i = 0; i < slides.length; i++){
            slides[i].style.display = 'none';
        }
        //убираем с всех дотов класс dot-active
        for (let i = 0; i < dots.length; i++){
            dots[i].classList.remove('dot-active');
        }

        // показываем нужный слайд
        slides[slideIndex-1].style.display = 'block';
        // к  активной точке добавляем класс dot-active
        dots[slideIndex-1].classList.add('dot-active');


    }

    //функция, добавляющая или отнимающая количество сладов
    // к текущему slideIndex
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // функция определяющая какой слайд сейчас текущий
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // обработчики событий на точки и стрелки
    prev.addEventListener('click', function () {
        plusSlides(-1);
    });
    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotWrap.addEventListener('click', function (event) {

        for (let i=0; i < dots.length+1; i++){
            if (event.target.classList.contains('dot') && event.target == dots[i-1]){
                currentSlide(i);
                console.log(event.target);
            }
        }
    });
}