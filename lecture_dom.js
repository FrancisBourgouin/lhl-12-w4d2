document.addEventListener("DOMContentLoaded", event => {
	alert("Hello");
	document
		.getElementsByTagName("ul")[1]
		.lastElementChild.classList.add("coffeeColored");
});

$(document).ready(event => {
	$("nav li:last-of-type").css("color", "blue");

	const $span = $("<span>").text("HELLO I AM A SPAN");
	const $paragraph = $("<p>").text("I AM PARAPGRAPH");
	const $heading = $("<h2>").text("I AM HEADING");

	const listOfElements = [$span, $paragraph, $heading];

	for (const element of listOfElements) {
		$("body").append(element);
	}
});
