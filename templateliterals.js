//除了'和"的另一种包围字符串的方法
var text = `I'm "amazed" that we have so many quotation marks to choose from!`;

//将$中的js代码进行执行并返回值
var today = new Date();
var text = `the time and date is ${today.toLocaleString()}`;
console.log(text);

//多行字符串
var text = `foo
bar
baz`;
console.log(text);

//Tagged Templates 可以给参数增加函数变换，比如让所有传入的参数变成大写
function upperExpr  (template, ...expressions) {
    return template.slice(1).reduce((accumulator, part, i) => {
        return accumulator + expressions[i].toUpperCase() + part
    }, template[0])
}
var name = 'nico';
var outfit = 'leather jacket';
var text = upperExpr`hello ${name}, you look lovely today in that ${outfit}`;
console.log(text);
// <- 'hello NICO, you look lovely today in that LEATHER JACKET'