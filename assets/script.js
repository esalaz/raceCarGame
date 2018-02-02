
function listen(){
  var a=20;
  document.body.addEventListener('keydown',function(key){

    if(key['code']==='Enter'){
      console.log("You pressed Enter");
      document.getElementById('playerOne').style.animationDuration=a+"s";
      a-=2;
    }
  });
}
