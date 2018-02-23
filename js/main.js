(function(){
  'use strict';

  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var result = document.getElementById('result');
  var startTime;
  var isStarted = false;

  start.addEventListener('click', function(){
    if (isStarted === true){
      return;
    }
    isStarted = true;
    result.textContent = 0.000.toFixed(3);
    result.className = '';
    this.className = 'pushed';
    stop.className = '';
    startTime = Date.now();
  });

  stop.addEventListener('click', function(){
    var elapsedTime;
    var diff;
    if (isStarted === false){
      return;
    }
    isStarted = false;
    this.className = 'pushed';
    start.className = '';
    elapsedTime = Date.now() - startTime;
    elapsedTime = elapsedTime / 1000;
    result.textContent = elapsedTime.toFixed(3);
    diff = elapsedTime - 5.0;
    if (diff > -1.0 && diff < 1.0){
      result.className = 'perfect';
    }

  });

})();
