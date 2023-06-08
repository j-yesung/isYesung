const secondText = document.querySelector(".second-text");
const TextFunction = () => {
	setTimeout(() => {
		secondText.innerHTML = "Yesung";
	}, 0);
	setTimeout(() => {
		secondText.innerHTML = "Web Developer";
	}, 4000);
	setTimeout(() => {
		secondText.innerHTML = "Free spirit";
	}, 8000);
}
TextFunction();
setInterval(TextFunction, 12000);