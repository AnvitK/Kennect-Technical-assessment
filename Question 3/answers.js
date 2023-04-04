const num = +prompt("Enter a number: ");

// using normal prime check method
const primeCheck = (no) => {
  if (no <= 1)  return false;                                     // for no <= 1
  if (no === 2 || no === 3) return true;                          // 2 or 3 are by default prime numbers
  if (no % 2 === 0 || no % 3 === 0) return false;                 // multiple of 2 or 3 are not prime numbers
  
  for (let i = 5; i * i <= no; i = i + 6) {                       // checking for remaining multiple numbers
    if (no % i === 0 || no % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}
console.log(`${num} is ${primeCheck(num) ? "a prime number": "not a prime number"} !!`);

// calculating the difference
let no = num + 1;
let diff = 0;
while(true) {
  if(primeCheck(no)) {
    diff = no - num;
    break;
  }
  no++;
}
console.log(`The difference between next prime number after ${num} and ${num} is ${diff}`);

