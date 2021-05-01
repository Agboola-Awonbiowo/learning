$(document).ready(function(){

    // Harmburger
    $('.menu-button').click(function(){
        $('.menu-button').toggleClass('active');
    });

   $('.menu-button').click(function(){
        $('#menu').fadeToggle();
    });

    $('.menu').on('click', function(){
        $('#menu').fadeOut();
    });


    $(document).on('click', '.menu .color', function(){
        $('.menu-button').removeClass('active');
    });

    // calling dropdown courses page
    $('.serv').on('click', function(){
        $('.serv1').show();
        $('.serv2').show();
        $('.button').show();
        $('.serv1').removeClass('active3');
        $('.serv2').removeClass('active3');
        
        $.get('courses.html', function(data){
            $('.area').html(data);
        });
        
    });

    $('.servs').on('click', function(){
        $('.serv1').hide();
        $('.serv2').hide();
        $('.button').hide();
        $('.serv1').removeClass('active3');
        $('.serv2').removeClass('active3');
        $.get('courses.html', function(data){
            $('.area').html(data);
        });
        
    });

    //calling regular courses page
    $('.serv1').on('click', function(){
        $.get('regular.html', function(data){
            $('.area').html(data);
        });
    });

    

    // adding active to the menu
    $('a').click(function(){
        $('a').removeClass('active1');
        $(this).addClass('active1');
    });

    // adding active to the dropdown
    $('.serv1').on('click', function(){
        $(this).addClass('active3');
    });
    
    $('.serv2').on('click', function(){
        $('.serv1').removeClass('active3');
    });

    $('.serv2').on('click', function(){
        $(this).addClass('active3');
    });

    $('.serv1').on('click', function(){
        $('.serv2').removeClass('active3');
    });

    $('.button').on('click', function(){
        $('.serv1').removeClass('active3');
        $('.serv2').removeClass('active3');
    });

    // adding event to closing button
    $('.button').on('click', function(){
        $('.button').hide();
        $('.serv1').hide();
        $('.serv2').hide();
        $.get('courses.html', function(data){
            $('.area').html(data);
        });
    });

    // calling homepage
    $('.home').on('click', function(){
        $('.button').hide();
        $('.serv1').hide();
        $('.serv2').hide();
        
        $.get('home.html', function(data){
            $('.area').html(data);
        });
        
    

    });

    function play() {
        setInterval(function(){
            var next = $(".slider .active").removeClass("active").next(".slide");
            if (!next.length) {
                next = $(".slider .slide:first");
            }
            next.addClass("active");
        }, 10000);
    }
    play();
    
   

    // callimg course booking page
    $('.booking').on('click', function(){
        $('.button').hide();
        $('.serv1').hide();
        $('.serv2').hide();
        $.get('coursebooking.html', function(data){
            $('.area').html(data);
        });
    });

    // callimg course whyus page
    $('.why').on('click', function(){
        $('.button').hide();
        $('.serv1').hide();
        $('.serv2').hide();
        $.get('whyus.html', function(data){
            $('.area').html(data);
        });
    });

    // callimg contact page
    $('.contact').on('click', function(){
        
        $('.button').hide();
        $('.serv1').hide();
        $('.serv2').hide();
       // $.ajax({url: "contact.html", success: function(result){
          //  $(".area").html(result);
       // }});

       $.ajax({
        type: "GET",
        url:('contact.html'),
       // cache: false,
        //async:true,
        success: function(result){
          $(".area").html(result);
        }
    });

    

   });

    // sticky nav

    // grab the initial top offset of the navigation 
	var stickyNavTop = $('.anch').offset().top;
		   	
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function(){
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
                      
    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) { 
        $('.anch').addClass('sticky');
        } else {
          $('.anch').removeClass('sticky'); 
        }
    };
 
    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });


    // course booking form event
    $('input').blur(function() {
        var $this = $(this);
        if ($this.val())
          $this.addClass('used');
        else
          $this.removeClass('used');
    });




    $('.bo-1').fadeIn(2000);

    $('.fade').fadeIn(5000);
   
    $('.right').fadeIn(5000);



    // animation

    $(document).ready(function() {

        function checkElementInView() {
          $('.content').each(function(i) {
      
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
      
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
      
              setTimeout($(this).addClass('animate'), 500);
            }
      
          });
      
        };
      
      
        /* Every time the window is scrolled ... */
        $(window).scroll(function() {
      
          /* Check the location of each desired element */
          checkElementInView();
      
        });
        checkElementInView();
    });


});

  
