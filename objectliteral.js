/**
 * Created by dingziran on 2015/9/21.
 */

//变量值自动成key值
var foo = 'bar';
var baz = { foo };
console.log(baz.foo);
// <- 'bar

//key可以被计算
var foo = 'bar';
var baz = { [foo]: 'ponyfoo' };
console.log(baz);
// <- { bar: 'ponyfoo' }'

//声明方法
var cart = {
    _wheels: 4,
    get wheels () {
        return this._wheels
    },
    set wheels (value) {
        if (value < this._wheels) {
            throw new Error('hey, come back here!')
        }
        this._wheels = value
    },
    dismantle () {
        this._wheels = 0;
        console.warn(`you're all going to pay for this!`)
    }
};
cart.dismantle();