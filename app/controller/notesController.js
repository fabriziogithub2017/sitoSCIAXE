var app = angular.module("myapp", []).controller("notesController", function ($scope) {

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
        'titolo': 'Block notes', 'imgSrc': '../../jmg/jmgNotes/notes-personalizzati.jpg', 'imgAlt': 'Block notes personalizzati',
        'caratteristiche': [
            'Carta uso mano 80 gr.',
            '50 fogli',
            'Incollati in testa',
            'cartoncino sottoblocco',]
    },



    ]



})