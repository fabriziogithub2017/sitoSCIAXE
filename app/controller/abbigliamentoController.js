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

    vm.categoria = [{
        'titolo': 'Pantalone multitasche', 'imgSrc': '../../jmg/jmgAbbigliamento/pantalone-da-lavoro.jpg', 'imgAlt': 'Pantalone multitasche',
        'caratteristiche': [
            'Tessuto: 60% Cotone, 40% Poliestere',
            'colore: arancio',
            'taglie: M - L - XL - XXL',
            'bande riflettenti 3M Scotchlite',
            'tasca con chiusura in velcro sul petto lato destro',
            'tasca portacellulare con chiusura in velcro',
            '5 tasche con chiusura in velcro',
            '2 tasche con cerniera',
            '2 tasche posteriori con chiusura in velcro',
            'DPI 2ª categoria',
            'conforme UNI EN 340']
    },
    {
        'titolo': 'Giubbotto', 'imgSrc': '../../jmg/jmgAbbigliamento/giubbotti.jpg', 'imgAlt': 'Giubbotto',
        'caratteristiche': [
            'Tessuto: 60% Cotone, 40% Poliestere',
            'colore: arancio',
            'taglie: M - L - XL - XXL',
            'bande riflettenti 3M Scotchlite',
            'tasca con chiusura in velcro sul petto lato destro',
            'tasca portacellulare con chiusura in velcro',
            '5 tasche con chiusura in velcro',
            '2 tasche con cerniera',
            '2 tasche posteriori con chiusura in velcro',
            'DPI 2ª categoria',
            'conforme UNI EN 340']
    },
    {
        'titolo': 'Gilet classe 2', 'imgSrc': '../../jmg/jmgAbbigliamento/gilet-classe2.jpg', 'imgAlt': 'Gilet giallo classe 2',
        'caratteristiche': [
            'Tessuto: 60% Cotone, 40% Poliestere',
            'colore: arancio',
            'taglie: M - L - XL - XXL',
            'bande riflettenti 3M Scotchlite',
            'tasca con chiusura in velcro sul petto lato destro',
            'tasca portacellulare con chiusura in velcro',
            '5 tasche con chiusura in velcro',
            '2 tasche con cerniera',
            '2 tasche posteriori con chiusura in velcro',
            'DPI 2ª categoria',
            'conforme UNI EN 340']
        },
        {
            'titolo': 'Giubbotto in softshell', 'imgSrc': '../../jmg/jmgAbbigliamento/giubbotto-softshell.jpg', 'imgAlt': 'Giubbotto in softshell',
            'caratteristiche': [
                'Tessuto: 7% Spandex, 93% Poliestere, 330g/m2',
                'colore: blu,rosso,grigio,nero, bianco',
                'taglie: S - M - L - XL - XXL',
                '2 tasche laterali con cerniera',
                'interno in pile',
                'coulisse al cappuccio e in vita',
                'tasca con cerniera manica sx',
                'polsi regolabili con velcro',
                'DPI 1ª categoria']
        }
    ]



})