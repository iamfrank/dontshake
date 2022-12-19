/*
 * Revision 1.7
 */ 

// For sound effects:
// Consider https://github.com/kittykatattack/sound.js
// or https://github.com/rserota/wad/blob/master/src/wad.js

const a_el = document.querySelector('.meter-x')
const b_el = document.querySelector('.meter-y')
const g_el = document.querySelector('.meter-z')

window.DeviceMotionEvent.requestPermission().then(response => {
  console.log(response);

  document.addEventListener('deviceorientation', function(event) {
    alert('orientation'  + event.alpha)
    a_el.innerHTML = event.alpha
    b_el.innerHTML = event.beta
    g_el.innerHTML = event.gamma
  })
  
  document.addEventListener('devicemotion', function(event) {
    alert('motion'  + event.alpha)
    a_el.innerHTML = event.alpha
    b_el.innerHTML = event.beta
    g_el.innerHTML = event.gamma
  })

})
