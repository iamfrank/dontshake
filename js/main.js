/*
 * Revision 1.5
 */ 

// Consider https://github.com/kittykatattack/sound.js
// or https://github.com/rserota/wad/blob/master/src/wad.js


var ns = new NoSleep(),
    start_btn = document.getElementById('start-btn'),
    test_btn = document.getElementById('test-btn'),
    horn = new Audio('./audio/air_horn.mp3'),
    bell = new Audio('./audio/temple_bell.mp3'),
    pin = new Audio('./audio/pin_dropping.mp3'),
    game_on = false;


function gameStart() {
    ns.enable();
    bell.play();
    vm.msg = 'Joust!';
    game_on = true;
    setTimeout(gameOn, 1000);
}

function gameOver() {
    if (game_on) {
        ns.disable();
        horn.play();
        game_on = false;
        vm.msg = 'Game over';
    }
}

function testSound() {
    bell.play();
}

function gameOn() {
    if (game_on) {
        pin.play();
        setTimeout(gameOn, 1000);
    }
}

function handleMotionEvent(event) {

    vm.mgx = event.accelerationIncludingGravity.x;
    vm.mgy = event.accelerationIncludingGravity.y;
    vm.mgz = event.accelerationIncludingGravity.z;

    // vm.mx = event.acceleration.x;
    // vm.my = event.acceleration.y;
    // vm.mz = event.acceleration.z;

    if (vm.mgx > 15 || vm.mgy > 15 || vm.mgz > 15) {
        gameOver();
    }
}


// Initialize Vue instance

vm = new Vue({
    el: '#app',
    data: {
        msg: 'Press to play',
        // mx: 0,
        // my: 0,
        // mz: 0,
        mgx: 0,
        mgy: 0,
        mgz: 0
    }
})


// Add event listeners

start_btn.addEventListener('click', gameStart);

if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', handleMotionEvent);
} else {
    vm.msg = 'Sorry! Your device does not display device motion.'
}

