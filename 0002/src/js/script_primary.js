/*
 чтоб дождаться загрузки всей страницы
 window.addEventListener('load')
 */

/*
 ждем загрузки структуры DOM

 */


window.addEventListener("DOMContentLoaded", ready);

function ready() {

    //logo-info
    //********************************************
    let Style_ul_logo_info = getComputedStyle(ul_logo_info);
    //console.log(menuStyle1.display);
    open_logo_info.onclick = function () {
        if (Style_ul_logo_info.display == 'none'){
            ul_logo_info.classList.add("active");
            //this.innerHTML = "Закрыть меню";
        } else {
            ul_logo_info.classList.remove("active");
            //this.innerHTML = "Открыть меню";
        }
    }


    //menu-primary
    //********************************************
    let Style_ul_menu_main = getComputedStyle(ul_menu_main);
    //console.log(menuStyle1.display);
    open_menu_main.onclick = function () {
        if (Style_ul_menu_main.display == 'none'){
            ul_menu_main.classList.add("active");
            //this.innerHTML = "Закрыть меню";
        } else {
            ul_menu_main.classList.remove("active");
            //this.innerHTML = "Открыть меню";
        }
    }











}