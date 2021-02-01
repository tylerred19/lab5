'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$("a.lab5-text").click(changeName);
}

// testing the flow
// function projectClick(e) { 
//     // prevent the page from reloading      
//     e.preventDefault();
//     // In an event handler, $(this) refers to      
//     // the object that triggered the event      
//     $(this).css("background-color", "#7fff00");
// }

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}

function changeName(e) {
	e.preventDefault();
	console.log($(this).text());
	$(this).text(anagrammedName($(this).text()));
}