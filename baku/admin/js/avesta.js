! function (e) {
	"use strict";

/***************************************************
****************************************************
// Feather Active Js
****************************************************
***************************************************/

$( function() {
	feather.replace()
});

/***************************************************
****************************************************
// Show and hide Search Form JS
****************************************************
***************************************************/
var handleSearchForm = function() {
	$("#search-button").on('click', function () {
		$('body').addClass('search-open');
	});

	$("#close-search").on('click', function () {
		$('body').removeClass('search-open');
	});
};



/***************************************************
****************************************************
// Tooltip & Popover
****************************************************
***************************************************/
var handelTooltipPopoverActivation = function() {
	"use strict";
	if ($('[data-toggle="tooltip"]').length !== 0) {
		$('[data-toggle=tooltip]').tooltip();
	}
	if ($('[data-toggle="popover"]').length !== 0) {
		$('[data-toggle=popover]').popover();
	}
};

/***************************************************
****************************************************
// Slimscroll Active Code
****************************************************
***************************************************/   
if ($.fn.slimscroll) {
	$('#messageBox, #notificationsBox').slimscroll({
		height: '300px',
		size: '2px',
		position: 'right',
		color: '#2D353E',
		alwaysVisible: false,
		distance: '0px',
		railVisible: false,
		wheelStep: 15
	});
}

	
/***************************************************
****************************************************
// Scrollbar
****************************************************
***************************************************/
var handleSlimScroll = function() {
	"use strict";
	$('[data-scrollbar=true]').each( function() {
		generateSlimScroll($(this));
	});
};
var generateSlimScroll = function(element) {
	if ($(element).attr('data-init')) {
		return;
	}
	var dataHeight = $(element).attr('data-height');
		dataHeight = (!dataHeight) ? $(element).height() : dataHeight;

	var scrollBarOption = {
		height: dataHeight, 
		alwaysVisible: false
	};
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$(element).css('height', dataHeight);
		$(element).css('overflow-x','scroll');
	} else {
		$(element).slimScroll(scrollBarOption);
		$(element).closest('.slimScrollDiv').find('.slimScrollBar').hide();
	}
	$(element).attr('data-init', true);
};


/***************************************************
****************************************************
// Scroll to Top Button
****************************************************
***************************************************/
var handleScrollToTopButton = function() {
	"use strict";
	$(document).scroll( function() {
		var totalScroll = $(document).scrollTop();

		if (totalScroll >= 200) {
			$('[data-click=scroll-top]').addClass('show');
		} else {
			$('[data-click=scroll-top]').removeClass('show');
		}
	});
	$('.content').scroll( function() {
		var totalScroll = $('.content').scrollTop();

		if (totalScroll >= 200) {
			$('[data-click=scroll-top]').addClass('show');
		} else {
			$('[data-click=scroll-top]').removeClass('show');
		}
	});
	$('[data-click=scroll-top]').on('click', function(e) {
		e.preventDefault();
		$('html, body, .content').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});
};


/***************************************************
****************************************************
// Application Controller
****************************************************
***************************************************/
var App = function () {
	"use strict";
	
	return {
		init: function () {
			this.initComponent();
		},
		initComponent: function() {
			handleSearchForm();
			handleSlimScroll();			
			handelTooltipPopoverActivation();
			handleScrollToTopButton();
		},
		scrollTop: function() {
			$('html, body, .content').animate({
				scrollTop: $('body').offset().top
			}, 0);
		}
	};
}();

$(document).ready(function() {
	App.init();
});

}(jQuery);