
	// var stickyPanelSettings = {
 //        // Use this to set the top margin of the detached panel.
 //        topPadding: 60,

 //        // This class is applied when the panel detaches.
 //        afterDetachCSSClass: "",

 //        // When set to true the space where the panel was is kept open.
 //        savePanelSpace: true,

 //        // Event fires when panel is detached
 //        // function(detachedPanel, panelSpacer){....}
 //        onDetached: null,

 //        // Event fires when panel is reattached
 //        // function(detachedPanel){....}
 //        onReAttached: null,

 //        // Set this using any valid jquery selector to 
 //        // set the parent of the sticky panel.
 //        // If set to null then the window object will be used.
 //        parentSelector: null
 //    };
 //    $(".fixme").stickyPanel(stickyPanelSettings);

    //focusing on material
	// $('body').on('mouseenter', '.read__wrap', function(){
	// 	if($('body').hasClass('is-wide')){
	// 		$('body').addClass('is-focusedonread');
	// 	}
	// });
	// $('body').on('mouseleave', '.read__wrap', function(){
	// 	if($('body').hasClass('is-wide')){
	// 		$('body').removeClass('is-focusedonread');
	// 	}
	// });
	// admin comis
	// $(selector1).swapWith(selector2);
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

		// ===============================================================
	// ===========================READ POSITION=======================
	// ===============================================================
	// function setpopup(){
	// 	fTop = footer.offset().top;
	// 	if(body.hasClass('is-wide')){
	// 		curpos = $(window).scrollTop(); //current screen scroll from top
	// 		wh = $(window).height(); //window height

	// 		if($('.promoted').hasClass('is-collapsed')){
	// 			topareah = 160 - 45;
	// 		}
	// 		else{
	// 			topareah = 240;
	// 		}

	// 		//console.log(curpos);
	// 			//determine top and height
	// 			if(curpos < topareah - 55 ){ // we are at top
	// 				//newtop = topareah + margintop;
					
	// 				newtop = topareah + margintop - curpos;
	// 				newheight = wh - newtop - marginbot;
	// 				//console.log(newheight);
	// 				console.log('header');

	// 			}
	// 			else{ // at middle
	// 				console.log('middle');
	// 				//newtop = curpos + margintop;
					
	// 				newtop = hh + margintop;
	// 				newheight = wh - newtop - marginbot;
	// 			}
	// 			// we are at bottom
	// 			// if(curpos+wh> fTop){
	// 			// 	console.log('footer');
	// 			// 	newheight = fTop - curpos - marginbot - margintop - 60;
	// 			// }
	// 	}
	// 	else{
	// 		newtop = 0;
	// 		newheight = $(window).height() - 80;
	// 	}
	// 	// set new width height
	// 	newtop = '10';
	// 	newheight = $(window).height() - 20;

	// 	// readwrap.css("top",newtop);
	// 	//readwrap.css("height",newheight);
	// 	//readwrap.css("min-height", newheight);
	// }


	// all of this for wide screen only