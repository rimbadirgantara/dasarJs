/*Asynchronous Handling dengan Sintaks Async dan Await
Dalam materi sebelumnya, Anda telah belajar banyak mengenai Promise. Kita sepakat bahwa penanganan asynchronous dengan Promise jauh lebih baik daripada menggunakan callback. Dengan menggunakan Promise, kita bisa menulis kode lebih simpel dan mudah dibaca.

Sekarang mari kita bayangkan, bagaimana jika kita bisa menangani proses asynchronous layaknya proses synchronous? Tentunya, ini akan membuat kode kita jauh lebih ringkas dan mudah dipahami karena tidak perlu menggunakan .then() dan .catch() untuk mendapatkan nilainya. Untunglah harapan tersebut kini sudah terealisasi dengan hadirnya fitur async dan await di JavaScript versi ECMAScript 2017.

Sintaks async dan await memungkinkan kita untuk menulis kode dalam menangani proses asynchronous Promise-based dengan cara yang sama seperti kode synchronous. Dalam penanganan error-nya (rejection) pun kita bisa menggunakan try dan catch layaknya error yang dihasilkan oleh proses synchronous. Mari kita lihat contohnya dengan mengangkat kembali kasus menonton film di bioskop secara asynchronous.

Untuk menggunakan fitur async dan await, kita perlu mengubah sebuah fungsi agar berjalan secara asynchronous dengan menambahkan kata kunci async pada awal fungsi. Setelah itu, di dalam fungsi tersebut, kita bisa mengambil data yang dihasilkan oleh Promise dengan menggunakan sintaks await. Sintaks await akan memberi tahu JavaScript untuk menunggu proses Promise selesai sebelum mengeksekusi kode baris selanjutnya. Jadi, kita bisa melakukan Promise berantai tanpa perlu menggunakan .then(). Simak juga cara penanganan error-nya. Kita sudah tidak lagi menggunakan .catch(), tetapi try dan catch layaknya proses synchronous.

Ketahuilah bahwa setiap fungsi yang didefinisikan dengan kata async akan selalu mengembalikan sebuah Promise. 

Contoh pada kode di atas, kita bisa menggunakan fungsi .then() setelah pemanggilan fungsi watchMovie() seperti ini.
*/

async function watchMovie() {
  try {
    const money = await withDrawMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);
 
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
 
watchMovie().then(() => console.log('done'));
 
/** output */
// enjoy the movie
// done

/* 
Jika fungsi yang diberikan kata “async” mengembalikan Promise, bagaimana caranya mengontrol status Promise tersebut agar bernilai fulfilled atau rejected? Kata async secara implisit menggunakan return untuk mengubah status Promise menjadi fulfilled dan menggunakan throw untuk mengubah status Promise menjadi rejected. Mari kita buktikan dengan mengubah fungsi watchMovie() dengan mengembalikan nilai dan men-throw error.
*/

