"use strict";

// Global variables
var photoOrder = [1,2,3,4,5];
var figureCount = 3;
var autoAdvance = setInterval(rightAdvance, 4000);
populateFigures();
// Add the SRC values to IMG elements based on the order in the photoOrder array

function populateFigures() {
	var filename;
	var currentFig;

	if(figureCount === 3) {
		for(var i = 1; i < 4; i++) {
			filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
			currentFig = document.getElementsByTagName("img")[i - 1];
			currentFig.src = filename;
		}
	}
}

// Add function call to the rightArrow
function rightArrow() {
	// Clear the auto advance feature
	clearInterval(autoAdvance);
	rightAdvance();
}

// Shift all images one figure from its current position, and change values in the photoOrder array
function rightAdvance() {
	for(var i = 0; i < photoOrder.length; i++) {
		if(photoOrder[i] + 1 === 6) {
			photoOrder[i] = 1;

		} else {
			photoOrder[i] += 1;
		}
		populateFigures();
	}
}

//Add function call to left arrow
function leftArrow() {
	// Clear auto advance
	clearInterval(autoAdvance);
	leftAdvance();
}

function leftAdvance() {
	for(var i = 0; i < photoOrder.length; i++) {
		if(photoOrder[i] - 1 === 0) {
			photoOrder[i] = 5;

		} else {
			photoOrder[i] -= 1;
		}
		populateFigures();
	}
}
// Add event hander for right arrow div
document.getElementById("rightarrow").onclick = rightArrow;
document.getElementById("leftarrow").onclick = leftArrow;