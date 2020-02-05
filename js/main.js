(function ($) {
 "use strict";


  // Preloader
  setTimeout(function() {
    $('body').addClass('loaded');
  }, 3000);
  

  // Welcome Height
  var winH = $(window).height();    
  $('#sectionIntro').height(winH);     
  $(window).resize(function() {       
    var winH = $(window).height();
    $('#sectionIntro').height(winH);       
  });


 // Typed 
  $(".typer").typed({
    strings: ["Graphic Designer", "Web Developer", "Frontend Developer"],
    typeSpeed: 200,
    loop: true,
    cursorChar: "+"
  });


  // Slider Clients  
  $('.clients-container').slick({
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
     {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // Single Blog Post
  $('.read-btn a').on('click', function(event){
    event.preventDefault(); 
    $('.blog-post-box').removeClass('show').addClass('hide');
  });

  $('.read-btn a').on('click', function(event){
    event.preventDefault(); 
    $('.single-post-box').addClass('show');
    $(this).removeClass('hide');
  });

  $('.back-btn a').on('click', function(event){
    event.preventDefault(); 
    $('.single-post-box').removeClass('show').addClass('hide');
  });

  $('.back-btn a').on('click', function(event){
    event.preventDefault(); 
    $('.blog-post-box').addClass('show');
    $(this).removeClass('hide');
  });


  // Calendar
  $(function() {  
    var transEndEventNames = {
        'WebkitTransition' : 'webkitTransitionEnd',
        'MozTransition' : 'transitionend',
        'OTransition' : 'oTransitionEnd',
        'msTransition' : 'MSTransitionEnd',
        'transition' : 'transitionend'
      },
      transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
      $wrapper = $( '#custom-inner, #custom-inner1' ),
      $calendar = $( '#calendar, #calendar1' ),
      cal = $calendar.calendario( {
        onDayClick : function( $el, $contentEl, dateProperties ) {

          if( $contentEl.length > 0 ) {
            showEvents( $contentEl, dateProperties );
          }

        },
        caldata : codropsEvents,
        displayWeekAbbr : true
      } ),
      $month = $( '#custom-month' ).html( cal.getMonthName() ),
      $year = $( '#custom-year' ).html( cal.getYear() );

    $( '#custom-next' ).on( 'click', function() {
      cal.gotoNextMonth( updateMonthYear );
    } );
    $( '#custom-prev' ).on( 'click', function() {
      cal.gotoPreviousMonth( updateMonthYear );
    } );

    function updateMonthYear() {        
      $month.html( cal.getMonthName() );
      $year.html( cal.getYear() );
    }

    // just an example..
    function showEvents( $contentEl, dateProperties ) {

      hideEvents();
      
      var $events = $( '<div id="custom-content-reveal" class="custom-content-reveal"><h4>Events for ' + dateProperties.monthname + ' ' + dateProperties.day + ', ' + dateProperties.year + '</h4></div>' ),
        $close = $( '<span class="custom-content-close"></span>' ).on( 'click', hideEvents );

      $events.append( $contentEl.html() , $close ).insertAfter( $wrapper );
      
      setTimeout( function() {
        $events.css( 'top', '0%' );
      }, 25 );

    }
    function hideEvents() {

      var $events = $( '#custom-content-reveal' );
      if( $events.length > 0 ) {
        
        $events.css( 'top', '100%' );
        Modernizr.csstransitions ? $events.on( transEndEventName, function() { $( this ).remove(); } ) : $events.remove();

      }
    }  
  });


  // Contact
  $('.form-control').on('focusout',function(){
    if(this.value)$(this).addClass('has-value');
    else $(this).removeClass('has-value');
  });
    
})(jQuery);








