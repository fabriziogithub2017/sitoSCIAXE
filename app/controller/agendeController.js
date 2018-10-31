var app = angular.module("myapp", []).controller("agendeController", function ($scope) {

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
        'titolo': 'Agendina giornaliera', 'imgSrc': '../../jmg/jmgAgende/agendina-giornaliera.jpg', 'imgAlt': 'Agendina giornaliera 2019 personalizzata sulla copertina',
        'caratteristiche': [
            'F.to agenda cm 9 x 15',
            'carta avorio a righe ',
            '352 pagine',
            'sab.e dom.abbinati',
            'edizione multilingue',
            'inserti informativi',
            '16 pag.removibili perforate',
            'quadranti con angoli tondi ',
            'laccetto segnapagine ',
            '5 colori disponibili',
            'tasca posteriore interna',
            'chiusura con elastico'],
        'prezzo': 'da € 3,50 cad. +iva'
    },

        {
            'titolo': 'Agenda 2019 giornaliera', 'imgSrc': '../../jmg/jmgAgende/agenda-2019-giornaliera-21x15.jpg', 'imgAlt': 'Agenda giornaliera 2019 personalizzata sulla copertina',
            'caratteristiche': [
                'F.to agenda cm 15x21',
                'carta bianca ',
                'a righe',
                'edizione multilingue: IT – GB – FR – DE – ES – PT',
                'inserti informativi e rubrica telefonica',
                'inserto cartina geografica',
                'angolo segnapagine perforato ',
                'laccetto segnapagine ',
                '8 colori disponibili',
                'materiale poliuretano termovirante'],
            'prezzo': 'da € 2,90 cad. +iva'
        },
        {
            'titolo': 'Notes a righe', 'imgSrc': '../../jmg/jmgAgende/notes-a-righe-con-elastico.jpg', 'imgAlt': 'Notes a righe personalizzato sulla copertina',
            'caratteristiche': [
                'F.to agenda cm 9 x 14',
                'carta bianca a righe ',
                '160 pagine',
                'quadranti con angoli tondi ',
                'laccetto segnapagine ',
                '5 colori disponibili',
                'chiusura con elastico'],
            'prezzo': 'da € 1,50 cad. +iva'
            
        }

    ]

})