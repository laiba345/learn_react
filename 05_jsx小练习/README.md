# Jsx 小练习

- 模拟数据
- 将纯数据加工成带有标签的数据

1. 初始的操作

```
<script type="text/babel">
    // 模拟一些数据
    const data = ['Angular', 'React', 'Vue']

    // 1、创建虚拟DOM
    const VDOM = (
    <div>
        <h1>前端JS框架列表</h1>
        <ul>
        <li>Angular</li>
        <li>React</li>
        <li>Vue</li>
        </ul>
    </div>
    )
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById('test'))
</script>
```
- 对数组进行加工操作,可以使用map方法
- 读取表达式的时候,使用{} 来进行读取操作
    - data.map() 是一个数组表达式,需要用{} 包裹起来;


