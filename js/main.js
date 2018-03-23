/*
 * Revision 1.5
 */ 

// Consider https://github.com/kittykatattack/sound.js
// or https://github.com/rserota/wad/blob/master/src/wad.js


var start_btn = document.getElementById('start-btn'),
    test_btn = document.getElementById('test-btn'),
    horn = new Audio('./audio/air_horn.mp3'),
    bell = new Audio('./audio/temple_bell.mp3'),
    pin = new Audio('./audio/pin_dropping.mp3'),
    game_on = false;

function gameStart() {
    bell.play();
    vm.msg = 'Joust!';
    vm.btn_msg = 'Stop';
    game_on = true;
    setTimeout(gameOn, 2000);
}

function gameOn() {
    if (game_on) {
        pin.play();
        setTimeout(gameOn, 2000);
    }
}

function gameOver() {
    if (game_on) {
        horn.play();
        game_on = false;
        vm.msg = 'Game over';
        vm.btn_msg = 'Reset';
    }
}

function reset() {
    vm.msg = 'Press to play';
    vm.btn_msg = '';
}

function testSound() {
    bell.play();
}

function handleMotionEvent(event) {

    vm.mx = event.acceleration.x;
    vm.my = event.acceleration.y;
    vm.mz = event.acceleration.z;

    if (vm.mgx > 11 || vm.mgy > 11 || vm.mgz > 11) {
        gameOver();
    }
}


// Initialize Vue instance

vm = new Vue({
    el: '#app',
    data: {
        msg: 'Press to play',
        mx: 0,
        my: 0,
        mz: 0,
        btn_msg: '',
        active_start_btn: false
    },
    methods: {
        bigBtnAction: function() {
            if (this.btn_msg === 'Reset') {
                this.active_start_btn = false;
                reset();
            } else if (this.btn_msg === 'Stop') {
                gameOver();
            } else {
                this.active_start_btn = true;
                gameStart();
            }
        }
    }
})


// Add event listeners

if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', handleMotionEvent);
} else {
    vm.msg = 'Sorry! Your device does not display device motion.'
}
