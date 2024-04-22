# useReducer : 


### useReducer 是 React 提供的一个 Hook，用于管理具有复杂状态逻辑的组件状态。它类似于 Redux 中的 reducer 函数。使用 useReducer 可以让你更好地管理状态，并使状态更新的逻辑更清晰。
### 基本使用
:::tip 定义 reducer 函数，接收当前状态和 action，返回新的状态。
:::

```jsx
import React, { useReducer } from 'react';

// 定义 reducer 函数，接收当前状态和 action，返回新的状态
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Counter = () => {
  // 使用 useReducer 定义状态和 dispatch 函数
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;

```
