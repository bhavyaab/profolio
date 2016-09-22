var source = $('#home-template').html();  //fetch the handelbar template
var template = Handlebars.compile(source); //compile it
var theCompiledHtml = template(myContext); //
$('.home').append(theCompiledHtml);

//filter creation
var sourceC = $('#category-option-template').html();
var templateC = Handlebars.compile(sourceC);
var theCompiledHtmlC = templateC(myContext);
$('#category-filter').append(theCompiledHtmlC);
