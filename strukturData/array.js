let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[1]);

myArray.push('JavaScript'); // menambahkan data di akhir kedalam array
myArray.pop();  // mengeluarkan data atau elemen terakhir dari array

myArray.shift(); // untuk mengeluarkan elemen pertama dari array
myArray.unshift("Apple"); // digunakan untuk menambahkan elemen di awal array

delete myArray[1]; // menghapus data dari array
myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);