/**
 * Created by zm on 14.12.2018.
 */


/*
 ждем загрузки структуры DOM
 */


window.addEventListener("DOMContentLoaded", ready);

function ready() {

    let podr_selected = "";
    let type_selected = "";

    let podr_MSK    = document.getElementById('rf_MSK');
    podr_MSK.onclick = function () {
        podr_selected = "podr_MSK";
    }

    let podr_SPB    = document.getElementById('rf_SPB');
    podr_SPB.onclick = function () {
        podr_selected = "podr_SPB";
    }

    let podr_NSB    = document.getElementById('rf_NSB');
    podr_NSB.onclick = function () {
        podr_selected = "podr_NSB";
    }

    let podr_HBR    = document.getElementById('rf_HBR');
    podr_HBR.onclick = function () {
        podr_selected = "podr_HBR";
    }

    let podr_VLD    = document.getElementById('rf_VLD');
    podr_VLD.onclick = function () {
        podr_selected = "podr_VLD";
    }

    let podr_PK     = document.getElementById('rf_PK');
    podr_PK.onclick = function () {
        podr_selected = "podr_PK";
    }

    let podr_USH    = document.getElementById('rf_USH');
    podr_USH.onclick = function () {
        podr_selected = "podr_USH";
    }




    let type_AVIA   = document.getElementById('rt_AVIA');
    type_AVIA.onclick = function () {
        type_selected = "type_AVIA";
    }

    let type_JD     = document.getElementById('rt_JD');
    type_JD.onclick = function () {
        type_selected = "type_JD";
    }

    let type_EXP    = document.getElementById('rt_EXP');
    type_EXP.onclick = function () {
        type_selected = "type_EXP";
    }

    let type_MLT    = document.getElementById('rt_MLT');
    type_MLT.onclick = function () {
        type_selected = "type_MLT";
    }

    let type_MORE   = document.getElementById('rt_MORE');
    type_MORE.onclick = function () {
        type_selected = "type_MORE";
    }

    //менеджеры по москве
    let manager01 = new Manager("podr_MSK","type_AVIA", "москва менеджер 01", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager02 = new Manager("podr_MSK","type_AVIA", "москва менеджер 02", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");

    let manager03 = new Manager("podr_MSK","type_JD",   "москва менеджер 03", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager04 = new Manager("podr_MSK","type_JD",   "москва менеджер 04", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");

    let manager05 = new Manager("podr_MSK","type_EXP",  "москва менеджер 05", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager06 = new Manager("podr_MSK","type_EXP",  "москва менеджер 06", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");

    let manager07 = new Manager("podr_MSK","type_MLT",  "москва менеджер 07", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager08 = new Manager("podr_MSK","type_MLT",  "москва менеджер 08", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");

    let manager09 = new Manager("podr_MSK","type_MORE", "москва менеджер 09", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager10 = new Manager("podr_MSK","type_MORE", "москва менеджер 10", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");

    //менеджеры по СПБ
    let manager11 = new Manager("podr_SPB","type_AVIA", "СПБ менеджер 11", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager12 = new Manager("podr_SPB","type_AVIA", "СПБ менеджер 12", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager13 = new Manager("podr_SPB","type_JD",   "СПБ менеджер 13", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager14 = new Manager("podr_SPB","type_JD",   "СПБ менеджер 14", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager15 = new Manager("podr_SPB","type_EXP",  "СПБ менеджер 15", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager16 = new Manager("podr_SPB","type_EXP",  "СПБ менеджер 16", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager17 = new Manager("podr_SPB","type_MLT",  "СПБ менеджер 17", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager18 = new Manager("podr_SPB","type_MLT",  "СПБ менеджер 18", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager19 = new Manager("podr_SPB","type_MORE", "СПБ менеджер 19", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager20 = new Manager("podr_SPB","type_MORE", "СПБ менеджер 20", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");

    //менеджеры по Новосибирск
    let manager21 = new Manager("podr_NSB","type_AVIA", "Новосибирск менеджер 21", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager22 = new Manager("podr_NSB","type_AVIA", "Новосибирск менеджер 22", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager23 = new Manager("podr_NSB","type_JD",   "Новосибирск менеджер 23", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager24 = new Manager("podr_NSB","type_JD",   "Новосибирск менеджер 24", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager25 = new Manager("podr_NSB","type_EXP",  "Новосибирск менеджер 25", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager26 = new Manager("podr_NSB","type_EXP",  "Новосибирск менеджер 26", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager27 = new Manager("podr_NSB","type_MLT",  "Новосибирск менеджер 27", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager28 = new Manager("podr_NSB","type_MLT",  "Новосибирск менеджер 28", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager29 = new Manager("podr_NSB","type_MORE", "Новосибирск менеджер 29", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager30 = new Manager("podr_NSB","type_MORE", "Новосибирск менеджер 30", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");

    //менеджеры по Хабаровск
    let manager31 = new Manager("podr_HBR","type_AVIA", "Хабаровск менеджер 31", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager32 = new Manager("podr_HBR","type_AVIA", "Хабаровск менеджер 32", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager33 = new Manager("podr_HBR","type_JD",   "Хабаровск менеджер 33", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager34 = new Manager("podr_HBR","type_JD",   "Хабаровск менеджер 34", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager35 = new Manager("podr_HBR","type_EXP",  "Хабаровск менеджер 35", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager36 = new Manager("podr_HBR","type_EXP",  "Хабаровск менеджер 36", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager37 = new Manager("podr_HBR","type_MLT",  "Хабаровск менеджер 37", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager38 = new Manager("podr_HBR","type_MLT",  "Хабаровск менеджер 38", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager39 = new Manager("podr_HBR","type_MORE", "Хабаровск менеджер 39", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager40 = new Manager("podr_HBR","type_MORE", "Хабаровск менеджер 40", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");

    //менеджеры по Владивосток
    let manager41 = new Manager("podr_VLD","type_AVIA", "Владивосток менеджер 41", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager42 = new Manager("podr_VLD","type_AVIA", "Владивосток менеджер 42", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager43 = new Manager("podr_VLD","type_JD",   "Владивосток менеджер 43", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager44 = new Manager("podr_VLD","type_JD",   "Владивосток менеджер 44", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager45 = new Manager("podr_VLD","type_EXP",  "Владивосток менеджер 45", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager46 = new Manager("podr_VLD","type_EXP",  "Владивосток менеджер 46", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager47 = new Manager("podr_VLD","type_MLT",  "Владивосток менеджер 47", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager48 = new Manager("podr_VLD","type_MLT",  "Владивосток менеджер 48", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager49 = new Manager("podr_VLD","type_MORE", "Владивосток менеджер 49", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager50 = new Manager("podr_VLD","type_MORE", "Владивосток менеджер 50", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");

    //менеджеры по ПК
    let manager51 = new Manager("podr_PK","type_AVIA", "ПК менеджер 51", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager52 = new Manager("podr_PK","type_AVIA", "ПК менеджер 52", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager53 = new Manager("podr_PK","type_JD",   "ПК менеджер 53", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager54 = new Manager("podr_PK","type_JD",   "ПК менеджер 54", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager55 = new Manager("podr_PK","type_EXP",  "ПК менеджер 55", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager56 = new Manager("podr_PK","type_EXP",  "ПК менеджер 56", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager57 = new Manager("podr_PK","type_MLT",  "ПК менеджер 57", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager58 = new Manager("podr_PK","type_MLT",  "ПК менеджер 58", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager59 = new Manager("podr_PK","type_MORE", "ПК менеджер 59", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager60 = new Manager("podr_PK","type_MORE", "ПК менеджер 60", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");

    //менеджеры по ЮСХ
    let manager61 = new Manager("podr_USH","type_AVIA", "ЮСХ менеджер 61", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager62 = new Manager("podr_USH","type_AVIA", "ЮСХ менеджер 62", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager63 = new Manager("podr_USH","type_JD",   "ЮСХ менеджер 63", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager64 = new Manager("podr_USH","type_JD",   "ЮСХ менеджер 64", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager65 = new Manager("podr_USH","type_EXP",  "ЮСХ менеджер 65", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager66 = new Manager("podr_USH","type_EXP",  "ЮСХ менеджер 66", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager67 = new Manager("podr_USH","type_MLT",  "ЮСХ менеджер 67", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager68 = new Manager("podr_USH","type_MLT",  "ЮСХ менеджер 68", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager69 = new Manager("podr_USH","type_MORE", "ЮСХ менеджер 69", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");
    let manager70 = new Manager("podr_USH","type_MORE", "ЮСХ менеджер 70", "9-00 до 18-00", "8 (999) 123-45-67", "info@groupst.ru");


    let allManagers = [];
    allManagers.push(manager01);
    allManagers.push(manager02);
    allManagers.push(manager03);
    allManagers.push(manager04);
    allManagers.push(manager05);
    allManagers.push(manager06);
    allManagers.push(manager07);
    allManagers.push(manager08);
    allManagers.push(manager09);
    allManagers.push(manager10);
    allManagers.push(manager11);
    allManagers.push(manager12);
    allManagers.push(manager13);
    allManagers.push(manager14);
    allManagers.push(manager15);
    allManagers.push(manager16);
    allManagers.push(manager17);
    allManagers.push(manager18);
    allManagers.push(manager19);
    allManagers.push(manager20);
    allManagers.push(manager21);
    allManagers.push(manager22);
    allManagers.push(manager23);
    allManagers.push(manager24);
    allManagers.push(manager25);
    allManagers.push(manager26);
    allManagers.push(manager27);
    allManagers.push(manager28);
    allManagers.push(manager29);
    allManagers.push(manager30);
    allManagers.push(manager31);
    allManagers.push(manager32);
    allManagers.push(manager33);
    allManagers.push(manager34);
    allManagers.push(manager35);
    allManagers.push(manager36);
    allManagers.push(manager37);
    allManagers.push(manager38);
    allManagers.push(manager39);
    allManagers.push(manager40);
    allManagers.push(manager41);
    allManagers.push(manager42);
    allManagers.push(manager43);
    allManagers.push(manager44);
    allManagers.push(manager45);
    allManagers.push(manager46);
    allManagers.push(manager47);
    allManagers.push(manager48);
    allManagers.push(manager49);
    allManagers.push(manager50);
    allManagers.push(manager51);
    allManagers.push(manager52);
    allManagers.push(manager53);
    allManagers.push(manager54);
    allManagers.push(manager55);
    allManagers.push(manager56);
    allManagers.push(manager57);
    allManagers.push(manager58);
    allManagers.push(manager59);
    allManagers.push(manager60);
    allManagers.push(manager61);
    allManagers.push(manager62);
    allManagers.push(manager63);
    allManagers.push(manager64);
    allManagers.push(manager65);
    allManagers.push(manager66);
    allManagers.push(manager67);
    allManagers.push(manager68);
    allManagers.push(manager69);
    allManagers.push(manager70);



    let fio_info1 = document.getElementById("fio_info1");
    let fio_info2 = document.getElementById("fio_info2");

    let schedule_info1 = document.getElementById("schedule_info1");
    let schedule_info2 = document.getElementById("schedule_info2");

    let tel_info1 = document.getElementById("tel_info1");
    let tel_info2 = document.getElementById("tel_info2");

    let email_info1 = document.getElementById("email_info1");
    let email_info2 = document.getElementById("email_info2");







    let btnShowManagers = document.getElementById("btnShowManagers");

    // console.log(btnShowManagers);

    btnShowManagers.onclick = function () {
        // console.log("podr_selected: " + podr_selected +"; type_selected: "+type_selected);
        // if (podr_selected == "") console.log("подр пусто");
        // if (type_selected == "") console.log("тип пусто");

        if (!type_selected || !podr_selected) return;


        //console.log(manager.fio);
        let viewManagers = [];


        for (let i=0; i < allManagers.length; i++){
            if(allManagers[i].podr == podr_selected && allManagers[i].type == type_selected){
                viewManagers.push(allManagers[i]);
            }
        }

        //console.log(viewManagers);

        fio_info1.innerHTML = viewManagers[0]._fio + viewManagers[0].fio;
        fio_info2.innerHTML = viewManagers[1]._fio + viewManagers[1].fio;
        schedule_info1.innerHTML = viewManagers[0]._work + viewManagers[0].work;
        schedule_info2.innerHTML = viewManagers[1]._work + viewManagers[1].work;
        tel_info1.innerHTML = viewManagers[0]._phone + viewManagers[0].phone;
        tel_info2.innerHTML = viewManagers[1]._phone + viewManagers[1].phone;
        email_info1.innerHTML = viewManagers[0]._email + viewManagers[0].email;
        email_info2.innerHTML = viewManagers[1]._email + viewManagers[1].email;


    }




























}





class Manager {
    constructor(podr, type, fio, work, phone, email) {
        this.podr = podr;
        this.type = type;
        this.fio = fio;
        this.work = work;
        this.phone = phone;
        this.email = email;
        this._fio   = "ФИО: ";
        this._work  = "часы работы: ";
        this._phone = "тел: ";
        this._email = "email: ";
    }
    getFio(){
        return this.fio;
    }
}



