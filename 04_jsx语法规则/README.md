# JS语法规则
XML
- XML早期用于存储和传输数据
```
<student>
    <name>Tom</name>
    <age>19</age>
</student>
```
- 后来为了方便，直接开发使用JSON
    - JSON提供两种方法来进行转换
    - parse、stringify
```
"{"name": "Tom", "age": 19}"
```

# JSX的语法规则
1. 定义虚拟DOM时,不要写引号
2. 标签中混入JS表达式时要用{}
3. 样式中的类名指定使用className
4. 内联样式的书写形式; 
```
style = {{ color:"white", fontSize:"29px" }}
```
5. 虚拟DOM必须只有一个根标签
6. 标签必须闭合
7. 标签首字母
    - 小写字母; => html中的同名元素,若html中无标签对应的同名元素,报错
    - 大写字母; => react会去渲染相应组件,若组件没有定义,则报错
    
