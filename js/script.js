
var switcher = true;

// УПРАВЛЕНИЕ HTML ИНТЕРФЕЙСОМ
	const body = document.getElementById("body");
	const statusSign = document.getElementById("statusSign");
	
	//кнопки слайдера
	const btnTalkative = document.getElementById("btnTalkative");
	const btnMiddle = document.getElementById("btnMiddle");
	const btnOriginal = document.getElementById("btnOriginal");

	//лица Лося
	const pfpBox = document.getElementById("pfpBox");
	const basicFace = document.getElementById("basicFace");
	const originalFace = document.getElementById("originalFace");
	const blinkingFace = document.getElementById("blinkingFace");


//ПОДКЛЮЧЕНИЕ КНОПОК К ФУНКЦИЯМ
	btnTalkative.addEventListener("click", talkativeMode)
	btnMiddle.addEventListener("click", middleMode)
	btnOriginal.addEventListener("click", originalMode)


//ФУНКЦИЯ ВЫДЕЛЕНИЯ РЕЖИМОВ БОТА
	$(document).ready(function(){
		$('li').on('click', function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		})
	})	


//ПОДКЛЮЧЕНИЕ КНОПОК К ФУНКЦИЯМ
	btnTalkative.addEventListener("click", talkativeMode)
	btnMiddle.addEventListener("click", middleMode)
	btnOriginal.addEventListener("click", originalMode)

//ФУНКЦИЯ МОРГАНИЯ

function blinking(){

	setInterval(() => {
		setTimeout(() => {
			basicFace.style.display = "none";
			blinkingFace.style.display = "block"
		}, 3000);
			
		setTimeout(() => {
			basicFace.style.display = "block";
			blinkingFace.style.display = "none"
		}, 3150);
	}, 6000)
}
blinking()


//ФУНКЦИИ РЕЖИМОВ БОТА
	function middleMode(){
		console.log("middle");

		//работа с биографией
		pfpBox.style.animation = "";
		basicFace.style.display = "block";
		originalFace.style.display = "none";
		statusSign.textContent = "В сети";

		basicFace.style.width = ""
		blinkingFace.style.width = ""

	}
	function talkativeMode(){
		console.log("talkative");

		//работа с биографией
		pfpBox.style.animation = "";
		basicFace.style.display = "block";
		originalFace.style.display = "none";
		statusSign.textContent = "В сети";

		basicFace.style.width = ""
		blinkingFace.style.width = ""
	}
	function originalMode(){
		console.log("original");

		//работа с биографией
		pfpBox.style.animation = "none";
		originalFace.style.display = "block";
		statusSign.textContent = "Не в сети";

		basicFace.style.width = "0"
		blinkingFace.style.width = "0"


	}

middleMode()