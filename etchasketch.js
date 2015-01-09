//test to make sure js loaded
console.log("yes this loaded correctly");
$(document).ready(function() {
    var container = document.getElementById('container');
    function createGrid(rows, cells, cellSize) { //creates the etch-a-sketch grid
        var row = $('<div class="row"></div>');
        var x = 0;
        while (x < cells) {
            $('<div class="cell"></div>').height(cellSize).width(cellSize).appendTo(row);
            x++
        };
        var y = 0;
        while (y < rows) {
            //$(clonedRow).removeAttr('id').clone().appendTo('.container');
            $(row).clone().appendTo('.container');
            y++
        }
        makeArt();
    };
    var size = 100;
    var cellSize = 9;
    createGrid(size,size,cellSize);
    
    function deleteGrid() {
        $(container).empty();
    };
    
    function makeArt() { //hover functionality
        $('.cell').mouseover(function() {
            $(this).addClass("hover")
        })
    }''

    $("button#shake").click(function() { //click the button to reset & prompt user for size to create new board
        $('.cell').removeClass("hover");
        deleteGrid();
        var sizeString = prompt("What size board do you want? (Single number 1-350)");
        size = parseInt(sizeString);
        if (size > 350 || isNaN(size)) {
            prompt("That's not a valid size. Please enter a valid size (single number 1-350).")
        }
        cellSize = Math.floor(960/size);
        createGrid(size,size,cellSize)
    });
    
    function generateColor() { //generates random rgb color value
        var r = (Math.floor(Math.random() * 255)).toString();
        var g = (Math.floor(Math.random() * 255)).toString();
        var b = (Math.floor(Math.random() * 255)).toString();
        //var a = Math.random().toFixed(2); //keeping in case I want to use rgba in the future
        return ("rgb(" + r + "," + g + "," + b + ")");
    }
    
    function colorHover() { //creates effect of each cell changing color when mouse hovers over it
        $('.cell').mouseover(function() {
            $(this).css("background-color", generateColor)
        })
    }

    $("button#color").click(function() { //initiates colorHover when button is clicked
        colorHover();
    });
});





350
