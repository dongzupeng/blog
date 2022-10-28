# 继承extends
```ts
class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log('动物叫！！！'); 
    }
}
/**
 * 子类可以重写父类的方法
 */
class Dog1 extends Animal {
    sayHello() {
        console.log('汪汪汪');
    }
}

class Cat1 extends Animal {
    sayHello() {
        console.log('喵喵喵');
    }
}

const dog1 = new Dog1('旺财',18);
const cat1 = new Cat1('喵喵',17);
console.log(dog1);
dog1.sayHello();
console.log(cat1);
cat1.sayHello();
```