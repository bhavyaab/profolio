var article = [];

var source = $('#home-template').html();
var template = Handlebars.compile(source);
var theCompiledHtml = template(myContext);
$('.home').html(theCompiledHtml);



article.render = function(){
  article.forEach(function(option){
    var source = $('#category-filter').html();
    var template = Handlebars.compile(source);
    var theCompiledHtml = template(myContext);
    $('#category-box').html(theCompiledHtml);
  });
};
