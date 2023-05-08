# 虚拟DOM与真实DOM
- 虚拟DOM的两种创建方式
    - js
    - jsx

- 有一种需求，你才会知道使用jsx语法的好处
    - 在div当中再嵌套一个span

- 关于虚拟DOM
    1. 本质是Object类型的对象(一般对象)
    2. 虚拟DOM比较“轻”，真实DOM比较重；因为虚拟DOM是react内部在用，无需真实DOM上那么多的属性
    3. 虚拟DOM最终会被react转化为真实DOM，呈现在页面上
