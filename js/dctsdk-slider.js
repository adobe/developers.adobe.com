$(document).ready(function(){
    $('.card-slider-container-home').slick({
      dots: false,
      mobileFirst : true,
      infinite: false,
      speed: 300,
      autoplay:true,
      autoplaySpeed:3000,
      slidesToShow: 3,
      slidesToScroll: 3,
      // variableWidth: true,
      // variableHeight: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.card-slider-container').slick({
      dots: false,
      mobileFirst : true,
      infinite: false,
      //speed: 300,
      autoplay:true,
      autoplaySpeed:3000,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

  //   $('.logo-fade-slider').slick({
  //     dots: false,
  //     fade:true,
  //     mobileFirst : true,
  //     infinite: false,
  //     //cssEase: 'ease-in-out',
  //     cssEase: 'linear',
  //     autoplay:true,
  //    // infinite: true,
  //     speed: 600,
  //     slidesToShow: 3,
  //    slidesToScroll: 1,
  //     responsive: [
  //       {
  //         breakpoint: 1440,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           dots: false
  //         }
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //           dots: false
  //         }
  //       },
  //       {
  //         breakpoint: 0,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           dots: false
  //         }
  //       }
  //     ]
  //   });
   });



  var nPage = window.location.pathname;
  nPage = nPage.substring(nPage.lastIndexOf('/') + 1);
  var strNewClass = nPage.split('.')[0];
  if(strNewClass == ""){strNewClass = "home"}
  $('body').addClass(strNewClass);
  console.log("You are in : "  + strNewClass)