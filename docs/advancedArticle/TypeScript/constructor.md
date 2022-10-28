# constructor构造函数

```ts
class Dog {
    name: string;
    age: number;
    /**
     * 
     * @param name 
     * @param age 
     */
    //construct为构造函数
    //构造函数会在对象创建时候调用
    constructor(name: string, age: number){
        /**
         * 在实例方法中，this表示当前实例
         * 可以通过this向新建的对象中添加属性
         */
        this.name = name;
        this.age = age;
    }
    sayWang(){
        console.log(this);
    }
}
const d1 = new Dog('张三',10);
const d2 = new Dog('李四',18);
console.log(d1);
console.log(d2);
d1.sayWang();


```