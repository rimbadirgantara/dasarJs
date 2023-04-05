// Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya. 
const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
  };
  
  function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
  }
  
  introduce(user);
  
  /* output
  kren is Kylo Ren
  */


// default paramter
function exponentsFormula(baseNumber, exponent = 2) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
  }
  
  exponentsFormula(3);
  
  /* output
  3^2 = 9
  */

  function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5));
  
  /* output
  15
  */


//Rest Parameter
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5));
  
  /* output
  15
  */