# useMemo  : 


### useMemo 是 React 中的一个钩子函数，用于对计算结果进行记忆化，以避免在每次渲染时都重新计算。这在处理性能敏感的场景下非常有用，特别是当需要在组件渲染过程中进行昂贵的计算或者处理大量数据时。


### 基本使用  
#### useMemo 接受两个参数：一个是创建函数，另一个是依赖数组。它会返回记忆化的值。


```jsx
import React, { useMemo } from 'react';

function MyComponent({ a, b }) {
  // 使用 useMemo 记忆化计算结果
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return a + b;
  }, [a, b]); // 依赖数组，只有在 a 或者 b 改变时才会重新计算 sum

  return (
    <div>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default MyComponent;

```
sum 的值是由 a 和 b 计算得出的，但是只有在 a 或 b 发生变化时才会重新计算。这是通过将 a 和 b 添加到 useMemo 的依赖数组中来实现的。

值得注意的是，useMemo 仅在需要时进行计算。在初次渲染时，它会执行创建函数来计算初始值。之后，只有在依赖项发生变化时，它才会重新计算。这可以帮助优化性能，尤其是在处理大量数据或昂贵的计算时。

需要注意的是，useMemo 的性能优化作用是有限的，因为它仅在组件重新渲染时避免了重复计算，而并非减少了计算本身的开销。因此，在需要优化性能时，应该结合其他性能优化手段，如 React.memo、useCallback 等来综合考虑。
