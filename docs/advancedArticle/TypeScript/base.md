# TypeScript基础

## 基本使用

```ts
// 只能传指定类型
let age: number;
age = 18;
// age = '10';

let b: string;
b = 'hello';
// b = 10

//默认给定类型
let c = false;
c = true;

//js函数不需要考虑函数参数类型
// function sum (a , b) {
//     return a + b
// }
// sum(111,222)

//ts需要给定指定类型和数目
function sum(a: number , b: number):number {
    return a + b;
}
// sum(10,'10')
sum(10,100);
```