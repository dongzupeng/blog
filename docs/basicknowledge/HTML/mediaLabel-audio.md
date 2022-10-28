# Media label

## 1. audio 音频标签 :musical_note:

### audio标签是一个块级元素，用于放置音频，用法与video标签基本一致

```html
<audio controls>
  <source src="a.mp3" type="audio/mp3">
  <source src="a.ogg" type="audio/ogg">
  <p>你的浏览器不支持 HTML5 音频，请直接下载<a href="a.mp3">音频文件</a>。</p>
</audio>
```
#### 上面代码中，audio标签内部使用source标签，指定了两种音频格式：优先使用 MP3 格式，如果浏览器不支持则使用 Ogg 格式。如果浏览器不能播放音频，则提供下载链接

### 属性
#### autoplay：是否自动播放，布尔属性。
#### controls：是否显示播放工具栏，布尔属性。如果不设置，浏览器不显示播放界面，通常用于背景音乐。
#### crossorigin：是否使用跨域方式请求。
#### loop：是否循环播放，布尔属性。
#### muted：是否静音，布尔属性。
#### preload：音频文件的缓冲设置。
#### src：音频文件网址。
