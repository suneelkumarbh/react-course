// array destructuring
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1);

// if you want to copy 1 and 3 then
[n1,,n2] = numbers;
console.log(n1, n2);
