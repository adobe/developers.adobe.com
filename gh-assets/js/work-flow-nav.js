$(document).ready(function(){

    $('.work-flow_menu ul li').on("click", function(e) {
      $('.work-flow_menu ul li.active').removeClass('active');
      $(this).addClass("active");

      if (!($(".work-flow_code").is(":visible"))) {
        var $el = $(this).children();
        $($el).toggleClass('open');
      }
      else {
        $('div.work-flow-menu-support.work-flow-support-mode-mobile.open ').removeClass('open');
        //remove recently added info copy and button
        $( "#sdk-support .work-flow-menu-support" ).remove();

        //now cloned and prepend new selected info copy and button
        var clonedEl = $(this).children().clone(true,true);
        var $currentEl = $(clonedEl[1]).removeClass('work-flow-support-mode-mobile');
        var itemID =  $(this).attr('id') + "-code";

        //with old copy and button removed, prepend newly clone copy and button, make sure we're not at the home menu
        if($('#home-menu').length <= 0){
          $($currentEl).prependTo("#sdk-support");
        }

        //remove the open class on all children and mavailable the one selected
        var $el = $('.code-viewer-wrapper').children();
        $($el).removeClass('code-window-opened');
        $(".code-viewer-wrapper #" + itemID + ".sdk-embed-wrapper").addClass('code-window-opened');
      }

  });

  // Use case tiles on HOME, DOCGEN, DOC EXTRACT
  if ($(".case-item, .key-ext-item").is(":visible")) {
    $('.case-item, .key-ext-item').on('click', function(e){
      window.location = $(this).data('href');
    });
  }
  
  // The CTA buttons on the home page hero carousel
  if ($("#slider-blurb").is(":visible")) {
    $('#slider-blurb .button-link').on('click', function(e){
      e.preventDefault();
      let activeLink = $('.fadeInSlideTxt .button-link').attr('href');
      let target = $('.fadeInSlideTxt .button-link').attr('target');
      window.open(activeLink, target);
      //window.location.href = activeLink;  
    });
  }

  if ($(".use-case-menu-item").is(":visible")) {

      $('.use-case-menu-item').on("click", function(e) {

        if(!$(this).hasClass('open')){
          var $el = $(this).siblings();  //use-case-menu-support

          $('.api-use-case_menu li .use-case-menu-item').removeClass('open');
          $('.api-use-case_menu li .use-case-menu-support').removeClass('open');
          $('.api-use-case_menu li .use-case-menu-support .uc-sub-menu').removeClass('open');
          $('.api-use-case_menu li .use-case-menu-support .uc-sub-menu').removeClass('active');

          $(this).toggleClass('open');

          var $firsChildActive = $($el).children()[0];

          $($el).toggleClass('open');

          $($firsChildActive).toggleClass('open');
          $($firsChildActive).addClass('active');
        }

      });

      UC_menuOpen();
  }

  //CH This is on the DocGen page
  if ($('.sample-more-button').is(':visible')) {
    $('.sample-more-button').on('click', function(e){
      $('.show-templates').css('display', 'none');
      $('.sample-more').addClass('opened');
    })
  }

  $('.work-flow_menu ul li').first().click();


  $('.main-nav-hamburger').on( "click", function(e) {
    $('.main-nav-wrapper').toggleClass('opened');
  });

  $('.sub-nav-menu-wrapper').on( "click", function(e) {
    $( this ).toggleClass( 'opened');
  });

  $('.sub-nav-menu-item').on( "click", function(e) {

    //$( this ).toggleClass( 'active');


    var $ddl = $('.sub-nav-menu-item');
    var ddlSibs = $(this).children()[0];

    if($( this ).hasClass('active')){
      //console.log("is class active");
      if($(ddlSibs).hasClass('has-sub')){
        e.preventDefault();

        var $el = $(this).children()[1];
          $( $el ).toggleClass( 'sub-dropdown');
          //console.log("has class active")
        return false;
      }
    }else{


      $($ddl).each(function(){
        $(this).removeClass('active');
        var $tempDdlSibs = $(this).children()[1];
        $($tempDdlSibs).removeClass('sub-dropdown');

      });

      //$( this ).addClass('active');
      if($(ddlSibs).hasClass('has-sub')){
        e.preventDefault();

        //console.log("has no class active")

        $($ddl).each(function(){
          $(this).removeClass('active');
          var $tempDdlSibs = $(this).children()[1];
          $($tempDdlSibs).removeClass('sub-dropdown');

        });

        var $el = $(this).children()[1];

        $($el).addClass('sub-dropdown');
        $( this ).addClass('active');

        return false;
      }
    }
  });

  // The above eats the clicks on it's children, the menu items.
  // This get's the event on the link and stops propagation but allows
  // the default action.
  $('.dropdown-content-wrapper a').on('click', function(e){
    e.stopPropagation()
  })

  $('.sub-nav-menu-item').on( "mouseout", function(e) {
    var $ddl = $('.sub-nav-menu-item');
    var ddlSibs = $(this).children()[0];
    var ddlSibsCopy = $('.dpd-sub-nav-menu-copy');

    if($( ddlSibsCopy).length <= 0){
      console.log("does not have copy")
      return;
    }

    if($( this ).hasClass('active')){

      if($(ddlSibs).hasClass('has-sub')){
        e.preventDefault();
        $($ddl).each(function(){
          var $tempDdlSibs = $(this).children()[1];
          $($tempDdlSibs).removeClass('sub-dropdown');
          //$(this).removeClass('active');
        });
        return false;
      }
    }
  });


    //window resize to properly deal with the animation on mobile TBD
    // run test on resize of the window
    $(window).resize(resetWorkFlowMenu);

});

//Function to the css rule
function resetWorkFlowMenu(){
  // console.log("deactivating work flow menu if active")
  $('div.work-flow-support-mode-mobile.open').removeClass('open');
  $('div.work-flow-menu-item.active').removeClass('active');
}

$(document).load(function(){
  //Prism copy to clipboard
  //
  // al pre tags on the page
  const pres = document.getElementsByTagName("pre")

  //
  // reformat html of pre tags
  if (pres !== null ) {
    for (let i = 0; i < pres.length; i++) {
      // check if its a pre tag with a prism class
      if (isPrismClass(pres[i])) {
        // insert code and copy element
        pres[i].innerHTML = `<div class="copy">copy</div><code class="${pres[i].className}">${pres[i].innerHTML}</code>`
        console.log(pres[i].innerHTML)
      }
    }
  }
})


//get RSS Feed
function getRSSFeed(RSS_URL){
  $.ajax(RSS_URL, {
    accepts: {
      xml: "application/rss+xml"
    },

    dataType: "xml",

    success: function(data) {
      $(data)
        .find("item")
        .each(function() {
          const el = $(this);

          const template = `
            <article>
              <img src="${el.find("link").text()}/image/large.png" alt="">
              <h2>
                <a href="${el
                  .find("link")
                  .text()}" target="_blank" rel="noopener">
                  ${el.find("title").text()}
                </a>
              </h2>
            </article>
          `;

          // <div>
          //     <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg01.jpg" alt=""> </a>
          //     <p class="blog-title">
          //         Adding Annotations to a PDF Using Adobe PDF Embed API
          //     </p>
          //     <p class="blog-text">Have you ever wanted to markup a PDF file interactively with your team the same way you can in Microsoft Office 365 or Google Docs?</p>
          // </div>
          document.body.insertAdjacentHTML("beforeend", template);
        });
    }
  });
}


function UC_menuOpen(hasEvent){
  //api-use-case_menu
  var el = $('.api-use-case_menu li .use-case-menu-support .uc-sub-menu');

  if($(el).hasClass('active')){
    var activeItem = $('.api-use-case_menu li .use-case-menu-support .uc-sub-menu.active');
    var itemParent = $(activeItem).parent();
    var _root = $(activeItem).parent().siblings();
    $(_root).toggleClass('open');
    $(itemParent).toggleClass('open');
  }
}


var tempSorts = [];
function onCheckedSort(checkBoxItem) {
 
  var isBoxChecked = checkBoxItem.checked ? true : false; 
  var $wrap = $('.sample-wrapper');
  var sortOnID = $(checkBoxItem).attr('id');  //get item ID

  if(isBoxChecked){
    sortOnID = $(checkBoxItem).attr('id');

    //we hide all items at first
    if(tempSorts.length <=0){
      $wrap.find('.sample-item').css({'display': 'none'});
    }

    //we then look for the ones having our id reference
    $wrap.find("[data-item-id='" + sortOnID + "']").css({'display': 'block'});

    tempSorts.push(sortOnID);
  }else{
    if(tempSorts.includes(sortOnID)){
      for( var i = 0; i < tempSorts.length; i++){     
        if ( tempSorts[i] === sortOnID) {     
          tempSorts.splice(i, 1); 
        }
      } 
      $wrap.find("[data-item-id='" + sortOnID + "']").css({'display': 'none'});   
    }

    //If nothing is checked, we need to display all of them
    if(tempSorts.length <=0){
      $wrap.find('.sample-item').css({'display': 'block'});
    }
  }
}


/***** Doc-  Gen - API - Template Functions **********/

var items = [];
function drawDocApiItems(){

  $.getJSON( "/gh-assets/data/doc-api-data.json", function( data ) {
    $.each( data, function( key, val ) {

        $.each( val, function( key, item ) {
         items.push(item);
         drawTemplate(item);
        });

    });

  })
  
}

function onDocSort(index){
  console.log(index);
  if(index <= 0){
    onDateSort();
  }else{
    onAlphaSort();
  }
}

function onDateSort(){
  var arrClone = [...items];
  arrClone.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });

  $('.sample-wrapper').html("");

  $.each( arrClone, function( key, item ) {   
    drawTemplate(item);
  }); 
}

function onAlphaSort(){
  var arrClone = [...items];
  arrClone.sort(function (a, b) {
    
      if(a['title'] > b['title'])  
         return 1;  
      else if(a['title'] < b['title'])  
         return -1;  
  
      return 0;  
  });

  $('.sample-wrapper').html("");

  $.each( arrClone, function( key, item ) {   
    drawTemplate(item);
  });
}

function drawTemplate(templateData){
  var template = `
    <div class="sample-item card-container" data-item-id="${templateData.type}" data-date="${templateData.date}">
      <div class="sample-icon"><img src="../../../gh-assets/img/${templateData.image}"></div>
      <h5>${templateData.title}</h5>
      <div class="cta-wrapper">
          <a href="${templateData.link}" target="_blank" class="button-link">
          Download
          </a>
      </div>
    </div>
  `;

  $('.sample-wrapper').append(template);
}

drawDocApiItems();
