/*
 * Revision 1.5
 */ 

// Consider https://github.com/kittykatattack/sound.js
// or https://github.com/rserota/wad/blob/master/src/wad.js

/*
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


*/

// Initialize Vue instance

new Vue({
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
        handleMotionEvent: function(event) {
            console.log('fish');
            console.log(event.acceleration.x);
            console.log(event.acceleration.y);
            console.log(event.acceleration.z);
            this.mx = event.acceleration.x;
            this.my = event.acceleration.y;
            this.mz = event.acceleration.z;
        
            /*
                if (vm.mx > 11 || vm.my > 11 || vm.mz > 11) {
                    gameOver();
                }
            */
        },
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
        },
        testSound: function () {
            //bell.play();
        }
    },
    created: function() {
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', this.handleMotionEvent);
        } else {
            vm.msg = 'Sorry! Your device does not display device motion.';
        };
    }
});


// Add event listeners
