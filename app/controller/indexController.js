var app = angular.module("myapp", []).controller("indexController", function ($scope) {

    var vm = this;

    init();

    function init() {
        console.log("Initialized");
    }

    vm.HomePage = [
        {
            'ahref': '../Categorie/Timbri-datari.html',
            'imgSrc': '../../jmg/immaginiVetrina/Autoinchiostrato.jpg', 'imgAlt': 'buttare',
            'prezzoVetrina': 'da € 13,00',
            'titolo': 'Timbro autoinchiostrato Trodat 4913',
            'descrizione': 'Timbro autoinchiostrato Trodat 4913, composto da 4/5 righe con tampone nero. A richiesta tampone blu, rosso, verde.'
        },

        {
            'ahref': '../Categorie/Shopper-personalizzati.html',
            'imgSrc': '../../jmg/immaginiVetrina/shopper cotone.jpg', 'imgAlt': 'shopper in cotone personalizzati',
            'prezzoVetrina': 'da € 0,90',
            'titolo': 'Shoppers in cotone',
            'descrizione': 'Shopper in cotone naturale con manici colorati.F.to 40 x 30 cm. Personalizzati a 1 colore'
        },

        {
            'ahref': '../Categorie/Calendari-2019-personalizzati.html',
            'imgSrc': '../../jmg/immaginiVetrina/calendario olandese a colori.jpg', 'imgAlt': 'gilet classe 2',
            'prezzoVetrina': 'da € 0,70',
            'titolo': 'Calendario tipo olandese a colori',
            'descrizione': 'Descrizione: Calendario mensile tipo olandese a colori, 12 pagine, F.to cm 29 x 47 cm., Area di stampa: 28 x 8 cm'
        },

        {
            'ahref': '../Categorie/Abbigliamento-aziendale-da-lavoro.html',
            'imgSrc': '../../jmg/immaginiVetrina/gilet classe2.jpg', 'imgAlt': 'gilet classe 2',
            'prezzoVetrina': 'da € 4,50',
            'titolo': 'Gilet alta visibilità classe 2',
            'descrizione': 'Tessuto poliestere colore arancio e giallo, taglie uniche, bande riflettenti 3M Scotchlite.Personalizzabili davanti e dietro'
        },

        {
            'ahref': '../Categorie/Borse-Zaini-personalizzati.html',
            'imgSrc': '../../jmg/immaginiVetrina/sacche economiche.jpg', 'imgAlt': 'sacche personalizzate',
            'prezzoVetrina': 'da € 0,85',
            'titolo': 'Sacca in nylon',
            'descrizione': 'Dimensione cm 33x45 ca, doppia corda di chiusura, stampa a 1 colore su un lato'
        },

        {
            'ahref': '../Categorie/Agende-2019-personalizzate.html',
            'imgSrc': '../../jmg/immaginiVetrina/AGENDA 2019 15 x 21 giornaliera.jpg', 'imgAlt': 'agenda giornaliera f.to 15 x 21',
            'prezzoVetrina': 'da € 2,90',
            'titolo': 'Agende giornaliera 2019',
            'descrizione': 'Agenda giornaliera personalizzata a 1 colore copertina gommata, Sabato e Domenica separati, inserto cartografico'
        },

        {
            'ahref': '../Categorie/Calendari-2019-personalizzati.html',
            'imgSrc': '../../jmg/immaginiVetrina/calendario da tavolo 2019.jpg', 'imgAlt': 'calendario da tavolo 2019',
            'prezzoVetrina': 'da € 0,80',
            'titolo': 'Calendario da tavolo personalizato',
            'descrizione': 'Descrizione: Calendario da tavolo, 13 pagine, F.to cm 16 x 14,5 cm., Area di stampa: 15 x 2,5 cm. fronte e retro'
        },

        {
            'ahref': '../Categorie/Penne-personalizzate.html',
            'imgSrc': '../../jmg/immaginiVetrina/Penne-personalizzate-a-1-colore.jpg', 'imgAlt': 'penna a biro personalizzata a 1 colore',
            'prezzoVetrina': 'da € 0,30',
            'titolo': 'Penna a biro personalizzata',
            'descrizione': 'Descrizione: Penna biro con stampa a 1 colore - Refil nero'
        },

        {
            'ahref': '../Categorie/Abbigliamento-aziendale-da-lavoro.html',
            'imgSrc': '../../jmg/immaginiVetrina/giubbotto-da-lavoro.jpg', 'imgAlt': 'giubbotto da lavoro con maniche staccabili',
            'prezzoVetrina': 'da € 25',
            'titolo': 'Giubbotto con maniche staccabili',
            'descrizione': 'Tessuto cotone/poliestere colore blu, taglie S-M-L-XL-XXL-3XL-4XL, bande riflettenti. Multi tasche. Personalizzabili davanti e dietro'
        },

        {
            'ahref': '../Categorie/Borse-Zaini-personalizzati.html',
            'imgSrc': '../../jmg/immaginiVetrina/zainetti.jpg', 'imgAlt': 'zainetti colorati personalizzati',
            'prezzoVetrina': 'da € 5,90',
            'titolo': 'Zainetti personalizzati',
            'descrizione': 'Colori blu, rosso, viola, nero, azzurro, royal, grigio, f.to 26,5 x h 38 x 12 cm.. Personalizzabili davanti a 1 colore'
        },

        {
            'ahref': '../Categorie/Gadget-personalizzati.html',
            'imgSrc': '../../jmg/immaginiVetrina/portachiavi.jpg', 'imgAlt': 'porta chiavi personalizzati',
            'prezzoVetrina': 'da € 1,90',
            'titolo': 'Portachiavi in alluminio',
            'descrizione': 'Portachiavi in alluminio, incisione a laser o stampa a colori del tuo logo, dimensioni: 2, 6 x 9 cm. Peso: solo 16 gr. con scatola singola'
        },


        {
            'ahref': '../Categorie/Gadget-personalizzati.html',
            'imgSrc': '../../jmg/immaginiVetrina/bracciali-in-silicone.jpg', 'imgAlt': 'braccialetti in silicone personalizzati',
            'prezzoVetrina': 'da € 0,66',
            'titolo': 'Braccialetti in silicone',
            'descrizione': 'Braccialetti in silicone a più colori, stampa a 1 colore inclusa'
        },

        {
            'ahref': '../Categorie/Lanyard-personalizzati.html',
            'imgSrc': '../../jmg/immaginiVetrina/lanyards-personalizzati.jpg', 'imgAlt': 'Lanyards personalizzati con logo fronte e retro',
            'prezzoVetrina': 'da € 0,60',
            'titolo': 'Lanyards personalizzati',
            'descrizione': 'Lanyards personalizzato con il tuo logo aziendale stampato sia all interno che all esterno - Altezza 2 cm.'
        },

        {
            'ahref': '../Categorie/Timbri-datari.html',
            'imgSrc': '../../jmg/immaginiVetrina/timbro-penna.jpg', 'imgAlt': 'timbro a penna',
            'prezzoVetrina': 'da € 20',
            'titolo': 'Timbro penna',
            'descrizione': 'Pratico timbro penna per ogni evenienza'
        },

        {
            'ahref': '../Categorie/Block-Notes-personalizzati-a-più-colori.html',
            'imgSrc': '../../jmg/immaginiVetrina/block notes.jpg', 'imgAlt': 'block notes personalizzati',
            'prezzoVetrina': 'da € 0,98',
            'titolo': 'Block notes personalizzati',
            'descrizione': 'Block notes personalizzato con il tuo logo aziendale a righe o a quadretti. Formati A4, A5, A6'
        },

        {
            'ahref': '../Categorie/Timbri-datari.html',
            'imgSrc': '../../jmg/immaginiVetrina/Timbri e datari.jpg', 'imgAlt': 'timbri e datari',
            'prezzoVetrina': 'da € 10',
            'titolo': 'Timbri autoinchiostrati e datari',
            'descrizione': 'Timbri autoinchiostrati. Datari automatici e manuali. Tamponi a più colori.'
        },

    ]
    
})