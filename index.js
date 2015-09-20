
//匹配对象的属性
var foo = { bar: 'pony', baz: 3 }
var {bar, baz} = foo
console.log(bar)
// <- 'pony'
console.log(baz)
// <- 3

//递归匹配
var foo = { bar: { deep: 'pony', dangerouslySetInnerHTML: 'lol' } }
var {bar: { deep, dangerouslySetInnerHTML: sure }} = foo
console.log(deep)
// <- 'pony'
console.log(sure)
// <- 'lol'

//匹配不到返回undefined
var {foo} = {bar:'baz'}
console.log(foo);
// <- undefined

//递归匹配不到深度内容，抛异常
//var {foo:{bar}} = {bar:'baz'}
//console.log(bar)
// <- Exception

//匹配数组时，按位置匹配
var [left, right, what] = [30,10]
console.log(left,right,what)
var [,,a,b] = [1,2,3,4,5]
console.log(a)
// <- 3
console.log(b)
// <- 4

//混合数组和对象匹配
var [left,{right,not}] = [30,{right:1}]
console.log(left,right,not)

//动态匹配
var key = 'such_dynamic'
var { [key]: foo } = { such_dynamic: 'bar' }
console.log(foo)
// <- 'bar'

//默认值
var {foo=3} = { foo: 2 }
console.log(foo)
// <- 2
var {foo=3} = { foo: undefined }
console.log(foo)
// <- 3
var {foo=3} = { bar: 2 }
console.log(foo)
// <- 3

//在函数参数中进行匹配，这个很方便
function greet ({ age, name:greeting='she' }) {
  console.log(`${greeting} is ${age} years old.`)
}
greet({ name: 'nico', age: 27 })
// <- 'nico is 27 years old'
greet({ age: 24 })
// <- 'she is 24 years old'