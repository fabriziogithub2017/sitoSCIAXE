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
        'titolo': 'Penne biro', 'imgSrc': '../../jmg/jmgPenne/penne-personalizzate.jpg', 'imgAlt': 'Portachiavi incisi a laser',
        'caratteristiche': [
            'Portachiavi in alluminio',
            'incisione personalizzata a laser ',
            'Dimensioni:2,6 x 9 x 0,5 cm.',
            'Peso: solo 16 gr',]
    },
        {
            'titolo': 'Penne con puntale touch', 'imgSrc': '../../jmg/jmgPenne/penne-touch-personalizzate.jpg', 'imgAlt': 'Portachiavi incisi a laser',
            'caratteristiche': [
                'Portachiavi in alluminio',
                'Personalizzato a colori ',
                'Resinatura sul logo ',
                'Dimensioni:2,6 x 9 x 0,5 cm.',
                'Peso: solo 20 gr',]
        }
        

    ]



})