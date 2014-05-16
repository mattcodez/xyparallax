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
	
	Snap.load('img/Stick_Figure_Male_clip_art.svg', function(f){
		var el = f.select('svg');
		s.append(el);
		el.attr({y:400});
		
		var m = new Snap.Matrix();
		m.scale(0.5);
		m.rotate(-20, 0, 0);
		el.select('g').transform(m);
	});
	
	Snap.load('img/alien.svg', function(f){
		var svg = f.select('svg');
		s.append(svg);
	
		//matrix scale() was doing some funky rotation
		svg.select('svg > use').attr({height:173});
	});
});
