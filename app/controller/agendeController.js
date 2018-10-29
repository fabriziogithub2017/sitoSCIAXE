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
        'titolo': 'Agenda 2019 giornaliera', 'imgSrc': '../../jmg/jmgAgende/agenda-2019-giornaliera-21x15.jpg', 'imgAlt': 'Agenda giornaliera 2019 personalizzata sulla copertina',
        'caratteristiche': [
            'F.to agenda cm 15x21',
            'carta bianca ',
            'a righe',
            'edizione multilingue: IT – GB – FR – DE – ES – PT',
            'inserti informativi e rubrica telefonica',
            'inserto cartina geografica',
            'angolo segnapagine perforato ',
            'laccetto segnapagine ',
            '8 colori disponibili',
            'materiale poliuretano termovirante'],
        'prezzo': 'da € 2,90 cad. +iva'
    },
    
    ]
    
})