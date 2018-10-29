var app = angular.module("myapp", []).controller("shopperController", function ($scope) {

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
        'titolo': 'Shopper in tnt', 'imgSrc': '../../jmg/jmgShopper/shopper-in-tnt.jpg', 'imgAlt': 'Shoppers in tnt personalizzati a 1 colore',
        'caratteristiche': [
            'borsa shopping',
            'manici lunghi ',
            'rifiniture cucite',
            'misure: 38 x 42 cm',
            'materiale tnt'],
        'prezzo': 'da € 0,60 cad. +iva'
    },
    {
        'titolo': 'Shopper in cotone', 'imgSrc': '../../jmg/jmgShopper/shopper-in-cotone.jpg', 'imgAlt': 'Shoppers in cotone',
        'caratteristiche': [
            'borsa shopping',
            'manici lunghi con 6 colori a scelta ',
            'rifiniture cucite',
            'misure: 38 x 42 cm',
            'materiale cotone'],
        'prezzo': 'da € 0,90 cad. +iva'
    }

    ]

})