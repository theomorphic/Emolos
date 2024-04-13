
const mainFace = document.getElementById("mainFace");

const body = document.getElementById("body");


const losImages = [];
function preloadImages() {
    for (let i = 0; i < arguments.length; i++) {
        losImages[i] = new Image();
        losImages[i].src = preloadImages.arguments[i];
    }
}

preloadImages(
	"../img/emotions/blinking.png",
	"../img/emotions/looking.png"
)


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
			mainFace.style.backgroundImage = "url(../img/emotions/blinking.png)"
		}, 2000);
		setTimeout(() => {
			mainFace.style.backgroundImage = ""
		}, 2260);
	}, 3500);
}

blinking()

