var article = [];

var source = $('#home-template').html();
var template = Handlebars.compile(source);
var theCompiledHtml = template(myContext);
$('.home').html(theCompiledHtml);
console.log(theCompiledHtml);
