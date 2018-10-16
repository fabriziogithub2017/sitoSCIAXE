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
        'titolo': 'Borsone', 'imgSrc': '../../jmg/jmgZainiBorse/borsone-sport.jpg', 'imgAlt': 'Borsone sport',
        'caratteristiche': [
            'per sport e viaggio',
            'apertura superiore con doppio cursore',
            'tasca laterale',
            'tiralampo in tessuto',
            'tracolla regolabile con salvaspalle',
            'misure:cm 56x31x28 ca',
            'materiale: 100 % nylon 600D',
            'stampa a 1 colore su un lato']
    },
    {
        'titolo': 'Borsa Porta documenti', 'imgSrc': '../../jmg/jmgZainiBorse/borsa-porta-documenti.jpg', 'imgAlt': 'Borsa porta documenti',
        'caratteristiche': [
            '1 scomparto',
            'interno multitasche',
            'tracolla regolabile',
            'doppia chiusura in plastica',
            'misure: cm 39x30x8 ca',
            'materiale: 100 % nylon 600D',
            'stampa a 1 colore su un lato']
    },
    {
        'titolo': 'Sacca', 'imgSrc': '../../jmg/jmgZainiBorse/sacche.jpg', 'imgAlt': 'Sacche',
        'caratteristiche': [
            'doppia corda di chiusura',
            'misura:cm 33x45 ca ',
            'materiale: 100 % nylon 210D',
            'stampa a 1 colore su un lato']
    },



    ]



})