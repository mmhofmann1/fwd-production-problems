document.addEventListener('DOMContentLoaded', function(event){
document.querySelector('html').className = 'js';
var newbell = new Audio('media/doorbell.mp3')
})

function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}
