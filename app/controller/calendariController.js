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
        'titolo': 'Calendario olandese', 'imgSrc': '../../jmg/jmgCalendari/calendari-olandese.jpg', 'imgAlt': 'calendario olandase',
        'caratteristiche': [
            'mensile 12 fogli',
            'carta patinata 70 gr.',
            'testata termosaldata',
            'f.to calendario cm 29x47 ca',
            'f.to testata cm 29x9 ca',
            'imballo pz. 100'
        ]
    },
    {
        'titolo': 'Calendario olandese', 'imgSrc': '../../jmg/jmgCalendari/calendari-olandese.jpg', 'imgAlt': 'calendario olandase',
        'caratteristiche': [
            'mensile 12 fogli',
            'carta patinata 70 gr.',
            'testata termosaldata',
            'f.to calendario cm 29x47 ca',
            'f.to testata cm 29x9 ca',
            'imballo pz. 100'
        ]
    },
    {
        'titolo': 'Calendario olandese', 'imgSrc': '../../jmg/jmgCalendari/calendari-olandese.jpg', 'imgAlt': 'calendario olandase',
        'caratteristiche': [
            'mensile 12 fogli',
            'carta patinata 70 gr.',
            'testata termosaldata',
            'f.to calendario cm 29x47 ca',
            'f.to testata cm 29x9 ca',
            'imballo pz. 100'
        ]
    },
    {
        'titolo': 'Calendario olandese', 'imgSrc': '../../jmg/jmgCalendari/calendari-olandese.jpg', 'imgAlt': 'calendario olandase',
        'caratteristiche': [
            'mensile 12 fogli',
            'carta patinata 70 gr.',
            'testata termosaldata',
            'f.to calendario cm 29x47 ca',
            'f.to testata cm 29x9 ca',
            'imballo pz. 100'
        ]
    },




    ]



})