var app = angular.module("myapp", []).controller("borseZainiController", function ($scope) {

    var vm = this;
    //Fabri il controllo della pagina zaini
    vm.cliccamiMail = function (oggetto) {
        document.cookie = oggetto;
        //location.href = 'MandaEmail.aspx';
        location.href = '../Categorie/MandaEmail.aspx';
    // questo è il nuovo master
    }

    init();

    function init() {
        console.log("Initialized");
    }
    
    vm.categoria = [{
        'titolo': 'Zaino personalizzato', 'imgSrc': '../../jmg/jmgZainiBorse/zaini-personalizzati.jpg', 'imgAlt': 'Zaini personalizzati',
        'caratteristiche': [
            'tasca anteriore',
            'spallacci e retro imbottiti',
            'misure: cm 26,5 x h 38 x 12 ca',
            'materiale: 100 % nylon 600D',
            'stampa a 1 colore su un lato'],
        'prezzo': 'da € 5,90 cad. +iva'
    },
    {
        'titolo': 'Borsa porta documenti', 'imgSrc': '../../jmg/jmgZainiBorse/cartella-porta-documenti-personalizzata.jpg', 'imgAlt': 'Borsa porta documenti',
        'caratteristiche': [
            '1 scomparto',
            'misure: cm 39x30 ca',
            'materiale: 100 % nylon 600D',
            'stampa a 1 colore su un lato'],
        'prezzo': 'da € 1,60 cad. +iva'
    },
    {
        'titolo': 'Sacca', 'imgSrc': '../../jmg/jmgZainiBorse/sacche-personalizzate.jpg', 'imgAlt': 'Sacche personalizzate a 1 colore',
        'caratteristiche': [
            'doppia corda di chiusura',
            'misura:cm 33x45 ca ',
            'materiale: 100 % nylon 210D',
            'stampa a 1 colore su un lato'],
        'prezzo': 'da € 0,85 cad. +iva'
    },

    ]

})