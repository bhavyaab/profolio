//tab click
$('.tab').on('mousehover', function(){
  if($(this).data('content')){
    $('section').hide();
    $('.' + $(this).attr('data-content')).fadeIn();
  }
  $('.article').click();
});
// select box
$('#category-filter').on('change', function(){
  if($(this).val()){
    $('.article').hide();
    $('.article[data-category=' + $(this).val() + ']').fadeIn();
  }
});
