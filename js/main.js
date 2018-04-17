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
        points: 70,
        time: 300
    },
    methods: {
        handleMotionEvent: function(event) {
            this.mx = event.accelerationIncludingGravity.x;
            this.my = event.accelerationIncludingGravity.y;
            this.mz = event.accelerationIncludingGravity.z;
            if (this.mx > 11 || this.my > 11 || this.mz > 11) {
                this.points = this.points--;
            };
        },
        bigBtnAction: function() {
            if (this.btn_msg === 'Reset') {
                this.reset();
            } else if (this.btn_msg === 'Stop') {
                this.gameOver();
            } else {
                this.gameStart();
            };
        },
        gameStart: function() {
            if (!window.DeviceMotionEvent) {
                return false;
            };
            window.addEventListener('devicemotion', this.handleMotionEvent);
            this.active_start_btn = true;
            this.btn_msg = 'Stop';
            this.countdown(this.time);
        },
        gameOver: function() {
            window.removeEventListener('devicemotion', this.handleMotionEvent);
            this.btn_msg = 'Reset';
        },
        reset: function() {
            this.active_start_btn = false;
            this.points = 70;
            this.time = 300;
            this.btn_msg = 'Start';
        },
        countdown: function(t) {
            t--;
            this.time = t;
            setTimeout(() => {
                if (t === 0) {
                    this.time = 'Time is up!';
                    this.gameOver();
                } else {
                    this.countdown(t);        
                };
            }, 1000);
        }
    },
    created: function() {
        
    }
});