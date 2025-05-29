//1 task
let data = [42, 'text', true, null, undefined, 3.14];
console.log(data.length);
console.log(data[0]);
console.log(data[5]);
data[2] = true;
console.log(data);
let numbers = [10,20,30,40,50];
console.log(numbers.indexOf(30));
console.log(numbers.includes(100));

//2 task
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
fruits.push('mango');
fruits.unshift('strawberry');
let del_last = fruits.pop();
let del_first = fruits.shift();
fruits.indexOf('orange');
fruits.includes('banana');
console.log(fruits);

//3 task
let numbers_1 = [45, 12, 67, 23, 89, 34, 56, 91, 8, 77];
numbers_1.slice(2,7);
numbers_1.slice(-3);
numbers_1.sort((a,b)=>a-b);
numbers_1.sort((a,b)=>b-a);
numbers_1.join("-");
console.log(numbers_1);

//4 task
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [...array1, ...array2]; 

console.log(array3);