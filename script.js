var man = document.getElementById('man');
var greeting = document.getElementById('greeting');
var cry = document.getElementById('cry')
var goRight = true;
var step = 23;
var grow = 17;


var init = function (obj){
  obj.style.position = 'relative';
  obj.style.left = '-100px';
  obj.style.top = '100px';
  obj.style.width = '100px';
}

var move = function(){

  if (parseInt(man.style.left) < (window.innerWidth - 500) && goRight === true){
    man.style.left = parseInt(man.style.left) + step + 'px';
    man.style.width = man.width + grow + 'px';
    if (parseInt(man.style.left) > step){
      greeting.innerHTML = "";
    }
    if (parseInt(man.style.left) > (window.innerWidth - (500 + step)) && parseInt(man.style.left) < (window.innerWidth - 500)){
      cry.style.top = '100px';
      cry.style.left = parseInt(man.style.left) + 400 + 'px';
      cry.innerHTML = 'OUCH!';
    }
  }
  else if (parseInt(man.style.left) <= -150 && goRight === false){
    goRight = true;
    man.style.transform = 'scaleX(1)';
    man.style.top = '100px';
    greeting.style.top = '25px';
    greeting.innerHTML = 'YooHoo!!!';

  }
  else{
    goRight = false;
    man.style.transform = 'scaleX(-1)';
    man.style.left = parseInt(man.style.left) - step + 'px';
    man.style.width = man.width - grow + 'px';
    man.style.top = parseInt(man.style.top) + 10 + 'px';
    cry.innerHTML = "";
  }
};

init(man);
//init text:
greeting.style.position = 'relative';
cry.style.position = 'relative';

setInterval(move, 220);

//man.addEventListener('click', move);
