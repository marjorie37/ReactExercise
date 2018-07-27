process.stdin.setEncoding('utf8')

console.log('How old are you ? ')
process.stdin.on('data', (number) => {
    if (number <= 99 && number > 0) {
        const aujd = new Date();
        const annee = aujd.getFullYear();
        dateNaissance = annee - number;
        console.log(`You were born in ${dateNaissance}`);
    }

