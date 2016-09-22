// var article = [];

// function Article (opts) {  //declere constructor function to construct the 'Article' object
//   for (var keys in opts) {  //for loop will run for
//     this[keys] = opts[keys];
//   }
// }

var source = $('#home-template').html();  //fetch the handelbar template
var template = Handlebars.compile(source); //compile it
var theCompiledHtml = template(myContext); //
$('.home').append(theCompiledHtml);

//filter creation
var sourceC = $('#category-option-template').html();
var templateC = Handlebars.compile(sourceC);
var theCompiledHtmlC = templateC(myContext);
$('#category-filter').append(theCompiledHtmlC);
