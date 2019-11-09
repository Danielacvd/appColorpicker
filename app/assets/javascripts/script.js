$(function() {
  $(".dial").knob({
    'change': function() {
      var color_rgb='rgb(' + $('#c1').val() + ',' + $('#c2').val() + ',' + $('#c3').val() + ')';
      $('#color').css('background-color',color_rgb);
      var num = '#' + show($('#c1').val()) + show($('#c2').val()) + show($('#c3').val());
      $('#color').text(num);
    }
  });
});

function show(dec) {
  var caracteres = "0123456789ABCDEF";
  var low = dec % 16;
  var high = (dec - low) / 16;
  hex = "" + caracteres.charAt(high) + caracteres.charAt(low);
  return hex;
}
