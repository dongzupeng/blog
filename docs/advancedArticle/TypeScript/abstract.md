# 抽象类abstract
```ts
//抽象类以abstract开头的类为抽象类
/**
 * 抽象类不能创建对象
 * 可以添加抽象方法
 */ 
 abstract class Father {
    name : string;
    constructor(name : string) {
        this.name = name
    }
    //添加抽象方法
    /**
     * 没有方法体
     * 抽象方法只能添加在抽象类中，
     * 子类必须对抽象方法进行重写
     */
    abstract sayHello():void;
}

class Son1 extends Father{
    sayHello() {
        console.log('我是老大');
        
    }
}
class Son2 extends Father{
    sayHello() {
        console.log('我是老二');
        
    }
}

const s1 = new Son1('老大');
s1.sayHello();


// const f = new Father()
```