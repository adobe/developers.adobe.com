
    /*let animCount = 0;
    let animStyle = ["fadeIn", "slideRight", "fadeIn", "slideRight","fadeIn", "slideRight", "fadeItIn", "slideUp"];
    let mcAnim = ['laptop', 'lp-pointer', 'ipad', 'ipad-pointer', 'phone', 'phone-pointer', 'flashes', 'slab-text'];

    var animateMobile = false;


    var element = document.getElementById("stage");
    element.addEventListener("animationstart", listener, false);
    element.addEventListener("animationend", listener, false);
    element.addEventListener("transitionend", listener, false);
    element.addEventListener("animationiteration", listener, false);

    // var element2 = document.getElementById("slab-text");
    // element2.addEventListener("animationstart", listener, false);
    // element2.addEventListener("animationend", listener, false);
    // element2.addEventListener("animationiteration", listener, false);
  

    function listener(event) {
      //console.log(event.type);
      switch(event.type) {
        case "animationstart":      
          break;
        case "animationend":
          animCount++;
          if( animCount < mcAnim.length){
            console.log("completed animation " + mcAnim[animCount-1]);
              //goto and Play next item
              gotoAndPlay(mcAnim[animCount], animStyle[animCount]);
          }
          break;
        case "transitionend":
          console.log("completed transition " + mcAnim[animCount-1]);
        break;
        case "animationiteration":
          
          break;
      }    
    }

    function deviceAnimation(){
      if(animateMobile){//skip playing the laptp
        console.log("Now playing mobile animation " );
        animCount = 2;
        gotoAndPlay("ipad", "fadeIn");
      }else{
        gotoAndPlay("laptop", "fadeIn");
      }    
  }

    function gotoAndPlay(clip, animotion){
        console.log("requesting  "+ animotion +" for playback on " + clip)
        let startAnim = document.getElementById(clip);
        startAnim.classList.add(animotion);
    }

    //Feature check
    function checkBrowserWindow(){
      let el = document.getElementById('code-screen');
      let elStyle = window.getComputedStyle(el, null).display;
        console.log( "Element style display value: " + elStyle)

        if(elStyle == "none"){          
          animateMobile = true;
        }else{
          animateMobile = false;
        }

        deviceAnimation();
    }

    //track end of window resizing
    function debounce(func){
      var timer;
      return function(event){
        if(timer){
          clearTimeout(timer);
          deviceAnimation();
        }
        timer = setTimeout(func,100,event);
      };
    }
    window.onresize = debounce;

    checkBrowserWindow();
    */

    

   function MoveText(){
    let textBlock = document.getElementById("slab-text");  
    textBlock.classList.add("slideUpFade");  

    //bring in devices
    fadeDevices();    
  }

  function fadeDevices(){
    let laptopDevice = document.getElementById("laptop");    
    let ipadDevice = document.getElementById("ipad");
    let phoneDevice = document.getElementById("phone");

    laptopDevice.classList.add("fadeItIn");      
   
    ipadDevice.classList.add("fadeItIn",  "delayPt5"); 
    phoneDevice.classList.add("fadeItIn", "delay1");

    //bring in the pointers
    fadeInPointers();    
  }

  //fadeIn POinters
  function fadeInPointers(){
    let laptopPointer = document.getElementById("lp-pointer");
    let ipadPointer = document.getElementById("ipad-pointer");
    let iphonePointer = document.getElementById("phone-pointer");

    laptopPointer.classList.add("fadeItIn", "delay1pt5");
    iphonePointer.classList.add("fadeItIn", "delay1pt5");
    ipadPointer.classList.add("fadeItIn", "delay1pt5"); 

    //bring in background image
    fadeBackImg();
  }


  //fadeIn background image
  function fadeBackImg(){
    let textBlock = document.getElementById("flashes");  
    textBlock.classList.add("fadeItIn", "delay1pt5"); 
  }


  //init
  MoveText();

  
  

  