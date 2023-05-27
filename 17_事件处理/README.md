# 事件处理
1. 通过onXxxx属性(onClick、onBlur)来指定事件处理函数
2. 通过event.target得到发生事件的DOM元素对象
  - 其中event.target是触发事件的那个整体回调
  - 因此不用过度使用ref
3. 在书写回调函数的过程中，可以给回调函数参数传入event






