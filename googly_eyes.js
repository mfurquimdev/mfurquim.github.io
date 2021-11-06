// html setup
var pupilsHTMLCollection = document.getElementsByClassName('pupil');
var pupilsArray = Array.from(pupilsHTMLCollection);

// input
var input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
  mouseY: {
    start: 0,
    end: 70,
//    end: window.innerHeight,
    current: 0,
  },
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

// output
var output = {
  x: {
    start: 0,
    end: 50,
    current: 0,
  },
  y: {
    start: 0,
    end: 50,
    current: 0,

  },
};

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;


var handleMouseMove = function(event) {
  input.mouseX.current = event.clientX;
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

  input.mouseY.current = event.clientY;
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

  output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
  output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);
  output.x.opposite = output.x.end - (input.mouseX.fraction * output.x.range);
  output.y.opposite = output.y.end - (input.mouseY.fraction * output.y.range);

  if (output.y.current >= output.x.end) {
    output.y.current = output.x.end;
  }


  pupilsArray.forEach(function (pupil, i) {
    if (i % 2) {
      pupil.style.transform = 'translate(' + output.x.current + 'px, ' + output.y.current + 'px)';
    }
    else {
      pupil.style.transform = 'translate(' + output.x.current + 'px, ' + output.y.current + 'px)';
    }
  });
}


var handleTouchMove = function(event) {

  console.log('event', event.touches[0].clientX)
}


var handleResize = function(event) {
  input.mouseX.end = window.innerWidth - 200;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;

  input.mouseY.end = window.innerHeight - 75;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;
  console.log('window size \(', window.innerWidth, ',', window.innerHeight, ')');
}


window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);

window.addEventListener('touchmove', handleTouchMove);

