$(document).ready(function(){
    
  // Slick
  $('.pics-desk').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('#arrow-right'),
    prevArrow: $('#arrow-left'),
  });

  // calling upcoming courses page
  $('.serv2').on('click', function(){
    $.get('upcoming.html', function(data){
      $('.area').html(data);
    });
  });
  
  // upcoming dropdown courses 
  $('.course').on('click', function(){
    $(this).addClass('active4');
    $('.display').show();
    $.get('drup.html', function(data){
      $('.display').html(data);
    });
  });
  
    

  $('.btn3').on('click', function(){
    $('.display').hide();
    $('.drup').remove();
    $('.course').removeClass('active4');

  });

  /* Remaing text countdown*/
  maxlength = 320;
  $('#count').text(maxlength);
  
  $('textarea').bind('keyup keydown', function(){
    var count = $('#count');
    var characters = $(this).val().length;
  
    if(characters > maxlength) {
      count.addClass('over');
    } else {
      count.removeClass('over');
    }
     count.text(maxlength - characters);
  });


  // Slick 2
  $('.pics').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });


});
