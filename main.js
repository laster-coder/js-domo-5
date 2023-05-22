var bagua = document.getElementById("bagua");
var xuanzhuan = document.getElementById("xuanzhuan");
var rpingyi = document.getElementById("pingyi-right");
var lpingyi = document.getElementById("pingyi-left");

let star, perviousTimeStamp;
let done = false;
let ida;

function step(timestamp) {
	currRotate = bagua.style.transform;
	currRotate = currRotate.replace(/rotate\(/, "").replace(/deg\)/, "");

	if (currRotate > 360) {
		currRotate = 0;
	}
	bagua.style.transform = `rotate(${Number(currRotate) + 0.5}deg`;
	if (done) {
		ids = window.requestAnimationFrame(step);
	}
}

xuanzhuan.onclick = function () {
	done = !done;
	window.requestAnimationFrame(step);
};

rpingyi.onclick = function () {
	bagua.style.left = Number(bagua.style.left.replace(/px/, "")) + 100 + "px";
};

lpingyi.onclick = function () {
	bagua.style.left = Number(bagua.style.left.replace(/px/, "")) - 100 + "px";
};
