
let number = 5;
for (let i = 1; i <= 10; i++) {
 
  let result = number * i;

  
  if (result % 2 === 0) {
    continue;
  }

 
  console.log(number + ' x ' + i + ' = ' + result);
}
