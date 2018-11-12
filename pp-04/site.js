  var newbell = new Audio('media/doorbell.mp3');

  function ringDoorbell() {
    newbell.play();
  }

  document.querySelector('#doorbell').innerHTML = "<button id='doorbutton'>Click to Ring the Doorbell</button>";
  document.querySelector('#doorbutton').addEventListener('click', ringDoorbell);
