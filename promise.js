
function tryBeingRomantic(secret) {
    return new Promise((resolve, reject) => {

        switch (secret) {
            case 'dinner':
                resolve('Kaney Moj garney basney')
                break;

            case 'music':
                resolve('Couple dance')
                break;

            case 'sing':
                resolve('Dohori khelney')
                break;

            case 'kiss':
                resolve('Have fun')
                break;

            default:
                reject('Jutta kahney')
        }
    })
}

let mood = tryBeingRomantic('music');
mood.then(console.log);
