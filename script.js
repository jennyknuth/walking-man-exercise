var man = document.getElementById('man');
var goRight = true;
//var position = man.style.left;
//  var windowSize = window.innerWidth - 200px;
//console.log(man.style.left);


var init = function (obj){
  obj.style.position = 'relative';
  obj.style.left = '-100px';
  obj.style.top = '200px';
}

console.dir(frame);
var move = function(){

  if (parseInt(man.style.left) < (document.body.offsetWidth - 200) && goRight === true){
    man.style.left = parseInt(man.style.left) + 23 + "px";
    console.log(man.style.left);
  }
  else if (parseInt(man.style.left) <= -100 && goRight === false){
    goRight = true;
    man.style.transform = "scaleX(1)";
  }
  else{
    goRight = false;
    man.style.transform = "scaleX(-1)";
    man.style.left = parseInt(man.style.left) - 23 + "px";
  }
};

init(man);

setInterval(move, 220)

//man.addEventListener('click', move);
