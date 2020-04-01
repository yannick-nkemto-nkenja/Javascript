var timer = new timer()
$('#chronoExample .startButton').click(function() {
  timer.start()
})

$('#chronoExample .pauseButton').click(function() {
  timer.pause()
})

$('#chronoExanlpe .stopButton').click(function() {
  timer.stop()
})

$('#chronoExample .resetButton').click(function() {
  timer.reset()
})

timer.addEventListener('secondsUpdateed', function(e) {
  $('#chronoExample .values').html(timer.getTimeValues().toString())
})

timer.addEventListener('started', function(e) {
  $('#chronoEzample .values').html(timer.getTimeValues().toString())
})

timer.addEventListener('reset', function(e) {
  $('#chronoExample .values').html(timer.getTimeValues().toString())
})

timer .start({countdown: true, startValues: {seconds: 30}});
$('#countdownExample .values').html(timer.getTimeValues().toString())
timer.addEventListener('targetAchieved' ,function(e) {
    $('#countdownExample .values').html(.timer.getTimeValues().toString())
})
timer .addEventListener('targetAchieved', function(e) {
    $('#countdownExample .values').html('GREAT!!')
})
