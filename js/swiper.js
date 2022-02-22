
//  Thumbnail Swiper 
 var swiper = new Swiper(".thumbsSwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});



var swiper2 = new Swiper('.swiper#main-product-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 0,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    thumbs: {
      swiper: swiper,
    },

    // Zoom
    zoom: {
      maxRatio: 5,
      minRatio: 1,
      toggle: true,
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });



// Colour Options selector 

const colours = $('.colour-options');
const coloursBtn = $('.colour-options button');


colours.find('button').on('click', function () {
  console.log( $( this ) );

  coloursBtn.each(function (index) {
    $( this ).removeClass('active');
});

  if ( $( this ).is('#Tan') ) {
    swiper2.slideTo( 4, 300 );
    $( this ).addClass('active');

  } else if ($( this ).is('#Black')) {
    swiper2.slideTo( 5, 300 );
    $( this ).addClass('active');
    
  } else if ($( this ).is('#Grey')) {
    swiper2.slideTo( 6, 300 );
    $( this ).addClass('active');
    
  }
})


// Zoom Button 

const zoomBtn = $(' .zoom-btn ');

zoomBtn.on('click', function () {
  swiper2.zoom.toggle();
})