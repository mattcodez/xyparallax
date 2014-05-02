"use strict";

$(window).scroll(function(e){
   setBoxSplit($(document.body).scrollLeft(), $(document.body).scrollTop());
});

function setBoxSplit(left, top){
    /*var pageCenter = {
        left: Math.floor($(document.body).width() / 2),
        top: Math.floor($(document.body).height() / 2)
    };*/

	var viewPortCenter = {
		left: Math.floor($(window).width() / 2) + left,
		top: Math.floor($(window).height() / 2) + top
	};

    $('.lt').each(function(i, el){
    	el = $(el);

		var offset = el.offset();
		var d = distance(
			offset.left,
			viewPortCenter.left,
			offset.top,
			viewPortCenter.top
		);

		var threshold = 500;
		if (d < threshold){
			var scaleRatio = (threshold - d) / threshold;
			var scalePercent = 100 * scaleRatio;
			el.css({
				'-webkit-transform': 'translate(-' + scalePercent + '%, -' + scalePercent + '%)'
			});
		}
    });
}

function distance(x1, x2, y1, y2){
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}