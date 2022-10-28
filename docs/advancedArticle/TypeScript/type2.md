# TypeScript类型

## 语法
```ts
//object表示一个js对象
let a: object;
a = {};
a = function(){};
// a = 1;

//用来指定对象中包含哪些属性
//语法：{属性名：属性值,属性名：属性值,属性名：属性值,}
//?表示属性是可选的值
let obj: { name:string,age?:number }
obj =  { name:'zhangsan' }

let c: { name:string,[propsName:string]:any }
c = { name:'lisi', age: 20, sex: '男' }

//数组的类型声明
//写法1： 类型+[]
//写法2： Array<类型>
let arr: string[];
arr = ['zhangsan','lisi'];

let arr2: Array<number>;
arr2 = [10,20];

//元组
//固定的数组长度
let yun: [a :string, b: number];
yun = ["zhangsan",20];

//枚举
//enum
enum Gender{
    Male,
    Female
}

let i : { name : string, gender : Gender }
i = { name : 'zhangsan', gender : Gender.Male }
console.log(i.gender === Gender.Male);//true

//类型别名
type myType = 1 | 2 | 3;
let j: myType;
let k: myType;
j = 1
```
