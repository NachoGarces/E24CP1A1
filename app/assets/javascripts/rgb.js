$(function(){
  $(".dial").knob({
    'min':0,
    'max':255,
    'change': function(){
      var cssRgb = 'rgb(' + $('#red').val() + ',' + $('#green').val() + ',' + $('#blue').val() + ')';
      var cssRed = 'rgb(' + $('#red').val() + ', 0, 0)';
      var cssGreen = 'rgb(0, ' + $('#green').val() + ', 0)';
      var cssBlue = 'rgb(0, 0, ' + $('#red').val() + ')';
      $('#red').css('color', cssRed);
      $('#green').css('color', cssGreen);
      $('#blue').css('color', cssBlue);
      $('#cuadradito').css('background-color', cssRgb);
      $('#textito').html(cssRgb);
    }
  });
});
