# 接口
```ts
//描述一个对象的类型
//定义类型不能重复声明
type myType = {
    name: string,
    age: number
};
//接口：用来定义一个类结构
//接口可以重复声明，且会合并之前的属性
interface myInterface {
    name: string;
    age: number;
}

const obj: myInterface = {
    name: 'zhangsan',
    age: 20
}

const obj1: myType = {
    name: 'lisi',
    age: 18
}

//定义类时可以使用类去实现一个接口
//实现接口就是使类满足接口的要求 包括属性和方法
class Myclass implements myInterface{
    name: string;
    age: number;
    constructor(name:string,age: number){
        this.name = name;
        this.age = age;
    }

}

```
