// For sound effects:
// Consider https://github.com/kittykatattack/sound.js
// or https://github.com/rserota/wad/blob/master/src/wad.js

import { Jitter } from './canvas.js'
import { redirectConsoleToDOM } from './console.js'
import { HitCounter } from './hitcounter.js'

customElements.define('hit-counter', HitCounter)

const startBtn = document.getElementById('startbtn')
const canvasEl = document.getElementById('jitter')
const logEl = document.getElementById('log')

function setMotionListener() {
  console.log('the f')
  startBtn.hidden = true
  canvasEl.hidden = false
  const jit = new Jitter(canvasEl)
  console.log(jit)
  window.addEventListener('devicemotion', deviceMotionHandler)
}

function deviceMotionHandler(event) {
  console.log('handle some motion')
  requestAnimationFrame(jit.updateCanvas(event.acceleration.x, event.acceleration.y, event.acceleration.z))
}

// For debugging
redirectConsoleToDOM(logEl)

try {
  console.log(window.navigator.userAgent)
  if (!DeviceMotionEvent) {
    console.error('DeviceMotionEvent unavailable')
    throw new Error('The application is not supported by your device')
  } else if (DeviceMotionEvent.requestPermission) {
    DeviceMotionEvent.requestPermission().then((permission) => {
      console.log('got permission', permission)
      startBtn.addEventListener('click', setMotionListener)
    })
  } else {
    startBtn.addEventListener('click', setMotionListener)
  }
}
catch (err) {
  console.error(err)
}
