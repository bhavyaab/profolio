$('.tab').on('mousehover', function(){
  if($(this).data('content')){
    $('section').hide();
    $('.' + $(this).attr('data-content')).fadeIn();
  }
  $('.article').click();
});
