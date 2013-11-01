$(document).ready(function() {
	// header search
	$('.search__dots, .topline__search').click(function (e) {
		$('.topline').toggleClass('is-withsearch');
		return false
	});


	// ===============================================================
	// ===========================TEST================================
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
		}
		$('.hentry').removeClass('is-active');
		if($(this).hasClass("hentry")){
			$(this).addClass('is-active')
		}
		return false;

	});
	$('.promoted__toggle').click(function (e) {
		$('.promoted').toggleClass('is-collapsed').afterTransition(function(){
			setpopup();
		});
	});

	$('.site').click(function (e) {
		e.stopPropagation();
	});
	$('.sites').click(function (e) {
		$(this).addClass('is-expanded').afterTransition(function(){
			setpopup();
			//alert('a');
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
	side = $('.sidenav__content');
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
			newheight = 'auto';
		}
		// set
		readwrap.css("top",newtop);
		readwrap.css("height",newheight);
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



	

	


	// ==================================================================
	// ===========================SIDENAV================================
	// ==================================================================
	$('.topline__toggleaside,.sidenav__toggle, .wrapsite__overlayfixed,.wrapsite__overlay').click(function (e) {
		$('.sidenav').height($(window).height());
		$('.sidenav').css({'top': $(window).scrollTop()})
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


});