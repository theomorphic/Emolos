
const mainFace = document.getElementById("mainFace");
const mainFaceLooking = document.getElementById("mainFaceLooking");
const mainFaceBlinking = document.getElementById("mainFaceBlinking");


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

// mainFace.onmouseover = hover;
// mainFaceLooking.onmouseout = noHover;
// function hover(){
// 	mainFace.style.display = "none";
// 	mainFaceLooking.style.display = "block";


// };
// function noHover(){
// 	mainFace.style.display = "block";
// 	mainFaceLooking.style.display = "none";
// 	mainFaceBlinking.style.display = "none";

// };

function blinking(){

	setInterval(() => {
		setTimeout(() => {
			mainFace.style.display = "none";
			mainFaceBlinking.style.display = "block";

		}, 2000);
		setTimeout(() => {
			mainFace.style.display = "block";
			mainFaceBlinking.style.display = "none";

		}, 2200); 
	}, 5500);
}


blinking()

