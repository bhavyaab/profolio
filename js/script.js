var source = $('#home-template').html();  //fetch the handelbar template
var template = Handlebars.compile(source); //compile it
var theCompiledHtml = template(myContext); //
$('.home').append(theCompiledHtml);

var fObj = { filter: ($.unique(myContext.myLocaldata.map(function(index){  //generate category from each article and pass to $.unique jQuery function to generate unique article category.
  return index.category;
}))).map(function(item){  //converted arry into object as it handelbar template recieves object as parameter.
  return {category: item};
}),
};
// grab the template in html and populate with category and invoke to the DOM.
var sourceC = $('#category-option-template').html();
var templateC = Handlebars.compile(sourceC);
var theCompiledHtmlC = templateC(fObj);
$('#category-filter').append(theCompiledHtmlC);
