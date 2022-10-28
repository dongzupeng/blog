# instanceof

## intanceof 操作符的实现原理及实现 :headphones:

### instanceof 运算符用于判断构造函数的prototype 属性是否出现在对象的原型链中的任何位置

```js
function myInstanceof(left,right) {
    //获取对象的原型
    let proto = Object.getPrototypeOf(left)
    //获取构造函数的prototype对象
    let prototype = right.prototype

    //判断构造函数的prototype对象是否在对象的原型链上
    while(true) {
        if(!proto) return false
        if(proto === prototype) return true
        //如果没找到 就继续从其原型上找
        proto = Object.getPrototypeOf(proto)
    }
}

console.log(myInstanceof(10,Number));//true
console.log(myInstanceof("10",String));//true
console.log(myInstanceof(true,Boolean));//true

console.log(myInstanceof({},Object));//true
console.log(myInstanceof([],Object));//true
console.log(myInstanceof(function(){},Function));//true
```