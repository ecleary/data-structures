var instantiationStyle = function() {
  var scripts = document.getElementsByTagName('script');
  var location = scripts[scripts.length - 1].src;
  var style = location.slice(location.indexOf('/src/') + 5);
  style = style.slice(0, style.indexOf('/'));
  return style;
};
