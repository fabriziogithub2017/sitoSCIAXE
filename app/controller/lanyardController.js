var app = angular.module("myapp", []).controller("lanyardController", function ($scope) {

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
        'titolo': 'Lanyards a colori', 'imgSrc': '../../jmg/jmgLanyard/lanyards-a-colori.jpg', 'imgAlt': 'Lanyards personalizzati a colori',
        'caratteristiche': [
            'Lanyrads a colori',
            'Stampato interno ed esterno',
            'Accessori: con sgancio e fibia',
            'Misura 2 x 45/50 cm.'],
        'prezzo': 'da € 0,60 cad. +iva'
    }

    ]

})