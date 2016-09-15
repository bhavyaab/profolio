var article = [];

//decleare article object constructor
function Article(option){
  this.heading = option.heading;
  this.image = option.image;
  this.paragraph = option.paragraph;
  this.address = option.address;
  this.author = option.author;
};
//decleare method constructor to invoke content in html

Article.prototype.toHtml = function() {
  var $section = $('article.template').clone();    //grab the class 'article' section and clone the whole section
  $section.attr('category', this.category);
  $section.find('h1').text(this.heading);
  $section.find('img').text(this.image);
  $section.find('p').text(this.paragraph);
  $section.find('address a').attr('href', this.address);
  $section.find('address a').text(this.author);
  $section.removeClass('template');
  return $section;
};

//generate article array with all tha article in it as object "Article"
myLocaldata.forEach(function(index){
  article.push(new Article(index));
});
//push each article to the dom by calling method
article.forEach(function(index){
  $('.article').append(index.toHtml());
});
