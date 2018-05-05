var app = angular.module("myapp", []).controller("shopperController", function ($scope) {

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
        'titolo': 'Penne biro', 'imgSrc': '../../jmg/jmgShopper/shopper-tnt.jpg', 'imgAlt': 'Shoppers in tnt',
        'caratteristiche': [
            'Portachiavi in alluminio',
            'incisione personalizzata a laser ',
            'Dimensioni:2,6 x 9 x 0,5 cm.',
            'Peso: solo 16 gr',]
    },
    {
        'titolo': 'Penne con puntale touch', 'imgSrc': '../../jmg/jmgShopper/shopper-in-cotone.jpg', 'imgAlt': 'Shoppers in cotone',
        'caratteristiche': [
            'Portachiavi in alluminio',
            'Personalizzato a colori ',
            'Resinatura sul logo ',
            'Dimensioni:2,6 x 9 x 0,5 cm.',
            'Peso: solo 20 gr',]
    },
    {
        'titolo': 'Penne con puntale touch', 'imgSrc': '../../jmg/jmgShopper/shopper-ripiegabili.jpg', 'imgAlt': 'Shoppers richiudibili in tnt',
        'caratteristiche': [
            'Portachiavi in alluminio',
            'Personalizzato a colori ',
            'Resinatura sul logo ',
            'Dimensioni:2,6 x 9 x 0,5 cm.',
            'Peso: solo 20 gr',]
    },
    {
        'titolo': 'Penne con puntale touch', 'imgSrc': '../../jmg/jmgShopper/shopper-richiudibile-fragola.jpg', 'imgAlt': 'Shoppers richiudibili a forma di fragola',
        'caratteristiche': [
            'Portachiavi in alluminio',
            'Personalizzato a colori ',
            'Resinatura sul logo ',
            'Dimensioni:2,6 x 9 x 0,5 cm.',
            'Peso: solo 20 gr',]
    }

    ]

})