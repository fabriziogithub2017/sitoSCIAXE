var app = angular.module("myapp", []).controller("penneController", function ($scope) {

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
        'titolo': 'Penne personalizzate', 'imgSrc': '../../jmg/jmgPenne/penne-personalizzate.jpg', 'imgAlt': 'Penne biro personalizzate a 1 colore',
        'caratteristiche': [
            'penna a sfera',
            'meccanismo a scatto',
            'corpo in plastica colorato',
            'particolari in metallo',
            'Dimensioni:Ø cm 1 x h14 cm.',
            'inchiostro nero'],
        'prezzo': 'da € 0,30 cad. +iva'
    },
               

    ]



})