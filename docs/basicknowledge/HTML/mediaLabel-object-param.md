## object 插入外部资源  param 插件所需要的运行参数 :tada:

### object标签作用跟embed相似，也是插入外部资源，由浏览器插件处理。它可以视为embed的替代品，有标准化行为，只限于插入少数几种通用资源，没有历史遗留问题，因此更推荐使用。

```html
<object type="application/pdf"
    data="./董祖鹏-前端开发.pdf"
    width="2000px"
    height="2000px">
```
### 上面代码中，如果浏览器安装了PDF插件，就会在网页显示 PDF 浏览窗口

### 属性

#### data：嵌入的资源的 URL。
#### form：当前网页中相关联表单的id属性（如果有的话）。
#### height：资源的显示高度，单位为像素，不能使用百分比。
#### width：资源的显示宽度，单位为像素，不能使用百分比。
#### type：资源的 MIME 类型。
#### typemustmatch：布尔属性，表示data属性与type属性是否必须匹配。

### 下面是插入 Flash 影片的例子

```html
<object data="movie.swf"
  type="application/x-shockwave-flash"></object>
```

### object标签是一个容器元素，内部可以使用param标签，给出插件所需要的运行参数。

```html
<object data="movie.swf" type="application/x-shockwave-flash">
  <param name="foo" value="bar">
</object>
```
