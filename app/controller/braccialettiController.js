var app = angular.module("myapp", []).controller("braccialettiController", function ($scope) {

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
        'titolo': 'Braccialetti in silicone stampati', 'imgSrc': '../../jmg/jmgBraccialetti/braccialetti-in-silicone.jpg', 'imgAlt': 'Braccialetti in silicone personalizzati a 1 colore',
        'caratteristiche': [
            'Braccialetti in silicone',
            'Colori disponibili: Bianco, Nero, Rosso, Celeste, Verde, Blu, Giallo, Arancione, Rosa, Verde Mela, Fuxia',
            'stampati a 1 colore ',
            'Colori di stampa: Bianco, Giallo, Arancio, Rosso, Verde, Blu, Nero',
            'Misura A: bambini 18 cm.',
            'Misura B: adulti 20 cm.',
            'Misura C: adulti XL 21 cm.'],
        'prezzo': 'da € 0,66 cad. +iva'
    },
    {
        'titolo': 'Braccialetti in silicone incisi', 'imgSrc': '../../jmg/jmgBraccialetti/braccialetti-in-silicone-incisi.jpg', 'imgAlt': 'Braccialetti in silicone incisi dello stesso colore del braccialetto',
        'caratteristiche': [
            'Braccialetti in silicone',
            'Colori disponibili: Bianco, Nero, Rosso, Celeste, Verde, Blu, Giallo, Arancione, Rosa, Verde Mela, Fuxia',
            'Personalizzato incisi colore su colore ',
            'Misura A: bambini 18 cm.',
            'Misura B: adulti 20 cm.',
            'Misura C: adulti XL 21 cm.'],
        'prezzo': 'da € 0,75 cad. +iva'
    },

    {
        'titolo': 'Braccialetti in silicone in rilievo', 'imgSrc': '../../jmg/jmgBraccialetti/braccialetti-in-silicone-in-rilievo.jpg', 'imgAlt': 'Braccialetti in silicone in rilievo dello stesso colore del braccialetto',
        'caratteristiche': [
            'Braccialetti in silicone',
            'Colori disponibili: Bianco, Nero, Rosso, Celeste, Verde, Blu, Giallo, Arancione, Rosa, Verde Mela, Fuxia',
            'Personalizzato in rilievo colore su colore',
            'Misura A: bambini 18 cm.',
            'Misura B: adulti 20 cm.',
            'Misura C: adulti XL 21 cm.'],
        'prezzo': 'da € 0,78 cad. +iva'
    }


    ]



})