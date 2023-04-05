// function expression
const sayHello = (greet) => {
    console.log(`${greet}!`)
  }

  const sayName = name => {
    console.log(`Nama saya ${name}`)
  }
  
  sayName("Leia");
  
  /* output
  Nama saya Leia
   */

  const sayHello_ = () => {
    console.log("Selamat pagi semuanya!")
  };
  
  sayHello_();
  
  /* output
  Selamat pagi semuanya!
   */

  const sayNames = name => console.log(`Nama saya ${name}`);
sayNames("Leia");

const sayHellos = () => console.log("Selamat pagi semuanya!");
sayHellos();

/* output
Nama saya Leia
Selamat pagi semuanya!
 */

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
 */