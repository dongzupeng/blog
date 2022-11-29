# Vue3
一、组合式API (Composition API)
::: tip setup
:::
1. 新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
2. 函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用


::: tip ref
:::
1. 作用: 定义一个数据的响应式
2. 语法: const xxx = ref(initValue):
   + 创建一个包含响应式数据的引用对象
   + js中操作数据: xxx.value
   + 模板中操作数据: 不需要.value
3. ref一般用于创建基本数据类型响应式数据
```vue
<template>
  <h2>{{count}}</h2>
  <hr>
  <button @click="update">更新</button>
</template>
<script>
import {
  ref
} from 'vue'
export default {

  /* 在Vue3中依然可以使用data和methods配置, 但建议使用其新语法实现 */
  // data () {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   update () {
  //     this.count++
  //   }
  // }

  /* 使用vue3的composition API */
  setup () {

    // 定义响应式数据 ref对象
    const count = ref(1)
    console.log(count)

    // 更新响应式数据的函数
    function update () {
      // alert('update')
      count.value = count.value + 1
    }

    return {
      count,
      update
    }
  }
}
</script>
```
* 要在模板中使用需要return出去

::: tip reactive 
:::
1. 作用: 定义多个数据的响应式
2. const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
3. 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
4. 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的

```vue
<template>
  <h2>name: {{state.name}}</h2>
  <h2>age: {{state.age}}</h2>
  <h2>wife: {{state.wife}}</h2>
  <hr>
  <button @click="update">更新</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup () {
    const state = reactive({
      name: 'zhangsan',
      age: 18,
      wife: {
        name: 'lisi',
        age: 22
      },
    })
    console.log(state, state.wife)

    const update = () => {
      state.name += '--'
      state.age += 1
      state.wife.name += '++'
      state.wife.age += 2
    }

    return {
      state,
      update,
    }
  }
}
</script>
```

# 比较Vue2与Vue3的响应式(重要)
## vue2的响应式
1. 核心:
  - 对象: 通过defineProperty对对象的已有属性值的读取和修改进行劫持(监视/拦截)
  - 数组: 通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持

```js
Object.defineProperty(data, 'count', {
    get () {}, 
    set () {}
})
```
2. 问题
  - 对象直接新添加的属性或删除已有属性, 界面不会自动更新
  - 直接通过下标替换元素或更新length, 界面不会自动更新 arr[1] = {}

## Vue3的响应式
1. 核心:
通过Proxy(代理): 拦截对data任意属性的任意(13种)操作, 包括属性值的读写, 属性的添加, 属性的删除等...
通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作
2. 文档:
   + [Proxy(代理)]( https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy )

   + [Reflect(反射)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

```js
new Proxy(data, {
	// 拦截读取属性值
    get (target, prop) {
    	return Reflect.get(target, prop)
    },
    // 拦截设置属性值或添加新属性
    set (target, prop, value) {
    	return Reflect.set(target, prop, value)
    },
    // 拦截删除属性
    deleteProperty (target, prop) {
    	return Reflect.deleteProperty(target, prop)
    }
})

proxy.name = 'tom'   
```
