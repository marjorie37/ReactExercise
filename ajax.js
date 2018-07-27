function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", "api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=ffdf1fe055beba1d46f93486faab9fa5");

    req.addEventListener("load", function () {

        if (req.status >= 200 && req.status < 400) {

            callback(req.responseText);

        } else {

            console.error(req.status + " " + req.statusText + " " + "api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=ffdf1fe055beba1d46f93486faab9fa5");

        }

    });

    req.addEventListener("error", function () {

        console.error("Erreur réseau avec l'URL " + "api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=ffdf1fe055beba1d46f93486faab9fa5");

    });

    req.send(null);

}