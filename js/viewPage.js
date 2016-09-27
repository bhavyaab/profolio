// select box
$('#category-filter').on('change', function(){
  if($(this).val()){
    $('.article').hide();
    $('.article[data-category=' + $(this).val() + ']').fadeIn();
  }
  if(($(this).val()) === ''){$('.article').fadeIn();}
});
