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
    if (parseInt(man.style.left) > 45){
      greeting.innerHTML = "";
    }
    if (parseInt(man.style.left) > (window.innerWidth - 525) && parseInt(man.style.left) < (window.innerWidth - 500)){
      cry.innerHTML = "OUCH!";
    }
  }
  else if (parseInt(man.style.left) <= -150 && goRight === false){
    goRight = true;
    man.style.transform = "scaleX(1)";
    man.style.top = '100px';
    greeting.innerHTML = "YooHoo!!!";

  }
  else{
    goRight = false;
    man.style.transform = "scaleX(-1)";
    man.style.left = parseInt(man.style.left) - 23 + "px";
    man.style.width = man.width - 17 + "px";
    man.style.top = parseInt(man.style.top) + 10 + "px";
    cry.innerHTML = "";
  }
};

init(man);
greeting.style.position = "relative";
cry.style.position = "relative";
greeting.style.top = "50px";
cry.style.left = (window.innerWidth - 100) + "px";
cry.style.top = "100px";
//cry.style.left = window.innerWidth - 50px;
setInterval(move, 220);

//man.addEventListener('click', move);
