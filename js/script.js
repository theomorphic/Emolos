

// УПРАВЛЕНИЕ HTML ИНТЕРФЕЙСОМ
	const statusSign = document.getElementById("statusSign");
	const sendBtn = document.getElementById("sendBtn");
	const input = document.getElementById("input");
	const chatContainer = document.getElementById("chatContainer");

	//буферная зона для сообщения от пользователя
	const user = {message:"", counter:0};
	
	//кнопки слайдера
	const btnBasic = document.getElementById("btnBasic");
	const btnDead = document.getElementById("btnDead");

	//лица Лося
	const pfpBox = document.getElementById("pfpBox");
	const basicFace = document.getElementById("basicFace");
	const deadFace = document.getElementById("deadFace");
	const blinkingFace = document.getElementById("blinkingFace");
	const wonderingFace = document.getElementById("wonderingFace");
	const lookingFace = document.getElementById("lookingFace");
	const deadLookingFace = document.getElementById("deadLookingFace");
	const angryFace = document.getElementById("angryFace");
	const wowFace = document.getElementById("wowFace");
	const misunderstandingFace = document.getElementById("misunderstandingFace");
	const shockingFace = document.getElementById("shockingFace");
	const laughingFace = document.getElementById("laughingFace");
	const tiredFace = document.getElementById("tiredFace");

//ПОДКЛЮЧЕНИЕ ЭЛЕМЕНТОВ К ФУНКЦИЯМ

	//кнопки
	btnBasic.addEventListener("click", basicMode)
	btnDead.addEventListener("click", deadMode)
	sendBtn.addEventListener("click", clickSendBtn);

	//лица Лося
	basicFace.addEventListener("mouseover", wonderingFaceDisplay)
	wonderingFace.addEventListener("mouseout", basicFaceDisplay)
	deadFace.addEventListener("mouseout", stareDeadly)

// КОРОТКИЕ ПРЕДЛОЖЕНИЯ И ФРАЗЫ
	import { greetingsWords as greetingsWords } from "./response.js";
	import { greetingsMessages as greetingsMessages } from "./response.js";
	//короткие приветствия и пожелания
	import {negativeMessages as negativeMessages} from "./response.js";
	import {negativeWords as negativeWords} from "./response.js";
	//реакции на бранные слова и оскорбления
	import {noIdeaMessages as noIdeaMessages} from "./response.js";
	//короткие реакции на полное непонимание темы
	import { questions as generalQuestions } from "./response.js";
	import { rudeWords as rudeWords } from "./response.js";
	import { rudeMessages as rudeMessages } from "./response.js";
	//общие грубости
	import { randomSmiles as randomSmiles } from "./response.js";
	//смайлики из знаков

// ДЛИННЫЕ ПРЕДЛОЖЕНИЯ И ФРАЗЫ
	import {smalltalk as smalltalk} from "./response.js";
	//small talk
	import{quotes as quotes} from "./response.js";
	import { quotesAsking as quotesAsking } from "./response.js";
	//длинные цитаты-наставления
	import { weatherWords as weatherWords } from "./response.js";
	import { weatherMessages as weatherMessages } from "./response.js";
	//мнения о погоде
	import { jokes as jokes } from "./response.js";
	import { jokesWords as jokesWords } from "./response.js";
	//шутки

// СЛОВА ДЛЯ КОНСТРУИРОВАНИЯ РАЗБОРНЫХ ПРЕДЛОЖЕНИЙ
	import {conjunction as conjunction} from "./response.js";
	// союзны и союзные слова
	import {agreeWords as agreeWords} from "./response.js";
	//слова согласия, как короткие, так и отдельные фразы
	import {disagreeWords as disagreeWords} from "./response.js";
	//слова несогласия, как короткие, так и отдельные фразы
	import { introductoryWords as introductoryWords } from "./response.js";
	//вводные вступительные, заключительные и нейтральные фразы
	import { descriptionWords as descriptionWords } from "./response.js";
	//прилагательные и наречия для выражения своего мнения
	import { positiveDescriptionWords as positiveDescriptionWords } from "./response.js";
	//позитивные слова
	import { neutralWords as neutralWords } from "./response.js";
	//нейтральные ответы
	import { genre as genre } from "./categories.js";
	//слово жанр, вид и тд

// РЕАКЦИЯ НА ОТДЕЛЬНЫЕ ИМЕНА И ОБРАЩЕНИЯ
	import { unknownNames as unknownNames } from "./response.js";
	//незнакомые имена
	import {alex as alex} from "./files/alex.js";
	import {alexResponse as alexResponse} from "./files/alex.js";
	//реакция на Алёшу
	import { alexLang as alexLang } from "./files/alex.js";
	//Языки Алёши
	import { misha as misha } from "./files/misha.js";
	import { mishaMessages as mishaMessages } from "./files/misha.js";
	import { mishaActivities as mishaActivities } from "./files/misha.js";
	//реакции на Мишу
	
	import { thomas as thomas } from "./files/thomas.js";
	import { thomasMessages as thomasMessages } from "./files/thomas.js";
	//реакция на Томми Лавандеру

	import { sysa as sysa } from "./files/sysa.js";
	import { sysaMessages as sysaMessages } from "./files/sysa.js";
	//реакции на Сысу

	import { duncan as duncan } from "./files/duncan.js";
	import { duncanMessages as duncanMessages } from "./files/duncan.js";
	//реакция на Данкана

	import { losCallingWords as losCallingWords } from "./files/los.js";
	import { losCallingMessages as losCallingMessages } from "./files/los.js";
	//назвали самого Лося

	import { godWords as godWords } from "./categories.js";
	// реакция на бога
	import { family as family } from "./categories/family.js";
	// реакция на семью
	import { father as father } from "./categories/family.js";
	// реакция на отца
	import { mother as mother } from "./categories/family.js";
	// реакция на маму

	import { youWords as youWords } from "./response.js";
	//обращение напрямую к боту
	import { youPossessiveWords as youPossessiveWords } from "./response.js";
	//притяжательный падеж к боту
	import { meWords as meWords } from "./response.js";
	//обращение от первого лица
	import { mePossessWords as mePossessWords } from "./response.js";
	//первое лицо в притяжательном падеже

// КАТЕГОРИИ РАЗНЫХ ПОНЯТИЙ
	import { foodWords as foodWords } from "./categories/food.js";
	import {foodNames as foodNames} from "./categories/food.js";
	import { foodDescription as foodDescription } from "./categories/food.js";
	import { foodQuestions as foodQuestions } from "./categories/food.js";
	//описание еды, реакции и вопросы
	import { spiceNames as spiceNames } from "./categories/food.js";
	//названия специй
	import { drinksWords as drinksWords } from "./categories/drinks.js";
	import { drinksNames as drinksNames } from "./categories/drinks.js";
	import { drinksDescription as drinksDescription} from "./categories/drinks.js";
	import { drinksBadNames as drinksBadNames } from "./categories/drinks.js";
	import { drinksQuestions as drinksQuestions } from "./categories/drinks.js";
	//описание напитков
	import { animalWords as animalWords } from "./categories.js";
	import { animalDescription as animalDescription } from "./categories.js";
	import { animalQuestions as animalQuestions } from "./categories.js";
	//описание животных
	import { natureWords as natureWords } from "./categories.js";
	import { natureDescription as natureDescription } from "./categories.js";
	import { natureQuestions as natureQuestions } from "./categories.js";
	import { natureNames as natureNames } from "./categories.js";
	//описание природы
	import { musicGenres as musicGenres } from "./categories.js";
	import { musicDescription as musicDescription } from "./categories.js";
	import { musicQuestions as musicQuestions } from "./categories.js";
	import { musicWord as musicWord } from "./categories.js";
	//музыкальные жанры и реакция на них
	import { langNames as langNames } from "./categories.js";
	import { langRussian as langRussian } from "./categories.js";
	//языки и лингвистика
	import { movieTitles as movieTitles } from "./categories/movies.js";
	import { movieWords as movieWords } from "./categories/movies.js";
	import { movieMessages as movieMessages } from "./categories/movies.js";
	import { directorsNames as directorsNames } from "./categories/movies.js";
	//кино
	import { sportWords as sportWords } from "./categories.js";
	//спорт

//ОТДЕЛЬНЫЕ ГЛАГОЛЫ
	import { verbLove as verbLove } from "./verbs.js";
	//глагол любить, нравится и тд
	import { verbName as verbName } from "./verbs.js";
	//глагол называть, звать + имя
	import { verbDrink } from "./verbs.js";
	//глагол пить, выпивать
	import { verbSmoke as verbSmoke } from "./verbs.js";
	//глагол курить, дымыть
	import { verbHate as verbHate } from "./verbs.js";
	//глагол ненавидеть, злиться
	import { verbSpeak as verbSpeak } from "./verbs.js";
	//глагол говорить
	import { verbLaugh as verbLaugh } from "./verbs.js";
	//глагол смеяться
	import { verbAsk as verbAsk } from "./verbs.js";
	//глагол спрашивать
	import { verbFeelingBad as verbFeelingBad } from "./verbs.js";
	//злиться, грустить и тд
	import { verbThank as verbThank } from "./verbs.js";
	//глагол благодарить
	import { verbBelieve as verbBelieve } from "./verbs.js";
	//глагол верить
	import { verbEat as verbEat } from "./verbs.js";
	// глагол кушать
	import { verbKnow as verbKnow } from "./verbs.js";
	//глагол понимать
	import { verbSorry as verbSorry } from "./verbs.js";
	//глагол извиняться

//ФУНКЦИИ ГРАФИЧЕСКОГО ИНТЕРФЕЙСА

	//функция выделения режимов Лося
	$(document).ready(function(){
		$('li').on('click', function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		})
	})
	
	//показ моргающего лица
	function blinkingFaceDisplay(){
		basicFace.style.width = "0";
		basicFace.style.display = "none";

		deadFace.style.display = "none";
		deadFace.style.width = "0";

		blinkingFace.style.width = "";
		blinkingFace.style.display = "block";

		wonderingFace.style.width = "0";
		wonderingFace.style.display = "none";

		angryFace.style.display = "none";
		angryFace.style.width = "0";

		misunderstandingFace.style.display = "none";
		misunderstandingFace.style.width = "0";

		shockingFace.style.display = "none";
		shockingFace.style.width = "0";

		lookingFace.style.display = "none";
		lookingFace.style.width = "0";

		wowFace.style.display = "none";
		wowFace.style.width = "0";
	}

	//функция моргания Лося
	function blinking(){

		setInterval(() => {
			setTimeout(() => {

				if( deadLookingFace.style.display == "block"){
					stareDeadly()
				}
				else if(deadFace.style.display == "block" ){
					deadFaceDisplay()
				}
				else if(wonderingFace.style.display == "block" ){
					wonderingFaceDisplay()
				}
				else{
					misunderstandingFace.style.display = "none";
					misunderstandingFace.style.width = "0";
					shockingFace.style.display = "none";
					shockingFace.style.width = "0";
					lookingFace.style.display = "none";
					lookingFace.style.width = "0";
					wowFace.style.display = "none";
					wowFace.style.width = "0";
					tiredFace.style.display = "none";
					tiredFace.style.width = "0";
					laughingFace.style.display = "none";
					laughingFace.style.width = "0";
					basicFace.style.display = "none";
					blinkingFace.style.display = "block"
					
					blinkingFaceDisplay()
				}
			}, 1000);
				
			setTimeout(() => {
				if( deadLookingFace.style.display == "block"){
					stareDeadly()
				}
				else if(deadFace.style.display == "block" ){
					deadFaceDisplay()
				}
				else if(wonderingFace.style.display == "block" ){
					wonderingFaceDisplay()
				}
				else{
					shockingFace.style.display = "none";
					shockingFace.style.width = "0";
					misunderstandingFace.style.display = "none";
					misunderstandingFace.style.width = "0";
					lookingFace.style.display = "none";
					lookingFace.style.width = "0";
					wowFace.style.display = "none";
					wowFace.style.width = "0";
					tiredFace.style.display = "none";
					tiredFace.style.width = "0";
					laughingFace.style.display = "none";
					laughingFace.style.width = "0";
					basicFace.style.display = "block";
					blinkingFace.style.display = "none"
	
					basicFaceDisplay()
				}

			}, 1150);
		}, 6000)
	}
blinking() //активировано

	//показ удивления от наводки на Лося
	function wonderingFaceDisplay(){
		pfpBox.style.animation = "none";
	
		basicFace.style.width = "0";
		basicFace.style.display = "none";
	
		blinkingFace.style.width = "0";
		blinkingFace.style.display = "none";

		wonderingFace.style.width = "";
		wonderingFace.style.display = "block";

		angryFace.style.display = "none";
		angryFace.style.width = "0";
		
		misunderstandingFace.style.display = "none";
		misunderstandingFace.style.width = "0";

		shockingFace.style.display = "none";
		shockingFace.style.width = "0";

		lookingFace.style.display = "none";
		lookingFace.style.width = "0";

		wowFace.style.display = "none";
		wowFace.style.width = "0";

		laughingFace.style.display = "none";
		laughingFace.style.width = "0";

		tiredFace.style.display = "none";
		tiredFace.style.width = "0";

	}

	//показ мёртвого взгляда Лося
	function stareDeadly(){
		pfpBox.style.animation = "losShakeDeadly 1.2s ease infinite";
	
		deadFace.style.display = "none";
		deadFace.style.width = "0"
	
		deadLookingFace.style.display = "block";
		deadLookingFace.style.width = ""
	}

	//показ стандартного лица
	function basicFaceDisplay(){
		pfpBox.style.animation = "";

		basicFace.style.display = "block";
		basicFace.style.width = "";

		deadFace.style.display = "none";
		deadFace.style.width = "0";
		
		blinkingFace.style.width = "";
		
		wonderingFace.style.width = "0";
		wonderingFace.style.display = "none";
		
		deadLookingFace.style.display = "none";

		angryFace.style.display = "none";
		angryFace.style.width = "0";

		misunderstandingFace.style.display = "none";
		misunderstandingFace.style.width = "0";

		shockingFace.style.display = "none";
		shockingFace.style.width = "0";

		lookingFace.style.display = "none";
		lookingFace.style.width = "0";

		wowFace.style.display = "none";
		wowFace.style.width = "0";

		laughingFace.style.display = "none";
		laughingFace.style.width = "0";

		tiredFace.style.display = "none";
		tiredFace.style.width = "0";

	}

	//показ мёртвого лица
	function deadFaceDisplay(){
		basicFace.style.width = "0";
		basicFace.style.display = "none";

		deadFace.style.display = "block";
		deadFace.style.width = "";

		blinkingFace.style.width = "0";
		blinkingFace.style.display = "none";

		wonderingFace.style.width = "0";
		wonderingFace.style.display = "none";

		angryFace.style.display = "none";
		angryFace.style.width = "0";

		misunderstandingFace.style.display = "none";
		misunderstandingFace.style.width = "0";

		shockingFace.style.display = "none";
		shockingFace.style.width = "0";

		lookingFace.style.display = "none";
		lookingFace.style.width = "0";

		wowFace.style.display = "none";
		wowFace.style.width = "0";

		laughingFace.style.display = "none";
		laughingFace.style.width = "0";

		tiredFace.style.display = "none";
		tiredFace.style.width = "0";
	}

	//показ злого лица
	function angryFaceDisplay(){
		if(wonderingFace.style.display == "block"){
			wonderingFaceDisplay()
		}
		else{
			basicFace.style.display = "none";
			basicFace.style.width = "0";
	
			deadFace.style.display = "none";
			deadFace.style.width = "0";
			
			blinkingFace.style.width = "";

			wonderingFace.style.width = "0";
			wonderingFace.style.display = "none";
	
			deadLookingFace.style.display = "none";

			misunderstandingFace.style.display = "none";
			misunderstandingFace.style.width = "0";
	
			angryFace.style.display = "block";
			angryFace.style.width = "";

			shockingFace.style.display = "none";
			shockingFace.style.width = "0";

			lookingFace.style.display = "none";
			lookingFace.style.width = "0";

			wowFace.style.display = "none";
			wowFace.style.width = "0";

			laughingFace.style.display = "none";
			laughingFace.style.width = "0";

			tiredFace.style.display = "none";
			tiredFace.style.width = "0";
		}


	}

	//показ неуверенного лица
	function misunderstandingFaceDisplay(){
		if(wonderingFace.style.display == "block"){
			wonderingFaceDisplay()
		}
		else{
			basicFace.style.display = "none";
			basicFace.style.width = "0";
	
			deadFace.style.display = "none";
			deadFace.style.width = "0";
			
			blinkingFace.style.width = "";

			wonderingFace.style.width = "0";
			wonderingFace.style.display = "none";
	
			deadLookingFace.style.display = "none";

			misunderstandingFace.style.display = "block";
			misunderstandingFace.style.width = "";

			shockingFace.style.display = "none";
			shockingFace.style.width = "0";

			lookingFace.style.display = "none";
			lookingFace.style.width = "0";

			wowFace.style.display = "none";
			wowFace.style.width = "0";

			laughingFace.style.display = "none";
			laughingFace.style.width = "0";

			tiredFace.style.display = "none";
			tiredFace.style.width = "0";
		}
	}

	//показ шокированного лица
	function shockingFaceDisplay(){

		if(wonderingFace.style.display == "block"){
			wonderingFaceDisplay()
		} 
		else{
			basicFace.style.display = "none";
			basicFace.style.width = "0";
		
			deadFace.style.display = "none";
			deadFace.style.width = "0";
				
			blinkingFace.style.width = "";
	
			wonderingFace.style.width = "0";
			wonderingFace.style.display = "none";
		
			deadLookingFace.style.display = "none";
	
			misunderstandingFace.style.display = "none";
			misunderstandingFace.style.width = "0";

			angryFace.style.display = "none";
			angryFace.style.width = "0";
	
			shockingFace.style.display = "block";
			shockingFace.style.width = "";

			lookingFace.style.display = "none";
			lookingFace.style.width = "0";

			wowFace.style.display = "none";
			wowFace.style.width = "0";

			laughingFace.style.display = "none";
			laughingFace.style.width = "0";

			tiredFace.style.display = "none";
			tiredFace.style.width = "0";

		}
	}

	//показ лица, смотрящего на пользователя
	function lookingFaceDisplay(){
		if(wonderingFace.style.display == "block"){
			wonderingFaceDisplay()
		}
		else{
			basicFace.style.display = "none";
			basicFace.style.width = "0";
	
			deadFace.style.display = "none";
			deadFace.style.width = "0";
			
			blinkingFace.style.width = "";

			wonderingFace.style.width = "0";
			wonderingFace.style.display = "none";
	
			deadLookingFace.style.display = "none";

			misunderstandingFace.style.display = "none";
			misunderstandingFace.style.width = "0";
	
			angryFace.style.display = "none";
			angryFace.style.width = "0";

			shockingFace.style.display = "none";
			shockingFace.style.width = "0";

			lookingFace.style.display = "block";
			lookingFace.style.width = "";

			wowFace.style.display = "none";
			wowFace.style.width = "0";

			laughingFace.style.display = "none";
			laughingFace.style.width = "0";

			tiredFace.style.display = "none";
			tiredFace.style.width = "0";	
		}
	}

	//показ удивленного лица
	function wowFaceDisplay(){
		if(wonderingFace.style.display == "block"){
			wonderingFaceDisplay()
		} 
		else{
			basicFace.style.display = "none";
			basicFace.style.width = "0";
	
			deadFace.style.display = "none";
			deadFace.style.width = "0";
			
			blinkingFace.style.width = "";

			wonderingFace.style.width = "0";
			wonderingFace.style.display = "none";
	
			deadLookingFace.style.display = "none";

			misunderstandingFace.style.display = "none";
			misunderstandingFace.style.width = "0";
	
			angryFace.style.display = "none";
			angryFace.style.width = "0";

			shockingFace.style.display = "none";
			shockingFace.style.width = "0";

			lookingFace.style.display = "none";
			lookingFace.style.width = "0";

			wowFace.style.display = "block";
			wowFace.style.width = "";

			laughingFace.style.display = "none";
			laughingFace.style.width = "0";

			tiredFace.style.display = "none";
			tiredFace.style.width = "0";

		}
	}

	//показ смешного лица
	function laughingFaceDisplay(){
		if(wonderingFace.style.display == "block"){
			wonderingFaceDisplay()
		} 
		else{
			basicFace.style.display = "none";
			basicFace.style.width = "0";
	
			deadFace.style.display = "none";
			deadFace.style.width = "0";
			
			blinkingFace.style.width = "";

			wonderingFace.style.width = "0";
			wonderingFace.style.display = "none";
	
			deadLookingFace.style.display = "none";

			misunderstandingFace.style.display = "none";
			misunderstandingFace.style.width = "0";
	
			angryFace.style.display = "none";
			angryFace.style.width = "0";

			shockingFace.style.display = "none";
			shockingFace.style.width = "0";

			lookingFace.style.display = "none";
			lookingFace.style.width = "0";

			wowFace.style.display = "none";
			wowFace.style.width = "0";

			laughingFace.style.display = "block";
			laughingFace.style.width = "";

			tiredFace.style.display = "none";
			tiredFace.style.width = "0";
		}
	}

	//показ уставшего лица
	function tiredFaceDisplay(){
		if(wonderingFace.style.display == "block"){
			wonderingFaceDisplay()
		} 
		else{
			basicFace.style.display = "none";
			basicFace.style.width = "0";
	
			deadFace.style.display = "none";
			deadFace.style.width = "0";
			
			blinkingFace.style.width = "";

			wonderingFace.style.width = "0";
			wonderingFace.style.display = "none";
	
			deadLookingFace.style.display = "none";

			misunderstandingFace.style.display = "none";
			misunderstandingFace.style.width = "0";
	
			angryFace.style.display = "none";
			angryFace.style.width = "0";

			shockingFace.style.display = "none";
			shockingFace.style.width = "0";

			lookingFace.style.display = "none";
			lookingFace.style.width = "0";

			wowFace.style.display = "none";
			wowFace.style.width = "0";

			laughingFace.style.display = "none";
			laughingFace.style.width = "0";

			tiredFace.style.display = "block";
			tiredFace.style.width = "";
		}
	}
	
//ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ

	//функция для выведения рандомного числа из длины массива
	function randomArrayNumber(arrayName){
		let lastIndex = arrayName.length;
		const randomNumber = Math.floor(Math.random()*lastIndex);
		return randomNumber;
	}
	//функция делает первую букву ответа заглавной
	function toUpperCaseAnswer(answer){
		return answer.charAt(0).toUpperCase() + answer.slice(1);
	}
	//функция делает первую букву ответа строчной
	function toLowerCaseAnswer(answer){
		return answer.charAt(0).toLowerCase() + answer.slice(1);
	}	

// АЛГОРИТМ РАБОТЫ ЧАТ БОТА

	//Вступительное сообщение 
	setTimeout(() => {
		chatbotSendMessage(smalltalk[randomArrayNumber(smalltalk)]);
		console.warn("В консоль лезут только нубы")
		}, 1500);
	//Добавление в HTML уже готовое сообщение от бота
		function chatbotSendMessage(messageText){
			const messageElement = document.createElement("div");
			messageElement.classList.add("botMessage");
			messageElement.classList.add("w-50");
			messageElement.classList.add("shadow-sm");

			messageElement.innerHTML =
			"<span style="+"margin-top: 10px; padding: 10px;"+">"+ messageText +"</span>"

			messageElement.animate([{easing:"ease-in", opacity: 0.4},{opacity:1}], {duration: 700});
			chatContainer.appendChild(messageElement);
			//скроллим вниз по сообщениям
			chatContainer.scrollTop = chatContainer.scrollHeight;
		}
	//Добавление в HTML уже готовое сообщение от пользователя
		function sendMessage(messageText){

		const messageElement = document.createElement("div");
		messageElement.classList.add("userMessage");
		messageElement.classList.add("w-50");
		messageElement.classList.add("shadow-sm");

		messageElement.innerHTML =
		"<span style="+"margin-top: 10px; padding: 10px;"+">"+ messageText +"</span>"

		messageElement.animate([{easing:"ease-in", opacity: 0.4},{opacity:1}], {duration: 700}); //анимация с появлением
		chatContainer.appendChild(messageElement);

		//скроллим вниз по сообщениям
		chatContainer.scrollTop = chatContainer.scrollHeight;

	}
	//функция отправки сообщения от пользователя через клавишу enter
	input.addEventListener("keypress", function(e){
		if(e.which == 13){
			clickSendBtn();
		}
	});		
	//функция отправки сообщения от пользователя
	function clickSendBtn(){
		if(input.value == ""){
			alert("Ты текст не написал")
		}else{
			let messageText =  input.value.trim();
			user.message = messageText;
			sendMessage(messageText);
			input.value = "";
		
			processMessage();
		}
	};

//ФУНКЦИИ РЕЖИМОВ БОТА

	//МЁРТВЫЙ РЕЖИМ ЛОСЯ
	function deadMode(){
		pfpBox.style.animation = "none";

		deadFaceDisplay()

		statusSign.textContent = "Не в сети";

		input.classList.add("closed");
		input.style.backgroundColor = "#fefcfb";
		sendBtn.classList.add("closed");
		sendBtn.style.backgroundColor = "#fefcfb";
	}
	//ЗАВОДСКОЙ РЕЖИМ ЛОСЯ
	function basicMode(){
		pfpBox.style.animation = "";

		basicFaceDisplay()

		statusSign.textContent = "В сети";

		input.classList.remove("closed");
		input.style.backgroundColor = "";
		sendBtn.classList.remove("closed");
		sendBtn.style.backgroundColor = "";
	}
basicMode() //активировано

//ГЕНЕРАЦИЯ СООБЩЕНИЯ ЧАТ БОТА: ИЗВИЛИНЫ

	//функция формирования мнения по определенной тематике
	function processTopics(topic, description, question){

	let answers = [
			`Говоря про ${topic}, звучит ${description} для меня`,
			`${topic}? Ну так, вполне ${description} на мой вкус. ${question}`,
			`${topic}! Весьма ${description}, я бы сказал. ${question}`,
			`О, ты сказал ${topic}. Одно слово приходит на ум: ${description}`,
			`Слишком ${description}, честно говоря`,
			`${description} на мой взгляд`,
			`Довольно ${description} для меня`,
			`Что, ${topic}? Это ${description}. ${question}`,
			// `To me, ${topic} is simply ${description}. Do you agree?`,
			// `It's my belief that ${topic} is ${description}`,
			// `${topic} is simply ${description} in my eyes`,
			// `Personally, I find ${topic} ${description}`,
			// `One adjective I would use for ${topic} is ${description}`,
			// `From my standpoint, ${topic} is ${description}. ${question}`,
			// `I perceive ${topic} as ${description}. What about you?`,
			// `Expressing my opinion about ${topic}, I would describe it as ${description}`,
			// `I find ${topic} to be ${description}. ${question}`,
			// `To me, ${topic} appears ${description}. ${question}`,
			// `It seems to me that ${topic} is ${description}. It should be ${description}`,
			// `When it comes to ${topic}, I see it as ${description}. ${question}`,
			// `My take on ${topic} is ${description}. ${question}`,
			// `My stance on ${topic} is ${description}, agree?`,
			// `I reckon ${topic} is ${description}. ${question}`,
			// `It strikes me that ${topic} is ${description}, right? ${question}`,
			// `I regard ${topic} as ${description}. ${question}`,
			// `I opine that ${topic} is ${description}. What do you think here?`,
			// `In my estimation, ${topic} is ${description}. ${question}`,
			// `As far as I'm concerned, ${topic} is ${description}. ${question}`,
			// `My position on ${topic} is that it is ${description}. ${question}`,
			// `In my judgment, ${topic} is ${description}. ${question}`,
			// `My perspective leads me to see ${topic} as ${description}`,
			// `My sense of ${topic} is ${description}. ${question}`,
			// `I understand ${topic} as ${description}. ${question}`,
			// `I am convinced that ${topic} is ${description}. ${question}`,
			// `It is my belief that ${topic} is ${description}. ${question}`,
			// `I interpret ${topic} as something ${description}. ${question}`,
			// `To my mind, ${topic} falls under the category of ${description}`,
			// `I categorize ${topic} as ${description}. And I'm not joking here`,
			// `In a nutshell, ${topic} is ${description}. ${question}`,
			// `It is my considered view that ${topic} is ${description}. ${question}`,
			// `It is my belief that ${topic} can be defined as ${description}. ${question}`,
			// `I put ${topic} in the category of ${description}. ${question}`,
			// `My considered opinion is that ${topic} is ${description}. But I'm not sure. ${question}`,
		]

	let answer = answers[randomArrayNumber(answers)];
	return answer;
	}

	//функция для выражения мнения про кино
	function discussingMovies(movie, opinion){

	let answers = [
		`Хмм, по мне так ${movie} - это крутой фильм.`,
		`Скажу честно, ${movie} - вот этот фильм было интересно смотреть`,
		`Мне кажется, ${movie} заслуживает всех наград киноакадемии.`,
		// `I was pleasantly surprised by ${movie}.`,
		// `I didn't expect the ${movie} to be that good.`,
		// `${movie} really touched my heart.`,
		// `I believe everyone should watch ${movie}.`,
		// `What an emotional journey that ${movie} was.`,
		// `I'm still thinking about that ${movie}. It's ${opinion}.`,
		// `The actors in this ${movie} were exceptional.`,
		// `The soundtrack of ${movie} was breathtaking.`,
		// `I was completely captivated by ${movie}.`,
		// `What an outstanding performance in ${movie}, ${opinion}!`,
		// `The visual effects in ${movie} were mind-blowing.`,
		// `I laughed and cried throughout ${movie}.`,
		// `${movie} is a must-watch for everyone.`,
		// `I can't stop recommending ${opinion} ${movie} to everyone!`,
		// `The storyline of ${movie} was so well-crafted.`,
		// `The dialogues in ${movie} were so powerful.`,
		// `What a masterpiece ${movie} is!`,
		// `I was on the edge of my seat watching ${movie}.`,
		// `The cinematography in ${movie} was stunning.`,
		// `After watching ${movie}, I feel so inspired.`,
		// `I can't get over how ${opinion} ${movie} was.`,
		// `The message conveyed in ${movie} was profound.`,
		// `I want to relive the experience of ${movie}.`,
		// `The cast of ${movie} was perfectly chosen.`,
		// `I have a newfound appreciation for ${movie}.`,
		// `I'll always remember the impact of ${movie}.`,
		// `The setting of ${movie} was so ${opinion}.`,
		// `The climax of ${movie} was so ${opinion}.`,
		// `I'm in awe of the creativity in ${movie}.`,
		// `I couldn't take my eyes off the screen during ${movie}.`,
		// `Every scene in ${movie} was filled with emotion.`,
		// `The transitions in ${movie} were seamless.`,
		// `The ending of ${movie} left me speechless.`,
		// `My favorite part of ${movie} was ${opinion}`,
		// `I was so invested in the characters of ${movie}.`,
		// `The humor in ${movie} was well-placed.`,
		// `The suspense in ${movie} kept me hooked.`,
		// `I connected with the themes of ${movie} deeply.`,
		// `I wish I could watch ${movie} for the first time again.`,
		// `The sound design of ${movie} was superb.`,
		// `${movie} will definitely stay with me for a long time.`,
		// `I felt a range of emotions while watching ${movie}, ${opinion}!`,
		// `I have to say, that ${movie} was truly unforgettable.`,
	]

	let answer = answers[randomArrayNumber(answers)];
	return answer;
	}

	//функция обработки сообщения пользователя и формирования ответа
	function processMessage(){

	//ФИЛЬТР ДЛЯ СООБЩЕНИЯ ПОЛЬЗОВАТЕЛЯ

	let marks = /[,.!?'-\s]+/; 
	// параметр, который фильтрует знаки через regexp
	let yo = /ё/g;
	//параметр для фильтра буквы ё, g - небоходимый флаг для global, берет все элементы, а не только первый
	let message = new String(user.message).toLowerCase().replaceAll(yo, "е").split(marks);
	//создает массив из сообщения
	
	//ТОЧКИ СОПРИКОСНОВЕНИЯ, СОВПАДЕНИЯ С ИЗВЕСТНЫМИ ДАННЫМИ

	//личный счёт
	const youMatch = youWords.filter(element => message.includes(element));
	const youPossessiveMatch = youPossessiveWords.filter(element => message.includes(element));
	const meMatch = meWords.filter(element => message.includes(element));
	const mePossessMatch = mePossessWords.filter(element => message.includes(element));

	//оскорбления, старость,грубость	
	const negativeMatch = negativeWords.filter(element => message.includes(element));
	const rudeMatch = rudeWords.filter(element => message.includes(element));

	//приветствие и прощание
	const greetingsMatch = greetingsWords.filter(element => message.includes(element));

	//реакция на имена
	const unknownNameMatch = unknownNames.filter(element => message.includes(element));
	const mishaMatch = misha.filter(element => message.includes(element));
	const alexMatch = alex.filter(element => message.includes(element));
	const tommyMatch = thomas.filter(element => message.includes(element));
	const losCallingMatch = losCallingWords.filter(element => message.includes(element));
	const sysaMatch = sysa.filter(element => message.includes(element));
	const duncanMatch = duncan.filter(element => message.includes(element));
	const godMatch = godWords.filter(element => message.includes(element));
	const familyMatch = family.filter(element => message.includes(element));
	const fatherMatch = father.filter(element => message.includes(element));
	const motherMatch = mother.filter(element => message.includes(element));

	//категории познаний
	const foodWordsMatch = foodWords.filter(element => message.includes(element));
	const foodMatch = foodNames.filter(element => message.includes(element));
	const drinksWordsMatch = drinksWords.filter(element => message.includes(element));
	const drinksNamesMatch = drinksNames.filter(element => message.includes(element));
	const drinksBadNamesMatch = drinksBadNames.filter(element => message.includes(element));
	const spiceNamesMatch = spiceNames.filter(element => message.includes(element));

	const animalMatch = animalWords.filter(element => message.includes(element));
	const natureMatch = natureWords.filter(element => message.includes(element));
	const natureNamesMatch = natureNames.filter(element => message.includes(element));
	const langMatch = langNames.filter(element => message.includes(element));
	const langRussianMatch = langRussian.filter(element => message.includes(element));
	const jokesMatch = jokesWords.filter(element => message.includes(element));

	//искусство: кино, музыка
	const musicMatch = musicGenres.filter(element => message.includes(element));
	const movieWordsMatch = movieWords.filter(element => message.includes(element));
	const directorsNamesMatch = directorsNames.filter(element => message.includes(element));
	const genreMatch = genre.filter(element => message.includes(element));
	const musicWordMatch = musicWord.filter(element => message.includes(element));

	//спорт
	const sportWordsMatch = sportWords.filter(element => message.includes(element));

	//мотивационные цитаты
	const quoteMatch = quotesAsking.filter(element => message.includes(element));

	//вопросы
	const questionsMatch = generalQuestions.filter(element => message.includes(element));

	//короткие ответы: согласие и отрицание, обращение на ты
	const agreeMatch = agreeWords.filter(element => message.includes(element));
	const disagreeMatch = disagreeWords.filter(element => message.includes(element));

	//отдельные слова и категории
	const positiveDescriptionMatch = positiveDescriptionWords.filter(element => message.includes(element));
	const descriptionWordsMatch = descriptionWords.filter(element => message.includes(element));
	const musicDescriptionMatch = musicDescription.filter(element => message.includes(element));
	const conjunctionMatch = conjunction.filter(element => message.includes(element));
	const randomSmilesMatch = randomSmiles.filter(element => message.includes(element));
	const weatherWordsMatch = weatherWords.filter(element => message.includes(element));

	//отдельные глаголы
	const verbLoveMatch = verbLove.filter(element => message.includes(element));
	const verbNameMatch = verbName.filter(element => message.includes(element));
	const verbDrinkMatch = verbDrink.filter(element => message.includes(element));
	const verbHateMatch = verbHate.filter(element => message.includes(element));
	const verbSmokeMatch = verbSmoke.filter(element => message.includes(element));
	const verbSpeakMatch = verbSpeak.filter(element => message.includes(element));
	const verbLaughMatch = verbLaugh.filter(element => message.includes(element));
	const verbAskMatch = verbAsk.filter(element => message.includes(element));
	const verbFeelingBadMatch = verbFeelingBad.filter(element => message.includes(element));
	const verbThankMatch = verbThank.filter(element => message.includes(element));
	const verbBelieveMatch = verbBelieve.filter(element => message.includes(element));
	const verbEatMatch = verbEat.filter(element => message.includes(element));
	const verbKnowMatch = verbKnow.filter(element => message.includes(element));
	const verbSorryMatch = verbSorry.filter(element => message.includes(element));

//ОСКОРБЛЕНИЯ, ГРУБОСТЬ
		//личное грубое оскорбление Лосю
	if(youMatch.length != 0 && negativeMatch.length != 0){
		angryFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Ты так не выражайся`,
				`${negativeMessages[randomArrayNumber(negativeMessages)]}`,
				`${disagreeWords[randomArrayNumber(disagreeWords)]}, не говори так. ${negativeMessages[randomArrayNumber(negativeMessages)]}`,
				`Да пошел ты`,
				"Сам про себя так скажи, щенок",
				`Говорит твоё воспитание`,	
			]	
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1000);
	}
		//легкая колкость лично Лосю
	else if(youMatch.length != 0 && rudeMatch.length != 0){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Ты так не выражайся`,
				`Не говори ${toLowerCaseAnswer(rudeMatch[0])} в мою сторону`,
				`В мой адрес слово ${toLowerCaseAnswer(rudeMatch[0])} не произноси`,
				`${negativeMessages[randomArrayNumber(negativeMessages)]}`,
				`${disagreeWords[randomArrayNumber(disagreeWords)]}, не говори так. ${negativeMessages[randomArrayNumber(negativeMessages)]}`,
				"Сам ты такой",
				`Фу, сам такой`,	
			]	
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1000);
	}
		//назвать Лося животным
	else if(youMatch.length != 0 && animalMatch.length != 0){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Очень оригинально`,
				`Сказать ${toLowerCaseAnswer(animalMatch[0])} в мой адрес, очень смешно`,
				`В мой адрес слово ${toLowerCaseAnswer(animalMatch[0])} не произноси`,
				`${negativeMessages[randomArrayNumber(negativeMessages)]}`,
				"Ты сам животное",
			]	
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1000);
	}	
		//личное грубое оскорбление самого себя
	else if(meMatch.length != 0 && (negativeMatch.length != 0 ||rudeMatch.length != 0 )){
		wowFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Грубовато, но про тебя можно так сказать`,
				`${agreeWords[randomArrayNumber(agreeWords)]}`,
				`${toUpperCaseAnswer(agreeWords[randomArrayNumber(agreeWords)])}, в твой адрес можно так сказать`,
				`Не говори так про себя`,
				`Ты себя лучше знаешь`,
			]	
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1000);
	}
		//личное назвать себя животным
	else if(meMatch.length != 0 && animalMatch.length != 0 ){
		laughingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${agreeWords[randomArrayNumber(agreeWords)]}`,
				`${toUpperCaseAnswer(animalMatch[0])}? Да, вполне ты`,
				`Ты еще то животное`,
				`Ну, тебе виднее`,
			]	
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1000);
		}	
		//обсценная лексика
	else if(negativeMatch.length != 0){
		shockingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${negativeMessages[randomArrayNumber(negativeMessages)]}`,
				`Прозвучало так ${descriptionWords[randomArrayNumber(descriptionWords)]}, ${toLowerCaseAnswer(negativeMessages[randomArrayNumber(negativeMessages)])}`,
				`Пишешь весьма ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
				`Мне неприятны твои слова, это ${descriptionWords[randomArrayNumber(descriptionWords)]}. ${negativeMessages[randomArrayNumber(negativeMessages)]}`,
				`Очень так ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
				`Ох как ${descriptionWords[randomArrayNumber(descriptionWords)]}, ${toLowerCaseAnswer(negativeMessages[randomArrayNumber(negativeMessages)])}`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))

		}, 1500);
	}
		//легкие колкости
	else if(rudeMatch.length != 0){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${rudeMessages[randomArrayNumber(rudeMessages)]}`,
				`${rudeMessages[randomArrayNumber(rudeMessages)]}`,
				`${rudeMessages[randomArrayNumber(rudeMessages)]}`,
				`${toUpperCaseAnswer(rudeMatch[0])}? Одумайся`,
				`Что? ${toUpperCaseAnswer(rudeMatch[0])}? Это некрасиво`,
				`Что? ${toUpperCaseAnswer(rudeMatch[0])}? Фу так говорить`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);	
	}
		//ненавидеть лося
	else if(verbHateMatch.length != 0 &&(youMatch.length != 0 || youPossessiveMatch.length != 0)){
		lookingFaceDisplay()
		setTimeout(() => {
			let answer = `${verbHateMatch[0]}? За что так со мной`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
		//сказать про лося злое или печальное
	else if(verbFeelingBadMatch.length != 0 &&(youMatch.length != 0 || youPossessiveMatch.length != 0)){
		tiredFaceDisplay()
		setTimeout(() => {
			let answer = `${verbFeelingBadMatch[0]}? Это не про меня`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
		//спросить Лося про веру в бога
	else if(godMatch.length != 0 && youMatch.length != 0 && verbBelieveMatch.length != 0){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Хочешь подвести к ютубовскому мнению?`,
				`Скажу прямо, я изменил свои взгляды на религию за последнее время`,
				`Можно сказать, что я вероотступник`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}
		//сказать, что Лось бог
	else if(godMatch.length != 0 && youMatch.length != 0){
		laughingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Да, это так`,
				`Про меня можно так сказать`,
				`Для тебя да`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}
		//не понимает ли Лось
	else if(verbKnowMatch.length != 0 && message.includes("не") && youMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`"Не ${verbKnowMatch[0]}", смешно написал. Сам-то понял?`,
				`Ну не понимаю, и что дальше`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}		
		//понимает ли Лось
	else if(verbKnowMatch.length != 0 && youMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Да`,
				`Я понимаю`,
				`${verbKnowMatch[0]}? Естественно`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}
		//пользователь не понимает
	else if(verbKnowMatch.length != 0 && message.includes("не") && meMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Да ты никогда не понимаешь`,
				`Тебе этого не понять`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}	
		//пользователь понимает
	else if(verbKnowMatch.length != 0 && meMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Ну, молодец, знаешь много`,
				`Хорошо разбираешься`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}
		//пользователь извиняется
	else if(verbSorryMatch.length != 0 && meMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Твои извинения приняты`,
				`Тебе не привыкать извиняться`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}		
	
//ПРИВЕТСТВИЕ И ПРОЩАНИЕ
		//приветствие
	else if(greetingsMatch.length != 0){
		laughingFaceDisplay()
		setTimeout(() => {
			let answer = greetingsMessages[randomArrayNumber(greetingsMessages)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1200);
	}	
//РЕАКЦИЯ НА ИМЕНА
		//назвали неизвестное имя из списка
	else if(unknownNameMatch.length != 0){
		wowFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${toUpperCaseAnswer(unknownNameMatch[0])}! Ну, звучит ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
				`Что за ${toUpperCaseAnswer(unknownNameMatch[0])}?`,
				`Это еще кто?`,
				`Чет не могу вспомнить таковых граждан`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
		//назвали самого Лося плюс обращение на ты
	else if(losCallingMatch.length != 0 && youMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Это я`,
				`Ну я`,
				`Я, а что?`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1500);
	}		
		//назвали самого Лося плюс обращение на ты притяжательное
	else if(losCallingMatch.length != 0 && youPossessiveMatch.length != 0 ){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${agreeWords[randomArrayNumber(agreeWords)]}, это про меня`,
				`А ты не знаешь, что да что ли?`,
				`Угу, ${toLowerCaseAnswer(youPossessiveMatch[0])}. И что?`,
				`${disagreeWords[randomArrayNumber(disagreeWords)]}, ${toLowerCaseAnswer(youPossessiveMatch[0])}`
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1500);
	}			
		//спросить имя Лося
	else if(verbNameMatch.length != 0 && (youPossessiveMatch != 0 || youMatch != 0)){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Джейсон Стетхем",
				"Егор",
				"Что за вопрос? Егор",
				"Лось",
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1400);	
	}	
		//заговорили про Мишу
	else if(mishaMatch.length != 0){
		laughingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${toUpperCaseAnswer(mishaMatch[0])}? ${mishaMessages[randomArrayNumber(mishaMessages)]}, ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]} говорю`,
				`${mishaMessages[randomArrayNumber(mishaMessages)]}, если говорить ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
				`Помню такого. ${movieTitles[randomArrayNumber(movieTitles)]} его любимый фильм, он говорил, вроде`,
				`Хм, ${toUpperCaseAnswer(mishaMatch[0])}. Ему нравится ${mishaActivities[randomArrayNumber(mishaActivities)]}`,
				`Он любит ${mishaActivities[randomArrayNumber(mishaActivities)]}`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1200);
	}
		//заговорили про Алёшу
	else if(alexMatch.length != 0){
		laughingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${alexResponse[randomArrayNumber(alexResponse)]}`,
				`${agreeWords[randomArrayNumber(agreeWords)]}, ${toLowerCaseAnswer(alexResponse[randomArrayNumber(alexResponse)])}, довльно ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}, я помню`,
				`${alexMatch[0]}? Он любит ${alexLang[randomArrayNumber(alexLang)]}`,
				`${toUpperCaseAnswer(alexMatch[0])}? Можно часто услышать ${alexLang[randomArrayNumber(alexLang)]} из его рта`,
				`Говоришь ${toUpperCaseAnswer(alexMatch[0])}? Он действует ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]} по жизни`,
				`${toUpperCaseAnswer(alexMatch[0])}, к чему про него?`,
				`Его любимый фильм полюбому ${movieTitles[randomArrayNumber(movieTitles)]}`,	
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1200);
	}
		//заговорили про Томми
	else if(tommyMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answer = thomasMessages[randomArrayNumber(thomasMessages)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1500);
	}
		//заговорили про Сысу
	else if(sysaMatch.length != 0){
		laughingFaceDisplay()
		setTimeout(() => {
			let answer = sysaMessages[randomArrayNumber(sysaMessages)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1500);
	}	
		//заговорили про Данкана
	else if(duncanMatch.length != 0){
		shockingFaceDisplay()
		setTimeout(() => {
			let answer = duncanMessages[randomArrayNumber(duncanMessages)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1500);
	}	
		//заговорили про бога
	else if(godMatch.length != 0){
		shockingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Не богохульствуй мне тут`,
				`Не упомянай Бога всуе`,
				`Мне не очень интересно говорить про Бога`,
				`Религия - это пройденный этап`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}
		//заговорили про семью
	else if(familyMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${familyMatch[0]}? Тут грубить не надо`,
				`${familyMatch[0]}? Что ты говоришь?`,
				`Про семью плохо не говори`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}
	//курит ли мама
	else if(motherMatch.length != 0 && verbSmokeMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Ты с ума сошел? Она не курит`,
				`Моя мама никогда не курила`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}
	//пьет ли мама
	else if(motherMatch.length != 0 && verbDrinkMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Мама никогда не пьет`,
				`Она не употребляет алкоголь`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}	
		//заговорили про маму
	else if(motherMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${motherMatch[0]}. Ничего плохого про неё не говори`,
				`${motherMatch[0]}? Не приплетай её тут`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}	
	//курит ли отец
	else if(fatherMatch.length != 0 && verbSmokeMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Батя давно не курит`,
				`Он давно бросил`,
				`Нет`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}
	//пьет ли отец
	else if(fatherMatch.length != 0 && verbDrinkMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Только по праздникам`,
				`Он в завязке`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}					
		//заговорили про папу
	else if(fatherMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${fatherMatch[0]}. Его не трогай`,
				`${fatherMatch[0]}? Он человек простой`,
				`Я с ним не общаюсь`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}	


//КАТЕГОРИИ ПОЗНАНИЙ
		//еда
		//любимые блюда Лося
	else if(youMatch.length != 0 && foodMatch.length != 0 && verbEatMatch.length !=0){
		laughingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${foodMatch[0]}? Это неплохо, но я люблю вафельные трубочки`,
				`${foodMatch[0]}? Ну, сойдет`,
				`У меня нет особо любимых блюд, разве что трубочки`
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))			
		}, 1300);
	}	
		//любишь еду?
	else if((foodWordsMatch.length != 0 && verbLoveMatch.length != 0) || (youMatch.length !=0 && foodWordsMatch.length != 0 && verbLoveMatch.length != 0)){
		laughingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${foodWordsMatch[0]}. Люблю трубочки`,
				`${foodWordsMatch[0]}? Мало что нравится в последнее время`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))			
		}, 1300);
	}	
		//разгоны про специи
	else if(spiceNamesMatch.length != 0){
		shockingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${spiceNamesMatch[0]}? Лучше поберечь желудок и здоровье в целом`,
				"Я стараюсь избегать специй, приправ и пряностей в последнее время"
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}
		//назвать лося едой
	else if(youMatch.length != 0 && foodMatch.length != 0){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Сам ты ${foodMatch[0]}`,
				`Про себя говоришь сейчас`,
				`Очень смешно, ${foodMatch[0]}`
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))			
		}, 1300);
	}							
//словарь еды на перевод			
		//разгоны про еду
	else if(foodMatch.length != 0){
		setTimeout(() => {
			let answer = processTopics(foodMatch[0], foodDescription[randomArrayNumber(foodDescription)], foodQuestions[randomArrayNumber(foodQuestions)]);
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}
	
//словарь напитков на добавление		
		//разгоны про напитки
	else if(drinksNamesMatch.length != 0){
		setTimeout(() => {
			let answer = processTopics(drinksNamesMatch[0], drinksDescription[randomArrayNumber(drinksDescription)], drinksQuestions[randomArrayNumber(drinksQuestions)]);
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}	
		//ты пьешь бухло
	else if((drinksBadNamesMatch.length != 0 && verbDrinkMatch.length != 0 ) || (youMatch.length != 0 && drinksBadNamesMatch.length != 0) || (youMatch.length != 0 && drinksBadNamesMatch.length != 0 && verbDrinkMatch.length != 0)){
		angryFaceDisplay()	
		setTimeout(() => {
			let answers =[
				`${toUpperCaseAnswer(drinksBadNamesMatch[0])}? Чушь`,
				`Алкоголь для нубов`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))			
		}, 1300);
	}
		//разгоны про алкогольные напитки
	else if(drinksBadNamesMatch.length != 0){
		shockingFaceDisplay()
		setTimeout(() => {
			let answer = `${toUpperCaseAnswer(drinksBadNamesMatch[0])}? Фу`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}		
		//что любишь пить?
	else if((drinksWordsMatch.length != 0 || verbDrinkMatch.length != 0 )&& verbLoveMatch.length != 0){
		shockingFaceDisplay()		
		setTimeout(() => {
			let answers =[
				`Пить? Странный вопрос. Ну, иногда могу выпить чаю`,
				`Я пью чай, кофе там. Не особо принципиально.`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))			
		}, 1300);
	}
		//что ты пьешь?
	else if((drinksWordsMatch.length != 0 || verbDrinkMatch.length != 0 )&& youMatch.length != 0){
		shockingFaceDisplay()	
		setTimeout(() => {
			let answers =[
				`Я пью воду. Что еще я могу пить`,
				`Ромашковый чай я пью, от нервов`,
				`Я пью зеленый чай, кофе пореже, не очень полезно`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))			
		}, 1300);
	}		
		//сказать название напитков			
	else if(drinksWordsMatch.length != 0){
		shockingFaceDisplay()	
		setTimeout(() => {
			let answers =[
				`${drinksWordsMatch[0]}? Хочешь поговорить про напитки?`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))			
		}, 1300);
	}
//словарь названий животных
		//животные
	else if(animalMatch.length != 0){
		laughingFaceDisplay()
		setTimeout(() => {
			let answer = processTopics(animalMatch[0], animalDescription[randomArrayNumber(animalDescription)], animalQuestions[randomArrayNumber(animalQuestions)]);
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}
		//говорить слово природа
	else if(natureNamesMatch.length != 0){
		wowFaceDisplay()
		setTimeout(() => {
		let answers =[
			`${natureNamesMatch[0]}? Хочешь поговорить про природу? Про что конкретно`,
			`Я люблю природу. ${natureQuestions[randomArrayNumber(natureQuestions)]}`,
			`Ну вот. ${natureQuestions[randomArrayNumber(natureQuestions)]}`,
		]
		let answer = answers[randomArrayNumber(answers)];
		chatbotSendMessage(toUpperCaseAnswer(answer))			
	}, 1300);
	}	
//словарь названий природы				
		//природа
	else if(natureMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answer = processTopics(natureMatch[0], natureDescription[randomArrayNumber(natureDescription)], natureQuestions[randomArrayNumber(natureQuestions)]);
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}	
//словарь названий языков	
		//языки и лингвистика лично у Лося
	else if((youMatch.length != 0 || youPossessiveMatch.length != 0) && (langMatch.length != 0 || langRussianMatch.length != 0)){
		setTimeout(() => {
			if(langRussianMatch.length != 0){
				shockingFaceDisplay()
				let answer = `${agreeWords[randomArrayNumber(agreeWords)]}, а что не видно? Говорю, разумеется`;
				chatbotSendMessage(toUpperCaseAnswer(answer))
			}
			else{
				lookingFaceDisplay()
				let answer = `${toUpperCaseAnswer(langMatch[0])}? Нет, это не моё`;
				chatbotSendMessage(toUpperCaseAnswer(answer))
			}
		}, 1300);
	}
		//вопросы про говоришь на языке без ты
	else if( verbSpeakMatch.length != 0 && (langMatch.length != 0 || langRussianMatch.length != 0)){
		setTimeout(() => {
			if(langRussianMatch.length != 0){
				shockingFaceDisplay()
				let answer = `${agreeWords[randomArrayNumber(agreeWords)]}, а что не видно? Говорю, конечно`;
				chatbotSendMessage(toUpperCaseAnswer(answer))
			}
			else{
				lookingFaceDisplay()
				let answer = `${toUpperCaseAnswer(langMatch[0])}? Нет. Зачем?`;
				chatbotSendMessage(toUpperCaseAnswer(answer))
			}
		}, 1300);
	}		
		//просто разговоры о лингвистике и языках
	else if(langMatch.length != 0){
		setTimeout(() => {
			shockingFaceDisplay()
			let answers = [
				`${toUpperCaseAnswer(langMatch[0])}? Этот язык звучит для меня ${musicDescription[randomArrayNumber(musicDescription)]}`,
				`${toUpperCaseAnswer(langMatch[0])}? На слух он довольно ${musicDescription[randomArrayNumber(musicDescription)]} звучит`,
				]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}	
//**//**//**//**//
	//ИСКУССТВО: КИНО, МУЗЫКА
		//музыка
		//общий вопрос про музыку лично Лосю
	else if(musicWordMatch.length != 0 && (youPossessiveMatch.length != 0 || youMatch.length != 0)){
		shockingFaceDisplay()

			setTimeout(() => {

				let answers = [
					`Papa Smurf likes instrumental, of course, blues and ${musicGenres[randomArrayNumber(musicGenres)]}`,
					`Oh, talking about music. Papa Smurf thinks that he likes instrumental, blues and ${musicGenres[randomArrayNumber(musicGenres)]}`,
					`Well, it's instrumental, blues and maybe ${musicGenres[randomArrayNumber(musicGenres)]}`,
					`I like blues. ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} and ${musicGenres[randomArrayNumber(musicGenres)]} are ${musicDescription[randomArrayNumber(musicDescription)]}. ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} is ${musicDescription[randomArrayNumber(musicDescription)]}`,
					`Blues is number one. ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} and ${musicGenres[randomArrayNumber(musicGenres)]} are ${musicDescription[randomArrayNumber(musicDescription)]}. ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} is ${musicDescription[randomArrayNumber(musicDescription)]}`,
				]
						
				let answer = answers[randomArrayNumber(answers)];
				chatbotSendMessage(toUpperCaseAnswer(answer))
						
			}, 1300);
	}

		//разгоны про жанры
	else if(musicMatch.length != 0){
			setTimeout(() => {

				let answer = processTopics(musicMatch[0], musicDescription[randomArrayNumber(musicDescription)], musicQuestions[randomArrayNumber(musicQuestions)]);
				chatbotSendMessage(toUpperCaseAnswer(answer))
			}, 1300);
	}
		//музыкальные жанры
	else if(musicWordMatch.length != 0 && genreMatch.length != 0){
			setTimeout(() => {

				let answers = [
					`Жанр музыки, ${musicGenres[randomArrayNumber(musicGenres)]} звучит ${musicDescription[randomArrayNumber(musicDescription)]}`,
					`${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} и ${musicGenres[randomArrayNumber(musicGenres)]} для меня звучат ${musicDescription[randomArrayNumber(musicDescription)]}. ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} is ${musicDescription[randomArrayNumber(musicDescription)]}`,
				]
						
				let answer = answers[randomArrayNumber(answers)];
				chatbotSendMessage(toUpperCaseAnswer(answer))
			}, 1300);
	}
		//просто про музыку
	else if(musicWordMatch.length != 0){
		shockingFaceDisplay()
			setTimeout(() => {

				let answers = [
					`Oh, talking about music. Papa Smurf thinks that he likes instrumental, blues and ${musicGenres[randomArrayNumber(musicGenres)]}`,
					`You strike me as a ${musicGenres[randomArrayNumber(musicGenres)]} lover. Am I right?`,
					`Any specific genre you do you like to listen to? ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])}?`,
					`Music! ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} is so ${musicDescription[randomArrayNumber(musicDescription)]}`,
					`${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])}?`,
					`${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} is very ${musicDescription[randomArrayNumber(musicDescription)]}`,
				]
						
				let answer = answers[randomArrayNumber(answers)];
				chatbotSendMessage(toUpperCaseAnswer(answer))
						
			}, 1300);
	}	
		//кино
		//любимые фильмы Лося
	else if( (youMatch.length != 0 || youPossessiveMatch.length != 0 ) && verbLoveMatch.length != 0 && movieWordsMatch.length != 0){
		laughingFaceDisplay()
		setTimeout(() => {
			let answers = [
				`Я сейчас редко смотрю кино, но на ум приходит ${movieTitles[randomArrayNumber(movieTitles)]}`,
				`${discussingMovies(movieTitles[randomArrayNumber(movieTitles)])}`,
				`Сложно выбрать любимый фильм, вспоминается ${movieTitles[randomArrayNumber(movieTitles)]}, смотрится ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))			
		}, 1300);
	}
		//жанры кино
	else if(movieWordsMatch.length != 0 && genreMatch.length != 0){
		angryFaceDisplay()
		setTimeout(() => {
			let answers = [
				`Жанр кино? Да их сотни`,
				`Мне лень перечислять жанры`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
						
		}, 1300);
	}
		//перечисли кино
	else if (verbNameMatch.length != 0 && movieWordsMatch.length != 0){
		shockingFaceDisplay()
		setTimeout(() => {

			let answer = `${movieTitles[randomArrayNumber(movieTitles)]}, ${movieTitles[randomArrayNumber(movieTitles)]} и еще ${movieTitles[randomArrayNumber(movieTitles)]}`;

			chatbotSendMessage(toUpperCaseAnswer(answer))
			
		}, 1400);
	}
		//просто упомянули кино
	else if(movieWordsMatch.length != 0){
		laughingFaceDisplay()
		setTimeout(() => {
			let answers = [
				`Говоря про ${movieWordsMatch[0]}, ты точно видел такой фильм, как ${movieTitles[randomArrayNumber(movieTitles)]}. Как по мне, весьма ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]} для жанра`,
				`Вообще, ${movieTitles[randomArrayNumber(movieTitles)]} смотрится крайне ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
				`Глянь еще раз такой малоизвестный фильм, как ${movieTitles[randomArrayNumber(movieTitles)]}`,
				`${discussingMovies(movieTitles[randomArrayNumber(movieTitles)], positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)])}`,
				`${discussingMovies(movieTitles[randomArrayNumber(movieTitles)], positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)])}`,
				`${discussingMovies(movieTitles[randomArrayNumber(movieTitles)], positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)])}`,
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))			
		}, 1300);
	}
		//упомянули режиссеров
	else if(directorsNamesMatch.length != 0){
		laughingFaceDisplay()
		setTimeout(() => {
			let answers = [
				`${toUpperCaseAnswer(directorsNamesMatch[0])}? Хороший режиссёр.`,
				`${toUpperCaseAnswer(directorsNamesMatch[0])}? Хороший режиссёр. Кстати, а ${toLowerCaseAnswer(movieMessages[randomArrayNumber(movieMessages)])}`,
				`${toUpperCaseAnswer(directorsNamesMatch[0])}? Последние фильмы так себе.`,
				`${toUpperCaseAnswer(directorsNamesMatch[0])}? Последние работы смотрятся легко и выглядят ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
				]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}	
		//жанры в целом
	else if(genreMatch.length != 0){
		wowFaceDisplay()
		setTimeout(() => {
			let answers = [
				`Кино или музыки?`,
				`Ты о чем? Музыка или кино?`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))			
		}, 1300);
	}
		//искусство
	else if(message.includes("искусство")){
		wowFaceDisplay()
		setTimeout(() => {
			let answers = [
				`Искусство не имеет границ, как и твоя тупость`,
				`А какие виды искусства ты любишь?`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))			
		}, 1300);
	}
//ПОГОДА
	else if(weatherWordsMatch.length != 0){
		shockingFaceDisplay()
		setTimeout(() => {
			let answer = `${toUpperCaseAnswer(weatherWordsMatch[0])}? Я не слежу за погодой, хотя  ${toLowerCaseAnswer(weatherMessages[randomArrayNumber(weatherMessages)])}`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1200);		
	}
//СПОРТ
	//Лось и спорт
	else if(sportWordsMatch.length != 0 && youMatch.length !=0){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers = [
				`${sportWordsMatch[0]}? Я таким не занимаюсь`,
				`Это уже не для меня`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))		
		}, 1200);		
	}
	//просто спорт
	else if(sportWordsMatch.length != 0){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers = [
				`Спорт для детей и фанатиков`,
				`${sportWordsMatch[0]}? Я больше этим не интересуюсь`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))		
		}, 1200);		
	}		
//ШУТКИ	
		//Лося назвали шуткой
	else if(jokesMatch.length != 0 && youMatch.length !=0){
		angryFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Шутка - это твоя жизнь",
				"Ты вообще посмешище",
				`${toUpperCaseAnswer(jokesMatch[0])}? Сам такой`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))				
		}, 1300);
	}						
		//попросили шутки
	else if(jokesMatch.length != 0){
		laughingFaceDisplay()
		setTimeout(() => {
			let answers = [
				`${jokes[randomArrayNumber(jokes)]}`,
				`${jokes[randomArrayNumber(jokes)]}`,
				`${jokes[randomArrayNumber(jokes)]}`,
				`Ладно. ${jokes[randomArrayNumber(jokes)]}`,
				`Недавно прочитал одну. ${jokes[randomArrayNumber(jokes)]}`,
				`Вот одна. ${jokes[randomArrayNumber(jokes)]}`,
				`Знаю одну хохму! ${jokes[randomArrayNumber(jokes)]}`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))			
		}, 1200);
	}
//ВОПРОСЫ	
		//спросить время
	else if((message.includes("сколько") && message.includes("времени")) || (message.includes("который") && message.includes("час"))|| ((message.includes("че") ||message.includes("что")) && message.includes("времени"))){
		setTimeout(() => {
			let now = new Date();
			let hour = now.getHours();
			let minute = now.getMinutes();
			let answers =[
				`Сейчас ${hour}:${minute}`,
				`${hour}:${minute}`,
				`Время ${hour}:${minute}`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);	
	}
		//спросить новости и дела
	else if(message.includes("как") && message.includes("дела") || message.includes("оно")|| message.includes("жизнь")|| message.includes("житуха")|| message.includes("че")){
		lookingFaceDisplay()	
		setTimeout(() => {
			let answers =[
				"Всё нормально",
				"Нормально",
				"Норм",
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);	
	}						
		// //ПРОСТО ЧТО
	else if(questionsMatch[0] == "что" || questionsMatch[0] == "че"|| questionsMatch[0] == "що"){
		shockingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Что?",
				"А что?",
				"И что?",
				"Да ничего",
				"Ничего"
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);		
	}
		// //ПРОСТО ЧЕМ
	else if(questionsMatch[0] == "чем"){
		shockingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Чем-чем?",
				"Да ничем",
				"Ничем"
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);		
	}	
		// //ПРОСТО ЧЕГО
	else if(questionsMatch[0] == "чего"){
		shockingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Ничего",
				"Ничего, а что?",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);		
	}	
		//КАК + ТЫ, как дела и всё такое
	else if(questionsMatch[0] == "как" && youMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Нормально",
				"Вполне норм",
				"Пойдет",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}	
		//ПРОСТО КАК
	else if(questionsMatch[0] == "как"){
		shockingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Как?",
				"Как-то",
				"Как-то. А что?",
				"Да, как?",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}
		//кто + ты
	else if(questionsMatch[0] == "кто" && youMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Тупой вопрос. Я Егор",
				"Мастер Чи Вандер Джексон",
				"Я Егор. А ты кто?",
			]	
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}			
		//ПРОСТО КТО
	else if(questionsMatch[0] == "кто"){
		shockingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Кто-то",
				"Кто-то. А что?",
				"Кто-нибудь",
				"Кто?",
				"Доктор Кто",
				"Кто угодно",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}
		//ПРОСТО КЕМ
	else if(questionsMatch[0] == "кем"){
		shockingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Кем-то",
				"Кем-то. А что?",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}	
		//ПРОСТО ГДЕ
	else if(questionsMatch[0] == "где"){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Где-то",
				"Где-то. А что?",
				"Нигде",
				"Где угодно",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}
		//ПРОСТО КУДА
	else if(questionsMatch[0] == "куда"){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Куда-то",
				"Куда-то. А что?",
				"Никуда",
				"Куда угодно",
				"Куда-нибудь",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}
		//ПРОСТО ОТКУДА
	else if(questionsMatch[0] == "откуда"){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Откуда-то",
				"Откуда-то. А что?",
				"Ниоткуда",
				"Откуда угодно",
				"Откуда-нибудь",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}	
		//ПРОСТО КОГДА
	else if(questionsMatch[0] == "когда"){
		wowFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Я скажу тебе когда",
				"Никогда",
				"Когда-то",
				"Когда-нибудь",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}
		//ПРОСТО ПОЧЕМУ
	else if(questionsMatch[0] == "почему"){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Потому",
				"Потому. А что?",
				"Покачену",
				"Почему бы и нет",
				"Почему-то",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}	
		//ПРОСТО ЗАЧЕМ
	else if(questionsMatch[0] == "зачем"){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Затем",
				"Затем. А что?",
				"Зачем-то",
				"За шкафом",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}	
		//ПРОСТО КАКОЙ
	else if(questionsMatch[0] == "какой" || questionsMatch[0] == "который"){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Какой-то",
				"Какой-то. А что?",
				"Никакой",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}
		//ПРОСТО КАКОВ
	else if(questionsMatch[0] == "каков"){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Никаков",
				"Никаков. А что?",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}		
		//ПРОСТО КАКАЯ
	else if(questionsMatch[0] == "какая" || questionsMatch[0] == "которая"){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Какая-то",
				"Какая-то. А что?",
				"Никакая",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}
		//ПРОСТО КАКОВА
	else if(questionsMatch[0] == "какова"){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Никакова",
				"Никакова. А что?",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}	
		//ПРОСТО КАКОЕ
	else if(questionsMatch[0] == "какое" || questionsMatch[0] == "которое"){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Какое-то",
				"Какое-то. А что?",
				"Никакое",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}
		//ПРОСТО КАКОВО
	else if(questionsMatch[0] == "каково"){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Никаково",
				"Никаково. А что?",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}	
		//ПРОСТО КАКИЕ
	else if(questionsMatch[0] == "какие" || questionsMatch[0] == "которые"){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Какие-то",
				"Какие-то. А что?",
				"Никакие",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}	
		//ПРОСТО КАКОВЫ
	else if(questionsMatch[0] == "каковы"){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Никаковы",
				"Никаковы. А что?",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}	
		//ПРОСТО КАКИМ
	else if(questionsMatch[0] == "каким"){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Каким-то",
				"Каким-то, а что?",
				"Никаким",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}
		//ПРОСТО КАКИМИ
	else if(questionsMatch[0] == "какими"){
		tiredFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Какими-то",
				"Какими-то. А что?",
				"Никакими",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}			
		//ПРОСТО ЧЕЙ
	else if(questionsMatch[0] == "чей"){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Мой наверное",
				"Может, твой",
				"Ничей",
				"Ничей, а что?",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}
		//ПРОСТО ЧЬЯ
	else if(questionsMatch[0] == "чья"){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Моя наверное",
				"Может, твоя",
				"Ничья",
				"Ничья, а что?",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}
		//ПРОСТО ЧЬЕ
	else if(questionsMatch[0] == "чье"){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Моё наверное",
				"Может, твоё",
				"Ничьё",
				"Ничьё, а что?",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}
		//ПРОСТО ЧЬИ
	else if(questionsMatch[0] == "чьи"){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Мои наверное",
				"Может, твои",
				"Ничьи",
				"Ничьи, а что?",
			]		
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}			
		//ПРОСТО КОМУ
	else if(questionsMatch[0] == "кому"){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers = [
				"Кому-то",
				"Кому угодно",
				"Тебе, наверное",
				"Никому",
				"Никому. А что?",
			]	
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1300);
	}																			
//МОТИВАЦИОННЫЕ ЦИТАТЫ
		//умные цитаты и мотивация
	else if(quoteMatch.length != 0){
		laughingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${quotes[randomArrayNumber(quotes)]}`,
				`${agreeWords[randomArrayNumber(agreeWords)]}. ${quotes[randomArrayNumber(quotes)]}`,
				`${toUpperCaseAnswer(introductoryWords[randomArrayNumber(introductoryWords)])}, ${toLowerCaseAnswer(quotes[randomArrayNumber(quotes)])}`,
				]
				let answer = answers[randomArrayNumber(answers)];
				chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1200);
	}
//ОСОБЫЕ УПОМИНАНИЯ		
		//Грампи
	else if(message.includes("grumpy") || message.includes("grump")|| message.includes("грампи")){
		laughingFaceDisplay()
		setTimeout(() => {
			let answer = `Грампи? Это скучный бот такой, ссылка <a href='https://theomorphic.github.io/Grumpy' target='_blank'>прямо тут</a>`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
		//Папа Смурф
	else if(message.includes("smurf") || message.includes("smurfs")|| message.includes("смурф")){
		laughingFaceDisplay()
		setTimeout(() => {
			let answer = `Папа Смурф? Это бот такой, его можно найти <a href='https://theomorphic.github.io/Grumpy' target='_blank'>вот здесь</a>`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}	
		//KILLSHARK
	else if(message.includes("killshark") || message.includes("килшарк")){
		wowFaceDisplay()
		setTimeout(() => {
			let answers =[
				"Killshark круче всех",
				`Killshark это ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
				"<a href='https://killshark.com' target='_blank'>Вот этот сайт</a>",
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);	
	}
		//просто обращение
	else if(message.includes("чувак") ||message.includes("чел") ||message.includes("эй")){
		setTimeout(() => {
			let answers =[
				"Что?",
				"Чего?",
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);	
	}			
		//ничего
	else if(message.includes("ничего") || message.includes("ниче")|| message.includes("ничем")){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				"Ничего так ничего",
				agreeWords[randomArrayNumber(agreeWords)],
				"Ну ладно",
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);	
	}
		//время
	else if(message.includes("время") || message.includes("времи") || message.includes("времена") || message.includes("времини")|| message.includes("временами")){
		misunderstandingFaceDisplay()
		setTimeout(() => {
			let answers =[
				"Время бесценно",
				"Время ушло",
				"Мое время ушло",
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);	
	}										
//КОРОТКИЕ ОТВЕТЫ: СОГЛАСИЕ И ОТРИЦАНИЕ, обращение на ты
		//согласие
	else if(agreeMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${agreeWords[randomArrayNumber(agreeWords)]}`,
				`${neutralWords[randomArrayNumber(neutralWords)]}`,
				`${agreeWords[randomArrayNumber(agreeWords)]}, но прозвучало ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
				`${randomSmiles[randomArrayNumber(randomSmiles)]}`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
		//несогласие
	else if(disagreeMatch.length != 0){
		shockingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${disagreeWords[randomArrayNumber(disagreeWords)]}`,
				`${agreeWords[randomArrayNumber(agreeWords)]}`,
				`${neutralWords[randomArrayNumber(neutralWords)]}`,
				`${randomSmiles[randomArrayNumber(randomSmiles)]}`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
//ОТДЕЛЬНЫЕ СЛОВА И КАТЕГОРИИ
		//положительные слова для описания
	else if(positiveDescriptionMatch.length != 0){
		wowFaceDisplay()
			setTimeout(() => {
			let answers =[
				`Ну да, ${positiveDescriptionMatch[0]}`,
				`${toUpperCaseAnswer(positiveDescriptionMatch[0])}, а что?`,
				`Хорошо, не ${positiveDescriptionMatch[0]}, а ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
				`${agreeWords[randomArrayNumber(agreeWords)]}, ${positiveDescriptionMatch[0]}`,						
			]
				let answer = answers[randomArrayNumber(answers)];
				chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
		//слова для описания
	else if(descriptionWordsMatch.length != 0 ){
		wowFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${descriptionWordsMatch[0]}?`,
				`${descriptionWordsMatch[0]}, да?`,
				`${descriptionWordsMatch[0]}!`,
			]
				let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}	
		//слова для описания музыки
	else if(musicDescriptionMatch.length != 0 ){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${musicDescriptionMatch[0]}?`,
				`${musicDescriptionMatch[0]}, да?`,
				`${musicDescriptionMatch[0]}!`,
			]
				let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}				
		//смайлики
	else if(randomSmilesMatch.length != 0 ){
		laughingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${randomSmiles[randomArrayNumber(randomSmiles)]}`,
				`${randomSmiles[randomArrayNumber(randomSmiles)]}`,
				`${randomSmiles[randomArrayNumber(randomSmiles)]}`,
				`${randomSmiles[randomArrayNumber(randomSmiles)]}`,
				`${randomSmiles[randomArrayNumber(randomSmiles)]} Ладно, хорошо`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
		//союзы
	else if(conjunctionMatch.length != 0 ){
		shockingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${conjunctionMatch[0]}?`,
				`${conjunctionMatch[0]}? Поувереннее пиши`,
				`${conjunctionMatch[0]}, да?`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
	
//ГЛАГОЛЫ
		//любить
	else if(verbLoveMatch.length != 0 ){
		wowFaceDisplay()
		setTimeout(() => {
			let answer = `${verbLoveMatch[0]}? А ты любишь?`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
		//называть
	else if(verbNameMatch.length != 0 ){
		wowFaceDisplay()
		setTimeout(() => {
			let answer = `${agreeWords[randomArrayNumber(agreeWords)]}, ${toLowerCaseAnswer(verbNameMatch[0])}? А как иначе назвать?`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
		//пить
	else if(verbDrinkMatch.length != 0 ){
		shockingFaceDisplay()
		setTimeout(() => {
			let answer = `${verbDrinkMatch[0]}? А сам-то пьешь?`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
		//курить
	else if(verbSmokeMatch.length != 0 ){
		tiredFaceDisplay()
		setTimeout(() => {
			let answer = `${verbSmokeMatch[0]}? Сам-то дымышь поди`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}							
		//ненавидеть
	else if(verbHateMatch.length != 0 ){
		lookingFaceDisplay()
		setTimeout(() => {
			let answer = `${verbHateMatch[0]}, всмысле? А тебе будто не нравится?`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}							
		//говорить
	else if(verbSpeakMatch.length != 0 ){
		lookingFaceDisplay()
		setTimeout(() => {
			let answer = `${verbSpeakMatch[0]}. А своего мнения нет?`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
		//смеяться
	else if(verbLaughMatch.length != 0 ){
		wowFaceDisplay()
		setTimeout(() => {
			let answer = `Что, ${toLowerCaseAnswer(verbLaughMatch[0])}? Ну посмейся`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}	
		//спросить
	else if(verbAskMatch.length != 0 ){
		lookingFaceDisplay()
		setTimeout(() => {
			let answer = `${verbAskMatch[0]}? Ну спрашивай`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
		//злиться, скучать и тд
	else if(verbFeelingBadMatch.length != 0 ){
		tiredFaceDisplay()
		setTimeout(() => {
			let answer = `${agreeWords[randomArrayNumber(agreeWords)]}, ${toLowerCaseAnswer(verbFeelingBadMatch[0])}. А как иначе`;
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);
	}
		//благодарить
	else if(verbThankMatch.length != 0){
		laughingFaceDisplay()
		setTimeout(() => {
			let answers =[
				"Пожалуйста",
				"Не за что",
				"Нз",
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);	
	}
		//кушать
	else if(verbEatMatch.length != 0){
		shockingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${verbEatMatch[0]}? Да не`,
				"Это не для моего желудка",
				"Может и кушаю, а что?",
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1400);	
	}	
		//понимать
	else if(verbKnowMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Ясно`,
				`Это понятно`,
				`Да, я в курсе`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}
		//извиняться
	else if(verbSorryMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Никаких извинений`,
				`Извинения для сосунков`,
				`Никакого прощения`,

			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))	
		}, 1500);
	}								
		//просто НЕ
	else if(message.includes("не")){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Не?`,
				`Да не`,
				`Угу`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}	
//ПРЕДПОСЛЕДНЯЯ КАТЕГОРИЯ
		//назвали самого Лося
	else if(losCallingMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answer = losCallingMessages[randomArrayNumber(losCallingMessages)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1500);
	}
		//обращение на ты + НЕ
	else if(message.includes("не") && youMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Это не про меня`,
				`Я? Да не`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}	
		//обращение на ты
	else if(youMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${disagreeWords[randomArrayNumber(disagreeWords)]}`,
				`${agreeWords[randomArrayNumber(agreeWords)]}`,
				`Я что ли?`,
				`Про себя говоришь скорее`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}
		//говорят про твой, твоя и тд + НЕ
	else if(message.includes("не") && youPossessiveMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`А не ${youPossessiveMatch[0]}?`,
				`${youPossessiveMatch[0]}? Да не`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}		
		//говорят про твой, твоя и тд
	else if(youPossessiveMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`${youPossessiveMatch[0]}?`,
				`${youPossessiveMatch[0]}? Ну да`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}
		//пользователь говорит про себя + НЕ
	else if(message.includes("не") && meMatch.length != 0){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`К тебе не относится, ну да`,
				`Конечно, не с тобой связано`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}	
		//пользователь говорит про себя
	else if(meMatch.length != 0 ||mePossessMatch.length != 0){
		wowFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Про тебя и не такое говорят`,
				`Иначе у тебя не бывает`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1300);
	}
		//пользователь говорит про себя + НЕ
	else if(message.includes("умри")){
		lookingFaceDisplay()
		setTimeout(() => {
			let answers =[
				`Слушаюсь, повелитель`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
			deadFaceDisplay()
		}, 1300);
	}				

//АБСОЛЮТНОЕ НЕПОНИМАНИЕ
	else{
		misunderstandingFaceDisplay()
		setTimeout(() => {
			const answers = [
				`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
				`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
				`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
				`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
				`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
				`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}. Слушай, а  ${toLowerCaseAnswer(movieMessages[randomArrayNumber(movieMessages)])}`,
				`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}. Кстати, ${toLowerCaseAnswer(smalltalk[randomArrayNumber(smalltalk)])}`,
				`Звучишь ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
				`Прозвучало ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
				`${randomSmiles[randomArrayNumber(randomSmiles)]}`,
			]
			let answer = answers[randomArrayNumber(answers)];
			chatbotSendMessage(toUpperCaseAnswer(answer))
		}, 1500);
	}
}



