var app = angular.module("myapp", []).controller("indexController", function ($scope) {

    var vm = this;

    init();

    function init() {
        console.log("Initialized");
    }

    vm.HomePage = [{
        'ahref': '../Categorie/Timbri-datari.html',
        'imgSrc': '../../jmg/immaginiVetrina/Timbri e datari.jpg', 'imgAlt': 'timbri e datari',
        'prezzoVetrina': 'da € 10',
        'titolo': 'Timbri autoinchiostrati e datari',
        'descrizione': 'Timbri autoinchiostrati. Datari automatici e manuali. Tamponi a più colori.'
    },

    {
        'ahref': '../Categorie/Shopper-personalizzati.html',
        'imgSrc': '../../jmg/immaginiVetrina/shopper cotone.jpg', 'imgAlt': 'shopper in cotone personalizzati',
        'prezzoVetrina': 'da € 1,25',
        'titolo': 'Shoppers in cotone',
        'descrizione': 'Shopper in cotone naturale con manici colorati.F.to 40 x 30 cm. Personalizzati a 1 colore'
    },

    {
        'ahref': '../Categorie/Block-Notes-personalizzati-a-più-colori.html',
        'imgSrc': '../../jmg/immaginiVetrina/block notes.jpg', 'imgAlt': 'block notes personalizzati',
        'prezzoVetrina': 'da € 0,98',
        'titolo': 'Block notes personalizzati',
        'descrizione': 'Block notes personalizzato con il tuo logo aziendale a righe o a quadretti. Formati A4, A5, A6'
    },

    {
        'ahref': '../Categorie/Abbigliamento-aziendale-da-lavoro.html',
        'imgSrc': '../../jmg/immaginiVetrina/gilet classe2.jpg', 'imgAlt': 'gilet classe 2',
        'prezzoVetrina': 'da € 4,50',
        'titolo': 'Gilet classe 2',
        'descrizione': 'Tessuto poliestere colore arancio e giallo, taglie uniche, bande riflettenti 3M Scotchlite.Personalizzabili davanti e dietro'
    },

    {
        'ahref': '../Categorie/Abbigliamento-aziendale-da-lavoro.html',
        'imgSrc': '../../jmg/immaginiVetrina/giubbotto da lavoro.jpg', 'imgAlt': 'giubbotto da lavoro con maniche staccabili',
        'prezzoVetrina': 'da € 25',
        'titolo': 'Giubbotto con maniche staccabili',
        'descrizione': 'Tessuto cotone/poliestere colore blu, taglie S-M-L-XL-XXL-3XL-4XL, bande riflettenti. Multi tasche. Personalizzabili davanti e dietro'
    },

    {
        'ahref': '../Categorie/Abbigliamento-aziendale-da-lavoro.html',
        'imgSrc': '../../jmg/immaginiVetrina/softshell.jpg', 'imgAlt': 'giubbotto softshell',
        'prezzoVetrina': 'da € 35',
        'titolo': 'Giubbotto in softshell',
        'descrizione': 'Colori blu,rosso,grigio,nero, bianco, taglie S - M - L - XL - XXL, interno in pile, cappuccio, multi tasche. Personalizzabili davanti e dietro'
    },

    {
        'ahref': '../Categorie/Abbigliamento-aziendale-da-lavoro.html',
        'imgSrc': '../../jmg/immaginiVetrina/pantaloni da lavoro.jpg', 'imgAlt': 'pantaloni da lavoro',
        'prezzoVetrina': 'da € 28',
        'titolo': 'Pantaloni da lavoro',
        'descrizione': 'Tessuto cotone/poliestere colore grigio/nero, taglie S - M - L - XL - XXL - 3XL, multi tasche. Personalizzabili su tascone laterale'
    },

    {
        'ahref': '../Categorie/Gadget-personalizzati.html',
        'imgSrc': '../../jmg/immaginiVetrina/portachiavi.jpg', 'imgAlt': 'porta chiavi personalizzati',
        'prezzoVetrina': 'da € 1,80',
        'titolo': 'Portachiavi in alluminio',
        'descrizione': 'Portachiavi in alluminio, incisione a laser personalizzata del tuo logo, dimensioni: 2, 6 x 9 cm. Peso: solo 16 gr'
    },

    {
        'ahref': '../Categorie/Penne-personalizzate.html',
        'imgSrc': '../../jmg/immaginiVetrina/penne biro.jpg', 'imgAlt': 'penne personalizzate',
        'prezzoVetrina': 'da € 0,30',
        'titolo': 'Penna biro',
        'descrizione': 'Penna biro con refil nero, personalizzazione a 1 colore sul fusto.'
    },

    {
        'ahref': '../Categorie/Borse-Zaini-personalizzati.html',
        'imgSrc': '../../jmg/immaginiVetrina/sacche economiche.jpg', 'imgAlt': 'sacche personalizzate',
        'prezzoVetrina': 'da € 0,95',
        'titolo': 'Sacca in nylon',
        'descrizione': 'Dimensione cm 33x45 ca, doppia corda di chiusura, stampa a 1 colore su un lato'
    },

    {
        'ahref': '../Categorie/Timbri-datari.html',
        'imgSrc': '../../jmg/immaginiVetrina/timbro-penna.jpg', 'imgAlt': 'timbro a penna',
        'prezzoVetrina': 'da € 20',
        'titolo': 'Timbro penna',
        'descrizione': 'Pratico timbro penna per ogni evenienza'
    },

    {
        'ahref': '../Categorie/Gadget-personalizzati.html',
        'imgSrc': '../../jmg/immaginiVetrina/bracciali in silicone.jpg', 'imgAlt': 'braccialetti in silicone personalizzati',
        'prezzoVetrina': 'da € 0,65',
        'titolo': 'Braccialetti in silicone',
        'descrizione': 'Braccialetti in silicone a più colori, stampa a 1 colore inclusa'
    },





    ]



})