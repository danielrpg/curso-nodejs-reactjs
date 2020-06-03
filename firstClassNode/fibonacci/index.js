// Show fibonacci serie number of times that user enter
function fibonacci(num) {
  let numbers = [0, 1];
  for (let i = 2; i <= num; i++) {
    numbers[i] = numbers[i - 2] + numbers[i - 1];
  }
  return numbers;
}

let res = fibonacci(5);

console.log(res.join(" ")); // concat all string values separatted by space

// 0, 1 , 1,  2 , 3, 5 ..
