import { Jitter } from './canvas.js'
import { redirectConsoleToDOM } from './console.js'
import { HitCounter } from './hitcounter.js'

// For sound effects:
// Consider https://github.com/kittykatattack/sound.js
// or https://github.com/rserota/wad/blob/master/src/wad.js

customElements.define('hit-counter', HitCounter)

const startBtn = document.getElementById('startbtn')
const canvasEl = document.getElementById('jitter')
const logEl = document.getElementById('log')

function setMotionListener() {
  startBtn.hidden = true
  canvasEl.hidden = false
  const jit = new Jitter(canvasEl)
  if (DeviceMotionEvent.requestPermission) {
    console.log('DeviceMotionEvent available with permission')
    DeviceMotionEvent.requestPermission().then((permission) => {
      console.log('got permission', permission)
      window.addEventListener('devicemotion', (event) => {
        console.log('devicemotion happened with permission')
        requestAnimationFrame(jit.updateCanvas(event.acceleration.x, event.acceleration.y, event.acceleration.z))
      })
    })
  } else {
    console.log('no permission needed')
    window.addEventListener('devicemotion', (event) => {
      console.log('devicemotion happened with no permission')
      requestAnimationFrame(jit.updateCanvas(event.acceleration.x, event.acceleration.y, event.acceleration.z))
    })
  }
}

// For debugging
redirectConsoleToDOM(logEl)

try {
  console.log(window.navigator.userAgent)
  if (!DeviceMotionEvent) {
    console.error('DeviceMotionEvent unavailable')
    throw new Error('The application is not supported by your device')
  } else {
    startBtn.addEventListener('click', setMotionListener)
  }
}
catch (err) {
  console.error(err)
}
