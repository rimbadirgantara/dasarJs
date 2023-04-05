import {coffeStock, isCoffeeMachineReady} from "./state.mjs";

const makeCoffe = (type, miligrams) => {

    if (coffeStock[type] >= miligrams){
        console.log('Kopi berhasil dibuat');
    } else {
        console.log('Biji kopi habis');
    }
}

const displayStock = stocks => {
    for (const stock in stocks){
        console.log(stock);
    }
}

displayStock(displayStock(coffeStock));