function validateInput(inputElement) {
  inputElement.value = inputElement.value.replace(/[^a-zA-Z\s]/g, "");
}

function validateNumericInput(inputElement) {
  inputElement.value = inputElement.value.replace(/\D/g, '');
}


setTimeout(function() {

  $(".open-popup").click();

 }, 5000);

// card-slider

$('.card-slider').slick({
  autoplay: true,
  dots: false,
  arrows:true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:"<img class='a-left control-c prev test-prev' src='assets/images/right-arrow.webp'>",
  nextArrow:"<img class='a-right control-c next test-next' src='assets/images/left-arrow.webp'>",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});




// portfolio slider 2

$('.portfolio-slider-2').slick({

  dots: false,

  infinite: true,

  arrows: false,

  autoplay: true,

  autoplaySpeed: 0,

  speed: 20000,

  pauseOnHover: true,

  cssEase: 'linear',

  slidesToShow:5,

  slidesToScroll:1 ,

  responsive: [

  {

  breakpoint: 1600,

  settings: {

  slidesToShow:4,

  slidesToScroll: 1,

  infinite: true,

  arrows: false,

  dots: false

  }

  },

  {

  breakpoint: 992,

  settings: {

  slidesToShow: 3,

  arrows: false,

  slidesToScroll: 1

  }

  },

  {

  breakpoint: 768,

  settings: {

    autoplay: true,

    prevArrow: false,

    nextArrow: false,

    infinite: true,

    slidesToShow: 2,

    slidesToScroll: 1,

  }

  }

    ]

});




// portfolio slider 1

$('.portfolio-slider-1').slick({

  dots: false,

  infinite: true,

  arrows: false,

  autoplay: true,

  autoplaySpeed: 0,

  speed: 15000,

  pauseOnHover: true,

  cssEase: 'linear',

  slidesToShow:5,

  slidesToScroll:1 ,

  responsive: [

  {

  breakpoint: 1600,

  settings: {

  slidesToShow:4,

  slidesToScroll: 1,

  infinite: true,

  arrows: false,

  dots: false

  }

  },

  {

  breakpoint: 992,

  settings: {

  slidesToShow: 3,

  arrows: false,

  slidesToScroll: 1

  }

  },

  {

  breakpoint: 768,

  settings: {

    autoplay: true,

    prevArrow: false,

    nextArrow: false,

    infinite: true,

    slidesToShow: 2,

    slidesToScroll: 1,

  }

  }

    ]

});


// TESTIMONIAL
$('.testimonial-slider').slick({

  slidesToScroll: 1,
  slidesToShow: 2,
  autoplay: false,
  arrows: false,
  dots: true,
  vertical: true,
  prevArrow: true,
  nextArrow: true,
  verticalSwiping: true
      
  });

// pricing slider
$('.price-slider').slick({
  autoplay: true,
  infinite: true,
  arrows: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows:false,
        dots: true,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows:false,
        dots: true,
        slidesToScroll: 1,
      }
    }
  ]
});


// card-grid
if ($(window).width() < 991) {

  $('.card-wrap-slider').slick({
    autoplay: true,
    dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows:false,
          dots: true,
          slidesToScroll: 1,
        }
      }
    ]
  });

}


// card-grid
if ($(window).width() < 991) {

  $('.card-grid').slick({
    autoplay: true,
    dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows:false,
          dots: true,
          slidesToScroll: 1,
        }
      }
    ]
  });

}

// testimonial
$('.testi-slider').slick({
  autoplay: false,
  infinite: true,
  arrows: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows:false,
        dots: true,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows:false,
        dots: true,
        slidesToScroll: 1,
      }
    }
  ]
});


// portfolio-mb-slider
if ($(window).width() < 991) {

  $('.portfolio-mb-slider').slick({
    autoplay: true,
    dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows:false,
          dots: true,
          slidesToScroll: 1,
        }
      }
    ]
  });

}


// book-portfolio-slider
$('.book-portfolio-slider').slick({
  slidesToShow: 5,
  dots: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  pauseOnHover: false,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        arrows:false,
        slidesToScroll: 1,
      }
    }
  ]
});
