# 组件的生命周期  
- 说法
    - 生命周期回调函数
    - 生命周期钩子函数
    - 生命周期函数
    - 生命周期钩子

- 概念      
    - 其实就是一些关键的点;调用一些关键的函数;让你在该函数中完成相应的事情
        - 在关键时候调用关键的函数：在该函数中完成相应的事情；

- 类里面可以写哪些东西
1. 构造器
2. 自定义方法
3. 赋值语句
4. static修饰的赋值语句

- 挂载 mount; 卸载 unmount

- 人的生命周期
    - 将要出生 ==> 起名字
    - 出生了   ==> 
    ...

组件的生命周期
1. 理解
- 组件从创建到死亡它会经历一些特定的阶段
- React组件中包含一系列钩子函数,会在`特定的时刻调用`；（一系列钩子函数，会在特定的时刻调用）
- 我们在定义组件时,会在特定的生命周期回调函数中,做特定的工作
- 强制更新不受阀门控制

2. 生命周期流程图(旧)
![项目主界面](../picture/生命周期(旧).png)

3. 总结生命周期
- 初始化阶段:由ReactDOM.render()触发 --- 初次渲染
    - 1、constructor()
    - 2、componentWillMount()
    - 3、render()
    - 4、componentDidMount()
        - 常用;
        - 一般在这个钩子中做一些初始化的事情;
        - 例如:开启定时器、发送网络请求、订阅消息
- 更新阶段:由组件内部this.setState()或父组件render触发
    - 1、shouldComponentUpdate(); 强制更新就是少了这个环节
    - 2、componentWillUpdate()
    - 3、render()
        - 必须使用一个
    - 4、componentDidUpdate
- 卸载组件:由ReactDOM.unmountComponentAtNode()触发
    - 1、componentWillUnmount()
        - 常用
        - 一般在这个钩子中做一些收尾的事,例如:关闭定时器、取消订阅消息；
            - 在卸载组件这个钩子中做一些收尾的事情；例如：关闭定时器，取消订阅信息；

4. 生命周期流程图(新)

![项目主界面](../picture/生命周期(新).jpeg)

- 一句话总结新的生命周期流程图；
    - 即：删除了3个旧的生命周期，新增了2个新的生命周期
    
5. 总结新的生命周期
    1. 初始化阶段: 由ReactDOM.render()触发---初次渲染； 初次渲染还是在render中触发的；
            1.	constructor()
            2.	getDerivedStateFromProps 
            3.	render()
            4.	componentDidMount() =====> **常用；重要**
                    一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
    2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发； 因为数据的更新就是通过this.setState()来进行相关操作；
            1.	getDerivedStateFromProps
            2.	shouldComponentUpdate()
            3.	render()
            4.	getSnapshotBeforeUpdate
            5.	componentDidUpdate()
    3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
            1.	componentWillUnmount()  =====> 常用
                    一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
    4. 对比旧的生命周期钩子，其实最重要的`三个生命周期钩子`是没有改变的；
        - render
        - componentDidMount
        - componentWillUnmount
    5. 重要的钩子
        - render; 初始渲染或更新渲染调用
        - componentDidMount; 开启监听，发送ajax请求
        - componentWillUnmount; 做一些收尾工作，如清理定时器；
    6. 即将废弃的钩子;现在使用会出现警告，下一个大版本需要加上UNSAFE_前缀才能使用，以后可能会被彻底废弃，不建议使用
        - componentWillMount
        - componentWillReceiveProps
        - componentWillUpdate















