$(document).ready(function() {
	// ===============================================================
	// ===========================welcome============================
	// ===============================================================
	$('.welcome__start,.welcome__overlay').click(function(event) {
		$('body').removeClass('is-firsttime');
	});
	// ===============================================================
	// ===========================elements============================
	// ===============================================================
	b = $('body');
	readwrap = $('.read__wrap');
	read = $('.read');
	header = $('.topline');
	footer = $('.footer');
	promoted  = $('.promoted ');
	body = $('body');
	side = $('.sidenav');

	// static parameters
	// fh = footer.height();
	// //fTop = footer.offset().top;
	// hh = 60;
	// ph  = promoted.height();
	// bh = $(document).height();
	// margintop = 40;
	// marginbot = 40;
	// topareah = hh + ph;
	// newtop = 0;
	// newheight = 0;

	// ===============================================================
	// ===========================read layer==========================
	// ===============================================================
	//opening(toggling) read in narrow
	$('.hentry,.read__overlay').click(function (e) {
		if($(this).hasClass('hentry')){
			$(this).addClass('is-active');
		}
		
		if(b.hasClass('is-reading')){
			fromtop = $('.wrapsite').css('top').substring(1);
			fromtop = fromtop.slice(0, -2);
			$('.wrapsite').css('top', 'auto');
			$('.read__wrap').css('margin-top', 0);
			$('body').removeClass('is-reading');
			$(window).scrollTop(fromtop);
		}
		else{
			$('.wrapsite').css('top', -($(window).scrollTop()));
			$('.read__wrap').css('margin-top', ($(window).scrollTop()));
			$('body').addClass('is-reading');
			
			$('.read__wrap').height($(window).height() - 60);
			//minheight 100%	
			if($('.read__wrap').height() + 60 < $(window).height()){
				$('.read__wrap').height($(window).height());
			}
			else{
				//$('.read__wrap').height($(window).height() - 60);
			}
			//$('.read__overlay').height($('.read').height() + 60);
		}

		$('.hentry').removeClass('is-active');
		if($(this).hasClass("hentry")){
			$(this).addClass('is-active');
		}
		return false;
	});
	
	function setread(){
		if(b.hasClass('is-narrow')){
			console.log('hey!!');
			$('.read__overlay').height($('.read').height() + 60);
			$('.read__wrap').height($(window).height());
		}
		else{
			readwrap.css('top', 10);
		}
	}

	// ===============================================================
	// ===========================datepicker==========================
	// ===============================================================
	$('.search__dots, .topline__search').click(function (e) {
		$('.topline').toggleClass('is-withsearch');
		return false
	});

	// ===============================================================
	// ===========================datepicker==========================
	// ===============================================================
	// docs here http://jquerytools.org/documentation/dateinput/
	$.tools.dateinput.localize("ru",  {
	   months:        'январь,февраль,март,апрель,май,июнь,июль,август,' +
	                  'сентябрь,октябрь,ноябрь,декабрь',
	   shortMonths:   'янв,фев;мар,апр,май,июн,июл,' +
	                  'авг,сеп,ноя,дек',
	   days:          'понедельник,вторник,среда,четверг,пятница,суббота,воскресенье',
	   shortDays:     'Пн,Вт,Ср,Чт,Пт,Сб,Вс'
	});
	$(".dateblock").dateinput({
		lang: 'ru',
		change: function() {
			var isoDate = this.getValue('mmmm yyyy');
			$(".dateblock").text(isoDate);
		}
	});
	// =========================================================
	// ================promoted module==========================
	// =========================================================
	promotedrun = 0;
	$('.promoted__toggle').click(function (e) {
		p = $('.promoted');
		pe = $('.promoted__entry');
		if(!promotedrun){
			promotedrun = 1;

			pe.fadeOut(200, function(){
				p.toggleClass('is-collapsed').afterTransition(function(){
					//setpopusetpopup();
					promotedrun = 0;
					pe.fadeIn(200);
				});
			})

		}
	});
	// =========================================================
	// ================.admincomis==============================
	// =========================================================
	$('.admincomis__block h2').click(function(event) {
		if($(this).parent().hasClass('is-active')){
			// something
		}
		else{
			$('.admincomis__block').removeClass('is-inactive').toggleClass('is-active');
			$('.admincomis__block[data-block=admin]').swapWith('.admincomis__block[data-block=comis]');
		}
		return false;
	});
	// fading on hover
	$('.admincomis__block h2').hoverIntent(function(){
		$('.admincomis__block.is-active').addClass('is-inactive');
	},function(){
		$('.admincomis__block.is-active').removeClass('is-inactive');
	});
	// =========================================================
	// ================.sites module=============================
	// =========================================================
	toanimate = $('.sites').find('ul');
	maxheight = toanimate.height();
	toanimate.height($('.sites').data('minheight'));
	$('.sites').data('maxheight',maxheight);
	$('.site').click(function (e) {
		e.stopPropagation();
	});

	$('.sites').click(function (e) {
		if($(this).hasClass('is-active')){
			$(this).removeClass('is-active');	
			$('.sites').find('ul').height($('.sites').data('minheight'));
		}
		else{
			$(this).addClass('is-active');	
			$('.sites').find('ul').height($('.sites').data('maxheight'));
		}
	});
	

	//wide
	function setwideclass(){
		if($(window).width()>1480){
			b.addClass('is-wide').removeClass('is-narrow');
		}
		else{
			b.removeClass('is-wide').addClass('is-narrow');
		}
	}
	

	function setsidenav(){
		side.height($(window).height());
		//side.css('top',$(window).scrollTop());
		//console.log($(window).scrollTop());

	}
	
	// ======
	// ======
	// ======
	$('.topline__togglemore').click(function(event) {
		$('.topline__more').slideToggle();
		$(this).toggleClass('is-active');
	});
	// ==================================================================
	// ===========================SIDENAV================================
	// ==================================================================
	$('.topline__toggleaside,.sidenav__toggle, .wrapsite__overlayfixed,.wrapsite__overlay').click(function (e) {
		if($('body').hasClass('is-withsidebar')){
			msg = 'close';
		}
		else{
			msg = 'open'
		}
		$.event.trigger({
			type: "sidenav",
			message: msg
		});
		$('.sidenav,.wrapsite__overlayfixed').css({'top': $(window).scrollTop()});
		$('body').toggleClass('is-withsidebar');
	});



		setwideclass();
		setsidenav();
		setread();
	$(window).scroll(function () {
		setwideclass();
		setsidenav();
		setread();
	});
	$(window).resize(function() {
		setwideclass();
		setsidenav();
		setread();
	});











	



	// =============================
	// =============================
	// debug debug, adding active class for nav
	var filename= location.pathname.split('\\').pop().split('/').pop();
	$('.topline__nav a[href$="'+filename+'"]').addClass('is-active');
});
// =============================
// =============================
// simpl plugin to switch elements
jQuery.fn.swapWith = function(to) {
    return this.each(function() {
        var copy_to = $(to).clone(true);
        var copy_from = $(this).clone(true);
        $(to).replaceWith(copy_from);
        $(this).replaceWith(copy_to);
    });
};