$(document).ready(function() {
	// header search
	$('.search__dots, .topline__search').click(function (e) {
		$('.topline').toggleClass('is-withsearch');
		return false
	});


	// ===============================================================
	// ===========================read layer==========================
	// ===============================================================
	//opening read in narrow
	$('.hentry,.read__overlay').click(function (e) {
		b = $('body');
		
		if(b.hasClass('is-reading')){
			fromtop = $('.wrapsite').css('top').substring(1);
			fromtop = fromtop.slice(0, -2);
			$('.wrapsite').css('top', 'auto');
			$('body').removeClass('is-reading');
			$(window).scrollTop(fromtop);
		}
		else{
			$('.wrapsite').css('top', -($(window).scrollTop()));
			$('body').addClass('is-reading');
			//console.log($('.read__wrap').height()+'===='+$(window).height());
			if($('.read__wrap').height()+60<$(window).height()){
				//console.log($('.read__wrap').height()+'===='+$(window).height());
				//$('.read__wrap').height($(window).height());
				$('.read__wrap').css($(window).height());

			}
		}
		$('.hentry').removeClass('is-active');
		if($(this).hasClass("hentry")){
			$(this).addClass('is-active')
		}
		return false;

	});
	// ===============================
	// ================promoted module
	// ===============================
	promotedrun = 0;
	$('.promoted__toggle').click(function (e) {
		p = $('.promoted');
		pe = $('.promoted__entry');
		if(!promotedrun){
			promotedrun = 1;

			pe.fadeOut(200, function(){
				p.toggleClass('is-collapsed').afterTransition(function(){
					setpopup();
					promotedrun = 0;
					pe.fadeIn(200);
				});
			})

		}
	});
	//sites toggling
	// @todo use data-min and set data-max on load, to switch between heights and use
	// css animations for toggling
	//alert($('.sites').data('minheight'));
	toanimate = $('.sites').find('ul');
	maxheight = toanimate.height();
	toanimate.height($('.sites').data('minheight'));
	$('.sites').data('maxheight',maxheight);
	$('.site').click(function (e) {
		e.stopPropagation();
	});

	$('.sites').click(function (e) {
		$('.sites').find('ul').height($('.sites').data('maxheight')).afterTransition(function(){
			setpopup();
		});
	});

	// ===============================================================
	// ===========================VARs================================
	// ===============================================================
	// lets have fun with scroll, oh dear
	//elements
	readwrap = $('.read__wrap');
	header = $('.topline');
	footer = $('.footer');
	promoted  = $('.promoted ');
	body = $('body');
	side = $('.sidenav');
	//sidewrap = $('.sidenav');
	//alert($('.footer').offset().top);

	// static parameters
	fh = footer.height();
	fTop = footer.offset().top;
	hh = 60;
	ph  = promoted.height();
	bh = $(document).height();
	margintop = 40;
	marginbot = 40;
	topareah = hh + ph;
	newtop = 0;
	newheight = 0;

	// ===============================================================
	// ===========================READ POSITION=======================
	// ===============================================================
	function setpopup(){
		fTop = footer.offset().top;
		if(body.hasClass('is-wide')){
			curpos = $(window).scrollTop(); //current screen scroll from top
			wh = $(window).height(); //window height

			if($('.promoted').hasClass('is-collapsed')){
				topareah = 160 - 45;
			}
			else{
				topareah = 240;
			}

			//console.log(curpos);
				//determine top and height
				if(curpos < topareah - 55 ){ // we are at top
					//newtop = topareah + margintop;
					
					newtop = topareah + margintop - curpos;
					newheight = wh - newtop - marginbot;
					//console.log(newheight);
					console.log('header');

				}
				else{ // at middle
					console.log('middle');
					//newtop = curpos + margintop;
					
					newtop = hh + margintop;
					newheight = wh - newtop - marginbot;
				}
				// we are at bottom
				// if(curpos+wh> fTop){
				// 	console.log('footer');
				// 	newheight = fTop - curpos - marginbot - margintop - 60;
				// }
		}
		else{
			newtop = 0;
			newheight = $(window).height() - 80;
		}
		// set
		readwrap.css("top",newtop);
		//readwrap.css("height",newheight);
		readwrap.css("min-height", newheight);
	}
	// prevent scroll of a page
	// $( '.scrollable' ).
 //    bind( 'mousewheel DOMMouseScroll', function (e) {
 //        var delta = e.wheelDelta || -e.detail || e.originalEvent.wheelDelta;
 //        this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
 //        console.log(delta);
 //        e.preventDefault();
 //    });

	function setwideclass(){
		if($(window).width()>1480){
			body.addClass('is-wide');
		}
		else{
			body.removeClass('is-wide');
		}
	}
	function setsidenav(){
		side.height($(window).height());
	}
	setsidenav();



	

	


	// ==================================================================
	// ===========================SIDENAV================================
	// ==================================================================
	$('.topline__toggleaside,.sidenav__toggle, .wrapsite__overlayfixed,.wrapsite__overlay').click(function (e) {
		
		$('.sidenav').css({'top': $(window).scrollTop()});
		$('body').toggleClass('is-withsidebar');
	});
	//sidebar fixed
	// (function () {
	// 	var previousScroll = 0;
	// 	$(window).scroll(function(){
	// 	   var currentScroll = $(this).scrollTop();
	// 	   if(currentScroll>100){
	// 		if (currentScroll > previousScroll){
	// 			//going down
	// 			   if(side.hasClass('is-fixed')){
	// 				console.log('removing fix');
	// 				side.removeClass('is-fixed').css('top', currentScroll);
	// 			   }
	// 		} else {
	// 			//going up
	// 			//console.log('up');
	// 			if(!(side.hasClass('is-fixed')) && currentScroll < side.offset().top){
	// 				side.addClass('is-fixed');
	// 			}
	// 		}
	// 		previousScroll = currentScroll;
	// 	   }
	// 	});
	// }()); //run this anonymous function immediately


	// all of this for wide screen only
	setwideclass();
	setpopup();
	$(window).scroll(function () {
		setwideclass();
		setpopup();
	});
	$(window).resize(function() {
		setwideclass();
		setpopup();
		setsidenav();
	});




	var stickyPanelSettings = {
        // Use this to set the top margin of the detached panel.
        topPadding: 60,

        // This class is applied when the panel detaches.
        afterDetachCSSClass: "",

        // When set to true the space where the panel was is kept open.
        savePanelSpace: true,

        // Event fires when panel is detached
        // function(detachedPanel, panelSpacer){....}
        onDetached: null,

        // Event fires when panel is reattached
        // function(detachedPanel){....}
        onReAttached: null,

        // Set this using any valid jquery selector to 
        // set the parent of the sticky panel.
        // If set to null then the window object will be used.
        parentSelector: null
    };
    $(".fixme").stickyPanel(stickyPanelSettings);

    //focusing on material
	$('body').on('mouseenter', '.read__wrap', function(){
		if($('body').hasClass('is-wide')){
			$('body').addClass('is-focusedonread');
		}
	});
	$('body').on('mouseleave', '.read__wrap', function(){
		if($('body').hasClass('is-wide')){
			$('body').removeClass('is-focusedonread');
		}
	});
    


});