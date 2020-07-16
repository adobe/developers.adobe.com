

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


    $('.main-nav-hamburger').on( "click", function(e) {
        $('.main-nav-wrapper').toggleClass( 'opened');
    })

    $('.sub-nav-menu-wrapper').on( "click", function(e) {
        $( this ).toggleClass( 'opened');
    })

    
    $('.sub-nav-menu-item').on( "click", function(e) {
        $( this ).toggleClass( 'active');
    })


    
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


    // create clipboard for every copy element
    const clipboardJS = new clipboardJS('.copy', {
        target: (trigger) => {
            return trigger.nextElementSibling;
        }
    });

    //
    // do stuff when copy is clicked
    clipboardJS.on('success', (event) => {
    event.trigger.textContent = 'copied!';
    setTimeout(() => {
        event.clearSelection();
        event.trigger.textContent = 'copy';
    }, 2000);
    });

    //
    // helper function
    function isPrismClass(preTag) { 
        return preTag.className.substring(0, 8) === 'language'
    }

   
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

