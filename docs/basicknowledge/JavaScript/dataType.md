# 数据类型
 
##  1. JavaScript 有哪些数据类型，它们的区别？:thinking:
### JavaScript 共有八种数据类型，分别是Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。
### 其中 Symbol 和 BigInt 是 ES6 中新增的数据类型 :100:


#### Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。
#### BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了Number 能够表示的安全整数范围。

#### 这些数据可以分为原始数据类型和引用数据类型

#### 栈：原始数据类型（Undefined、Null、Boolean、Number、String）
#### 堆：引用数据类型（对象、数组和函数）


## 2. 数据类型检测的方式有哪些? :thinking:
### 1.typeof 
```js
console.log(typeof 2);//number
console.log(typeof "2");//string
console.log(typeof true);//boolean
console.log(typeof []);//object
console.log(typeof function(){});//function
console.log(typeof {});//object
console.log(typeof null);//object
console.log(typeof undefined);//undefined
```
#### 其中数组、对象、null 都会被判断为 object，其他判断都正确。

### 2.instanceof 

#### instanceof 可以正确判断对象的类型，其内部运行机制是判断在其原型链中能否找到该类型的原型。
```js
console.log( 1 instanceof Number);//false
console.log( true instanceof Boolean);//false
console.log( "1" instanceof String);//false

console.log( [] instanceof Array);//true
console.log( {} instanceof Object);//true
console.log( function(){} instanceof Function);//true
```
#### 可以看到，instanceof 只能正确判断引用数据类型，而不能判断基本数据类型。instanceof 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。

### 3.constructor

#### constructor 有两个作用，一是判断数据的类型，二是对象实例通过constrcutor 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，constructor 就不能用来判断数据类型了

```js
console.log((1).constructor === Number);//true
console.log((true).constructor === Boolean);//true
console.log(('1').constructor === String);//true

console.log(([]).constructor === Array);//true
console.log(({}).constructor === Object);//true
console.log((function(){}).constructor === Function);//true

function Fn(){}

Fn.prototype = new Array()
const f = new Fn()

console.log(f.constructor === Fn);//false
console.log(f.constructor === Array);//true
```

### 4.Object.prototype.toString.call()

#### Object.prototype.toString.call() 使用Object 对象的原型方法toString 来判断数据类型：

```js
var a = Object.prototype.toString

console.log(a.call(1));
console.log(a.call("1"));
console.log(a.call(true));

console.log(a.call({}));
console.log(a.call([]));
console.log(a.call(function () { }));
console.log(a.call(null));
console.log(a.call(undefined));
//利用Object.prototype.toString.call封装方法
function getType(value) {
    // 判断数据是 null 的情况
    if (value === null) {
        return value + "";
    }
    // 判断数据是引用类型的情况
    if (typeof value === "object") {
        let valueClass = Object.prototype.toString.call(value),
            type = valueClass.split(" ")[1].split("");
        type.pop();
        return type.join("").toLowerCase();
    } else {
        // 判断数据是基本数据类型的情况和函数的情况
        return typeof value;
    }
}

console.log(getType(1));//number
console.log(getType("1"));//string
console.log(getType(true));//boolean

console.log(getType({}));//object
console.log(getType([]));//array
console.log(getType(function(){}));//function
console.log(getType(null));//null
console.log(getType(undefined));//undefined
```


