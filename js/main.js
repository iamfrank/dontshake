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

// For debugging
redirectConsoleToDOM(logEl)

try {
  if (!DeviceMotionEvent) {
    console.log('DeviceMotionEvent unavailable')
    throw new Error('The application is not supported by your device')
  } else {
    console.log('DeviceMotionEvent available')
  }

  function setMotionListener() {
    startBtn.hidden = true
    canvasEl.hidden = false
    const jit = new Jitter(canvasEl)
    console.log(jit)
    window.addEventListener('devicemotion', (event) => {
      requestAnimationFrame(jit.updateCanvas(event.acceleration.x, event.acceleration.y, event.acceleration.z))
    })
  }

  startBtn.addEventListener('click', (e) => {
    setMotionListener()
  })

}
catch (err) {
  console.error(err)
}
