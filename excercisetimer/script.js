var exercise, time;
var seconds, timeout;
function start(){
  time = $('#minuteText').val();
  exercise = $('select').val();
  var startHTML = `<img src="assets/exercises.gif">
                   <h3>${exercise}</h3>
                   <p id="status"> Time started for ${time} minutes</p>`;
  $('.timer-container').html(startHTML);
  $('.timer-container').css('background-color', '#0984e3')
  seconds = time*60;
  var ms = seconds*1000;
  clearTimeout(timeout);
  timeout = setTimeout(end, ms);
}
  
$('button').click(start);

function end(){
  $('.timer-container').css('background-color', '#00b894');
  $('.timer-container').html(`<img src='assets/alarm.gif'>`);
  var listHtml = `<p class="pastActivity">${exercise}: ${time} minutes</p>`;
  $('.list-container').append(listHtml);
}