

// УПРАВЛЕНИЕ HTML ИНТЕРФЕЙСОМ
	const statusSign = document.getElementById("statusSign");
	const sendBtn = document.getElementById("sendBtn");
	const input = document.getElementById("input");
	const chatContainer = document.getElementById("chatContainer");

	//буферная зона для сообщения от пользователя
	const user = {message:"", counter:0};
	
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
	sendBtn.addEventListener("click", clickSendBtn);

	//функция отправки сообщения от пользователя через клавишу enter
	input.addEventListener("keypress", function(e){
		if(e.which == 13){
			clickSendBtn();
		}
	});

	//лица Лося
	basicFace.addEventListener("mouseover", hideFace)
	wonderingFace.addEventListener("mouseout", showFace)
	originalFace.addEventListener("mouseout", stareDeadly)

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


// ДЛИННЫЕ ПРЕДЛОЖЕНИЯ И ФРАЗЫ
	import {smalltalk as smalltalk} from "./response.js";
	//small talk
	import{quotes as quotes} from "./response.js";
	import { quotesAsking as quotesAsking } from "./response.js";
	//длинные цитаты-наставления
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
	import { binderPhrases as binderPhrases } from "./response.js";
	//конструкции мосты, вроде "это есть" или "оно такое"
	import { descriptionWords as descriptionWords } from "./response.js";
	//прилагательные и наречия для выражения своего мнения
	import { positiveDescriptionWords as positiveDescriptionWords } from "./response.js";
	//позитивные слова
	import { neutralWords as neutralWords } from "./response.js";
	//нейтральные ответы

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

	import { losCallingWords as losCallingWords } from "./files/los.js";
	import { losCallingMessages as losCallingMessages } from "./files/los.js";
	//назвали самого Лося

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
	import { drinksWords } from "./categories/drinks.js";
	import { drinksNames } from "./categories/drinks.js";
	import { drinksDescription } from "./categories/drinks.js";
	import { drinksBadNames } from "./categories/drinks.js";
	import { drinksQuestions as drinksQuestions } from "./categories/drinks.js";
	//описание напитков
	import {animalWords as animalWords} from "./categories.js";
	import {animalDescription as animalDescription} from "./categories.js";
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
	//музыкальные жанры и реакция на них
	import { langNames as langNames } from "./categories.js";
	import { langNamesMessages as langNamesMessages } from "./categories.js";
	import { langNamesQuestions as langNamesQuestions } from "./categories.js";
	//языки и лингвистика
	import { movieTitles as movieTitles } from "./categories/movies.js";
	import { movieWords as movieWords } from "./categories/movies.js";
	import { movieMessages as movieMessages } from "./categories/movies.js";
	//кино

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

//ФУНКЦИИ ГРАФИЧЕСКОГО ИНТЕРФЕЙСА

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
	
		statusSign.textContent = "Не в сети";
	
	
	}
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
		console.warn("Я слежу за тобой")

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

//ФУНКЦИИ РЕЖИМОВ БОТА

	//заводской режим Лося
	function basicMode(){
		// console.log("basic");

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
		// console.log("original");

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
			`Hmm, I found ${movie} quite intriguing.`,
			`I must say, ${movie} was simply fantastic!`,
			`I think ${movie} deserves all the awards.`,
			`I was pleasantly surprised by ${movie}.`,
			`I didn't expect the ${movie} to be that good.`,
			`${movie} really touched my heart.`,
			`I believe everyone should watch ${movie}.`,
			`What an emotional journey that ${movie} was.`,
			`I'm still thinking about that ${movie}. It's ${opinion}.`,
			`The actors in this ${movie} were exceptional.`,
			`The soundtrack of ${movie} was breathtaking.`,
			`I was completely captivated by ${movie}.`,
			`What an outstanding performance in ${movie}, ${opinion}!`,
			`The visual effects in ${movie} were mind-blowing.`,
			`I laughed and cried throughout ${movie}.`,
			`${movie} is a must-watch for everyone.`,
			`I can't stop recommending ${opinion} ${movie} to everyone!`,
			`The storyline of ${movie} was so well-crafted.`,
			`The dialogues in ${movie} were so powerful.`,
			`What a masterpiece ${movie} is!`,
			`I was on the edge of my seat watching ${movie}.`,
			`The cinematography in ${movie} was stunning.`,
			`After watching ${movie}, I feel so inspired.`,
			`I can't get over how ${opinion} ${movie} was.`,
			`The message conveyed in ${movie} was profound.`,
			`I want to relive the experience of ${movie}.`,
			`The cast of ${movie} was perfectly chosen.`,
			`I have a newfound appreciation for ${movie}.`,
			`I'll always remember the impact of ${movie}.`,
			`The setting of ${movie} was so ${opinion}.`,
			`The climax of ${movie} was so ${opinion}.`,
			`I'm in awe of the creativity in ${movie}.`,
			`I couldn't take my eyes off the screen during ${movie}.`,
			`Every scene in ${movie} was filled with emotion.`,
			`The transitions in ${movie} were seamless.`,
			`The ending of ${movie} left me speechless.`,
			`My favorite part of ${movie} was ${opinion}`,
			`I was so invested in the characters of ${movie}.`,
			`The humor in ${movie} was well-placed.`,
			`The suspense in ${movie} kept me hooked.`,
			`I connected with the themes of ${movie} deeply.`,
			`I wish I could watch ${movie} for the first time again.`,
			`The sound design of ${movie} was superb.`,
			`${movie} will definitely stay with me for a long time.`,
			`I felt a range of emotions while watching ${movie}, ${opinion}!`,
			`I have to say, that ${movie} was truly unforgettable.`,
		]

		let answer = answers[randomArrayNumber(answers)];
		return answer;
	}

	//функция обработки сообщения пользователя и формирования ответа
	function processMessage(){

		//ФИЛЬТР ДЛЯ СООБЩЕНИЯ ПОЛЬЗОВАТЕЛЯ

		let marks = /[,.!?';:\s]+/; 
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

		//категории познаний
		const foodWordsMatch = foodWords.filter(element => message.includes(element));
		const foodMatch = foodNames.filter(element => message.includes(element));
		const drinksWordsMatch = drinksWords.filter(element => message.includes(element));
		const drinksNamesMatch = drinksNames.filter(element => message.includes(element));
		const spiceNamesMatch = spiceNames.filter(element => message.includes(element));

		const animalMatch = animalWords.filter(element => message.includes(element));
		const natureMatch = natureWords.filter(element => message.includes(element));
		const natureNamesMatch = natureNames.filter(element => message.includes(element));
		const langMatch = langNames.filter(element => message.includes(element));
		const jokesMatch = jokesWords.filter(element => message.includes(element));

		//искусство: кино, музыка
		const musicMatch = musicGenres.filter(element => message.includes(element));
		const movieWordsMatch = movieWords.filter(element => message.includes(element));

		//мотивационные цитаты
		const quoteMatch = quotesAsking.filter(element => message.includes(element));

		//вопросы
		const questionsMatch = generalQuestions.filter(element => message.includes(element));
		
		//короткие ответы: согласие и отрицание, обращение на ты
		const agreeMatch = agreeWords.filter(element => message.includes(element));
		const disagreeMatch = disagreeWords.filter(element => message.includes(element));

		//отдельные слова и категории
		const positiveDescriptionMatch = positiveDescriptionWords.filter(element => message.includes(element));
		const conjunctionMatch = conjunction.filter(element => message.includes(element));

		//отдельные глаголы
		const verbLoveMatch = verbLove.filter(element => message.includes(element));
		const verbNameMatch = verbName.filter(element => message.includes(element));
		const verbDrinkMatch = verbDrink.filter(element => message.includes(element));


		//ОСКОРБЛЕНИЯ, ГРУБОСТЬ

			//личное грубое оскорбление Лосю
			if(youMatch.length != 0 && negativeMatch.length != 0){
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
				setTimeout(() => {
					let answers =[
						`Ты так не выражайся`,
						`Не говори ${toLowerCaseAnswer(rudeMatch[0])} в мою сторону`,
						`В мой адрес слово ${toLowerCaseAnswer(toUpperCaseAnswer(rudeMatch[0]))} не произноси`,
						`${negativeMessages[randomArrayNumber(negativeMessages)]}`,
						`${disagreeWords[randomArrayNumber(disagreeWords)]}, не говори так. ${negativeMessages[randomArrayNumber(negativeMessages)]}`,
						"Сам ты такой",
						`Фу, сам такой`,	
					]
					
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))

				}, 1000);
			}
			//личное грубое оскорбление самого себя
			else if(meMatch.length != 0 && negativeMatch.length != 0 ||rudeMatch.length != 0 ){
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

			//обсценная лексика
			else if(negativeMatch.length != 0){
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

		//ПРИВЕТСТВИЕ И ПРОЩАНИЕ

			//приветствие
			else if(greetingsMatch.length != 0){
				setTimeout(() => {
					let answer = greetingsMessages[randomArrayNumber(greetingsMessages)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1200);
			}	
		
		//РЕАКЦИЯ НА ИМЕНА

			//назвали неизвестное имя из списка
			else if(unknownNameMatch.length != 0){
				setTimeout(() => {

					let answers =[
						`${toUpperCaseAnswer(unknownNameMatch[0])}! Ну, звучит ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						`Что за ${toUpperCaseAnswer(unknownNameMatch[0])}?`,
						`Это еще кто?`,
						`Чет не могу вспомнить таковых граждан`
					]

					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);
			}
			//назвали самого Лося плюс обращение на ты
			else if(losCallingMatch.length != 0 && youMatch.length != 0){
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
				setTimeout(() => {
					let answer = thomasMessages[randomArrayNumber(thomasMessages)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1500);
			}
			//заговорили про Сысу
			else if(sysaMatch.length != 0){
				setTimeout(() => {
					let answer = sysaMessages[randomArrayNumber(sysaMessages)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1500);
			}			

		//КАТЕГОРИИ ПОЗНАНИЙ

			//еда
				//любимые блюда Лося
			else if(youMatch.length != 0 && foodMatch.length != 0){
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
			else if(foodWordsMatch.length != 0 && verbLoveMatch.length != 0){
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
				setTimeout(() => {
					let answers =[
						`${spiceNamesMatch[0]}? Лучше поберечь желудок и здоровье в целом`,
						"Я стараюсь избегать специй, приправ и пряностей в последнее время"
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
			//что любишь пить?
			else if((drinksWordsMatch.length != 0 || verbDrinkMatch.length != 0 )&& verbLoveMatch.length != 0){
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
				setTimeout(() => {

					let answers =[
						`Воду. Что еще я пью?`,
						`Ромашковый чай я пью, от нервов`,
						`Я пью зеленый чай, кофе пореже, не очень полезно`,
					]
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))			

				}, 1300);
			}			

	//словарь названий животных
			//животные
			else if(animalMatch.length != 0){
				setTimeout(() => {

					let answer = processTopics(animalMatch[0], animalDescription[randomArrayNumber(animalDescription)], animalQuestions[randomArrayNumber(animalQuestions)]);
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1300);
			}

			//говорить слово природа
			else if(natureNamesMatch.length != 0){
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
//////////////						
			//природа
			else if(natureMatch.length != 0){
				setTimeout(() => {

					let answer = processTopics(natureMatch[0], natureDescription[randomArrayNumber(natureDescription)], natureQuestions[randomArrayNumber(natureQuestions)]);
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1300);
			}	
			
			//языки и лингвистика лично у Папы Смурфа
			else if(youMatch.length != 0 && langMatch.length != 0){
				setTimeout(() => {

					if(langMatch[0] == "english"){
			
						let answer = `${agreeWords[randomArrayNumber(agreeWords)]}, I speak English`;
						chatbotSendMessage(toUpperCaseAnswer(answer))
					}
					else if(langMatch[0] != "english"){
						
						let answer = `${toUpperCaseAnswer(langMatch[0])}? ${langNamesMessages[randomArrayNumber(langNamesMessages)]}`;
						chatbotSendMessage(toUpperCaseAnswer(answer))

					}

				}, 1300);
			}
			//просто разговоры о лингвистике
			else if(langMatch.length != 0){

				setTimeout(() => {
					let answers = [
						`${toUpperCaseAnswer(langMatch[0])}? ${langNamesQuestions[randomArrayNumber(langNamesQuestions)]}`,
						processTopics(toUpperCaseAnswer(langMatch[0]), musicDescription[randomArrayNumber(musicDescription)], langNamesQuestions[randomArrayNumber(langNamesQuestions)]),
						]
		
						let answer = answers[randomArrayNumber(answers)];
						chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1300);

			}	

		
		
		//ИСКУССТВО: КИНО, МУЗЫКА
		
			//музыка
			//общий вопрос про музыку лично Лосю
			else if(message.includes("music") && (youPossessiveMatch.length != 0 || youMatch.length != 0)){
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
			//просто про музыку
			else if(message.includes("music")){
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
			//разгоны про жанры
			else if(musicMatch.length != 0){
				setTimeout(() => {

					let answer = processTopics(musicMatch[0], musicDescription[randomArrayNumber(musicDescription)], musicQuestions[randomArrayNumber(musicQuestions)]);
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1300);
			}
			//музыкальные жанры
			else if(message.includes("music") && (message.includes("genre") || message.includes("genres"))){
				setTimeout(() => {

					let answers = [
						`Music genre? Hmm, let me think, ${musicGenres[randomArrayNumber(musicGenres)]} is ${musicDescription[randomArrayNumber(musicDescription)]}`,
						`${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} and ${musicGenres[randomArrayNumber(musicGenres)]} are ${musicDescription[randomArrayNumber(musicDescription)]}. ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} is ${musicDescription[randomArrayNumber(musicDescription)]}`,
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1300);
			}
			
			//кино
			//любимые фильмы Лося
			else if(youMatch.length != 0 && movieWordsMatch.length != 0){
				setTimeout(() => {

					let answers = [
						`It's hard to name just one thing, but ${movieTitles[randomArrayNumber(movieTitles)]} comes to mind`,
						`${discussingMovies(movieTitles[randomArrayNumber(movieTitles)], positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)])}`,
						`My favorite movie is probably ${movieTitles[randomArrayNumber(movieTitles)]}, it's so ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
			}
			//жанры кино
			else if(movieWordsMatch.length != 0 && (message.includes("genre") || message.includes("genres"))){
				setTimeout(() => {

					let answers = [
					`Movie genre? Well, I don't know much, I like just movies. ${movieTitles[randomArrayNumber(movieTitles)]} is really ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
					`Sorry, my wisdom does not extend to movie genres. But I do know some music genres! ${toUpperCaseAnswer(musicGenres[randomArrayNumber(musicGenres)])} is ${musicDescription[randomArrayNumber(musicDescription)]}`
					]
					let answer = answers[randomArrayNumber(answers)];

					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
			}
			//просто упомянули кино
			else if(movieWordsMatch.length != 0){
				setTimeout(() => {

					let answers = [
						`I love cinéma! So about ${movieWordsMatch[0]}, I bet you have seen ${movieTitles[randomArrayNumber(movieTitles)]}? Isn't it ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						`I know a good movie! ${movieTitles[randomArrayNumber(movieTitles)]} is really ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						`I can recommend you ${movieTitles[randomArrayNumber(movieTitles)]}`,
						`${discussingMovies(movieTitles[randomArrayNumber(movieTitles)], positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)])}`,
						`${discussingMovies(movieTitles[randomArrayNumber(movieTitles)], positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)])}`,
						`${discussingMovies(movieTitles[randomArrayNumber(movieTitles)], positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)])}`,
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
			}
			//жанры в целом
			else if(message.includes("genre") || message.includes("genres")){
				setTimeout(() => {

					let answers = [
					`Movie or music genre?`,
					`Genre? Little Smurf, are we talking about music or moves?`
					]
					let answer = answers[randomArrayNumber(answers)];

					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
			}
			//искусство, art
			else if(message.includes("art")){
				setTimeout(() => {

					let answers = [
					`Art is limitless. But personally I love movies and music`,
					`What types of art do you like?`,
					]
					let answer = answers[randomArrayNumber(answers)];

					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
			}

		//ПОГОДА
			else if(message.includes("weather")){

				setTimeout(() => {
					let answer = weatherMessages[randomArrayNumber(weatherMessages)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);

				
			}
		//ШУТКИ	
			//Лося назвали шуткой
			else if(jokesMatch.length != 0 && youMatch.length !=0 && message.includes("are")){
				setTimeout(() => {

					let answers = [
						"I'm not a joke",
						"Joke? You are joke"

					]
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
			}						
			//попросили шутки
			else if(jokesMatch.length != 0){
				setTimeout(() => {

					let answers = [
						`${jokes[randomArrayNumber(jokes)]}`,
						`${jokes[randomArrayNumber(jokes)]}`,
						`${jokes[randomArrayNumber(jokes)]}`,
						`${jokes[randomArrayNumber(jokes)]}`,
						`I will make you laugh. ${jokes[randomArrayNumber(jokes)]}`,
						` Here's one. ${jokes[randomArrayNumber(jokes)]}`,
						`Oh, I know a joke! ${jokes[randomArrayNumber(jokes)]}`,
					]
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
							
				}, 1300);
			}

		//ВОПРОСЫ	
			//спросить время (what + time)
			else if(message.includes("what") && message.includes("time")){

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
			else if(questionsMatch[0] == "что"){

					setTimeout(() => {
						let answers = [
							"Что?",
							"И что?",
							"Да ничего",
							"Ничего"
						]
								
						let answer = answers[randomArrayNumber(answers)];
						chatbotSendMessage(toUpperCaseAnswer(answer))
						
					}, 1300);
				
			}


			//HOW + you, как дела и всё такое
			else if(questionsMatch[0] == "how" && youMatch.length != 0){

				setTimeout(() => {
					let answers = [
						"I'm doing fine, little Smurf!",
						"Right now I'm doing great, little friend!",
						"Oh, fine. How are you?",

					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
					
				}, 1300);
			}
			
			//ПРОСТО HOW
			else if(questionsMatch[0] == "how"){

				setTimeout(() => {
					let answers = [
						"How?",
						"Somehow",
						"Yeah, how?",

					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
					
				}, 1300);
			}

			//Who + you
			else if(questionsMatch[0] == "who" && youMatch.length != 0){

				setTimeout(() => {
					let answers = [
						"Oh, my name is Papa Smurf",
						"Don't you know who you're writing to? Check the name tag, little Smurf",
						"I'm Papa Smurf!",
						"I'm Grand Schtroumpf but for you it's just Papa Smurf",
						"I'm the greatest leader od Smurfs!"
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
					
				}, 1300);
			}			
			
			//ПРОСТО WHO
			else if(questionsMatch[0] == "who"){

				setTimeout(() => {
					let answers = [
						"Someone",
						"Somebody",
						"Some Smurf",
						"Who?",
						"Who? You?",
						"Whoever",
						"Who who. What are you? A stupid owl?"
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
					
				}, 1300);
			}
			//ПРОСТО WHERE
			else if(questionsMatch[0] == "where"){

				setTimeout(() => {
					let answers = [
						"Somewhere",
						"Nowhere",
						"Right, where?",
						"Where?",
						"Wherever"
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
					
				}, 1300);
			}
			//ПРОСТО WHEN
			else if(questionsMatch[0] == "when"){

				setTimeout(() => {
					let answers = [
						"I'll tell you when",
						"I don't know when",
						"When? Yeah, when?",
						"It takes some time to happen",
						"Whenever",

					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
					
				}, 1300);
			}
			//ПРОСТО WHY
			else if(questionsMatch[0] == "why"){

				setTimeout(() => {
					let answers = [
						"For many reasons",
						"Why? But why not? I don't understand such questions",
						"Because of many good reasons, my little Smurf",
						"Whyever",
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
					
				}, 1300);
			}	
			//ПРОСТО WHICH
			else if(questionsMatch[0] == "which"){

				setTimeout(() => {
					let answers = [
						"Which one?",
						"I don't know which. Why is it matter to you?",
						"Which? That's a hell of a question",
						"Whichever",
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
					
				}, 1300);
			}	
			//ПРОСТО WHOSE
			else if(questionsMatch[0] == "whose"){

				setTimeout(() => {
					let answers = [
						"Mine probably",
						"Maybe mine",
						"I don't know whose",
						"Whose? Good question",
						"Whosever",
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
					
				}, 1300);
			}
			//ПРОСТО WHOM
			else if(questionsMatch[0] == "whom"){

				setTimeout(() => {
					let answers = [
						"Whom?",
						"Whomever",
						"To me, I guess",
						"To Gargamel",
					]
							
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
					
				}, 1300);
			}																			

		//МОТИВАЦИОННЫЕ ЦИТАТЫ

			//умные цитаты и мотивация
			else if(quoteMatch.length != 0){
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
			//thank you
			else if(message.includes("спасибо") || message.includes("пасиба") || message.includes("благодарю")|| message.includes("пасибо")|| message.includes("спс")){

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
			//Грампи
			else if(message.includes("grumpy") || message.includes("grump") ){

				setTimeout(() => {
					let answer = `Grumpy? My rude brother. He lives <a href='https://theomorphic.github.io/Grumpy' target='_blank'>right here</a>`;
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);
			}
			//KILLSHARK
			else if(message.includes("killshark")){

				setTimeout(() => {
					let answers =[
						"Killshark is the greatest game company",
						`Killshark is ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}`,
						"<a href='https://killshark.com' target='_blank'>Here's the website</a>",
					]
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);	
			}

			//просто на ты
			else if(message.includes("you") ||message.includes("dude") ||message.includes("man")){
				setTimeout(() => {
					let answers =[
						"Me?",
						"Me what?",
						"Yeah?"
					]
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);
				
			}		

			//упомнянули porn
			else if(message.includes("porn") || message.includes("porno") || message.includes("pornography")){
				setTimeout(() => {
					let answers =[
						"It's so obscene!",
						"Eww, I don't watch that",
						"This is not the topic we would like to discuss",
						"I don't appreciate you mentioning that word",
					]
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);
				
			}	
			//nothing
			else if(message.includes("nothing")){

				setTimeout(() => {
					let answers =[
						"Nothing it is",
						agreeWords[randomArrayNumber(agreeWords)],
						"Nothing is fine",
					]
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);	
			}
		
			//time
			else if(message.includes("time")){

				setTimeout(() => {
					let answers =[
						"Time is priceless",
						"Don't waste your time",
						"You have much time, don't you?",
						"I'm so old, time goes slow"
					]
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);	
			}

			//скучно
			else if(message.includes("boring") || message.includes("bored") || message.includes("boredom")){

				setTimeout(() => {
					let answers =[
						"Boredom comes out of you",
						"Don't be boring",
						"If it's boring, say something better",
					]
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);	
			}			
			//просят задать вопрос
			else if(message.includes("вопрос") || message.includes("вопросы")){

				setTimeout(() => {
					let answers =[
						"Вопрос?",
						"Какой вопрос?",
						"Я что на допросе?",
					
					]
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);	
			}	
			//достаточно
			else if(message.includes("enough")){

				setTimeout(() => {
					let answers =[
						"Enough is enough",
						"Yeah, it's enough",
					]
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);	
			}						
			//тусовка
			else if(message.includes("party") || message.includes("parties")  ){

				setTimeout(() => {
					let answers =[
						"I party hard",
						"Last time I was parting so hard, Gargamel was shocked",
						"Do you want to party with me?",
					]
					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);	
			}	
		//КОРОТКИЕ ОТВЕТЫ: СОГЛАСИЕ И ОТРИЦАНИЕ, обращение на ты

			//согласие
			else if(agreeMatch.length != 0){
				setTimeout(() => {

					let answers =[
						`${agreeWords[randomArrayNumber(agreeWords)]}`,
						`${neutralWords[randomArrayNumber(neutralWords)]}`,
						`${agreeWords[randomArrayNumber(agreeWords)]}, но прозвучало ${descriptionWords[randomArrayNumber(descriptionWords)]}`,

					]

					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);
			}
			//несогласие
			else if(disagreeMatch.length != 0){
				setTimeout(() => {

					let answers =[
						`${disagreeWords[randomArrayNumber(disagreeWords)]}`,
						`${agreeWords[randomArrayNumber(agreeWords)]}`,
						`${neutralWords[randomArrayNumber(neutralWords)]}`,
					]

					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);
			}


		//ОТДЕЛЬНЫЕ СЛОВА И КАТЕГОРИИ

			//положительные слова для описания
			else if(positiveDescriptionMatch.length != 0){
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
			//союзы
			else if(conjunctionMatch.length != 0 ){

				setTimeout(() => {
					let answer = `${conjunctionMatch[0]}?`;
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1400);
			}


		//ПРЕДПОСЛЕДНЯЯ КАТЕГОРИЯ
			//назвали самого Лося
			else if(losCallingMatch.length != 0){
				setTimeout(() => {
					let answer = losCallingMessages[randomArrayNumber(losCallingMessages)];
					chatbotSendMessage(toUpperCaseAnswer(answer))
				}, 1500);
			}

		//АБСОЛЮТНОЕ НЕПОНИМАНИЕ

			else{
				setTimeout(() => {

					const answers = [
						`${binderPhrases[randomArrayNumber(binderPhrases)]} ${positiveDescriptionWords[randomArrayNumber(positiveDescriptionWords)]}, but ${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}. ${movieMessages[randomArrayNumber(movieMessages)]}`,
						`${noIdeaMessages[randomArrayNumber(noIdeaMessages)]}. ${smalltalk[randomArrayNumber(smalltalk)]}`,
						`Звучишь ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
						`Прозвучало ${descriptionWords[randomArrayNumber(descriptionWords)]}`,
					]

					let answer = answers[randomArrayNumber(answers)];
					chatbotSendMessage(toUpperCaseAnswer(answer))

				}, 1500);
			}

	}



