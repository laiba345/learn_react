## props

1、理解
- 每个组件对象都会有props属性（props属性都是放在组件对象身上的）
- 组件标签的所有属性都保存在props中（组件标签）

2、作用
- 通过标签属性从组件外向组件内传递变化的数据
- 注意:组件内部不要修改props数据(只读的)

3、对属性进行限制
- 通过prop-types这个库对属性的相关内容进行限制
