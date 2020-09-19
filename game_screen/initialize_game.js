// CONSTANTS
var BLANK = "";
var GRID_NAME = "minesweeperGrid"
var DIV = "div"
var SPAN = "span"


function buildGrid(rows = 7, cols = 7) {
    var minesweeperGrid = document.getElementById(GRID_NAME)
    minesweeperGrid.innerHTML = BLANK

    for (var i = 0; i < rows; i++) {
        var row = minesweeperGrid.appendChild(document.createElement(DIV))
        for (var j = 0; j < rows; j++) {
            var row = minesweeperGrid.appendChild(document.createElement(SPAN))
        }
    }
}