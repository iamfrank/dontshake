// For sound effects:
// Consider https://github.com/kittykatattack/sound.js
// or https://github.com/rserota/wad/blob/master/src/wad.js

const a_el = document.querySelector('.meter-x')
const b_el = document.querySelector('.meter-y')
const g_el = document.querySelector('.meter-z')
const startBtn = document.getElementById('startBtn')
const logEl = document.getElementById('log')

/*
function requestOrientationPermission() {
  DeviceOrientationEvent.requestPermission()
  .then(response => {
    if (response === 'granted') {
      window.addEventListener('deviceorientation', (e) => {
        alert('orientation'  + e.alpha)
        a_el.innerHTML = e.alpha
        b_el.innerHTML = e.beta
        g_el.innerHTML = e.gamma
      })
    }
  })
  .catch(err => {
    alert('no device motion')
    console.error(err)
  })
}
*/

function setMotionListener() {

  window.addEventListener('deviceorientation', (event) => {
    logEl.innerHTML = 'Got motion data ' + event
    a_el.innerHTML = event.accelerationIncludingGravity.x
    b_el.innerHTML = event.accelerationIncludingGravity.y
    g_el.innerHTML = event.accelerationIncludingGravity.z
  })

}

startBtn.addEventListener('click', (e) => {
  setMotionListener()
})
