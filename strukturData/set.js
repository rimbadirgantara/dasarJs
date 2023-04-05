// Struktur data yang akan kita bahas berikutnya adalah Set. Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks.

const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

/* output
Set(3) { 1, 4, 6 }
*/

//Untuk menambahkan data ke dalam Set kita bisa memanfaatkan fungsi add().
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet);
	
/* output
Set(5) { 1, 4, 6, 5, 10 }
*/

numberSet.delete(4);

console.log(numberSet);

/* output
Set(4) { 1, 6, 5, 10 }
*/