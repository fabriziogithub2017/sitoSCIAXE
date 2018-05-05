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
        'titolo': 'Penne biro', 'imgSrc': '../../jmg/jmgTimbri/datari-manuali.jpg', 'imgAlt': 'Datari manuali',
        'caratteristiche': [
            'Portachiavi in alluminio',
            'incisione personalizzata a laser ',
            'Dimensioni:2,6 x 9 x 0,5 cm.',
            'Peso: solo 16 gr',]
    },
    {
        'titolo': 'Penne con puntale touch', 'imgSrc': '../../jmg/jmgTimbri/datario-con-piastra.jpg', 'imgAlt': 'Datari manuali con piastra',
        'caratteristiche': [
            'Portachiavi in alluminio',
            'Personalizzato a colori ',
            'Resinatura sul logo ',
            'Dimensioni:2,6 x 9 x 0,5 cm.',
            'Peso: solo 20 gr',]
    },
    {
        'titolo': 'Penne con puntale touch', 'imgSrc': '../../jmg/jmgTimbri/penna-timbro.jpg', 'imgAlt': 'Penna timbro',
        'caratteristiche': [
            'Portachiavi in alluminio',
            'Personalizzato a colori ',
            'Resinatura sul logo ',
            'Dimensioni:2,6 x 9 x 0,5 cm.',
            'Peso: solo 20 gr',]
    },
    {
        'titolo': 'Penne con puntale touch', 'imgSrc': '../../jmg/jmgTimbri/tmbro-autoinchiostratoi.jpg', 'imgAlt': 'Timbro autoinchiostrato',
        'caratteristiche': [
            'Portachiavi in alluminio',
            'Personalizzato a colori ',
            'Resinatura sul logo ',
            'Dimensioni:2,6 x 9 x 0,5 cm.',
            'Peso: solo 20 gr',]
    }

    ]

})