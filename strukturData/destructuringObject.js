// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18 
// }

// const { firstName, lastName, age } = profile;

// console.log(firstName, lastName, age);

// //   Dalam destructuring object, kita bisa menentukan salah satu nilai yang ingin kita desktrukturisasikan. Sehingga kita tidak perlu membuat variabel sebanyak properti yang dimiliki objeknya, contohnya:

// const { lastName } = profile;


// // Destructuring Assignment
// let firstName = "Dimas";
// let age = 20;

// // menginisialisasi nilai baru melalui destructuring object
// ({ firstName, age, isMale = false } = profile);

// console.log(firstName);
// console.log(age);

// /* output:
// John
// 18
// */
// //   Saat melakukan destructuring assignment, kita perlu menuliskan destructuring object di dalam tanda kurung. Jika tidak menuliskan tanda kurung, tanda kurung kurawal akan membuat JavaScript mengira kita membuat block statement, sementara block statement tidak bisa berada pada sisi kiri assignment.

// // Assigning to Different Local Variable Names
// const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;

// console.log(localFirstName);
// console.log(localLastName);
// console.log(localAge);


// /* output:
// John
// Doe
// 18
// */