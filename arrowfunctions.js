/**
 * Created by dingziran on 2015/9/21.
 */
//最简单的匿名函数
[1, 2, 3].map(num => num * 2)
// <- [2, 4, 6]

//使用括号增加参数，使用大括号进行多行处理
[1, 2, 3, 4].map((num, index) => {
    var multiplier = 2 + index
    return num * multiplier
})
// <- [2, 6, 12, 20]

//箭头函数绑定lexical scope，这点不同于匿名函数
function Timer () {
    this.seconds = 0
    setInterval(() => this.seconds++, 1000)
}
var timer = new Timer()
setTimeout(() => console.log(timer.seconds), 3100)
// <- 3