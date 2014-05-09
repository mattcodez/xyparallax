"use strict";

function setBoxSplit(left, top){
	//view port dimensions
	var vpWidth = $(window).width();
	var vpHeight = $(window).height();
	
	var vpCenter = {
		left: Math.floor(vpWidth / 2) + left,
		top: Math.floor(vpHeight / 2) + top
	};
	
	// 1/4th of the diagnal screen length
	var changeThreshold = Math.floor(Math.sqrt(Math.pow(vpWidth, 2) + Math.pow(vpHeight, 2)) / 4);

    $('.box').each(function(i, el){
    	el = $(el);

		//Get distance between viewport center and box center
		var offset = el.offset();
		var d = distance(
			offset.left + (el.width() / 2),
			vpCenter.left,
			offset.top + (el.height() / 2),
			vpCenter.top
		);

		//With current CSS, a box is set to be about 30% width of VP
		//so scale to 3 to approach full VP size
		if (d < changeThreshold){
			var scaleRatio = (changeThreshold - d) / changeThreshold;
			var scaleUnit = Math.max(3 * scaleRatio, 1);
			el.css({
				'-webkit-transform': 'scale(' + scaleUnit + ')'
			});
		}
    });
}

function distance(x1, x2, y1, y2){
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

$(function(){
	var s = Snap("#svg");
	var bigCircle = s.circle(150, 150, 100);
	bigCircle.attr({
		fill: "#bada55",
		stroke: "#000",
		strokeWidth: 5
	});
	
	var r = 5;
	function anim(){
		r = r > 5 ? 5 : 200;
		bigCircle.animate({r: r}, 2000, anim);
	}
	anim();
});
