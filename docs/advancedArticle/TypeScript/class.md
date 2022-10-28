# 类的简介

```ts
class Person {
    /**
     * 直接定义的属性是实例属性，需要通过实例的属性访问
     */
    //定义实例属性
    name: string  = 'zhangsan';
    //定义静态属性 类属性 直接类去访问
    static age :number = 18;
    //只读属性 不允许修改
    readonly sex : string = "男";

    /**
     * 定义方法
     * 如果方法以static开头则为类方法
     */
    sayHello(){
        console.log('hello!!!');
    }
}
const p = new Person();
console.log(p.name);
console.log(Person.age);
// p.sex = 10


```