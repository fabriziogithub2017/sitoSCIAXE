//Schema.org Organization
var riferimento = document.getElementById("Schema.org").title;
switch (riferimento) {
    case "index":
        document.getElementById("Schema.org").innerHTML = "{" +
            "'@context': 'http://schema.org'," +
            "'@type': 'Organization'," +
            "'url': 'http://www.sciaxe.it/'," +
            "'logo': 'http://www.sciaxe.it/jmg/logo-sciaxe.png'," +
            "'contactPoint': [{'contactPoint': [{" +
            "'@type': 'ContactPoint'," +
            "'telephone': '+39 0113975398'," +
            "'contactType': 'customer service'" +
            "}]," +
            "'address': {" +
            "'@type': 'PostalAddress'," +
            "'addressLocality': 'Grugliasco'," +
            "'addressRegion': 'To'," +
            "'streetAddress': 'Strada del Potrone 10'," +
            "'postalCode': '10095'" +
            "}," +
            "'description': 'Serigrafia e ricamo su abbigliamento aziendale.Penne e gadget personalizzati.Produzione di timbri.'," +
            "'name': 'Sciaxè snc'," +
            "'telephone': '+39 0113975398'" +
            "} '@type': 'ContactPoint'," +
            "'telephone': '+39 0113975398', " +
            "'contactType': 'customer service'" +
            "}], ";
        break;
    default:
        var e;
}
