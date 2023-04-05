const { promisify } = require('util')

function withdrawMoney(amount){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount == ''){
                reject(new Error("Saldo tidak cukup"));
                return;
            }
            resolve(amount)
        }, 1000);
        console.log('Ambil uang');
    });
}

function buyCinemaTicket(money){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 90){
                reject(new Error("uang tidak cukuk"));
                return;
            }
            resolve("tiket -1");
        }, 1000);
        console.log('Beli tiket');
    });
}

function goInsideCinema(tiket = false){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tiket == false){
                reject(new Error("no tiket"));
                return;
            }
            resolve("enjoy the movie");
        }, 1000);
    });
}


function watchTheMovie(){
    withdrawMoney(95)
        .then((money) => {
            return buyCinemaTicket(money);
        })
        .then((tiket) => {
            return goInsideCinema(tiket);
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error.message);
        })
}

watchTheMovie();

