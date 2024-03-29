let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

// 1、展开一个数组； 
console.log(...arr1);

// 2、连接数组；
let arr3 = [...arr1, ...arr2];

// 3、在函数中使用； 
function sum(...numbers) {
  // 数组身上有一个reduce; 最终是有返回值的
  return numbers.reduce((preValue, currentValue) => {
    return preValue + currentValue;
  });
}

console.log(sum(1, 2, 3, 4)); // 10

// 4、构造字面量对象时使用展开语法
let person = { name: "tom", age: 18 };
// console.log(...person); // 报错,展开运算符不能展开对象
let person2 = { ...person }; // 字面量的形式复制一个对象
person.name = "jerry";
console.log(person);
console.log(person2);

// 5、合并
let person3 = { ...person, name: "jack", address: "地球" };
console.log(person3);
