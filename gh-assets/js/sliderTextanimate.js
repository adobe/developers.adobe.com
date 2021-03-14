  let animCount = 0;
    let animStyle = ["fadeIn", "fadeOut"];
    let mcAnim = ['slider-blurb'];

    var animateMobile = false;


    var element = document.getElementById("mcAnim");
    element.addEventListener("animationstart", listener, false);
    element.addEventListener("animationend", listener, false);
    element.addEventListener("transitionend", listener, false);
    element.addEventListener("animationiteration", listener, false);


    function listener(event) {
      //console.log(event.type);
      switch(event.type) {
        case "animationstart":      
          break;
        case "animationend":
        //   animCount++;
        //   if( animCount < mcAnim.length){
        //     console.log("completed animation " + mcAnim[animCount-1]);
        //       //goto and Play next item
        //       gotoAndPlay(mcAnim[animCount], animStyle[animCount]);
        //   }
          break;
        case "transitionend":
          console.log("completed transition " + mcAnim[animCount-1]);
        break;
        case "animationiteration":          
        break;
      }    
    }

//     function deviceAnimation(){
//       if(animateMobile){//skip playing the laptp
//         console.log("Now playing mobile animation " );
//         animCount = 2;
//         gotoAndPlay("ipad", "fadeIn");
//       }else{
//         gotoAndPlay("laptop", "fadeIn");
//       }    
//   }

    function gotoAndPlay(clip, animotion){
        console.log("requesting  "+ animotion +" for playback on " + clip)
        let startAnim = document.getElementById(clip);
    }