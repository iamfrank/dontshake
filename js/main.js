/*
 * Revision 1.7
 */ 

// Consider https://github.com/kittykatattack/sound.js
// or https://github.com/rserota/wad/blob/master/src/wad.js


// Initialize Vue instance
new Vue({
    el: '#app',
    data: {
        msg: '',
        btn_msg: 'Start',
        mx: 0,
        my: 0,
        mz: 0,
        active_start_btn: false,
        points: 1000
    },
    methods: {
        handleMotionEvent: function(event) {
            this.mx = event.accelerationIncludingGravity.x;
            this.my = event.accelerationIncludingGravity.y;
            this.mz = event.accelerationIncludingGravity.z;
            if (vm.mx > 11 || vm.my > 11 || vm.mz > 11) {
                if (active_start_btn) {
                    points = points - 5;
                }
            }
        },
        bigBtnAction: function() {
            if (this.btn_msg === 'Reset') {
                this.active_start_btn = false;
                reset();
            } else if (this.btn_msg === 'Stop') {
                gameOver();
            } else {
                this.gameStart();
            }
        },
        gameStart: function() {
            this.active_start_btn = true;
            this.btn_msg = 'Stop';
        }
    },
    created: function() {
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', this.handleMotionEvent);
        } else {
            this.msg = 'Sorry! Your device does not display device motion.';
        };
    }
});