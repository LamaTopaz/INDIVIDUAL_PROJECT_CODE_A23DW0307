function move90() {
    var elem = document.getElementById("myBar-90%");
    var progress = 90;
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= progress) {
        clearInterval(id);
      } else {
        width += 0.5;
        elem.innerHTML = width.toFixed(0) + '%';
        elem.style.width = width + '%';
      }
    }
}

function move85() {
    var elem = document.getElementById("myBar-85%");
    var progress = 85;
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= progress) {
        clearInterval(id);
      } else {
        width += 0.5;
        elem.innerHTML = width.toFixed(0) + '%';
        elem.style.width = width + '%';
      }
    }
}

function move70() {
    var elem = document.getElementById("myBar-70%");
    var progress = 70;
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= progress) {
        clearInterval(id);
      } else {
        width += 0.5;
        elem.innerHTML = width.toFixed(0) + '%';
        elem.style.width = width + '%';
      }
    }
}


window.onload = function(){
    move90();
    move85();
    move70();
}