using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class MandaEmail : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void BottoneInvia_Click(object sender, EventArgs e)
    {
        string Nome = TextNome.Text;
        string ClienteMail = TextMail.Text;
        string Mittente = "vendite@sciaxe.it";
        string Destinatario = "info@sciaxe.it";
        string Email = TextTestoarea.Text;
        string Oggetto = TextOggetto.Text;
        string body = "<strong>nome:</strong> {0}<br /> <strong>mail:</strong> {1}<br /><strong>messaggio:</strong> {2}";
        //HttpContext.Current.Request
        try
        {
            bool MAIL = false;
            bool mail2 = false;
            try
            {
                mail2 = (ClienteMail.Substring((ClienteMail.IndexOf(".") + 1), 1) != "");
            }
            catch (Exception ex2)
            {
                //Response.Redirect("Messaggio non inviato.html");
            }
            if (ClienteMail.Contains("@") && ClienteMail.IndexOf("@") > 0 && mail2)
            {
                if (ClienteMail.IndexOf(".") == ClienteMail.LastIndexOf(".") && (ClienteMail.IndexOf(".") > (ClienteMail.IndexOf("@"))))
                    MAIL = true;
                else if (ClienteMail.IndexOf(".") < ClienteMail.LastIndexOf(".") && ClienteMail.IndexOf(".") + 1 < ClienteMail.IndexOf("@") && ClienteMail.LastIndexOf(".") > ClienteMail.IndexOf("@") + 1)
                    MAIL = true;
            }
            if (!string.IsNullOrEmpty(Nome) && MAIL && !string.IsNullOrEmpty(Oggetto) && !string.IsNullOrEmpty(Email) && CheckBox1.Checked)
            {
                NetworkCredential credentials = new NetworkCredential("info@sciaxe.it", "832350f394");
                SmtpClient client = new SmtpClient();
                client.Host = "smtp.sciaxe.it";
                client.Port = 587;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.UseDefaultCredentials = false;
                client.Credentials = credentials;
                MailMessage mail = new MailMessage(Mittente, Destinatario);
                mail.Subject = Oggetto;
                mail.Body = string.Format(body, Nome, ClienteMail, Email);
                mail.IsBodyHtml = true;
                client.Send(mail);

                Response.Write("<h2><mark>Messaggio inviato con successo<mark></h2>");
                lblError.Visible = false;

                //Response.Redirect("Messaggio inviato.html");
            }

            else
            {
                lblError.Visible = true;
            }
        }
        catch (Exception ex)
        {
            Response.Write("<h2><mark>Ops, ci sono problemi, riprova piu tardi!!!<mark></h2> "+ex);
            //Response.Redirect("Messaggio non inviato.html");
        }

        
    }
}