function digitalClock() {
  let datum = new Date();
  let hours = datum.getHours();
  let minutes = datum.getMinutes();
  let seconds = datum.getSeconds();

  if (hours < 10) {
    document.getElementById('hours').innerHTML = '0' + hours + ':';
  } else {
    document.getElementById('hours').innerHTML = hours + ':';
  }

  if (minutes < 10) {
    document.getElementById('minutes').innerHTML = '0' + minutes + ':';
  } else {
    document.getElementById('minutes').innerHTML = minutes + ':';
  }

  if (seconds < 10) {
    document.getElementById('seconds').innerHTML = '0' + seconds;
  } else {
    document.getElementById('seconds').innerHTML = seconds;
  }
}

digitalClock();

setInterval(digitalClock, 1000);