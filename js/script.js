//Hide Loading-screen
$(window).on("load",function()
	{	
		//hide screen
		$(".loading-screen .sk-folding-cube").fadeOut(2000,function()
			{
				$('body').css('position','relative');
				//show the scroll
				
				$(this).parent().fadeOut(2000,function()
					{
						//show the scroll
						$('body').css('overflow','auto');

						//remove all section because no longer need it
						$(this).remove();
					});
			});
	});
//end


/*make nav opacity 0.8 when scroll*/
$(function(){
	'use strict';
	var navbar=$('.navbar');

	$(window).scroll(function(){

		if($(window).scrollTop() >= navbar.height())
			{
				navbar.addClass("scrolled");
				navbar.removeClass("bg-dark");
			}
		else
			{
				navbar.addClass("bg-dark");
				navbar.removeClass("scrolled");
			}
	});
});	

$(".About li").click(function()
{
	//switch active between tabs "siblings=>brothers"
	$(this).addClass("active").siblings().removeClass("active");
	//hide all divs
	$(".About .tabs-contents > div").hide();
	//show the div we need
	$($(this).data('class')).show();
});


