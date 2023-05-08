# react的基本使用
- babel
    - ES6 => ES5
    - jsx => js

- react.development.js 的引入必须在react-dom.development.js之前引入
    - 核心库必须先引入完，才能引入周边库

- 渲染虚拟DOM使用到的函数；`ReactDOM.render`

- 一般的书写一个案例的步骤
    - 准备好一个容器
    - 引入相关的核心库
        - react
        - react-dom
        - babel
    - 在书写内容的时候，也有两个步骤
        - 创建虚拟DOM
        - 渲染虚拟DOM到页面
            - ReactDOM.render(VDOM, document.getElementById('test'))
