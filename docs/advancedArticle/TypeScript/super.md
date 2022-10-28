# super
```ts
class Parent {
    name: string;
    constructor(name: string){
        this.name = name;
    }

    sayHello(){
        console.log('hello');   
    }
}

class Child extends Parent{
    age: number;
    constructor(name: string,age : number){
        super(name);
        this.age = age;
    }
    sayHello() {
        //super表示当前类的父类
        // super.sayHello();
        console.log('呜呜呜');
        
    }
}

const c = new Child('张三',18);
c.sayHello();
```