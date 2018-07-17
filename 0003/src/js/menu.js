
window.addEventListener("DOMContentLoaded", ready1);

function ready1() {

    let menuStyle3 = getComputedStyle(menu3);
    openMenu3.onclick = function () {
        if (menuStyle3.display == 'none'){
            menu3.classList.add("active");
            this.innerHTML = "Закрыть меню";
        } else {
            menu3.classList.remove("active");
            this.innerHTML = "Открыть меню";
        }
    }

    //********************************************

    let menuStyle4 = getComputedStyle(menu4);
    openMenu4.onclick = function () {
        if (menuStyle4.display == 'none'){
            menu4.classList.add("active");
            this.innerHTML = "Закрыть меню";
        } else {
            menu4.classList.remove("active");
            this.innerHTML = "Открыть меню";
        }
    }




    //********************************************
    let menuStyle1 = getComputedStyle(ul_menu_01);
    console.log(menuStyle1.display);
    open_menu_01.onclick = function () {
        if (menuStyle1.display == 'none'){
            ul_menu_01.classList.add("active");
            //this.innerHTML = "Закрыть меню";
        } else {
            ul_menu_01.classList.remove("active");
            //this.innerHTML = "Открыть меню";
        }
    }




}