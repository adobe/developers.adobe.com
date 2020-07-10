

$(document).ready(function(){

    $('.work-flow_menu ul li').on( "click", function(e) {


        $('.work-flow_menu ul li.active').removeClass('active');
        $(this).addClass("active");

        if($('#home-menu').length > 0){
            return;
        }

        if (!($( ".work-flow_code" ).is(":visible")) ) {
            
            var $el = $(this).children();
            $($el).toggleClass( 'open');

        }else{


           $('div.work-flow-menu-support.work-flow-support-mode-mobile.open ').removeClass('open');

            var children = $(this).children().clone(true,true);
            var $el = $(children[1]).removeClass('work-flow-support-mode-mobile');
            $("#sdk-support").html($el);
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
    console.log("deactivating work flow menu if active")
    $('div.work-flow-support-mode-mobile.open').removeClass('open');
    $('div.work-flow-menu-item.active').removeClass('active');
    $('#sdk-support').html('');
}
