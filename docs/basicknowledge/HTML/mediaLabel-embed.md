## embed 嵌入外部内容 :cherries:

### embed标签用于嵌入外部内容，这个外部内容通常由浏览器插件负责控制。由于浏览器的默认插件都不一致，很可能不是所有浏览器的用户都能访问这部分内容，建议谨慎使用

```html
<embed type="video/webm"
       src="/media/examples/flower.mp4"
       width="250"
       height="200">
```
### 上面代码嵌入的视频，将由浏览器插件负责控制。如果浏览器没有安装 MP4 插件，视频就无法播放

### 属性

#### height：显示高度，单位为像素，不允许百分比。
#### width：显示宽度，单位为像素，不允许百分比。
#### src：嵌入的资源的 URL。
#### type：嵌入资源的 MIME 类型。

### 浏览器通过type属性得到嵌入资源的 MIME 类型，一旦该种类型已经被某个插件注册了，就会启动该插件，负责处理嵌入的资源。

### 下面是 QuickTime 插件播放 MOV 视频文件的例子
```html
<embed type="video/quicktime" src="movie.mov" width="640" height="480">
```

### 下面是启动 Flash 插件的例子
```html
<embed src="whoosh.swf" quality="medium"
       bgcolor="#ffffff" width="550" height="400"
       name="whoosh" align="middle" allowScriptAccess="sameDomain"
       allowFullScreen="false" type="application/x-shockwave-flash"
       pluginspage="http://www.macromedia.com/go/getflashplayer">
```
### 上面代码中，如果浏览器没有安装 Flash 插件，就会提示去pluginspage属性指定的网址下载