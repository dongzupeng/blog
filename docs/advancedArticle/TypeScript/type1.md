# TypeScript类型

## 语法
```ts
//直接使用字面量进行类型声明
 let a: 10;
//  a = 20;
a = 10;

//可以使用 | 来连接多个类型（联合类型）
let b: 'zhangsan'| 'lisi';
b = 'zhangsan';
b = 'lisi'

let c: boolean | string;
c = true;
c = 'hello'
// c = 10

//any 类型
let d: any;
d = 10;
d = 'hello';
d = true;

//unknown 类型
let e: unknown;
e = 'hello';
e = 10;
e = true;

let s: string;
//any可以赋值给任意变量
s = d;
//unknown类型不能赋值给其他变量
// s = e

//可以这样赋值，但是会麻烦一些
if(typeof e === 'string') {
    s = e;
}

//可以使用类型断言 as 或者<>这种写法
s = e as string;
s = <string> e;

//void 表示空，以函数为例，就是表示没有返回值
function fn(): void {  
}

//never 表示永远不会返回结果
function fn1(): never {
    throw new Error('报错了！！！')
}
```
