
$(function() {
  init();
 	
  
});

function init() {
var winwid = $(window).width();
	if(winwid<990){
		$('body,html').css('min-width','100%')
		$('.aboutus .desc ').css('margin-left',0)
	}
	var winhei = $(window).height()-60-40;
	var wintop = (winhei-380)/2
	$('.contentus').css('height',winhei-wintop);
	$('.contentus').css('padding-top',wintop);
	$('body,html').animate({scrollTop:0});

   $('.nav-content ul li').click(function(e){
  		 $('.nav-content ul li').removeClass('on')
   		$(this).addClass('on')
   		var dataid = $(this).attr('data-id');
		window.location.href='http://'+window.location.host+'/newhtml/html/'+dataid+'.html';
   		
  /* 	var hei1 = $('.aboutus').height()+50;
	var hei2 = $('.china').height()+50;
	var hei3 = $('.texas').height()+50;
	var scroll2 = hei1;
	var scroll3 = hei1+hei2;
	var scroll4 = hei1+hei2+hei3;
   		
   		var index = $(this).index();
 	
   		switch(index){
   			case 0:
			 $('body,html').animate({scrollTop:0},500);
   			 break; 
   			 case 1:
   			   $('body,html').animate({scrollTop:scroll2},500);
   			   $('.china .titlecontent ul li').removeClass('on')
   			    $('.china .titlecontent ul li.light').addClass('on')
   			     $('.tab').hide();
   			    $('.tab0').show();
   			 break; 
   			 case 2:
   			   $('body,html').animate({scrollTop:scroll2},500);
   			   $('.china .titlecontent ul li').removeClass('on')
   			    $('.china .titlecontent ul li.heavy').addClass('on')
   			    $('.tab').hide();
   			    $('.tab1').show();
   			 break; 
   			 case 3:
				 $('body,html').animate({scrollTop:scroll3},500);
   			 break; 
   			  case 4:
				 $('body,html').animate({scrollTop:scroll4},500);
   			 break; 
   				
   		}*/
   })
   
   $('.china .titlecontent ul li').click(function(e){
   		var index = $(this).index();
   		$('.china .titlecontent ul li').removeClass('on')
   		$(this).addClass('on')
   		$('.tab').hide();
   		$('.tab'+index+'').show();
   })

	$('.nav-content ul li span').click(function(e){
		
		$('.translate span').removeClass('on')
		$(this).addClass('on')
	
	})				
	$('.navigation li:nth-child(2)').bind("mouseenter",function(e){
		$('.navheavy').hide();
			$('.navheavy').fadeIn()
		
		
	})
	$('.navigation li:nth-child(2)').bind("mouseout",function(){
		
			$('.navheavy').delay('1000').fadeOut()
		
	})


	$('.swiper-slide ul li img,.proimg li img').bind("mouseenter",function(e){
		$('.copymask').hide()
		$(this).next().fadeIn()
	})
	$('.swiper-slide ul li img,.proimg li img').bind("mouseout",function(e){
			$(this).next().delay('500').fadeOut()
	})
	
	$('.swiper-slide ul li').click(function(e){
		var dataid = $(this).attr('data-id');
		window.location.href='http://'+window.location.host+'/newhtml/html/'+dataid+'.html';
	})


}
