/*
 * Revision 1.7
 */ 

// Consider https://github.com/kittykatattack/sound.js
// or https://github.com/rserota/wad/blob/master/src/wad.js


// Initialize Vue instance
new Vue({
    el: '#app',
    data: {
        btn_msg: 'Start',
        mx: 0,
        my: 0,
        mz: 0,
        points: 100,
        time: 300,
        script: {
            ready: true,
            started: false,
            stopped: false
        }
    },
    methods: {
        handleMotionEvent: function(event) {
            this.mx = event.accelerationIncludingGravity.x;
            this.my = event.accelerationIncludingGravity.y;
            this.mz = event.accelerationIncludingGravity.z;
            if (this.mx > 11 || this.my > 11 || this.mz > 11) {
                this.points--;
            };
        },
        bigBtnAction: function() {
            if (this.script.stopped) {
                this.reset();
            } else if (this.script.started) {
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
            this.script.ready = false;
            this.script.started = true;
            this.btn_msg = 'Stop';
            this.countdown(this.time);
        },
        gameOver: function() {
            this.script.started = false;
            this.script.stopped = true;
            window.removeEventListener('devicemotion', this.handleMotionEvent);
            this.btn_msg = 'Nulstil';
        },
        reset: function() {
            this.script.stopped = false;
            this.script.ready = true;
            this.points = 100;
            this.time = 300;
            this.btn_msg = 'Start';
        },
        countdown: function(t) {
            t--;
            this.time = t;
            setTimeout(() => {
                if (t === 0 || this.script.stopped) {
                    this.time = 'Tiden er gået!';
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