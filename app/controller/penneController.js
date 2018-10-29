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
    {
        'titolo': 'Penne per touch personalizzate', 'imgSrc': '../../jmg/jmgPenne/penne-con-puntale-touch.jpg', 'imgAlt': 'Penne a sfera con puntale touch personalizzate a 1 colore',
        'caratteristiche': [
            'gommino per touch screen',
            'penna a sfera',
            'meccanismo a rotazione',
            'materiale: plastica metallizzata',
            'Dimensioni:Ø cm 1 x h14 cm.',
            'inchiostro nero'],
        'prezzo': 'a € 0,70 cad. +iva'       
    }


    ]

})