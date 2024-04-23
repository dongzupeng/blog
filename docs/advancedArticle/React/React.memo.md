# React.memo: 


### React.memo 是 React 提供的一个高阶组件，用于优化函数组件的性能。它类似于类组件中的 shouldComponentUpdate 方法，可以在函数组件中实现相似的功能，避免不必要的重新渲染。

### 基本使用  
#### 当组件的 props 发生变化时，React 会重新渲染该组件。但有时候，组件的 props 并不会引起组件的输出发生变化，这时就可以使用 React.memo 来包装该组件，从而在 props 没有变化时阻止重新渲染。


```jsx
import React, { useState } from 'react';

// 普通函数组件
const MyComponent = ({ name }) => {
  console.log('MyComponent 组件重新渲染');
  return <div>Hello, {name}!</div>;
};

// 使用 React.memo 包装的优化组件
const MemoizedComponent = React.memo(MyComponent);

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      {/* 注意：即使父组件重新渲染，但由于 props 没有变化，MemoizedComponent 组件不会重新渲染 */}
      <MemoizedComponent name="John" />
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default App;

```
在上面的例子中，MyComponent 是一个普通的函数组件，它接收一个 name 属性作为参数。MemoizedComponent 是使用 React.memo 包装后的组件。在父组件 App 中，每次点击按钮增加计数器时，父组件会重新渲染，但是由于 MemoizedComponent 的 name 属性没有变化，所以它不会重新渲染，这样可以提高性能。
