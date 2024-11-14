# learn_react
## 1. JSX规则
- 返回单个根元素；甚至可以使用<> </>
- 关闭所有标签
- 驼峰式命名；例如className
- 可以学习使用JSX转换器

## 2. 函数式大括号
- 在function函数组件中，可以通过return () ，并且可以在括号中编写相关的jsx格式的代码内容
- 在return语句之前可以定义很多内容，比如说姓名，const name = '' 或者是别的一些属性
```
export default function TodoList() {
  const name = 'Gregorio Y. Zara';
  return (
    <h1>{name}'s To Do List</h1>
  );
}
```
## hooks学习
- 状态管理
  - 函数组件通过React提供的Hooks函数，比如我们通常使用useState钩子来管理状态；
  - useState 返回一个由两个值组成的数组：
    - 当前的state，初始值为传递给useState的参数
    - set函数，可以让你将state更新为不同的值并触发重新渲染。
  - 举个例子；实现一个计数器，点击count自增1；
  ```
  import { useState } from 'react';

  const App = () => {
    let [count, setCount] = useState(0);
    const handleClick = () => {
      setCount(count + 1);
    }
    return (
      <div>
        <h1 onClick={handleClick}>{count}</h1>
      </div>
    );
  };
  
  export default App;
```

- 生命周期
  - 可以使用useEffect这个Hook函数来执行类似生命周期的逻辑，用于替代 componentDidMount、componentDidUpdate 和 componentWillUnmount这些方法。
  - useEffect
    - useEffect是 React 中用于执行副作用操作的 Hook，并且具有类似于生命周期方法的功能。
    - useEffect 接收两个参数：① 副作用函数 ② 依赖数组
      - 副作用函数；第一个参数是一个函数，用于执行副作用操作；
      - 依赖数组：第二个参数是一个数组，包含了副作用函数中所依赖的变量。
        - 如果省略这个参数，那么副作用函数会在每次组件重新渲染时都执行，可以充当componentDidUpdate这个生命周期；
        - 如果传入空数组[],则副作用函数只会在组件挂载时执行，相当于componentDidMount；
        - 如果依赖数组中包含了某些变量，则只有这些变量发生变化时，副作用函数才会重新执行。
        - 如果我们在其中return一个函数，这个函数将会在组件卸载时除非，相当于componentWillUnmount。
