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
            if (this.mx > 11 || this.my > 11 || this.mz > 11) {
                points = points - 5;
            }
        },
        bigBtnAction: function() {
            if (this.btn_msg === 'Reset') {
                this.reset();
            } else if (this.btn_msg === 'Stop') {
                this.gameOver();
            } else {
                this.gameStart();
            }
        },
        gameStart: function() {
            this.active_start_btn = true;
            this.btn_msg = 'Stop';
            if (window.DeviceMotionEvent) {
                window.addEventListener('devicemotion', this.handleMotionEvent);
            } else {
                this.msg = 'Sorry! Your device does not display device motion.';
            };
        },
        gameOver: function() {
            window.removeEventListener('devicemotion', this.handleMotionEvent);
            this.btn_msg = 'Reset';
        },
        reset: function() {
            this.active_start_btn = false;
            this.points = 1000;
            this.btn_msg = 'Start';
        }
    },
    created: function() {
        
    }
});