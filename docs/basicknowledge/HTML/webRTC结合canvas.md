# Canvas 使用


:::tip canvas结合webRTC使用
:::
要在前端使用 WebRTC 打开摄像头并在5秒后截取一张图片，可以结合使用 navigator.mediaDevices.getUserMedia 获取摄像头视频流和 canvas 元素来实现。以下是一个简单的示例代码，演示了如何实现这个功能：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Take Picture after 5 Seconds</title>
  </head>
  <body>
    <video id="video" width="640" height="480" autoplay></video>
    <canvas id="canvas" width="640" height="480" style="display: none"></canvas>
    <img id="img" />
  </body>
</html>
<script>
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");
  const img = document.getElementById("img");
  const constraints = { video: true };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((error) => {
      console.error("Error accessing camera:", error);
    });

  setTimeout(() => {
    const canvasContext = canvas.getContext("2d");
    canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);
    // 从 canvas 中获取图像数据（base64 格式）
    const imageData = canvas.toDataURL("image/png");
    img.src = imageData;
    // 在这里可以将 imageData 发送到后端或进行其他处理
    console.log("Captured image:", imageData);

    // 停止视频流
    video.srcObject.getVideoTracks().forEach((track) => track.stop());
    video.style.display = "none";
  }, 5000);
</script>

```





