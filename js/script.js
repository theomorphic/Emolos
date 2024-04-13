
const mainFace = document.getElementById("mainFace");

const body = document.getElementById("body");


// (function(){
// 	setTimeout(() => {
// 		mainFace.classList.add("wondering");
// 	}, 2500);
// 	setTimeout(() => {
// 		body.classList.remove("start");
// 		mainFace.classList.remove("start");

// 		console.log("%cHe's laid-back and ready to talk",
// 		"color: #1e7062; font-size: 14px")
// 	}, 4000);
// 	setTimeout(() => {
// 		mainFace.style.backgroundImage = "";
// 		mainFace.classList.remove("wondering");

// 	}, 5000);
// })();

//ускорение hover

mainFace.onmouseover = hover;
mainFace.onmouseout = noHover;
function hover(){
	mainFace.classList.add("looking");
};
function noHover(){
	mainFace.classList.remove("looking");
};

function blinking(){

	setInterval(() => {
		setTimeout(() => {
			mainFace.classList.add("blinking");
		}, 2000);
		setTimeout(() => {
			mainFace.classList.remove("blinking");
		}, 2260);
	}, 3500);
}

blinking()

