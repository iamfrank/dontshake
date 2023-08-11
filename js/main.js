// For sound effects:
// Consider https://github.com/kittykatattack/sound.js
// or https://github.com/rserota/wad/blob/master/src/wad.js

import { redirectConsoleToDOM } from './console.js'

const a_el = document.querySelector('.meter-x')
const b_el = document.querySelector('.meter-y')
const g_el = document.querySelector('.meter-z')
const startBtn = document.getElementById('startBtn')
const logEl = document.getElementById('log')

redirectConsoleToDOM(logEl)

if (!DeviceMotionEvent) {
  console.error('The application is not supported by your device')
  console.log('DeviceMotionEvent unavailable')
} else {
  console.log('DeviceMotionEvent available')
}

function setMotionListener() {
  console.log('set in motion')
  window.addEventListener('devicemotion', (event) => {
    console.log('Got motion data', event)
    a_el.innerHTML = event.accelerationIncludingGravity.x
    b_el.innerHTML = event.accelerationIncludingGravity.y
    g_el.innerHTML = event.accelerationIncludingGravity.z
  })
}

startBtn.addEventListener('click', (e) => {
  setMotionListener()
})
