// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        models: [
          {
            path: 'https://model.oml2d.com/HK416-1-normal/model.json',
            position: [0, 60],
            scale: 0.04,
            stageStyle: {
                "height": 400
            }
          },
          {
            path: 'https://model.oml2d.com/Senko_Normals/senko.model3.json',
            position: [0, 50],
            scale: 0.06,
            stageStyle: {
                "height": 400
            }
          },
          {
            path: 'https://model.oml2d.com/Pio/model.json',
            position: [0, 60],
            scale: 0.3,
            stageStyle: {
                "height": 400
            }
          },
          {
            path: 'https://model.oml2d.com/shizuku/shizuku.model.json',
            position: [0, 60],
            scale: 0.14,
            stageStyle: {
                "height": 400
            }
          },
        ]
      });
    }
  }
};