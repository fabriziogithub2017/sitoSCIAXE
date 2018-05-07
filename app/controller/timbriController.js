var app = angular.module("myapp", []).controller("timbriController", function ($scope) {

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
        'imgSrc': '../../jmg/jmgTimbri/timbri-autoinchiostrati.jpg', 'imgAlt': 'Timbri autoinchiostrati',
        'titolo': 'Timbri autoinchiostrati',
        'caratteristiche': [
            'Autoinchiostrato da 2 righe € 10 +iva',
            'Autoinchiostrato da 3 righe € 12 +iva',
            'Autoinchiostrato da 4 righe € 13 +iva',
            'Autoinchiostrato da 5 righe € 15 +iva',
            'Autoinchiostrato da 6 righe € 18 +iva',
        ]
    },

    {
        'imgSrc': '../../jmg/jmgTimbri/timbri-manuali.jpg', 'imgAlt': 'Timbri manuali',
        'titolo': 'Timbri manuali',
        'caratteristiche': [
            'Timbro manuale da 2 righe € 4 +iva',
            'Timbro manuale da 3 righe € 5 +iva',
            'Timbro manuale da 4 righe € 6 +iva',
            'Timbro manuale da 5 righe € 10 +iva',
            'Timbro manuale da 6 righe € 12 +iva',
        ]
    },

        {
            'imgSrc': '../../jmg/jmgTimbri/timbro-fai-da-te.jpg', 'imgAlt': 'Timbri fai da te',
            'titolo': 'Timbri manuali',
            'caratteristiche': [
                'Facile da comporre e da scomporre',
                'Lo si può comporre senza limiti',
                'Di varie misure',
                'Autoinchiostrato',
        ]
    },


    ]

})