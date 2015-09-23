/**
 * Created by dingziran on 2015/9/23.
 */
//class是es6的语法糖
class Car {
    constructor (speed) {
        this.topSpeed = Math.random()
        this.speed = speed
        this.fuel = 0
        this.distance = 0
    }
    move () {
        if (this.fuel < 1) {
            throw new RangeError('Fuel tank is depleted')
        }
        this.fuel--
        this.distance += 2
    }
    addFuel () {
        if (this.fuel >= 60) {
            throw new RangeError('Fuel tank is full')
        }
        this.fuel++
    }
    static isFaster (left, right) {
        return left.topSpeed > right.topSpeed
    }
}

class Tesla extends Car {
    constructor (speed) {
        super(speed * 2)
    }
    move () {
        super.move()
        this.distance += 4
    }
}