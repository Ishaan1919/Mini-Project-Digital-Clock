const clock = document.getElementById('clock');
let time = new Date();
clock.innerHTML = time.toLocaleTimeString();
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
} , 1000)