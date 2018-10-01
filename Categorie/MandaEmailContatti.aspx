<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MandaEmailContatti.aspx.cs" Inherits="MandaEmailContatti" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Manda email per contatto - Sciax'è</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Manda email per contarci" />
    <meta name="author" content="Fabrizio Sciascia. Sciax'è snc.Torino" />
    <meta name="copyright" content="Sciax'è" />
    <meta http-equiv="content-language" content="IT" />
    <meta name="creation_Date" content="02/09/2013" />
    <meta name="revisit-after" content="7 days" />

    <!-- Bootstrap CSS -->
    <link href="../css/bootstrap.css" rel="stylesheet" />

    <!-- CSS personalizzato-->
    <link href="../css/style.css" rel="stylesheet" />

    <link href="../css/boxMandaEmailContatti.css" rel="stylesheet" />

</head>
<body>
    <header>
        <!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div class="logo">
                        <img src="../jmg/marchio-sciaxe.png" alt="sciax'è snc" />
                        <h1 class="navbar-text ">grafica sciax'è</h1>
                        <div class="phone-number"></div>
                    </div>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="../index.html">Index</a></li>
                        <!--<li><a href="http://www.calendaritorino.it/">shopping</a></li>-->
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Prodotti <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="../Categorie/Abbigliamento-aziendale-da-lavoro.html">Abbigliamento</a></li>
                                <li><a href="../Categorie/Agende-2019-personalizzate.html">Agende</a></li>
                                <li><a href="../Categorie/Borse-Zaini-personalizzati.html">Borse e zaini</a></li>
                                <li><a href="../Categorie/Calendari-2019-personalizzati.html">Calendari</a></li>
                                <li><a href="../Categorie/Penne-personalizzate.html">Penne</a></li>
                                <li><a href="../Categorie/Gadget-personalizzati.html">Gadget</a></li>
                                <li><a href="../Categorie/Shopper-personalizzati.html">Shopper</a></li>
                                <li><a href="../Categorie/Block-Notes-personalizzati-a-più-colori.html">Block notes</a></li>
                                <li><a href="../Categorie/Timbri-datari.html">Timbri</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
    </header>

    <div class="container1">
        <div class="row">
            <form runat="server">
                <label>Nome*:</label><br />
                <asp:TextBox ID="TextNome" runat="server" placeholder="scrivi il nome"></asp:TextBox><br />
                <label>Email*:</label><br />
                <asp:TextBox ID="TextMail" runat="server" placeholder="example@example.it"></asp:TextBox><br />
                <label>Oggetto*:</label><br />
                <asp:TextBox ID="TextOggetto" runat="server"></asp:TextBox><br />
                <label>Testo*:</label><br />
                <asp:TextBox ID="TextTestoarea" runat="server" TextMode="MultiLine"></asp:TextBox><br />
                <p>
                    Acconsento al <a href="../Informativa-Policy.html">trattamento dei miei dati personali</a>*
                    <asp:CheckBox ID="CheckBox1" runat="server" name="privacy" />
                </p>
                <br />
                <br />
                <asp:Button ID="BottoneInvia" runat="server" Text="InviaEmail" OnClick="BottoneInvia_Click" />
                <asp:Label ID="lblError" runat="server" Text="Attenzione! Potresti non aver compilato tutti i campi o aver commesso errori nell'inserimento della @mail" Visible="false"></asp:Label>
            </form>
        </div>
    </div>
    <div class="container">
        <!-- Footer -->
        <footer>
            <section id="footer-social">
                <div class="container-footer">
                    <ul class="pull-right list-inline">
                        <li><a href="https://www.facebook.com/Sciax%C3%A8-SNC-1008774542500607/" target="_blank"></a></li>
                        <!--<li><div class="icon-social youtube">youtube</div></li>-->
                        <!--<li><div class="icon-social tweter">tweter</div></li>-->
                    </ul>
                </div>

            </section>
            <section class="container-footer section-footer">
                <div class="row">
                    <div class="col col-md-3 col-sm-12 ">
                        <img src="../jmg/marchio-sciaxe.png" alt="sciax'è snc" />
                        <p>Ci trovate in:</p>
                        <p>Strada del Portone 10 - Grugliasco (TO) Tel.  011. 397 53 98</p>
                        <!--<a href="http://www.calendaritorino.it/" target="_blank"><p>shopping online</p></a>
                        <p>pagamenti accettati</p>
                        <img src="../jmg/paypal.png" alt="sciax'è"/>-->
                    </div>
                    <div class="col col-md-3 col-sm-4 col-xs-6">
                        <h3>Prodotti</h3>
                        <ul class="list-group">
                            <li><a href="../Categorie/Abbigliamento-aziendale-da-lavoro.html">Abbigliamento</a></li>
                            <li><a href="../Categorie/Agende-2019-personalizzate.html">Agende</a></li>
                            <li><a href="../Categorie/Borse-Zaini-personalizzati.html">Borse e zaini</a></li>
                            <li><a href="../Categorie/Calendari-2019-personalizzati.html">Calendari</a></li>
                            <li><a href="../Categorie/Penne-personalizzate.html">Penne</a></li>
                            <li><a href="../Categorie/Gadget-personalizzati.html">Gadget</a></li>
                            <li><a href="../Categorie/Shopper-personalizzati.html">Shopper</a></li>
                            <li><a href="../Categorie/Block-Notes-personalizzati-a-più-colori.html">Block notes</a></li>
                            <li><a href="../Categorie/Timbri-datari.html">Timbri</a></li>
                        </ul>
                        <div class="provaFooter">
                            <p>Copyright © 2010 - 2018</p>
                        </div>
                        <div class="provaFooter">
                            <p>Sciax'è snc - P.iva 06334480016</p>
                        </div>
                    </div>

                    <div class="col col-md-3 col-sm-4 col-xs-6">
                        <h3>Sito</h3>
                        <ul class="list-group">
                            <li><a href="../chi-siamo-sciaxe.html">Chi siamo</a></li>
                            <li><a href="../dove-siamo-sciaxe.html">Dove siamo</a></li>
                            <li><a href="../contatti-sciaxe.html">Contatti</a></li>
                            <li><a href="../Faq-Domande-frequenti.html">Faq - Domande frequenti</a></li>
                        </ul>
                    </div>
                    <div class="col col-md-3 col-sm-4 col-xs-12">
                        <div class="fb-page fb_iframe_widget" data-href="https://www.facebook.com/Sciax%C3%A8-SNC-1008774542500607/?fref=ts" data-tabs="timeline" data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=288&amp;height=300&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FSciax%25C3%25A8-SNC-1008774542500607%2F%3Ffref%3Dts&amp;locale=it_IT&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline"><span style="vertical-align: bottom; width: 288px; height: 300px;">
                            <iframe name="f2a0cadc32ed1d" width="1000px" height="300px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:page Facebook Social Plugin" src="https://www.facebook.com/v2.8/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=http%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FlY4eZXm_YWu.js%3Fversion%3D42%23cb%3Df3003e6a028eab%26domain%3Dwww.calendaritorino.it%26origin%3Dhttp%253A%252F%252Fwww.calendaritorino.it%252Ff21365f0fdade8%26relation%3Dparent.parent&amp;container_width=288&amp;height=300&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FSciax%25C3%25A8-SNC-1008774542500607%2F%3Ffref%3Dts&amp;locale=it_IT&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline" style="border: none; visibility: visible; width: 288px; height: 300px;" class=""></iframe>
                        </span></div>
                    </div>
                </div>
            </section>
        </footer>
    </div>

    <!-- jQuery -->
    <script src="../js/jquery.js"></script>

    <script src="../js/bootstrap.min.js"></script>
</body>
</html>


