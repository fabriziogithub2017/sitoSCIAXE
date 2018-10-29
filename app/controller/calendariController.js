var app = angular.module("myapp", []).controller("calendariController", function ($scope) {

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
        'titolo': 'Calendario olandese', 'imgSrc': '../../jmg/jmgCalendari/calendari-olandese-a-colori.jpg', 'imgAlt': 'calendario olandase con numerazione a colori personalizzato',
        'caratteristiche': [
            'mensile 12 fogli',
            'carta patinata 70 gr.',
            'testata termosaldata',
            'f.to calendario cm 29x47 ca',
            'f.to testata cm 29x9 ca',
            'imballo pz. 100'],
        'prezzo': 'da € 0,70 cad. +iva'        
    },
    {
        'titolo': 'Calendario da tavolo personalizzato', 'imgSrc': '../../jmg/jmgCalendari/calendari-da-tavolo.jpg', 'imgAlt': 'calendario da tavolo personalizzati',
        'caratteristiche': [
            'spiralato da tavolo',
            'mensile da 13 fogli',
            'carta patinata 100 gr.',
            'supporto cartoncino bianco 450 gr.',
            'f.to calendario cm 16 x 14',
            'f.to piedino cm 16 x 3,5',
            'imballo pz. 100'],
        'prezzo': 'da € 0,80 cad. +iva'
    },
  


    ]



})