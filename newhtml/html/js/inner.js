
$(function() {
  init();
 	
  
});

function init() {

	$('body,html').animate({scrollTop:0});
	var innerimglen = $('.imageslider>img').length
	if(innerimglen != 1){
			quesanimate(1,innerimglen)	
	}


	$('.proimg li').bind("mouseenter",function(e){
		$('.copymask').hide()
		$(this).addClass('hover')
		$(this).children().next().fadeIn()

	})
	$('.proimg li').bind("mouseout",function(e){
			$(this).children().next().delay('500').fadeOut()
		
	})
	
	$('.navigation li:nth-child(2)').bind("mouseenter",function(e){
		$('.navheavy').hide();
			$('.navheavy').fadeIn()
		
		
	})
	
	$('.navigation li:nth-child(2)').bind("mouseout",function(){
		
			$('.navheavy').delay('1000').fadeOut()
		
	})

   	
	$('.head .navigation li').click(function(e){
			var dataid = $(this).attr('data-id');
		window.location.href='http://'+window.location.host+'/newhtml/html/'+dataid+'.html';
	})
	
	$('.pro_content .proimg li,.navlignt li,.navheavy li').click(function(e){
		var dataid = $(this).attr('data-id');
		window.location.href='http://'+window.location.host+'/newhtml/html/'+dataid+'.html';
	})


}

function quesanimate(num,maxnum){
console.log(num,maxnum)
	num++;
	if(num>maxnum){
		quesanimate(0,maxnum);	
	}else{
	$('.imageslider>img').fadeOut(1000);
	$('.imageslider>img:nth-child('+num+')').fadeIn(1000)
	setTimeout(function(){
		quesanimate(num,maxnum);	
	},2000)
	
	}
	
}
