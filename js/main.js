// For sound effects:
// Consider https://github.com/kittykatattack/sound.js
// or https://github.com/rserota/wad/blob/master/src/wad.js

import { redirectConsoleToDOM } from './console.js'
import { Jitter } from './canvas.js'

const startBtn = document.getElementById('startbtn')
const canvasEl = document.getElementById('status')
const logEl = document.getElementById('log')
const jit = new Jitter(canvasEl)
console.log(jit)

redirectConsoleToDOM(logEl)

if (!DeviceMotionEvent) {
  console.log('DeviceMotionEvent unavailable')
  console.error('The application is not supported by your device')
} else {
  console.log('DeviceMotionEvent available')
}

function setMotionListener() {
  startBtn.hidden = true
  canvasEl.hidden = false
  window.addEventListener('devicemotion', (event) => {
    jit.updateCanvas(event.accelerationIncludingGravity.x, event.accelerationIncludingGravity.y, event.accelerationIncludingGravity.z)
  })
}

startBtn.addEventListener('click', (e) => {
  setMotionListener()
})
