// Penangan Error

// # try and catct

// try {
//     console.log("testing error");
//     errorCode // uncomment ini jika ingin mencoba 
// } catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

/*Taruh kode yang berpeluang menimbulkan eror di dalam blok try. Apabila terjadi eror di dalam blok kode try, maka ia akan ditangkap dan ditangani oleh blok kode catch. Sementara, jika tidak terjadi eror pada kode, maka blok catch akan diabaikan.*/

// # Thrwoing Error

// const theJson = '{"nama": "rimba"}';
// try {

//     let user = JSON.parse(theJson);
//     /* 
//     Pada kode di atas, fungsi JSON.parse akan melakukan parsing atau konversi dari variabel json (String) menjadi sebuah object. Skenario seperti di atas akan banyak kita temui ketika melakukan request ke API.
//     */

//     if (!user.umur){
//         throw new SyntaxError("'umur' harus ada !");
//     }
//     console.log(user.nama); // rimba
//     console.log(user.umur); // unditified
//     /*
//     Apabila json tidak sesuai format, maka JSON.parse akan menimbulkan eror. Eror tersebut akan ditangkap oleh blok catch dan kode di dalamnya yang akan dieksekusi.
//     Untuk mengatasinya, kita bisa menggunakan throw. Operator ini akan “melemparkan” eror pada program, sehingga eksekusi kode akan masuk pada blok catch. Berikut ini adalah contoh mengimplementasikan throw untuk menimbulkan eror kita sendiri:
//     */

//     errorCode
//     /* 
//     Eror berhasil ditangani, tetapi konsol tetap menampilkan pesan “JSON Error”, lantas bagaimana kita bisa menampilkan pesan eror sesuai eror yang muncul?

//     Jawabannya adalah dengan if statement.
//     */

// } catch(error){
//     if (error instanceof SyntaxError){
//         console.log(`Json error : ${error.message}`);
//     } else if (error instanceof ReferenceError){
//         console.log(error.message);
//     } else {
//         console.log(error.stack);
//     }
// }


// # Custom Error
/* 
Setelah menangani eror, pada materi ini kita akan mempelajari bagaimana membuat eror sendiri. Ketika mengembangkan suatu aplikasi, akan ada banyak sekali kemungkinan munculnya eror. Seringkali, kita membutuhkan kelas eror sendiri untuk menunjukkan kesalahan yang spesifik dan tidak tersedia dalam kelas Error bawaan dari JavaScript.
*/

class validationError extends Error {
    constructor(message){
        super(message);
        this.name = 'ValidationErro';
    }
}

const json = '{"age": 20}';
try {
    const user = JSON.parse(json);
    if (!user.name){
        throw new validationError("'name' tidak ada");
    }
    if (!user.age){
        throw new validationError("'age' tidak ada");
    }

    console.log(user.name);
    console.log(user.age);

} catch (error){
    if (error instanceof SyntaxError){
        console.log(`Json error : ${error.message}`);
    } else if (error instanceof validationError){
        console.log(`invlid data : ${error.message}`);
    } else if (error instanceof ReferenceError){
        console.log(`${error.message}`)
    } else {
        console.log(`${error.stack}`);
    }
    /* 
    Sekarang kode untuk menangani error menjadi lebih baik bukan? Penggunaan instanceOf akan memberikan hasil eror yang lebih detail dan sesuai dengan eror yang terjadi.
    */
}