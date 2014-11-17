//test to make sure js loaded
console.log("yes this loaded correctly");
//how do i create a dynamic 16x16 grid of divs using jquery?
//have a container object with a row object that has cell objects?

$(document).ready(function() {
var $container = document.getElementById('container');
function createGrid(rows, cells) {
var row = document.getElementById('protoRow');
//$(row).width(cells*4);
var x = 0;
while (x < cells) {
	$('<div class="cell"></div>').appendTo(row);
	//console.log("x is " + x.toString());
	x++
};
var y = 0;
while (y < rows) {
	$(row).removeAttr('id').clone().appendTo('.container');
	y++
	}
var containerDiv = document.getElementById('container');
//$(containerDiv).width(cells*6);
};
createGrid(16,16);
//adding the effect so that when a mouse is hovering, that div turns black
$('.cell').mouseover(function() {
$(this).addClass("hover");
});
//click button to reset
$("button").click(function() {
$('.cell').removeClass("hover");
});
});




