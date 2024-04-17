
var switcher = true;

// УПРАВЛЕНИЕ HTML ИНТЕРФЕЙСОМ
	const body = document.getElementById("body");
	const statusSign = document.getElementById("statusSign");
	
	//кнопки слайдера
	const btnBasic = document.getElementById("btnBasic");
	const btnOriginal = document.getElementById("btnOriginal");

	//лица Лося
	const pfpBox = document.getElementById("pfpBox");
	const basicFace = document.getElementById("basicFace");
	const originalFace = document.getElementById("originalFace");
	const blinkingFace = document.getElementById("blinkingFace");
	const wonderingFace = document.getElementById("wonderingFace");
	const deadLookingFace = document.getElementById("deadLookingFace");


//ПОДКЛЮЧЕНИЕ ЭЛЕМЕНТОВ К ФУНКЦИЯМ

	//кнопки
	btnBasic.addEventListener("click", basicMode)
	btnOriginal.addEventListener("click", originalMode)

	//лица Лося
	basicFace.addEventListener("mouseover", hideFace)
	wonderingFace.addEventListener("mouseout", showFace)
	originalFace.addEventListener("mouseout", stareDeadly)


//ФУНКЦИИ ВНЕШНЕГО ИНТЕРФЕЙСА

	//функция выделения режимов Лося
	$(document).ready(function(){
		$('li').on('click', function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		})
	})	
	//функция моргания Лося
	function blinking(){

		setInterval(() => {
			setTimeout(() => {
				basicFace.style.display = "none";
				blinkingFace.style.display = "block"
			}, 1000);
				
			setTimeout(() => {
				basicFace.style.display = "block";
				blinkingFace.style.display = "none"
			}, 1150);
		}, 6000)
	}
blinking() //активировано
	//функция удивления Лося
	function hideFace(){
		pfpBox.style.animation = "none";
	
		basicFace.style.width = "0";
		basicFace.style.display = "none";
	
		blinkingFace.style.width = "0";
	
		wonderingFace.style.width = "";
		wonderingFace.style.display = "block";
	}
	//функция нормализации лица Лося
	function showFace(){
		pfpBox.style.animation = "";
	
		basicFace.style.width = "";
		basicFace.style.display = "block";
	
		blinkingFace.style.width = "";
	
		wonderingFace.style.width = "0";
		wonderingFace.style.display = "none";
	}
	//функция мёртвого взгляда Лося
	function stareDeadly(){
		pfpBox.style.animation = "losShakeDeadly 1.2s ease infinite";
	
		originalFace.style.display = "none";
		originalFace.style.width = "0"
	
		deadLookingFace.style.display = "block";
		deadLookingFace.style.width = ""
	
		statusSign.textContent = "Не в сети?";
	
	
	}


//ФУНКЦИИ РЕЖИМОВ БОТА

	//заводской режим Лося
	function basicMode(){
		console.log("basic");

		//работа с биографией
		pfpBox.style.animation = "";

		basicFace.style.display = "block";
		basicFace.style.width = ""

		originalFace.style.display = "none";
		originalFace.style.width = "0"
		
		blinkingFace.style.width = ""
		
		wonderingFace.style.width = "0";
		
		deadLookingFace.style.display = "none"

		statusSign.textContent = "В сети";
	}
	//мёртвый режим Лося
	function originalMode(){
		console.log("original");

		//работа с биографией
		pfpBox.style.animation = "none";

		basicFace.style.width = "0";
		basicFace.style.display = "none";

		originalFace.style.display = "block";
		originalFace.style.width = "";

		blinkingFace.style.width = "0";

		wonderingFace.style.width = "0";
		wonderingFace.style.display = "none";

		statusSign.textContent = "Не в сети";
	}
basicMode() //активировано






