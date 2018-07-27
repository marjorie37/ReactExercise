function temperature() {

    let ville = document.getElementById("ville").value;
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&APPID=ffdf1fe055beba1d46f93486faab9fa5" + "&units=metric";

    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            quoteReceived(this.responseText);
        }
    };

    req.open("GET", url, true);
    req.send();

    function quoteReceived(quote) {
        quote = JSON.parse(quote).main.temp;

        document.getElementById("temperature").innerText = quote + "°C";
    }
};


