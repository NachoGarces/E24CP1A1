$(function(){
  $(".dial").knob({
    'min':0,
    'max':255,
    'change': function(){
      var cssRgb = 'rgb(' + $('#red').val() + ',' + $('#green').val() + ',' + $('#blue').val() + ')';
      $('#cuadradito').css('background-color', cssRgb);
      $('#textito').html(cssRgb);
    }
  });
});
