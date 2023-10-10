$(document).ready(function(){

    // MENU MOBILE

    function menuMobile(){
        $(".menu_mobile").click(function(){
            $('.navbar').toggleClass("activeMobile");
        });
    }

    // ANIMACIÓN HERO SECTION
    
    function playVideo(){
        $("#videoID").get(0).play();
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

    // TABS DE SECCION FUNCIONA

    function tabsFunciona(){

        const buttonTab = document.querySelectorAll('.tabs_funciona .slide');
        const textDesc = document.querySelectorAll('.tabs_funciona .slide .txt_funciona');
        const contImages = document.querySelectorAll('.tabs_images_funciona .picture');
        
        let comparador = null;
        
        
        $(buttonTab).click(function(){
            

            if($(this).hasClass('active')){

                
            }else{
                $(textDesc).slideUp();
                $(buttonTab).removeClass('active');
                $(this).addClass('active');
                $(this).find('.txt_funciona').slideDown();
            }
        });



        buttonTab.forEach((pest) => {
            
            pest.addEventListener("click", (e) => {
                buttonTab.forEach((el) => {
                    el.classList.remove("active");
                });
                e.currentTarget.classList.toggle("active");
                
                comparador = pest.dataset.funciona;


                contImages.forEach((infel) => {
                    if(infel.dataset.funciona === comparador){
                        infel.classList.add("active");
                    }else{
                        infel.classList.remove("active");
                    } 
                });
            }); 
        });
    }



    // TABS SOLUCIONES


    function tabsSoluciones(){

        const buttonTab = document.querySelectorAll('.cont_soluciones .nav_tabs ul li');
        const containerSoluciones = document.querySelectorAll('.cont_soluciones .c_soluciones');
        
        let comparador = null;
        
        // TAB
        
        $(buttonTab).click(function(){
            if($(this).hasClass('active')){

                
            }else{
                // $(textDesc).slideUp();
                $(buttonTab).removeClass('active');
                $(this).addClass('active');
                $('.grand_container').find('video').trigger('play');
                // $(this).find('.txt_funciona').slideDown();
            }
        });



        // CONTAINER

        buttonTab.forEach((pest) => {
            
            pest.addEventListener("click", (e) => {
                buttonTab.forEach((el) => {
                    el.classList.remove("active");
                });
                
                e.currentTarget.classList.toggle("active");
                
                comparador = pest.dataset.tabs;

                containerSoluciones.forEach((infel) => {
                    if(infel.dataset.tabs === comparador){
                        infel.classList.add("active");
                    }else{
                        infel.classList.remove("active");
                      
                    } 
                });
            }); 
        });
    }

    // FUNCION DE ANIMACION DE PARTES - Is visible in viewport


    (function() {
        var elements;
        var windowHeight;
      
        function init() {
          elements = document.querySelectorAll('.card_beneficio');
          windowHeight = window.innerHeight;
        }
      
        function checkPosition() {
          for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;
      
            if (positionFromTop - windowHeight <= 0) {
              element.classList.add('animate__fadeInUp');
              element.classList.remove('hidden');
            }
          }
        }
      
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
      
        init();
        checkPosition();
    })();


    //   ANIMACIÓN TABS BARRA - SECCION SOLUCIONES

    function animationBar(){
        
        let tabClick1 = document.querySelectorAll('.st1');
        let tabClick2 = document.querySelectorAll('.st2');
        let tabClick3 = document.querySelectorAll('.st3');
        let tabClick4 = document.querySelectorAll('.st4');
        let barState = document.querySelectorAll('.nav_tabs ul');
        

        $(tabClick1).click(function(){
            if($(barState).hasClass('barState1')){
                
            }else{
                $(barState).removeClass();
                $(barState).addClass('barState1');

            }
        });
        $(tabClick2).click(function(){
            if($(barState).hasClass('barState2')){
                
            }else{
                $(barState).removeClass();
                $(barState).addClass('barState2');

            }
        });
        $(tabClick3).click(function(){
            if($(barState).hasClass('barState3')){
                
            }else{
                $(barState).removeClass();
                $(barState).addClass('barState3');

            }
        });
        $(tabClick4).click(function(){
            if($(barState).hasClass('barState4')){
                
            }else{
                $(barState).removeClass();
                $(barState).addClass('barState4');

            }
        });
    }

    // ACTIVACION DE FUNCIONES


    menuMobile();
    textAnimation();
    tabsFunciona();
    tabsSoluciones();
    animationBar();
    playVideo();

});