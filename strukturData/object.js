const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
  };

console.log(user)
console.log(user.firstName) // untuk akses nilai
user["age"] = 20; // untuk mengganti nilai dari key
user.age = 20; // untuk mengganti nilai dari key
delete user.age; // menghapus data dari object
