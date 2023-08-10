// For sound effects:
// Consider https://github.com/kittykatattack/sound.js
// or https://github.com/rserota/wad/blob/master/src/wad.js

if (!DeviceMotionEvent) {
  alert('The application is not supported by your device')
}

const a_el = document.querySelector('.meter-x')
const b_el = document.querySelector('.meter-y')
const g_el = document.querySelector('.meter-z')
const startBtn = document.getElementById('startBtn')
const logEl = document.getElementById('log')

function setMotionListener() {
  window.addEventListener('devicemotion', (event) => {
    logEl.innerHTML = 'Got motion data ' + event
    a_el.innerHTML = event.accelerationIncludingGravity.x
    b_el.innerHTML = event.accelerationIncludingGravity.y
    g_el.innerHTML = event.accelerationIncludingGravity.z
  })
}

startBtn.addEventListener('click', (e) => {
  setMotionListener()
})
