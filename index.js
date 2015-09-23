//...方法很有用，用来表示多个参数
function sum (multiplier, base, ...numbers) {
  var sum = numbers.reduce((accumulator, num) => accumulator + num, base)
  return multiplier * sum
}
var total = sum(2, 6, 10, 8, 9)
console.log(total)
// <- 66

//用来将数组展开
var list=[1,2,3];
console.log([1,2, ...list]);

//用来将数组参数当成多个参数
console.log(list.push(...[3,4]));

//用来进行匹配
var [a, ...rest] = list;

