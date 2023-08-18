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


    function tabsFunciona(){

        const buttonTab = document.querySelectorAll('.tabs_funciona .slide');
        const textDesc = document.querySelectorAll('.tabs_funciona .slide .txt_funciona');
        const contImages = document.querySelectorAll('.tabs_images_funciona .picture');
        
        let comparador = null;
        
        
        $(buttonTab).click(function(){
            

            if($(this).hasClass('active')){

                
            }else{
                $(buttonTab).removeClass('active');
                $(textDesc).slideUp();
                $(this).addClass('active');
                $(this).find('.txt_funciona').slideDown();
            }

            
           
        })

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

    menuMobile();
    textAnimation();
    tabsFunciona();

});