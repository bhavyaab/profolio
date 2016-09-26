//tab click
$('.tab').on('mouseover', function(){
  if($(this).data('content')){
    $('.tab').on('click', function(){
      $('main > section').hide();
      $('.' + $(this).attr('data-content')).fadeIn();
    });
    $('.article').click();
    //about sections project tab click
    if($(this).attr('data-content') === 'about'){
      $('.contact').hide();
    }
  }});
// select box
$('#category-filter').on('change', function(){
  if($(this).val()){
    $('.article').hide();
    $('.article[data-category=' + $(this).val() + ']').fadeIn();
  }
  if(($(this).val()) === ''){$('.article').fadeIn();}
});
//show and hide project and contact section
$('.myTab').on('click', function(){
  if($(this).data('content')){
    $('.myTab').on('click', function(){
      $('.about > section').hide();
      $('.'+ $(this).attr('data-content')).fadeIn();
    });
  }
});
