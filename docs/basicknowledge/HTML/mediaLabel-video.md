# Media label

## 1. video 视频标签 :clapper:

### video标签是一个块级元素，用于放置视频。如果浏览器支持加载的视频格式，就会显示一个播放器，否则显示video内部的子元素

```html
<video src="https://api.bilibili.com/x/player/playurl?fnval=80&cid=746904707&bvid=BV1pT41157it" controls>
    <p>你的浏览器不支持 HTML5 视频，请下载<a href="example.mp4">视频文件</a>。</p>
</video>
```
### video有以下属性 

#### src：视频文件的网址。
#### controls：播放器是否显示控制栏。该属性是布尔属性，不用赋值，只要写上属性名，就表示打开。如果不想使用浏览器默认的播放器，而想使用自定义播放器，就不要使用该属性。
#### width：视频播放器的宽度，单位像素。
#### height：视频播放器的高度，单位像素。
#### autoplay：视频是否自动播放，该属性为布尔属性。
#### loop：视频是否循环播放，该属性为布尔属性。
#### muted：是否默认静音，该属性为布尔属性。
#### poster：视频播放器的封面图片的 URL。
#### preload：视频播放之前，是否缓冲视频文件。这个属性仅适合没有设置autoplay的情况。它有三个值，分别是none（不缓冲）、metadata（仅仅缓冲视频文件的元数据）、auto（可以缓冲整个文件）。
#### playsinline：iPhone 的 Safari 浏览器播放视频时，会自动全屏，该属性可以禁止这种行为。该属性为布尔属性。
#### crossorigin：是否采用跨域的方式加载视频。它可以取两个值，分别是anonymous（跨域请求时，不发送用户凭证，主要是 Cookie），use-credentials（跨域时发送用户凭证）。
#### currentTime：指定当前播放位置（双精度浮点数，单位为秒）。如果尚未开始播放，则会从这个属性指定的位置开始播放。
#### duration：该属性只读，指示时间轴上的持续播放时间（总长度），值为双精度浮点数（单位为秒）。如果是流媒体，没有已知的结束时间，属性值为+Infinity

### HTML 标准没有规定浏览器需要支持哪些视频格式，完全由浏览器厂商自己决定。为了避免浏览器不支持视频格式，可以使用source标签，放置同一个视频的多种格式
```html
<video controls>
  <source src="a.mp4" type="video/mp4">
  <source src="a.webm" type="video/webm">
  <p>你的浏览器不支持 HTML5 视频，请下载<a href="a.mp4">视频文件</a>。</p>
</video>

```
#### 上例指定了两种格式的视频文件：MP4 和 WebM。如果浏览器支持 MP4，就加载 MP4 格式的视频，不再往下执行了。如果不支持 MP4，就检查是否支持 WebM，如果还是不支持，则显示提示

