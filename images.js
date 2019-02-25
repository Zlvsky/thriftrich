var btn = document.getElementById('bucior');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

   var slide = 0;
   btn.addEventListener('click', function() {
   slide++;
   console.log(slide);
   switch (slide) {
   	case 1:
  	img1.style.transform = "scale(1.02)";
  	img1.style.zIndex = '10';
    img2.style.zIndex = '9';
    img3.style.zIndex = '9';
    img2.style.transform = "translate3d(0, -20px, 10px)";
    img3.style.transform = "translate3d(-45px, 5px, 15px)";
   	console.log(slide);
    break;

   	case 2:
  	img2.style.transform = "scale(1.02)";
  	img2.style.zIndex = '10';
    img1.style.zIndex = '9';
    img3.style.zIndex = '9';
    img1.style.transform = "translate3d(40px, 20px, 10px)";
    img3.style.transform = "translate3d(-45px, 5px, 15px)";
   	console.log(slide);
    break;

    case 3:
    img3.style.transform = "scale(1.02)";
  	img3.style.zIndex = '10';
    img2.style.zIndex = '9';
    img1.style.zIndex = '9';
   	console.log(slide);
    img2.style.transform = "translate3d(0, -20px, 10px)";
    img1.style.transform = "translate3d(-45px, 5px, 15px)";
    break;

    case 4:
    slide = 0;
    img1.style.zIndex = '9';
    img2.style.zIndex = '9';
    img3.style.zIndex = '9';
    img1.style.transform = "translate3d(40px, 20px, 10px)";
    img2.style.transform = "translate3d(0, -20px, 10px)";
    img3.style.transform = "translate3d(-45px, 5px, 15px)";
    break;

    default:
    console.log('essa');
    img1.style.zIndex = '9';
    img2.style.zIndex = '9';
    img3.style.zIndex = '9';
    img1.style.transform = "translate3d(40px, 20px, 10px)";
    img2.style.transform = "translate3d(0, -20px, 10px)";
    img3.style.transform = "translate3d(-45px, 5px, 15px)";
    break;
   }
  })
