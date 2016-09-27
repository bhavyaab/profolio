// //tab click
// $('.tab').on('mouseover', function(){
//   if($(this).data('content')){
//     $('.tab').on('click', function(){
//       $('section').hide();
//       $('.' + $(this).attr('data-content')).fadeIn();
//     });
//
//     $('.article').click();
//   }});
// select box
$('#category-filter').on('change', function(){
  if($(this).val()){
    console.log($(this).val());
    $('.article').hide();
    $('.article[data-category=' + $(this).val() + ']').fadeIn();
  }
});
