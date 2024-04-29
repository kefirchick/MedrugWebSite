$(function() {
	$('a').focus(function() {
		$(this).blur();
	});
});




//嵌入式IMG懒加载
$(function() {
 	$(".lazy").lazyload({
 		effect: "fadeIn",
 		threshold: 200,
 	});
});




//导航切换样式：当滚动页面高度大于300时，切换样式
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('.navigation').addClass('sticky-nav');
        //$('#home .arrow').css({'display':'none'});
    } else {
        $('.navigation').removeClass('sticky-nav');
        //$('#home .arrow').css({'display':'block'});
    }
});




//1、避免在手机QQ访问页面时自动弹出视频播放器	2、添加PC端静图
/*
$(function(){
	$(".about-group .ag-5 .d-cover").css({"display":"none"});//默认PC端隐藏静图
	if($(window).width()<=960) {
		$(".video video").remove();//首页视频banner
		$(".about-group .ag-5 video").remove();//走进开立“专业 专注 传承 创新”视频
		$(".about-group .ag-5 .d-cover").css({"display":"block"});//移动端上显示静图
	};
});
*/





//首页关于我们视频播放
function playVideo() {
	var player_width = $('.player').width();
	var player_height = $('.player').height();

	$('.player').css({'margin-top':-(player_height*0.5)});
	$('.player_bg').css({'height':$(window).height()});

	$(".p-story ul li.p-movie").bind('click',function(){
		$(".player_bg").show();
		$(".player").show();			
	});
	$(".player .close").bind('click',function(){
		$(".player_bg").hide();
		$(".player").hide();
		//$(".player").remove();
		$('video').trigger('pause');
	});
}
//调用
$(function() {
	playVideo();//页面加载时调用
	$(window).bind('resize', function (){
		playVideo();//最大化，还原窗口大小时DIV尺寸跟着变化，不过最好在CSS里给这个DIV加个min-height等于html,body的最小宽度。
	});
});




$(function() {
	$(".copyright .fr .fr ul li a.weixin").hover(function(){
			$('.copyright .fr .fr .vcode').css({'display':'block'});
		},function(){
			$('.copyright .fr .fr .vcode').css({'display':'none'});
		});
});




//项目案例点击效果	
$(function(){
	$(".tab ul li a").each(function(i){
		$(this).click(function(){
			$(".tab ul li a").removeClass('sel')
			$(this).addClass('sel');
			$("#work .temp_content .work").hide();
			$("#work .temp_content .work").eq(i).show();
		});		
	});
});




//首页banner全屏高度
function full_screen_height() {
	var text_width = $('#home .swiper-slide .text').width();
	var text_height = $('#home .swiper-slide .text').height();
	var navigation_height = $('#navigation').height();
	var offset = 60;//默认文字区域偏移量，实现文字动画效果
	$('#home .swiper-container').css({'height':$(window).height()*1});
	$('#home .swiper-slide').css({'height':$(window).height()*1});
	//alert($('#home .swiper-container').height());
	//alert($('#home .swiper-wrapperr').height());
	//alert($('#home .swiper-slide').height());
	if($(window).width()<=960) {
		$('#home .swiper-slide .text').css({'margin-top':-(text_height)/2});//移动端上垂直居中
	}else {
		$('#home .swiper-slide .text').css({'margin-top':-(text_height)/2+30});//PC上手动加偏移
	}
}
//调用
$(function() {
	full_screen_height();//页面加载时全屏
	$(window).bind('resize', function (){
		full_screen_height();//最大化，还原窗口大小时DIV尺寸跟着变化，不过最好在CSS里给这个DIV加个min-height等于html,body的最小宽度。
	});
});




//about首屏全屏高度
function page_about_full_screen_height() {
	if($(window).width()>=1024) {
		$('#about .ag-1').css({'height':$(window).height()});
		var text_height = $('.about-group .ag-1 .text').height();
		$('.about-group .ag-1 .text').css({'margin-top':($(window).height()-text_height-90)/2});
	}else {
		$('#about .ag-1').css({'height':''});
		$('.about-group .ag-1 .text').css({'margin-top':''});
	}
}
//调用
$(function() {
	page_about_full_screen_height();//页面加载时全屏
	$(window).bind('resize', function (){
		page_about_full_screen_height();//最大化，还原窗口大小时DIV尺寸跟着变化，不过最好在CSS里给这个DIV加个min-height等于html,body的最小宽度。
	});
});




//响应式针对收起导航的点击事件判断
$(function() {
	$(document).click(function(){
		$('.navigation').removeClass('open')//点击导航之外的区域收起导航
	})
	$('.nav_more,.navigation').click(function(e){e.stopPropagation()})
	$('.navigation').find('.nav_more').click(function(e){
	    //$('.navigation').toggleClass('open')
	    var animClass = $(this).data('animation');
	  	var removeTime = $(this).data('remove');
	  	if($(this).hasClass(animClass)){
	  		//收起
	  		nav_close();
	     	$(this).removeClass(animClass);
	  	}else{
	  		//展开
	  		nav_open();
	  		$(this).addClass(animClass);
	  		/*start of typeof*/
	  		if(typeof removeTime != 'undefined'){
	      		var el = $(this);
	       		setTimeout(function(){
	         		el.removeClass(animClass);
	       		},removeTime);
	    	}
	    	/*end of typeof*/
	  	}
	})
});

//start of nav_open
function nav_open() {
	$('.navigation').addClass('open');
	$('.nav_more').addClass('nav_more_on');//add:on
	$('.nav_more').removeClass('nav_more_off');//remove:off
}
//end of nav_open

//start of nav_close
function nav_close() {
	$('.navigation').removeClass('open');
	$('.nav_more').addClass('nav_more_off');//add:off
	$('.nav_more').removeClass('nav_more_on');//remove:on
}
//end of nav_close

//二级导航
//PC端hover时显示；移动端由于有点击展开事件，所以不需要再hover，直接将其css设置为可见、透明度为1；
$(function(){
	if($(window).width()>960) {
		$('.navigation .menu li.sub').hover(function(){
			$(this).find('.nav_submenu').css({'visibility':'visible'});
			$(this).find('.nav_submenu').css({'opacity':1});
		},function(){
			$(this).find('.nav_submenu').css({'opacity':0});
			$(this).find('.nav_submenu').css({'visibility':'hidden'});
		});
	} else {
		$('.menu li .nav_submenu').css({'visibility':'visible' , 'opacity':1});
	}
});
/* 二级导航_移动端 */
$(function() {
	$('.menu li.sub a').click(function() {
		$(this).parent().find('.nav_submenu').slideToggle(300); 
		$(this).toggleClass("current");
		//return false; 
	});
});

//选择语言：PC端hover时显示；移动端由于有点击展开事件，所以不需要再hover，直接将其css设置为可见、透明度为1；
$(function(){
	if($(window).width()>960) {
		$('.navigation .menu li.language .egu').hover(function(){
			$(this).parent().find('.nav_submenu').css({'visibility':'visible'});
			$(this).parent().find('.nav_submenu').css({'opacity':1});
		},function(){
			$(this).parent().find('.nav_submenu').css({'opacity':0});
			$(this).parent().find('.nav_submenu').css({'visibility':'hidden'});
		});
	} else {
		$('.navigation .menu li.language .egu').addClass("egu-show");
	}
});




//通用模板内容块_标题垂直居中显示
function temp_banner_title_vertical() {
	var navigation_height = $('#navigation').height();
	var title_height = $('.temp_banner .title').height();
	var banner_height = $('.temp_banner').height();
	$('.temp_banner .title').css({'padding-top':(banner_height+navigation_height-title_height)*0.5});
}
//调用
$(function() {
	temp_banner_title_vertical();//页面加载时全屏
	$(window).bind('resize', function (){
		temp_banner_title_vertical();//最大化，还原窗口大小时DIV尺寸跟着变化，不过最好在CSS里给这个DIV加个min-height等于html,body的最小宽度。
	});
});




//返回顶部
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('.rTop').fadeIn(200);
    } else {
        $('.rTop').fadeOut(200);
    }
});
//返回顶部
$(function() { 
	$('.rTop').click(function() { 
		if($.browser.safari) {
			$('body').animate({scrollTop:0}, '600'); 
			return false;
		} 
		else{ 
			$('html').animate({scrollTop:0}, 600 , 'easeInOutExpo'); 
			return false; 
			} 
		}); 
}); 




//走进开立：长页面锚点跳转组，滚动指定高度后固定
$(window).scroll(function () {
    if ($(window).scrollTop() > 590) {
        $('#anchor-list-about').addClass('target-fix');
    } else {
        $('#anchor-list-about').removeClass('target-fix');
    }
});
//长页面锚点跳转组：点击跳转指定内容
$(function() {
	$('#about .anchor-list a').click(function(){
		var num = $(this).index();
		$('#about .anchor-list a').removeClass("on");
		$('#about .anchor-list a').eq(num).addClass("on");
		//alert(num);
		$('#anchor-list-about a').eq(num).addClass("on");
	    $('html, body').animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	    }, 500);
	    return false;
	});
});




//产品及应用：长页面锚点跳转组，滚动指定高度后固定
$(window).scroll(function () {
	var h_height = $('#product .navigation').height();
	var pb_height = $('#product .temp_banner').height();
	var sum_height = h_height + pb_height;
	//alert(sum_height);
    if ($(window).scrollTop() > sum_height) {
        $('#anchor-list-cate').addClass('target-fix');
    } else {
        $('#anchor-list-cate').removeClass('target-fix');
    }
});
//长页面锚点跳转组：点击跳转指定内容
$(function() {
	$('#product .anchor-list .swiper-slide a').click(function(){
		var num = $(this).parent().index();
		//alert(num);
		$('#product .anchor-list .swiper-slide a').removeClass("on");
		$('#product .anchor-list .swiper-slide a').eq(num).addClass("on");
		//alert(num);
		$('#anchor-list-cate a').eq(num).addClass("on");
		$('html, body').animate({
 			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
		}, 500);
		return false;
	});
});




//投资者关系：长页面锚点跳转组，滚动指定高度后固定
$(window).scroll(function () {
	var cH = $('.copyright').height();
    if ($(window).scrollTop() > 480) {
        $('#investor .side-anchor').addClass('target-fix');
    } else {
        $('#investor .side-anchor').removeClass('target-fix');
    }
    if ($(window).scrollTop()>=$(document).height()-$(window).height()-cH) {
        $('#investor .side-anchor').addClass('target-fix-2');
    } else {
        $('#investor .side-anchor').removeClass('target-fix-2');
    }
});
//长页面锚点跳转组：点击跳转指定内容
$(function() {
	$('#investor .side-anchor li a').click(function(){
		var num = $(this).parent().index();
		//alert(num);
		//alert($(document).height());
		//alert($(window).height());
		$('#investor .side-anchor li a').removeClass("on");
		$('#investor .side-anchor li a').eq(num).addClass("on");
		$('#investor .side-anchor li a').eq(num).addClass("on");
		//侧栏cover-layer定位
		$('.cover-layer').css({'top':num*50});
	    //内容锚点定位
	    $('html, body').animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	    }, 500);
	    return false;
	});
});




//移动端上内页侧栏均分宽度
/*
$(function() {
	var sideBarLiNum = $('.temp_main .sidebar ul li').length;
	if($(window).width()<=1024) {
		//alert(sideBarLiNum);
		$('.temp_main .sidebar ul li').css({'width':1/sideBarLiNum*100+'%'});
	}
});
*/




//加入：招聘岗位默认收起、展开
$(function() {
	$('.job-list ul li h2').toggle(
		function(){
			$(this).parent().find('.inner').show('slow');
			$(this).find('span').addClass('arrow-rotate');
		},
		function(){
			$(this).parent().find('.inner').hide('slow');
			$(this).find('span').removeClass('arrow-rotate');
		}
	);
});




//产品与服务：全国地图，鼠标滑过热点显示弹框事件
function mapRadiation() {
	$('.support-box .s-point .radiation .note').css({'width':4+'%'});//定义节点宽度为右侧内容的4%（考虑响应式）
	var note_width = $('.support-box .s-point .radiation .note').width();//定义节点变量
	$('.support-box .s-point .radiation .note').css({'height':note_width});//节点高度等于宽度（动态）
	$('.support-box .s-point .radiation .tips').css({'width':note_width*8 , 'right':note_width});//弹框宽度为节点宽度的10倍
	//
	$('.support-box .s-point .radiation .note a').hover(function(){
		$(this).parent().find('.tips').css({'display':'block'});
		$(this).parent().find('.tips').animate({'opacity':1 , 'top':'0'}, 400 , 'easeOutQuint' , function(){
		});
		},function(){
			$('.support-box .s-point .radiation .tips').css({'display':'none'});//!!!先让所有弹框消失
			$(this).parent().find('.tips').animate({'opacity':0 , 'top':'20'}, 0 , 'easeOutQuint' , function(){
				$(this).parent().find('.tips').css({'display':'none'});
		});
	})
}
//调用
$(function() {
	mapRadiation();//页面加载时调用
	$(window).bind('resize', function (){
		mapRadiation();//最大化，还原窗口大小时DIV尺寸跟着变化，不过最好在CSS里给这个DIV加个min-height等于html,body的最小宽度。
	});
});




//服务与支持：长页面锚点跳转组，滚动指定高度后固定
$(window).scroll(function () {
	var sn_height = $('#support .navigation').height();
	var st_height = $('#support .temp_banner').height();
	var ss_height = $('#support #s1').height();
	var sum_height = sn_height + st_height + ss_height;
	//alert(sum_height);
    if ($(window).scrollTop() > sum_height) {
    	//$('.service-type').addClass('service-type-small');
        $('#s2').addClass('target-fix');
    } else {
    	//$('.service-type').removeClass('service-type-small');
        $('#s2').removeClass('target-fix');
    }
});
//服务与支持:锚点跳转
$(function() {
	$('.service-type ul li a').click(function(){
		var num = $(this).parent().index();
		//alert(num);
		//$('#product .anchor-list .swiper-slide a').removeClass("on");
		//$('#product .anchor-list .swiper-slide a').eq(num).addClass("on");
		//alert(num);
		//$('#anchor-list-cate a').eq(num).addClass("on");
		$('html, body').animate({
 			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
		}, 500);
		return false;
	});
});




//页面元素滚动！！！！貌似需要放在js最后、动画数字函数之前？？？？？？？怪！！！
$(function() {
var config = {
    after: '0s',
    enter: 'bottom',
    move: '40px',
    over: '0.8s',
    easing: 'ease-in-out',
    viewportFactor: 0.5,
    reset: false,//动画是否循环播放
    init: true
    };
    window.scrollReveal = new scrollReveal(config);
 });




//首页banner初始化swiper组件
$(function(){
    var swiper = new Swiper('', {
    	loop : true,
    	autoplay: 4000,
    	autoplayDisableOnInteraction: false,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
    	speed:600,
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
});


$(function(){
    var swiper = new Swiper('#home .swiper-container', {
    	loop : false,
    	autoplay: false,
    	speed:600,
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        navigation: {
        	nextEl: '.swiper-button-next',
        	prevEl: '.swiper-button-prev',
      	},
        pagination: {
        	el: '.swiper-pagination',
        	clickable: true,
        },

    });
});







//产品分类初始化swiper组件 （一定要放在文件的尾部，防止#home .swiper-slide .text位移不准）
$(function(){
    var swiper = new Swiper('#product .swiper-container', {
    	loop : false,
    	width: 100,
    	autoplay: false,
    	speed:600,
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
});




//普通产品详情页（一定要放在文件的尾部，防止#home .swiper-slide .text位移不准）
$(function(){
    var swiper = new Swiper('.sel-product-detail .p-detail-normal .swiper-container', {
    	loop : false,
    	autoplay: false,
    	speed:600,
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',


		breakpoints: { 
		//当宽度小于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于480
		480: { 
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于640
		640: {
			slidesPerView: 2,
			spaceBetween: 0
			}
		}


    });
});


 

//S50产品详情临床图 初始化swiper组件 （一定要放在文件的尾部，防止#home .swiper-slide .text位移不准）
$(function(){
    var swiper = new Swiper('.sel-product-detail-7 .swiper-container', {
    	loop : false,
    	autoplay: false,
    	speed:600,
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',


		breakpoints: { 
		//当宽度小于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于480
		480: { 
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于640
		640: {
			slidesPerView: 2,
			spaceBetween: 0
			}
		}


    });
});




//P50产品详情临床图 初始化swiper组件 （一定要放在文件的尾部，防止#home .swiper-slide .text位移不准）
$(function(){
    var swiper = new Swiper('.sel-product-detail-5 .swiper-container', {
    	loop : false,
    	autoplay: false,
    	speed:600,
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',


		breakpoints: { 
		//当宽度小于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于480
		480: { 
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于640
		640: {
			slidesPerView: 2,
			spaceBetween: 0
			}
		}


    });
});




//X5产品详情临床图 初始化swiper组件 （一定要放在文件的尾部，防止#home .swiper-slide .text位移不准）
$(function(){
    var swiper = new Swiper('.sel-product-detail-1 .swiper-container', {
    	loop : false,
    	autoplay: false,
    	speed:600,
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',


		breakpoints: { 
		//当宽度小于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于480
		480: { 
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于640
		640: {
			slidesPerView: 2,
			spaceBetween: 0
			}
		}


    });
});




//vx5产品详情临床图 初始化swiper组件 （一定要放在文件的尾部，防止#home .swiper-slide .text位移不准）
$(function(){
    var swiper = new Swiper('.sel-product-detail-12 .swiper-container', {
    	loop : false,
    	autoplay: false,
    	speed:600,
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',


		breakpoints: { 
		//当宽度小于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于480
		480: { 
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于640
		640: {
			slidesPerView: 2,
			spaceBetween: 0
			}
		}


    });
});





//X5翻盖动画
$(function(){
	var a,b,c;
	a=$(window).height();	
	$(window).scroll(function(){		
		var b=$(this).scrollTop();
		$(".cover-up-move .cum").each(function(){
			c=$(this).offset().top;							
			if(a+b>c){
				$(this).addClass("move");
			}
			else{
				$(this).removeClass("move");
			}
		});	
	});			
});




//服务与支持 初始化swiper组件 （一定要放在文件的尾部，防止#home .swiper-slide .text位移不准）
$(function(){
    var swiper = new Swiper('.sel-support .swiper-container', {
    	loop : false,
    	autoplay: false,
    	speed:600,
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',


		breakpoints: { 
		//当宽度小于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于480
		480: { 
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于640
		640: {
			slidesPerView: 2,
			spaceBetween: 0
			}
		}


    });
});




//S60产品详情临床图 初始化swiper组件 （一定要放在文件的尾部，防止#home .swiper-slide .text位移不准）
$(function(){
    var swiper = new Swiper('.sel-product-detail-20 .swiper-container', {
    	loop : false,
    	autoplay: false,
    	speed:600,
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

		breakpoints: { 
		//当宽度小于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于480
		480: { 
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于640
		640: {
			slidesPerView: 2,
			spaceBetween: 0
			}
		}

    });
});




//P60产品详情临床图 初始化swiper组件 （一定要放在文件的尾部，防止#home .swiper-slide .text位移不准）
$(function(){
    var swiper = new Swiper('.sel-product-detail-21 .swiper-container', {
    	loop : false,
    	autoplay: false,
    	speed:600,
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

		breakpoints: { 
		//当宽度小于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于480
		480: { 
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于640
		640: {
			slidesPerView: 2,
			spaceBetween: 0
			}
		}

    });
});




//////////////////    P60    ////////////////////////

//临床图产品详情临床图 初始化swiper组件 （一定要放在文件的尾部，防止#home .swiper-slide .text位移不准）
$(function(){
    var swiper = new Swiper('.sel-product-detail-22 .swiper-container', {
    	loop : false,
    	autoplay: false,
    	speed:600,
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

		breakpoints: { 
		//当宽度小于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于480
		480: { 
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度小于等于640
		640: {
			slidesPerView: 2,
			spaceBetween: 0
			}
		}

    });
});

//第4屏 机器放大、文字渐隐、注释渐显
$(function(){
	//
});

//第5屏 机器放大、文字渐隐、注释渐显
$(function(){
	//
});




//////////////////    P60-Exp    ////////////////////////

//第4屏 机器放大、文字渐隐、注释渐显
$(function(){
	//
});

//第5屏 机器放大、文字渐隐、注释渐显
$(function(){
	//
});




//P50 Elite 产品详情临床图 初始化swiper组件
$(function(){
    var swiper = new Swiper('.sel-product-detail-23 .swiper-container', {
    	lazy: true,
    	loop: false,
    	autoplay: false,
    	speed:600,
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 40,
        keyboardControl: true,
        navigation: {
        	nextEl: '.swiper-button-next',
        	prevEl: '.swiper-button-prev',
      	},
        pagination: {
        	el: '.swiper-pagination',
        	clickable: true,
        },

		breakpoints: { 
			320: {  //当屏幕宽度大于等于320
				slidesPerView: 1,
				spaceBetween: 10
			},
			360: {  //当屏幕宽度大于等于320
				slidesPerView: 1,
				spaceBetween: 10
			},
			667: {  //当屏幕宽度大于等于320
				slidesPerView: 2,
				spaceBetween: 10
			},
			768: {  //当屏幕宽度大于等于768 
				slidesPerView: 3,
				spaceBetween: 20
			},
			1280: {  //当屏幕宽度大于等于1280
				slidesPerView: 3,
				spaceBetween: 30
			}
		}

    });
});




//S50 Elite 产品详情临床图 初始化swiper组件 （一定要放在文件的尾部，防止#home .swiper-slide .text位移不准）
//d24-2 topic
$(function(){
	var a,b,c;
	var $move = $(".d24-2 .dep");
	a=$(window).height();
	$(window).scroll(function(e){
		var b=$(this).scrollTop();
		$move.each(function(){
			c=$(this).offset().top;
			if(a+b>c){
				$(this).addClass("move");
			}
			else{
				//$(this).removeClass("move");//开启后动画播放回溯
			}
		});
	});
});
//垂直方向
$(function(){
    var swiper = new Swiper('.sel-product-detail-24 .d24-6 .swiper-container', {
    	lazy: true,
    	direction: 'vertical',
    	mousewheel: true,
    	loop: false,
    	autoplay: false,
    	speed:600,
        paginationClickable: true,
        navigation: {
        	nextEl: '.swiper-button-next',
        	prevEl: '.swiper-button-prev',
      	},
        pagination: {
        	el: '.swiper-pagination',
        	clickable: true,
        },

		breakpoints: { 
			320: {  //当屏幕宽度大于等于320
				slidesPerView: 1,
				spaceBetween: 0
			},
			360: {  //当屏幕宽度大于等于320
				slidesPerView: 1,
				spaceBetween: 0
			},
			667: {  //当屏幕宽度大于等于320
				slidesPerView: 2,
				spaceBetween: 0
			},
			768: {  //当屏幕宽度大于等于768 
				slidesPerView: 2,
				spaceBetween: 0
			},
			1280: {  //当屏幕宽度大于等于1280
				slidesPerView: 2,
				spaceBetween: 0
			}
		}

    });
});
//水平方向
$(function(){
    var swiper = new Swiper('.sel-product-detail-24 .d24-10 .swiper-container', {
    	lazy: true,
    	loop: false,
    	autoplay: false,
    	speed:600,
        paginationClickable: true,
        spaceBetween: 40,
        keyboardControl: true,
        navigation: {
        	nextEl: '.swiper-button-next',
        	prevEl: '.swiper-button-prev',
      	},
        pagination: {
        	el: '.swiper-pagination',
        	clickable: true,
        },

		breakpoints: { 
			320: {  //当屏幕宽度大于等于320
				slidesPerView: 1,
				spaceBetween: 10
			},
			360: {  //当屏幕宽度大于等于320
				slidesPerView: 1,
				spaceBetween: 10
			},
			667: {  //当屏幕宽度大于等于320
				slidesPerView: 2,
				spaceBetween: 10
			},
			768: {  //当屏幕宽度大于等于768 
				slidesPerView: 3,
				spaceBetween: 20
			},
			1280: {  //当屏幕宽度大于等于1280
				slidesPerView: 3,
				spaceBetween: 30
			}
		}

    });
});
//.d24-8 .grad
$(function(){
	var $big_pic = $(".d24-8 ul:nth-child(1) li");//大图：所有大图
	var $big_pic_not_first = $(".d24-8 ul:nth-child(1) li:not(:first)");//大图：除第一个外的其他大图

	var $small_pic = $(".d24-8 ul:nth-child(2) li");//小图：所有小图
	var $small_pic_first = $(".d24-8 ul:nth-child(2) li:nth-child(1)");//小图：第一个小图

	$big_pic_not_first.css({'opacity':0});//除第一个外，都隐藏
	$small_pic_first.addClass("sel");//默认给第一个小图加sel类

	$small_pic.each(function(i){
		$(this).find("a").click(function(){
			$small_pic.removeClass("sel");
			$(this).parent().parent().eq($(this).index()).addClass("sel");
			$big_pic.css({'opacity':0});
			$big_pic.hide();
			$big_pic.eq(i).show();
			$big_pic.eq(i).animate({'opacity':1}, 400 , 'easeOutQuint' , function(){
				//alert(i);
			});
			//alert(i);
		});
	});
});




//动画数字
$(function() { 
	$('.counter').countUp();
}); 



