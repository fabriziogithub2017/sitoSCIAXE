var app = angular.module("myapp", []).controller("portachiaviController", function ($scope) {

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
        'titolo': 'Portachiavi in alluminio', 'imgSrc': '../../jmg/jmgPortachiavi/portachiavi-incisi-a-laser.jpg', 'imgAlt': 'Portachiavi incisi a laser',
        'caratteristiche': [
            'Portachiavi in alluminio e poliestere',
            'incisione personalizzata a laser ',
            'Dimensioni:2,6 x 9 x 0,5 cm.',
            'Peso: solo 16 gr'],
        'prezzo': 'da € 1,90 cad. +iva'
            },
        {
            'titolo': 'Portachiavi in metallo', 'imgSrc': '../../jmg/jmgPortachiavi/portachiavi-con-stampa-resinate.jpg', 'imgAlt': 'Portachiavi incisi a laser',
            'caratteristiche': [
                'Portachiavi in alluminio e poliestere',
                'personalizzato a colori resinata ',
                'Dimensioni:2,6 x 9 x 0,5 cm.',
                'Peso: solo 16 gr'],
            'prezzo': 'da € 1,90 cad. +iva'
        },
        
    ]

})