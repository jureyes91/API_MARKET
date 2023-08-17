$(document).ready(function(){

    function menuMobile(){
        $(".menu_mobile").click(function(){
            $('.navbar').toggleClass("activeMobile");
        });
    }


    function textAnimation(){
        var TEXTS = ["con soluciones financieras", "con diferentes opciones de pago", "de manera fácil y segura"];
        var index = 0;
    
        $(function() {
            setInterval(function() {
                $('#header-text-change').fadeOut(800, function() {
                $(this).text(TEXTS[index++]).fadeIn(800);
                if (index === TEXTS.length)
                    index = 0
                });
            }, 5000);
        });
    }

    menuMobile();
    textAnimation();

});


// const intro = document.querySelector(".intro");
// const video = intro.querySelector("video");
// const text = intro.querySelector("h1");
// //END SECTION
// const section = document.querySelector("section");
// const end = section.querySelector("h1");

// //SCROLLMAGIC
// const controller = new ScrollMagic.Controller();

// //Scenes
// let scene = new ScrollMagic.Scene({
//   duration: 9000,
//   triggerElement: intro,
//   triggerHook: 0
// })
//   .addIndicators()
//   .setPin(intro)
//   .addTo(controller);

// //Text Animation


// setInterval(() => {
//   delay += (scrollpos - delay) * accelamount;
//   console.log(scrollpos, delay);

//   video.currentTime = delay;
// }, 33.3);
// function toggleMute() {

//     var video=document.getElementById("videoId");
  
//     if(video.muted){
//       video.muted = false;
//     } else {
//       debugger;
//       video.muted = true;
//       video.play()
//     }
  
//   }
  
//   $(document).ready(function(){
//     setTimeout(toggleMute,3000);
//   })