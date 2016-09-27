// select box
$('#category-filter').on('change', function(){
  if($(this).val()){
    console.log($(this).val());
    $('.article').hide();
    $('.article[data-category=' + $(this).val() + ']').fadeIn();
  }
});
