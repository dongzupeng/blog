## 简单if判断
> 正常情况下我们如果写一段简单的if判断 `比如说如下`


```js
const isLike = true

const todo = () => console.log('你像她')

if(isLike) todo() 
```


> 我们可以借助&&

```js
isLike && todo()
```


## 数组合并去重

> 数组合并 `之前我们可以这样写`


```js
let arr1 = [1,2,3,4,5]

let arr2 = [2,3,4,5,6]

合并 arr1.concat(arr2)
```



> 我们可以使用es6解构赋值

```js
[...arr1,...arr2]
```
这种方法进行合并

## 判断对象是否为空

> 我使用一种简单的方法

```js
const obj = {};

const isobjnull = (JSON.stringify(obj) == "{}");

console.log(isobjnull);//true

//这种方法具有局限性 不能判断undefined，function， symbol
const obj1 = {
     a:undefined,
     b:function(){},
     c:Symbol()
}
const isobj1null = (JSON.stringify(obj1) == "{}");

console.log(isobj1null);//true
```

> 使用for in 配合 hasOwnProperty for in 会遍历自身及原型

```js
Object.prototype.age = 18

const obj = {}; 

const isEmptyObject = (obj) => {
    let isNull = true
    for( let attr in obj) {
        if(obj.hasOwnProperty(attr)) {
            isNull = false
            break
        }
    }
    return isNull
}

console.log(isEmptyObject(obj));//true
```

> 使用Object.keys返回对象属性的数组（可枚举属性）


```js
const obj = {}; 

const arr = Object.keys(obj);

alert(arr.length == 0);//true
```

>使用 Object.getOwnPropertyNames（可枚举和不可枚举 Symbol除外）

```js

Object.defineProperty(obj, 'name',{
    value:'xiaolaji',
    enumerable:false
})

console.log(Object.getOwnPropertyNames(obj).length===0);//false

const age = Symbol()
const obj = {
        [age]:18
    };

console.log(Object.getOwnPropertyNames(obj));//[]
console.log(Object.getOwnPropertyNames(obj).length===0);//true

```


>终极方案  Reflect.ownKeys

```js

const age = Symbol()
const obj = {
    [age]:18,
    name:'xiaolaji'
};

console.log(Object.getOwnPropertyNames(obj));//['name']

console.log(Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)));//['name', Symbol()]
//Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj))
//结合成
console.log(Reflect.ownKeys(obj));//['name', Symbol()]
console.log(Reflect.ownKeys(obj).length === 0);//false

```




## 判断数组是否存在并且长度大于0

> 我这样判断的

```js
arr && arr.length > 0
```

## 对数组中的所有值求和

```js
var numbers = [1, 2, 3, 4];

var sum = numbers.reduce((x, y) => x + y);

console.log(sum); // 10
```

:basketball: :basketball: :basketball:

