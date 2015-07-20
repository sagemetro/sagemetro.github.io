
$(function() {
  init();
 	
  
});

function init() {

	$('body,html').animate({scrollTop:0});



	$('.proimg li').bind("mouseenter",function(e){
		$('.copymask').hide()
		$(this).addClass('hover')
		$(this).children().next().fadeIn()

	})
	$('.proimg li').bind("mouseout",function(e){
			$(this).children().next().delay('500').fadeOut()
		
	})
	
	$('.navigation li').bind("mouseenter",function(e){
		$('.navlignt,.navheavy').hide();
		var index = $(this).index();
		if(index == 1){
			$('.navlignt').fadeIn()
		}
		if(index == 2){
			$('.navheavy').fadeIn()
		}
	
	})
	
	$('.navigation li').bind("mouseout",function(){
		
		var index = $(this).index();
		if(index == 1){
			$('.navlignt').delay('1000').fadeOut()
		}
		if(index == 2){
			$('.navheavy').delay('1000').fadeOut()
		}
	})
	
	$('.head .navigation ul li').click(function(e){
		var index = $(this).index();
		if(index == 0){
			window.location.href='http://'+window.location.host+'/newhtml/html/index.html';
		}
		
	})
	
	$('.pro_content .proimg li,.navlignt li,.navheavy li').click(function(e){
		var dataid = $(this).attr('data-id');
		window.location.href='http://'+window.location.host+'/newhtml/html/'+dataid+'.html';
	})


}
