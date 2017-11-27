/*
 *  
 */ 

var gn = new GyroNorm(),
    ns = new NoSleep(),
    start_btn = document.getElementById('start-btn'),
    test_btn = document.getElementById('test-btn'),
    horn = new Audio('../audio/air_horn.mp3'),
    bell = new Audio('../audio/temple_bell.mp3'),
    pin = new Audio('../audio/pin_dropping.mp3'),
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


start_btn.addEventListener('click', gameStart);
test_btn.addEventListener('click', testSound);


// Initialize Vue instance

vm = new Vue({
    el: '#app',
    data: {
        msg: '',
        mx: 0,
        my: 0,
        mz: 0
    }
})


// Initialize Gyronorm instance

gn.init().then(function(){
    gn.start(function(data){
        vm.mx = data.dm.x; // ( devicemotion event acceleration x value )
        vm.my = data.dm.y; // ( devicemotion event acceleration y value )
        vm.mz = data.dm.z; // ( devicemotion event acceleration z value )
        if (data.dm.x > 1.5 || data.dm.y > 1.5 || data.dm.z > 1.5) { 
            gameOver();
        }
    });
}).catch(function(e){
    // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
    vm.msg = 'Your device does not support DeviceOrientation or DeviceMotion';
});
