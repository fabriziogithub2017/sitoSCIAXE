var app = angular.module("myapp", []).controller("agendeController", function ($scope) {

    var vm = this;

    vm.cliccamiMail = function (oggetto) {
        document.cookie = oggetto;
        //location.href = 'MandaEmail.aspx';
        location.href = '../Categorie/MandaEmail.aspx';

    }

    init();

    function init() {
        console.log("Initialized");
    }

    vm.categoria = [{
        'titolo': 'Agenda Giornaliera', 'imgSrc': '../../jmg/jmgAgende/agenda-giornaliera-2019.jpg', 'imgAlt': 'Agenda giornaliera 2019',
        'caratteristiche': [
            'F.to agenda cm 15x21 ca',
            'carta bianca ',
            'edizione multilingue: IT – GB – FR – DE – ES – PT',
            'inserti informativi e rubrica telefonica',
            'inserto cartina geografica',
            'angolo segnapagine perforato ',
            'laccetto segnapagine ',
            '8 colori disponibili',
            'materiale poliuretano termovirante ']
    },
    {
        'titolo': 'Agenda Giornaliera', 'imgSrc': '../../jmg/jmgAgende/agenda-giornaliera-2019.jpg', 'imgAlt': 'Agenda giornaliera 2019',
        'caratteristiche': [
            'F.to agenda cm 15x21 ca',
            'carta bianca ',
            'edizione multilingue: IT – GB – FR – DE – ES – PT',
            'inserti informativi e rubrica telefonica',
            'inserto cartina geografica',
            'angolo segnapagine perforato ',
            'laccetto segnapagine ',
            '8 colori disponibili',
            'materiale poliuretano termovirante ']
    },
    {
        'titolo': 'Agenda Giornaliera', 'imgSrc': '../../jmg/jmgAgende/agenda-giornaliera-2019.jpg', 'imgAlt': 'Agenda giornaliera 2019',
        'caratteristiche': [
            'F.to agenda cm 15x21 ca',
            'carta bianca ',
            'edizione multilingue: IT – GB – FR – DE – ES – PT',
            'inserti informativi e rubrica telefonica',
            'inserto cartina geografica',
            'angolo segnapagine perforato ',
            'laccetto segnapagine ',
            '8 colori disponibili',
            'materiale poliuretano termovirante ']
    },
    {
        'titolo': 'Agenda Giornaliera', 'imgSrc': '../../jmg/jmgAgende/agenda-giornaliera-2019.jpg', 'imgAlt': 'Agenda giornaliera 2019',
        'caratteristiche': [
            'F.to agenda cm 15x21 ca',
            'carta bianca ',
            'edizione multilingue: IT – GB – FR – DE – ES – PT',
            'inserti informativi e rubrica telefonica',
            'inserto cartina geografica',
            'angolo segnapagine perforato ',
            'laccetto segnapagine ',
            '8 colori disponibili',
            'materiale poliuretano termovirante ']
    },








    ]



})