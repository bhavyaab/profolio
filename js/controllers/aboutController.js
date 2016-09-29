var aboutClick = function(){
  $('.home').hide();
  $('.about').fadeIn();
  projectClick();
};
var projectClick = function(){
  $('#contact').hide();
  $('.projects').fadeIn();
};
var contactClick = function(){
  $('.projects').hide();
  $('#contact').fadeIn();
};
