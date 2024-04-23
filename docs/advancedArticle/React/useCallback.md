# useCallback  : 


### useCallback 是 React 提供的一个 Hook，用于优化性能。它可以帮助避免在每次渲染时都创建新的回调函数。通常情况下，当父组件重新渲染时，其子组件也会重新渲染，如果子组件的 props 包含了函数类型的属性，并且这些函数是在每次父组件重新渲染时都重新创建的，就会造成不必要的性能开销。
### 基本使用 
#### useCallback 接收两个参数：第一个参数是一个函数，第二个参数是一个依赖数组，当依赖数组中的值发生变化时，才会重新创建回调函数。


```jsx
import React, { useState, useCallback } from 'react';

function Button({ onClick, children }) {
  console.log('Button 组件重新渲染');
  return <button onClick={onClick}>{children}</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  console.log('App 组件重新渲染');

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
}

export default App;

```
handleClick 是一个依赖于 count 变量的回调函数。由于我们在 useCallback 中传入了 count 作为依赖数组，只有当 count 发生变化时，才会重新创建 handleClick 函数。这样可以确保只有在 count 变化时，才会触发子组件的重新渲染，从而提升性能。
