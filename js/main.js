"use strict";

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
	
	var rect = s.rect(700, 100, 100, 50, 8, 8);
	rect.attr({
		fill: '#beefff',
		stroke: '#000',
		strokeWidth: 5
	});
	
	var rMatrix = new Snap.Matrix();
	
	rect.hover(
		function(){ //In
			rMatrix.rotate(45, 700, 100);
			rect.transform(rMatrix);
		},
		function(){ //Out
			rMatrix.rotate(-45, 700, 100);
			rect.transform(rMatrix);
		}
	);
	
	var r = 5;
	function anim(){
		r = r > 5 ? 5 : 120;
		bigCircle.animate({r: r}, 2000, anim);
	}
	anim();
});
