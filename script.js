var man = document.getElementById('man');
var greeting = document.getElementById('greeting');
var cry = document.getElementById('cry')
var goRight = true;


var init = function (obj){
  obj.style.position = 'relative';
  obj.style.left = '-100px';
  obj.style.top = '100px';
  obj.style.width = '100px';
}

var move = function(){

  if (parseInt(man.style.left) < (window.innerWidth - 500) && goRight === true){
    man.style.left = parseInt(man.style.left) + 23 + "px";
    man.style.width = man.width + 17 + "px";
    if (parseInt(man.style.left) > 100){
      greeting.innerHTML = "";
    }
    if (parseInt(man.style.left) > (window.innerWidth - 550) && parseInt(man.style.left) < (window.innerWidth - 500)){
      cry.innerHTML = "OUCH!";
    }
  }
  else if (parseInt(man.style.left) <= -100 && goRight === false){
    goRight = true;
    man.style.transform = "scaleX(1)";
    man.style.top = '100px';
    greeting.innerHTML = "YooHoo!!!";
    cry.innerHTML = "";
  }
  else{

    goRight = false;
    man.style.transform = "scaleX(-1)";
    man.style.left = parseInt(man.style.left) - 23 + "px";
    man.style.width = man.width - 17 + "px";
    man.style.top = parseInt(man.style.top) + 10 + "px";
  }
};

init(man);
// greeting.style.top = "50px";
// cry.style.top = "50px";
// cry.style.left = window.innerWidth - 50px;
setInterval(move, 220);

//man.addEventListener('click', move);
