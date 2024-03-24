
const mainFace = document.getElementById("mainFace");

const body = document.getElementById("body");

(function(){
	// setTimeout(() => {
	// 	mainFace.style.backgroundImage = "url(../img/emotions/wondering.png)";
	// }, 2500);
	setTimeout(() => {
		body.classList.remove("start");
		mainFace.classList.remove("start");
		

		console.log("%cHe's laid-back and ready to talk",
		"color: #1e7062; font-size: 14px")
	}, 4000);
	// setTimeout(() => {
	// 	mainFace.style.backgroundImage = "";
	// }, 5000);
})();