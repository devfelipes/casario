
document.addEventListener('DOMContentLoaded', function() {

var fundohome = document.getElementById('home');
        
const backgrounds = ['bg1','bg2'];
let index = 0;

setInterval(function() {
    fundohome.classList.remove(backgrounds[index % backgrounds.length]);
    index++;
    fundohome.classList.add(backgrounds[index % backgrounds.length]);
}, 5000); 

setTimeout(() => {
    document.getElementById('whatsappButton').classList.remove('minimized');
    setTimeout(() => {
        document.getElementById('whatsappButton').classList.add('minimized');
    }, 5000);

}, 2000);
});