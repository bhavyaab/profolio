
var myLocaldata = [];
//get and converet data.json
$.getJSON( 'js/data.json', function(response) {
  myLocaldata = response;
  home();
  // option();
});
var home = function(){
  var source = $('#home-template').html();  //fetch the handelbar template
  var template = Handlebars.compile(source); //compile it
  //option tag
  var sourceC = $('#category-option-template').html();
  var templateC = Handlebars.compile(sourceC);
  var option = [];
//loop throudg the myLocaldata array.
  myLocaldata.forEach(function(item){
    $('.home').append(template(item));
    option.push(templateC(item));
  });
  option = $.unique(option);
  option.forEach(function(item){$('#category-filter').append(item);});
};
