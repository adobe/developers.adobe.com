

$(document).ready(function(){

    $('.work-flow_menu ul li').on( "click", function(e) {


        $('.work-flow_menu ul li.active').removeClass('active');
        $(this).addClass("active");       
            
        if (!($( ".work-flow_code" ).is(":visible")) ) {
            
            var $el = $(this).children();
            $($el).toggleClass( 'open');
            

        }else{


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


    $('.sub-nav-menu-wrapper').on( "click", function(e) {
        $( this ).toggleClass( 'opened');
    })

    
    $('.sub-nav-menu-item').on( "click", function(e) {
        $( this ).toggleClass( 'active');
    })



    //window resize to properly deal with the animation on mobile TBD

    // run test on resize of the window
    $(window).resize(resetWorkFlowMenu);

});

//Function to the css rule
function resetWorkFlowMenu(){
   // console.log("deactivating work flow menu if active")
    $('div.work-flow-support-mode-mobile.open').removeClass('open');
    $('div.work-flow-menu-item.active').removeClass('active');
   // $('#sdk-support').html('');
}
