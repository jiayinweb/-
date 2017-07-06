// JavaScript Document


//导航
$(function(){
	$('li').each(function(){
		var subM=$(this).children('ul');	
		if(subM.length==1){
			$(this).addClass('hasSub');
			$(subM).addClass('subMenu')
		}
	});
	
	$('li').hover(
		function(){
			$(this).children('ul').show();
		},
		function(){
			$(this).children('ul').hide();
		}
	);
})


//轮播图
$(document).ready(function(e) {
    var unslider04 = $('#b04').unslider({
		dots: true
	}),
	data04 = unslider04.data('unslider');
	$('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
});


//技能介绍
var Json={
	"year":"我的技能",
	"months":[
		{
			"month":"☆",
			"days":[
				{
				"day":"HTML",
				"cont":"精通HTML"
				},
				{
				"day":"CSS",
				"cont":"精通css"
				},	
				{
				"day":"JS",
				"cont":"熟练掌握js"
				},
				{
				"day":"jquery",
				"cont":"熟练使用jquery"
				},
				{
				"day":"bootstrap",
				"cont":"熟练掌握bootstrap"
				},
				{
				"day":"js框架",
				"cont":"熟练使用vue， angular，react等框架"
				},	
			]
		},
	]
	
}

$(function(){
	var html=
		'<div class="box5">'+
			'<h3>'+Json.year+'</h3>'+
			'<ol>'
			for(var j=0;j<Json.months.length;j++){
				html+='<li>'+
					'<dl>';
					for(var i=0; i<Json.months[j].days.length;i++){
						html+='<dt>'+Json.months[j].days[i].day+'</dt>'+
						'<dd>'+Json.months[j].days[i].cont+'</dd>'
					};
					html+='</dl>'+
					'</li>'
			};  
			html+='</ol>'+
		'</div>';
	$(".warp").append(html);
});


//二维码
window.onload=function(){
	$(".bottom li").eq(1).mouseenter(function(){
		$(".code").css({"display":"block"})	
	})
	$(".bottom li").eq(1).mouseleave(function(){
		$(".code").css({"display":"none"})	
	})

}
