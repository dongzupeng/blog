# 泛型
```ts
/**
 * 在定义函数或者类时 当不确定类型的时候可以使用泛型
 */
function fn<T>(a:T): T{
    return a;
}

fn(10);//不指定类型，自动推断类型
fn<string>('hello');//指定泛型

class myClass<T>{
    name: T;
    constructor(name: T){
        this.name = name
    }
}

const myclass1 = new myClass('张三');//不指定类型
const myclass2 = new myClass<number>(10);//指定类型
```