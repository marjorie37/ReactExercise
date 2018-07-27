process.stdin.resume()
process.stdin.setEncoding('utf8')


console.log('Quel age avez-vous ?')
process.stdin.on("data", (num) => {
    if (num > 0 && num < 99) {
        var jour = new Date();
        var anneeEnCours = jour.getFullYear();
        annee = anneeEnCours - num;
        console.log(`Vous etes né en ${annee}`);
    }
    else if (num <= 0) {
        console.log('Erreur, trop jeune')
    }
    else if (num > 99) {
        console.log('Erreur, trop age')
    }
    else {
        console.log('En numérique SVP')
    }
    process.exit()
})
