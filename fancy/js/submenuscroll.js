$(document).ready(function() {
	b1 = $('.wrapfix');

	$(document).on("sidenav", function(e){
		if(e.message=='open'){
			curstate = b1.data('state');
			if(curstate == 1 || curstate == 3){
				b1.css({"top": b1.offset().top,'position': 'absolute'});
			}
		}
		else{
			
			if(curstate == 1 || curstate == 3){
				b1.css({"top": "",'position': 'fixed'});
			}
		}
	});



	
	//init
	b1.addClass('state2').css({'top': '60px'}).data('state',2);
	//states
		// state1 = fix scroll donw, top:0px
		// state2 = when absolute
		// state3 = def, top:60px
	var lastScrollTop = 0;
	function stickynav(){
		// determine current state
		state = b1.data('state');
		// determine direction
		var top = $(window).scrollTop();
		if (top > lastScrollTop){
			console.log('doooown');
			dir = 'dow';
		} else {
			console.log('upppppp');
			dir = 'up';
		}
		lastScrollTop = top;

		// get distance from block to top
		elementOffset = b1.offset().top;
		distance = (elementOffset - top);
		if(b1.hasClass('state1') || b1.hasClass('state3')){
			distance = elementOffset;
		}
		console.log(distance);
		

		// state, distance, dir
		if(state==1){
			if(dir=='up'){
				b1.removeClass('state1 state2 state3').addClass('state2').css({"top": top}).data('state',2);
			}
		}
		if(state==2){
			if(distance<1 && dir=="dow"){
				b1.removeClass('state1 state2 state3').addClass('state1').css({"top": ""}).data('state',1);
				console.log('goe into 1');
			}
			if(distance>60 && dir=="up"){
				b1.removeClass('state1 state2 state3').addClass('state3').css({"top": ""}).data('state',3);
			}
		}
		if(state==3){
			if(dir=='dow'){
				b1.removeClass('state1 state2 state3').addClass('state2').css({"top": distance}).data('state',2);
			}
		}
	}

	stickynav();
	$(window).scroll(function () {
		stickynav();
	});
});