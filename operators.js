// Unary Operators use one value
console.log(typeof 15);
console.log(typeof "this string");
console.log(typeof true);
console.log(typeof false);
console.log(typeof "TRUE");

// Binary Operators use two values
// Comparison Operators

console.log(10 > 5);  //greater than
console.log(10 < 5); //less than
console.log(10 >= 5); //greater than or equal to
console.log(10 <= 5); //less than or equal to
console.log(10 == 5); //are they both equal? false
console.log(10 == 10); //are they both equal? true
console.log(10 != 5); //are they different? true
console.log(10 != 10); //are they different? false
console.log(7 != 10);
console.log(15 < 15);

//Logical Operators
// AND && shift-7 true when both are true
//
// console.log(3>2 && 1>5); //true and false = false
//
// console.log(3>2 && 1<5); //true and true = true
//
// console.log(3<2 && 1<5); //false and true = false
//
// console.log(3<2 && 1>5); //false and false = false
//
//
//
// // OR || shift-\ (next to enter key)
//
// //true when at least one was true
//
// console.log(3>2 || 1>5); //true or false =  true
//
// console.log(3>2 || 1<5); //true or true =  true
//
// console.log(3<2 || 1<5); //false or true =  true
//
// console.log(3<2 || 1>5); //false or false =  false
//
//
//
// // NOT ! flips true to false and false to true
//
// console.log(!true);
//
// console.log(!false);
console.log(1>0&&10<=100);
console.log(1>0&&10>=100);
console.log(1<0&&10==100);
console.log(1>0||10<=100);
console.log(1>0||10>=100);
console.log(1<0||10==100);


console.log(1<5?"a":"b");
console.log(1>5?"yes":"no");
console.log(1>5?1:20);
console.log(21 != 20 ? "you win!" : "you lose!");
console.log(1+1 == 2 && 10 * 10 > 50);