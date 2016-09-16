$('.tab').on('click', function(){
  if($(this).data('content')){
    $('section').hide();
    $('.tab').on('click', function(){
      $('.' + $(this).attr('data-content')).fadeIn();
    });
  }
  $('.article').click();
});
