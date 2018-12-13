/**
 * Created by zm on 13.12.2018.
 */

/*
 ждем загрузки структуры DOM

 */


window.addEventListener("DOMContentLoaded", ready);

function ready() {

    let modal           = document.getElementById('modal_podr'),
        modalOverlay    = document.getElementById('modal_overlay_podr'),
        closeButton     = document.getElementById('close-button'),
        info            = document.getElementById('selePodrInfo'),
        info1            = document.getElementById('selePodrInfo1'),
        openButton      = document.getElementById('sele_podr_open');

    //console.log(openButton);

    closeButton.addEventListener("click", function () {
        modal.style.display="none";
        modalOverlay.style.display="none";
    })

    openButton.addEventListener("click", function () {
        modal.style.display="block";
        modalOverlay.style.display="block";
    })

    let sp_MSK = document.getElementById('sp_MSK'),
        sp_SPB = document.getElementById('sp_SPB'),
        sp_NSB = document.getElementById('sp_NSB'),
        sp_HBR = document.getElementById('sp_HBR'),
        sp_VLD = document.getElementById('sp_VLD'),
        sp_PK  = document.getElementById('sp_PK'),
        sp_USH = document.getElementById('sp_USH');

    sp_MSK.onclick = function () {
        info.innerHTML = "Москва";
        info1.innerHTML = "Москва";
    }
    sp_SPB.onclick = function () {
        info.innerHTML = "С-Петербург";
        info1.innerHTML = "С-Петербург";
    }
    sp_NSB.onclick = function () {
        info.innerHTML = "Новосибирск";
        info1.innerHTML = "Новосибирск";
    }
    sp_HBR.onclick = function () {
        info.innerHTML = "Хабаровск";
        info1.innerHTML = "Хабаровск";
    }
    sp_VLD.onclick = function () {
        info.innerHTML = "Владивосток";
        info1.innerHTML = "Владивосток";
    }
    sp_PK.onclick = function () {
        info.innerHTML = "П-Камчатский";
        info1.innerHTML = "П-Камчатский";
    }
    sp_USH.onclick = function () {
        info.innerHTML = "Ю-Сахалинск";
        info1.innerHTML = "Ю-Сахалинск";
    }












}