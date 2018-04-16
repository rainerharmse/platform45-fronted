$(function() {

    var slideButton = $(".slider-arrow");
    var opened = false;
    var rightPane = $('.right-pane.cover');
    
    slideButton.click(function(){
        slidePaneSetup();
    });

    function slidePaneSetup(){
        if(document.documentElement.clientWidth <= 975){
            $(".slider-arrow").css('background-image', 'url(/images/oval_close_up.png)');
            scrollPageTo();
            rightPane.removeClass('animate-left animate-right');
            slidePane('animate-up', 'animate-down');
        }else{
            $(".slider-arrow").css('background-image', 'url(/images/oval_close.png)');
            slidePane('animate-left', 'animate-right');
        }
    }
   
    function slidePane(animateIn, animateOut){
        if(!opened){
            rightPane.removeClass(animateIn);
            rightPane.addClass(animateOut);
            
            opened = true;
        }else{
            rightPane.removeClass(animateOut);
            rightPane.addClass(animateIn);
            opened = false;
        }
    }

    function scrollPageTo(){
		var form_top_pos = $('.right-pane').position().top
		$('html,body').animate({scrollTop: form_top_pos}, 1000);
	}
});