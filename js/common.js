$(document).ready(function() {
	
	// Placeholder
	$('input.input, textarea.input').placeholder();
	
	// Checkbox, Radio, Select
	$('input.radio, input.checkbox, .selectbox, input.number').styler();

	$('.select_count').styler({
		selectPlaceholder: ''
	});

	$('input.file').styler({
		fileBrowse: 'Обзор'
	});
	$('input#files_scan').styler({
		fileBrowse: 'Обзор',
		filePlaceholder: 'Загрузите сканы документов'
	});


	// Global function
	function popup(wdw,btn) {
		var myWdw = $('.'+wdw);
		myWdw.after('<div class="'+wdw+'_overlay"></div>');
		var myCls = $('.'+wdw+'_close');
		var myOver = $('.'+wdw+'_overlay');
		var myBtn = $('.'+btn);
		var myOverWin = $('.'+wdw+', .'+wdw+'_overlay');
		myBtn.on('click',function() {
			$(this).toggleClass('opened');
			myOverWin.slideToggle(200);
			return false;
		});
		myCls.on('click',function() {
			myBtn.removeClass('opened');
			myOverWin.slideUp(200);
			return false;
		});
		myOver.on('click touchstart',function() {
			myBtn.removeClass('opened');
			myOverWin.slideUp(200);
		});
	}

	// Catalog
	//popup('catwin','js_cat');
	popup('alltowns','js_towns');
	popup('headmenu','showmenu');
	popup('filter','js_filter');
	popup('leftmenu','js_leftcat');
	popup('nologged','js_login');


	// Showmenu
	$('.showmenu').append('<span><b></b><b></b><b></b></span>');
	
	// Alltowns
	$('.alltowns ul li a').on('click',function() {
		var town_text = $(this).text();
		$('.choosetown .town').text(town_text);
		$('.alltowns, .alltowns_overlay').slideUp(200);
		return false;
	});


	// Slick slider
	$('#bnews_slider').slick({
		autoplay: true,
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		touchMove: true
	});
	$('#action_slider').slick({
		autoplay: false,
		dots: true,
		arrows: false,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		touchMove: true,
		responsive: [
			{ breakpoint: 1010, settings: { slidesToShow: 2, infinite: true } },
			{ breakpoint: 500, settings: {
				focusOnSelect: true, centerMode: true, variableWidth: true, slidesToShow: 1 }
			}
		]
	});
	$('#spec_slider, #hit_slider').slick({
		autoplay: false,
		dots: true,
		arrows: false,
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		touchMove: true,
		responsive: [
			{ breakpoint: 1010, settings: { slidesToShow: 1, infinite: true } },
			{ breakpoint: 750, settings: { slidesToShow: 2 } },
			{ breakpoint: 500, settings: {
				focusOnSelect: true, centerMode: true, variableWidth: true, slidesToShow: 1 }
			}
		]
	});
	$('#partner_slider').slick({
		autoplay: false,
		dots: true,
		arrows: true,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		touchMove: false,
		responsive: [
			{ breakpoint: 1010, settings: { touchMove: true, slidesToShow: 3 } },
			{ breakpoint: 500, settings: { slidesToShow: 1 } }
		]
	});


	// Leftmenu
	$('.parent').children('a').append('<span class="openMenu"></span>');
	$('.openMenu').on('click',function() {
		$(this).parent().parent().toggleClass('opened');
		$(this).parent().parent().find('ul').slideToggle(200);
		return false;
	});


	// Range slider
	var $range = $("#uirange"),
		$from = $(".range_from"),
		$to = $(".range_to"),
		range,
		min = 0,
		max = 50000,
		from,
		to;
	var updateValues = function() {
		$from.prop("value", from);
		$to.prop("value", to);
	};
	$range.ionRangeSlider({
		type: "double",
		min: min,
		max: max,
		prettify_enabled: false,
		onChange: function (data) {
			from = data.from;
			to = data.to;
			updateValues();
		}
	});
	range = $range.data("ionRangeSlider");
	var updateRange = function() {
		range.update({
			from: from,
			to: to
		});
	};
	$from.on("change", function() {
	    from = +$(this).prop("value");
	    if (from < min) { from = min; }
	    if (from > to) { from = to; }
	    updateValues();    
	    updateRange();
	});
	$to.on("change", function() {
	    to = +$(this).prop("value");
	    if (to > max) { to = max; }
	    if (to < from) { to = from; }
	    updateValues();    
	    updateRange();
	});


	// Sorting View
	$('.view li a').on('click',function(){
		$('.view li').removeClass('active');
		$(this).parent().addClass('active');
		$('.catalogList').removeClass('catalogList-listed');
		return false;
	});
	$('.view_list a').on('click',function(){
		$('.catalogList').addClass('catalogList-listed');
	});


	// Gallery
	$('.gallery_big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		asNavFor: '.gallery_thumbs',
		prevArrow: '<span class="slick-prev" aria-label="Previous"></span>',
        nextArrow: '<span class="slick-next" aria-label="Next"></span>'
	});
	$('.gallery_thumbs').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.gallery_big',
		centerMode: false,
		arrows: false,
		focusOnSelect: true,
		variableWidth: false
	});


	// Tabs
	$('#tabs, #tabsbox').tabs({
		collapsible: false,
		hide: { effect: "fade", duration: 100 },
		show: { effect: "fade", duration: 100 }
	});


	// Product cart
	$('.product_bottom .btn-orange').on('click',function() {
		$('.cartsuc').fadeIn(300);
		return false;
	});
	$('.cartsuc_close').on('click',function() {
		$('.cartsuc').fadeOut(300);
		return false;
	});


	// js_ankets
	$('.js_ankets, .js_action, .js_get_price').fancybox({
		margin: [44, 0],
		touch : false,
		closeBtn: false
	});


	$('#select_sorting').change(function() {
		var selValue = $(this).val();
		if ( selValue == 'all' ) {
			$('.pagination_pages').hide();
		} else {
			$('.pagination_pages').show();
		}
	});


	// Product box
	/*
	$("#radio-tver").change(function() {
		if ( $(this).is(':checked') ) {
			
		}
		return false;
	});
	*/

	$('.regform_face .radio').change(function() {
		if ( $(this).val() == 'yur' ) {
			$('#yurfields').slideDown(200);
		}
		if ( $(this).val() == 'fiz' ) {
			$('#yurfields').slideUp(200);
		}
	});
	

	// Phone mask
	$('.phone_input').mask('(000) 000-00-00');
	$('.input_kpp').mask('999999999');
	$('.input_ogrnip').mask('99999-99999-99999');
	$('.input_ogrn').mask('99999-99999-999');
	$('.input_rs').mask('9999-9999-9999-9999-9999');



	// basket_info_popup
	$('#basket_info_popup .cancel').click(function() {
		$(this).closest('.info_popup-wrapper').fadeOut(200);
		return false;
	});


	// files_scan
	/*
	$('#files_scan').change(function() {
		for (var i = 0; i < this.files.length; i++) {
			document.getElementById('files_array').innerHTML += '<li>' + this.files[i].name + ' <a href="#" class="files_array_del">X</a></li>';
		}
		$('.files_array_del').click(function () {
			$(this).closest('li').remove();
			return false;
		});
	});
	*/


	// New input
	$('.input_field').bind('focus',function() {
		$(this).closest('.input-box').addClass('focused');
		$(this).find('input, textarea').focus();
	});
	$('.input_field').bind('blur',function() {
		$(this).closest('.input-box').removeClass('focused');
		$(this).find('input, textarea').blur();
	});
	$('.input_field').on('input',function() {
		if ($(this).val().length > 0) {
			$(this).closest('.input-box').addClass('dirty');
		} else {
			$(this).closest('.input-box').removeClass('dirty');
		}
	});

	// autocomplete
	var towns = [
		'Москва',
		'Санкт-Петербург',
		'Екатеринбург',
		'Тверь',
		'Новосибирск',
		'Владивосток',
		'Красноярск',
		'Липецк',
		'Саратов',
		'Самара'
	];
	$('.input-box.search-input .input_field').autocomplete({
		source: towns,
		appendTo: '.input-box.search-input'
	});


	// show_delivery
	$('#show_delivery').on('change', function() {
		if ( $(this).prop('checked', true) ) {
			$('#show_delivery_div').slideDown(200);
		}
	});
	$('#close_delivery').on('change', function() {
		if ( $(this).prop('checked', true) ) {
			$('#show_delivery_div').slideUp(200);
		}
	});

	// beznal_ok
	$('.beznal_ok').on('click', function() {
		$(this).parent().fadeOut(200);
		return false;
	});

	// newbasket_table_complect_head, newbasket_table_complect_row
	function complect_hover(classname) {
		$(classname).on('mouseover', function() {
			$('.newbasket_table_complect_head'+classname+', .newbasket_table_complect_row'+classname+'').addClass('hover');
		});
		$(classname).on('mouseleave', function() {
			$('.newbasket_table_complect_head'+classname+', .newbasket_table_complect_row'+classname+'').removeClass('hover');
		});
	}
	complect_hover('.complect1');
	complect_hover('.complect2');


	// spinner
	$(document).on('click touchstart',function(e) {
		let div = $('.spinner');
		if ( div.is(e.target) ) {
			div.fadeOut(200);
			$('body').removeClass('spinner_on');
		}
	});

	// newbasket_scroll
	$(window).on('scroll', function() {
		var scrollTop = $(document).scrollTop();
		var righTop = $('.newbasket_right').offset().top - 10;
		if ( scrollTop > righTop ) {
			$('.newbasket_scroll').addClass('fixed');
		} else {
			$('.newbasket_scroll').removeClass('fixed');
		}
	});

	// get_price_row
	$('.get_price_row.spinner_row').append('<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>');


});