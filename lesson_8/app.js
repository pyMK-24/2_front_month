//1
function checkevenodd(num) {
  if(num % 2 === 0) {
    return "Четное";
  }else{
    return "Нечетное";
  }
}

console.log(checkevenodd(4));
console.log(checkevenodd(7));

//2
function factorial(n) {
  if (n <= 1) {
    return 1
  }else{
    let fact = 1;
    for(let i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
}
console.log(factorial(5));
console.log(factorial(0));

//3 task
function findmax(arr) {
  let max = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
array = [1,2,3,4,5];
console.log(findmax(array));

//4
function countvowels(str) {
  let vowels = ["a","e","i","o", "u"];
  let count_vow = 0;
  for(let i = 0; i < str.length; i++) {
    let symbol = str[i].toLowerCase();
    if(vowels.includes(symbol)) {
      count_vow += 1;
    }
  }
  return count_vow;
}
console.log(countvowels("hello"))
console.log(countvowels("world"))

//5 task
let array_1 = [1,2,3,4,5];

function sumarray(arr) {
  let sum = 0
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(sumarray(array_1));