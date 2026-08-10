import { Application } from 'pixi.js';

const app = new Application();

await app.init({
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
});
const canvas = document.body.getElementsByClassName("CanvasPixi");
canvas.appendChild(app.canvas);