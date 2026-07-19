var i = 0;
var slides = ["1.jpg", "2.jpg", "3.jpg"]

function move() {

      var slideshow = document.slideshow.src = slides[i];
      if (i < slides.length - 1){
          i++
      }else{
          i=0
      }
      setTimeout("move()",2000)
    
}
move()