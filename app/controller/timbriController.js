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
            'Autoinchiostrato da 6 righe € 18 +iva',]
    },

    {
        'imgSrc': '../../jmg/jmgTimbri/prova buttare timbri.jpg', 'imgAlt': 'Timbri manuali',
        'titolo': 'Timbri manuali',
        'caratteristiche': [
            'Timbro manuale da 2 righe € 4 +iva',
            'Timbro manuale da 3 righe € 5 +iva',
            'Timbro manuale da 4 righe € 6 +iva',
            'Timbro manuale da 5 righe € 10 +iva',
            'Timbro manuale da 6 righe € 12 +iva',]
    },

    {
        'imgSrc': '../../jmg/jmgTimbri/timbri-manuali.jpg', 'imgAlt': 'Timbri manuali',
        'titolo': 'Timbri manuali',
        'caratteristiche': [
            'Timbro manuale da 2 righe € 4 +iva',
            'Timbro manuale da 3 righe € 5 +iva',
            'Timbro manuale da 4 righe € 6 +iva',
            'Timbro manuale da 5 righe € 10 +iva',
            'Timbro manuale da 6 righe € 12 +iva',]
    },

    {
        'imgSrc': '../../jmg/jmgTimbri/datari-manuali.jpg', 'imgAlt': 'datari e numeratori manuali',
        'titolo': 'Datari e numeratori manuali',
        'caratteristiche': [
            'Datari manuali',
            'Numeratori manuali',]
    },

    {
        'imgSrc': '../../jmg/jmgTimbri/datari-con-piastra.jpg', 'imgAlt': 'datari e numeratori con piastra',
        'titolo': 'Datari e numeratori con piastra',
        'caratteristiche': [
            'Datari manuali',
            'Numeratori manuali',
            'Numeratori semi automatici',]
    },

    {
        'imgSrc': '../../jmg/jmgTimbri/penna-timbro.jpg', 'imgAlt': 'penna timbro',
        'titolo': 'Penna timbro',
        'caratteristiche': [
            '2 in 1: penna con timbro',
            'Pratico',
            'Tascabile',]
    },

    {
        'imgSrc': '../../jmg/jmgTimbri/inchiostri-per-timbri.jpg', 'imgAlt': 'inchiostri per timbri e tamponi',
        'titolo': 'Inchiostri e tamponi per timbri',
        'caratteristiche': [
            'Inchiostri di diversi colori',
            'Tamponi per timbri colop e trodat',
            'Tamponi per timbri manuali',]
    },

    {
        'imgSrc': '../../jmg/jmgTimbri/timbri-per-cera-lacca.jpg', 'imgAlt': 'datari e numeratori con piastra.jpgtimbri-per-cera-lacca',
        'titolo': 'Timbri in metallo per cera lacca',
        'caratteristiche': [
            'Incisione del tuo logo',
            'Consigliato per sigillare una busta',
            'Per personalizzare un invito',]
    },

    {
        'imgSrc': '../../jmg/jmgTimbri/timbro-fai-da-te.jpg', 'imgAlt': 'Timbri fai da te',
        'titolo': 'Timbri manuali',
        'caratteristiche': [
            'Facile da comporre e da scomporre',
            'Lo si può comporre senza limiti',
            'Di varie misure',
            'Autoinchiostrato',]
    },


    ]

})