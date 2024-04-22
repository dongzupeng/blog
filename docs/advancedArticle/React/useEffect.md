# useEffect: 


### useEffect 是 React 中一个非常重要的 Hook，它允许你在函数组件中执行副作用操作。副作用操作包括但不限于数据获取、订阅、手动修改 DOM，或者其他需要在组件渲染时执行的操作。
### 基本使用
```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  // 声明一个状态变量
  const [count, setCount] = useState(0);

  // 声明一个 useEffect
  useEffect(() => {
    // 在组件挂载后和每次更新后执行的代码
    document.title = `You clicked ${count} times`;

    // 返回一个清理函数
    return () => {
      // 在组件卸载前执行的清理代码
      document.title = "React App"; // 恢复标题为默认值
    };
  }, [count]); // 仅在 count 发生变化时重新运行 useEffect

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default MyComponent;

```
#### 在这个例子中，我们创建了一个计数器组件 MyComponent。每次点击按钮时，计数器 count 会增加，并且页面标题会更新以显示当前计数器的值。这是通过 useEffect 来实现的。useEffect 接收两个参数：一个是回调函数，另一个是依赖数组。回调函数中的代码会在组件挂载后和每次更新后执行。依赖数组是一个可选参数，它指定了哪些状态变量的变化会触发 useEffect 重新执行。在这个例子中，我们指定了 count 作为依赖，所以每次 count 变化时都会重新运行 useEffect。

需要注意的是，在 useEffect 的回调函数中可以返回一个清理函数，它会在组件卸载前执行。这个清理函数可以用来清除定时器、取消订阅等资源，以避免内存泄漏。

```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 在组件挂载时执行副作用
    fetchData();

    // 返回一个清理函数，在组件卸载时执行
    return () => {
      // 在组件卸载时取消副作用
      cancelFetch();
    };
  }, []); // 传递空数组作为第二个参数，表示副作用只会在组件挂载时执行一次

  const fetchData = async () => {
    try {
      // 执行数据获取逻辑
      const result = await someAsyncDataFetchingFunction();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const cancelFetch = () => {
    // 执行取消副作用的逻辑
    // 例如：取消网络请求、取消订阅等
  };

  return (
    <div>
      {/* 渲染数据 */}
      {data && <p>{data}</p>}
    </div>
  );
}

export default MyComponent;

```