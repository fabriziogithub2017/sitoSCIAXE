<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MandaEmail.aspx.cs" Inherits="MandaEmail" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Informazioni prodotti</title>
    <link href="../css/boxMandaEmail.css" rel="stylesheet" />
</head>
<body>

    <div class="container">
        <div class="row">
            <form runat="server">
                <label>Nome*:</label><br />
                <asp:TextBox ID="TextNome" runat="server" placeholder="scrivi il nome"></asp:TextBox><br />
                <label>Email*:</label><br />
                <asp:TextBox ID="TextMail" runat="server" placeholder="example@example.it"></asp:TextBox><br />
                <label>Oggetto*:</label><br />

                <!--<input id="TextOggetto2" type='text' runat='server' />-->


               <asp:TextBox ID="TextOggetto" runat="server"></asp:TextBox><br />
                
                <label>Testo*:</label><br />
                <asp:TextBox ID="TextTestoarea" runat="server" TextMode="MultiLine"></asp:TextBox><br />
                <<p>
                    Acconsento al <a href="../Informativa-Policy.html">trattamento dei miei dati personali</a>*
                    <asp:CheckBox ID="CheckBox1" runat="server" name="privacy" />
                </p>
                <br />
                <br />
                <asp:Button ID="BottoneInvia" runat="server" Text="InviaEmail" OnClick="BottoneInvia_Click" />
                <asp:Label ID="lblError" runat="server" Text="Attenzione! Potresti non aver compilato tutti i campi o aver commesso errori nell'inserimento della @mail" Visible="false"></asp:Label>
            </form>
        </div>
    </div><script>
                    var x = document.cookie;
              console.log(x.toString());
              var testo = x.toString();
              var taglia = testo.split(";");
                        document.getElementById("TextOggetto").value = taglia[0];

                </script>
</body>
</html>


