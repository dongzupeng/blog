# useContext : 


### useContext 是 React 提供的一个 Hook，用于在函数组件中访问 React 上下文（Context）。它接收一个上下文对象（通过 React.createContext 创建），并返回当前上下文的值。
### 基本使用
:::tip 1.创建上下文对象：首先，使用 React.createContext 创建一个上下文对象。
:::

```jsx
import React from 'react';

const MyContext = React.createContext();

```

:::tip 2.提供上下文值：在应用的某个父组件中，使用 MyContext.Provider 来提供上下文的值。
:::

```jsx
function ParentComponent() {
  const value = '这是上下文的值';

  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

```
:::tip 3.使用 useContext：在需要访问上下文值的子组件中，使用 useContext Hook 来获取上下文的值。
:::

```jsx
import React, { useContext } from 'react';

function ChildComponent() {
  const contextValue = useContext(MyContext);

  return <div>上下文的值是：{contextValue}</div>;
}

```

需要注意的是，useContext 只能用于函数组件中，并且只能用于访问 React 上下文。