var app = angular.module("myapp", []).controller("abbigliamentoController", function ($scope) {

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

    vm.categoria = [
    {
        'titolo': 'Giubbotto Sottozero', 'imgSrc': '../../jmg/jmgAbbigliamento/giubbotto-da-lavoro.jpg', 'imgAlt': 'Giubbotto sottozero personalizzato',
        'caratteristiche': [
            'Tessuto: 65% Cotone, 35% Poliestere',
            'imbottitura: 200 g/m',
            'colore: blu',
            'taglie: M - L - XL - XXL - XXXL',
            'piccole bande riflettenti 3M',
            'tasca interna lato destro',
            'chiusura centrale con cerniera ricoperta da pattina con bottoni',
            '2 tasche con cerniera',
            '2 tasche con chiusura in velcro',
            'tasca porta cellulare + taschino porta penne',      
            'DPI 1ª categoria',
            'conforme UNI EN 340'],
        'prezzo': 'da € 25 cad. +iva'
    },
    {
        'titolo': 'Gilet classe 2', 'imgSrc': '../../jmg/jmgAbbigliamento/gilet classe 2 personalizzato.jpg', 'imgAlt': 'Gilet giallo o arancione classe 2 personalizzato',
        'caratteristiche': [
            'Tessuto: 100% Poliestere',
            'colore: arancio o giallo',
            'taglia: unica',
            'bande riflettenti 3M Scotchlite',
            'bordo rinforzato',
            'chiusura con velcro',
            'DPI 2ª categoria',
            'conforme omologato EN 471'],
        'prezzo': 'da € 4,50 cad. +iva'
    }
    ]
        
})