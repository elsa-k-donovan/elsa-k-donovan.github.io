

window.onload = function(){

var conservativeImgNum = 16;
var liberalImgNum = 16;


randomVal = Math.round(Math.random());
console.log("Random Value: " + randomVal);
directResize(randomVal, conservativeImgNum, liberalImgNum);

  selectDefault("default-state");
  selectBlue("blue-state");
  selectRed("red-state");


//Function to generate random interger in a range
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


//New resizing algorithm without quality loss
function directResize(randomVal, conservativeImgNum, liberalImgNum) {
img = new Image();


if (randomVal == 0){
  img.src = "Img/Liberal/" + getRandomInt(liberalImgNum) + ".png";
  //load from liberal
}
else if(randomVal == 1){
  img.src = "Img/Conservative/" + getRandomInt(conservativeImgNum) + ".png";
}
    // img.src = "Img/Liberal/72202488_137507804270137_6306651693077495808_n.jpg";

    img.onload = () => {

			var directCanvas = document.getElementById("canvas-meme");
			var directCanvasContext = directCanvas.getContext("2d");

      var canvas4 = document.createElement('canvas'),
      canvas4context = canvas4.getContext('2d');

      //Adding


      canvas4.width = img.width * 0.5;
      canvas4.height = img.height * 0.5;
      canvas4context.drawImage(img, 0, 0, canvas4.width, canvas4.height);


      //

			directCanvas.width = canvas4.width;
			directCanvas.height = canvas4.height;

			//	Set original canvas size
			directCanvasContext.drawImage(img, 0, 0, directCanvas.width,
																		directCanvas.height);

			// Now use target canvas, to hold the final image, and output image from it
		} // End of the img.onLoad
}


  var granimInstance = new Granim({
    element: '#canvas-interactive',
    name: 'interactive-gradient',
    elToSetClassOn: '.canvas-interactive-wrapper',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 800,
    states : {
        "default-state": {
            gradients: [
                ['#c1a7a7', '#cabde6'],
                ['#985959', '#8c96ff'],
                ['#6d5998', '#e9a2a2']
            ],
            transitionSpeed: 10000
        },
        "blue-state": {
            gradients: [
                ['#34315e', '#93cfec'],
                ['#13325b', '#8cc7da']
            ],
            transitionSpeed: 10000
        },
        "red-state": {
            gradients: [
                        ['#571d30', '#d1b5ba'],
                        ['#861414', '#e6bdd2']
            ],

            loop:false
          }
    }
});



//Random value, if 0 then load liberal if 1 load conservative image
  clicked = false;

  function selectBlue(buttonId){
    var select = document.getElementById(buttonId);
    select.addEventListener("click", function(){
        if(randomVal === 1 && clicked === false){
          granimInstance.changeState("blue-state");
          console.log("Random val is: " + randomVal + " is conservative");
          onTrue();
          offTrue();
          clicked = true;
        }
        else if(clicked === false){
          onFalse();
          offFalse();
          clicked = true;
          granimInstance.changeState("red-state");
        }
      })
    }

  function selectRed(buttonId){
        document.getElementById("blue-state").disabled = false;
        var select = document.getElementById(buttonId);
        select.addEventListener("click", function(){
            if(randomVal === 0 && clicked === false){
              granimInstance.changeState("red-state");
              console.log("Random val is: " + randomVal + " is liberal");
              onTrue();
              offTrue();
              clicked = true;
            }
            else if(clicked === false) {
              onFalse();
              offFalse();
              clicked = true;
              granimInstance.changeState("blue-state");
            }
          })
  }

  function selectDefault(buttonId){
        var select = document.getElementById(buttonId);
        select.addEventListener("click", function(){
            granimInstance.changeState("default-state");
            randomVal = Math.round(Math.random());
            console.log("Random Value: " + randomVal);
            directResize(randomVal, conservativeImgNum, liberalImgNum);
            clicked = false;
          })
  }


  function onTrue() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("text1").style.display = "block"
  }

  function onFalse() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("text2").style.display = "block"
  }

  function offTrue() {
    setTimeout(function(){
      document.getElementById("overlay").style.display = "none";
      document.getElementById("text1").style.display = "none"}
    , 1000)
  }

  function offFalse() {
    setTimeout(function(){
      document.getElementById("overlay").style.display = "none";
      document.getElementById("text2").style.display = "none"}
    , 1000)
  }












}
