// Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...).

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

console.log(...favorites);

const allFavorites = [...favorites, ...others];

console.log(allFavorites);

/* output
Seafood Salad Nugget Soup
*/