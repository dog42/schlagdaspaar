

var g = 0;
var p = 0;

Reveal.addEventListener( 'slidechanged', function( event ) {
  stopaudio(); 
  document.getElementById('paar').innerHTML = p;
  document.getElementById('gast').innerHTML = g;
} );

Reveal.addEventListener( 'point', function() {
  g = 0;p = 0;
  document.getElementById('paar').innerHTML = p;
  document.getElementById('gast').innerHTML = g;
  document.getElementsByClassName('overr')[0].style.display = 'block';
  document.getElementsByClassName('overl')[0].style.display = 'block';
} );
Reveal.addEventListener( 'point1', function() {
  g = 0;p = 0;
  document.getElementById('paar').innerHTML = p;
  document.getElementById('gast').innerHTML = g;
  document.getElementsByClassName('overr')[0].style.display = 'block';
  document.getElementsByClassName('overl')[0].style.display = 'block';
} );

Reveal.addEventListener( 'nopoint', function() {
  g = 0;p = 0;
  document.getElementById('paar').innerHTML = p;
  document.getElementById('gast').innerHTML = g;
  document.getElementsByClassName('overr')[0].style.display = 'none';
  document.getElementsByClassName('overl')[0].style.display = 'none';
} );


function stopaudio() {
  document.getElementById('sound1').pause();
  document.getElementById('sound2').pause();
  document.getElementById('sound3').pause();
  document.getElementById('film1').pause();
  document.getElementById('film2').pause();
  document.getElementById('film3').pause();
  document.getElementById('film4').pause();
  document.getElementById('film5').pause();
  document.getElementById('film6').pause();
  document.getElementById('film7').pause();
  document.getElementById('film8').pause();
  document.getElementById('film9').pause();
  var elements=document.getElementsByClassName('fa-play');
  for (var i = 0; i < elements.length; i++) { elements[i].style.color="black";}
  var elements=document.getElementsByClassName('asw');
  for (var i = 0; i < elements.length; i++) { elements[i].style.display = 'none';}
  var elements=document.getElementsByClassName('fa-question')
  for (var i = 0; i < elements.length; i++) { elements[i].style.display = 'block';}
}





document.onkeyup=function(e){

    if (e.keyCode == 49) { //1
      toggleSound('sound1',1);
      
      return false;
    }
    if (e.keyCode == 50) { //2
       toggleSound('sound2',1);
       return false;
    }
    if (e.keyCode == 51) { //3
       toggleSound('sound3',1);
       return false;
    }

    if (e.keyCode == 81) { //Q
       toggleSound('buzzer',1);
       return false;
    }
    if (e.keyCode == 87) { //W
       toggleSound('buzzer2',1);
       return false;
    }
    if (e.keyCode == 69) { //E
       toggleSound('jingl',1);
       return false;
    }
    if (e.keyCode == 82) { //R
       toggleSound('right',1);
       return false;
    }
    if (e.keyCode == 84) { //T
       toggleSound('cdw',1);
       return false;
    }
    if (e.keyCode == 65) { //A
      var folie = Reveal.getIndices();
      if (folie.h == 5 && folie.v != 0) {
        toggleSound('film' + folie.v);
        toggleClassColor('fa-play','green','black');
     }
      return false;
    }
    if (e.keyCode == 68) { //D
      var folie = Reveal.getIndices();
      if (folie.h == 5 && folie.v != 0) {
        answer('film' + folie.v);
     }
      return false;
    }
    if (e.keyCode == 90) { //Z
        p+=1
       document.getElementById('paar').innerHTML = p;
       return false;
    }
    if (e.keyCode == 85) { //U
       g+=1
       document.getElementById('gast').innerHTML = g;
       return false;
    }
    if (e.keyCode == 73) { //I
        g=0;p=0;
       document.getElementById('paar').innerHTML = p;
       document.getElementById('gast').innerHTML = g;
       return false;
    }

    
    if (e.keyCode == 48) { //0
       stopaudio();
       return false;
    }
    

    if (e.keyCode == 67) { //c
       startTimer(120, document.getElementById('time'));
       return false;
    }
}

function toggleClassColor(e,c1,c2) {
  var elements = document.getElementsByClassName(e);
  if (elements[0].style.color == c1)
    for (var i = 0; i < elements.length; i++) { elements[i].style.color=c2;}
  else
    for (var i = 0; i < elements.length; i++) { elements[i].style.color=c1;}
}


function toggleSound(e, stop) {
  var element = document.getElementById(e);
  if (element.paused)
    element.play();
  else
    element.pause();
    if (stop) { element.currentTime = 0;}
}

function toggleHide(e) {
  var element = document.getElementById(e);
  if (element.style.display == 'none')
    element.style.display = 'block';
  else
    element.style.display = 'none';
}

function answer(e) {
  toggleHide(e + "_A");
  toggleHide(e + "_Q");
}

Reveal.addEventListener( 'looper', function() {
  var element = document.getElementById('logo');
  element.classList.remove('looper2');
  element.classList.add('looper2');
    // Called each time the slide with the "stats" state is made visible
} );




var cdw = 0;

function startTimer(duration, display) {
  if (cdw == 0) {
    cdw = 1;
    var timer = duration, minutes, seconds;

    var interval = setInterval(function () {
        --timer;
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (timer == 9) {toggleSound('cdw2',1);}

        if (timer <= 0) {
            
            display.textContent = "STOP " + minutes + ":" + seconds + " STOP"
            clearInterval(interval);
            cdw = 0;
            return;
        }
    }, 1000);
  }
}



