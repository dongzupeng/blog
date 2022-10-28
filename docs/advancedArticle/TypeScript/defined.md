# Class 修饰符
```ts
class Big {
    /**
     * public 定义的属性可以在任意位置访问，包括子类
     * private 定义的属性只能类內部使用
     * protected 受包含的属性 只能在当前类和子类中使用
     */
    private name: string;
    public  age: number;
    protected sex: string;
    constructor(name: string, age: number, sex: string){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    /**
     * getter 读取属性
     * setter 设置属性
     * 被称为属性的存取器 读取数据更加安全
     */
    getName(){
        return this.name;
    }
    setName(value:string){
        this.name = value
    }
}
```