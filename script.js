let index = Math.floor(Math.random() * quotes.length);
function fillQuote() {
	document.querySelector(
		".pic"
	).innerHTML = `<img src="./img/${quotes[index].photo}" alt="${quotes[index].name}">`;
	document.querySelector(".name").innerHTML = `${quotes[index].name}`;
	document.querySelector(
		".profession"
	).innerHTML = `${quotes[index].profession}`;
	document.querySelector(".quote").innerHTML = `${quotes[index].quote}`;
}
function next() {
	index++;
	if (index >= quotes.length) {
		index = 0;
	}
	fillQuote();
}
function previous() {
	index--;
	if (index < 0) {
		index = quotes.length - 1;
	}
	fillQuote();
}
fillQuote();
