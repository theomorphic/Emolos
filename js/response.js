

// КОРОТКИЕ ПРЕДЛОЖЕНИЯ И ФРАЗЫ
const greetingsWords = [
	"привет", "приветик", "приветы", "прет", "приветики", "приветствую", "приветствие",
	"здорово","здорова",  "здрасте", "здарова","здравствуйте", "здравствуй",
	"ку", "куку",
	"хай","хей", "hi","hello",
]
export{greetingsWords}
const greetingsMessages = [
	"Пф, привет",
	"Ку",
	"Ага, здорово",
	"Здорова",
	"Ну привет",
	"Здравствуйте",
]
export{greetingsMessages}
//короткие приветствия и пожелания
const negativeMessages =[
	"Ты мне погруби", 
	"Язык промой с мылом",
	"Ты берега не попутал?",
	"Вонючие словечки ты подбираешь",
	"У тебя из пасти воняет",
	"Фу таким быть",
]
export{negativeMessages}
const negativeWords =[

	"блять",
	"пиздец",
	"сука","суки","сук","суке","сукам","суку","сукой","сукою","суками","суках",
	"сучка",
	"нахуй","нахуя","нихуя","охуеть","хуйня",
	"хуй", "хуи","хуя","хуев","хую","хуем","хуями","хуе","хуях",
	"хуйло","хуйла","хуил","хуйлу","хуйлам","хуйлом","хуйлами","хуйле","хуйлах",
	"ебать",
	"пизда",
	"говно","говна","говен","говну","говнам","говном","говнами","говне","говнах",

	"hole",
	"musa",
	"fuck",
	"fucking",
	"fucker",
	"fucks",
	"fucked",
	"motherfucker",
	"motherfuck",
	"motherfucking",
	"lox",
	"bitch",
	"bitches",
	"shit",
	"shitting",
	"shitted",
	"shithole",
	"sht",
	"crap",
	"poop",
	"ass",
	"slut",
	"whore",
	"bullshit",
	"bullshitting",
	"bullshitted",
	"idiot",
	"asshole",
	"dick",
	"cunt",
	"pussy",
	"dumb",
	"dumber",
	"dumbest",
	"dumbass",
	"dull",
	"nyb",
	"noob",
	"damn",
	"freak",
	"freaking",
	"freaked",
	"damn",
	"douchebag",
	"gay",
	"fag",
	"faggot",
	"homo",
	"nigger",
	"niger",
	"niga",
	"nigga",
	"bastard",
	"jerk",
	"prick",
	"loser",
	"sucker",
	"nerd",
	"retard",
	"retarded",
	"dafaq",
	"hooker",
	"arse",
	"piss",
	"cock",
	"dickhead",
	"bollocks",
	"testicles",
	"bugger",
	"buggering",
	"buggers",
	"buggered",
	"hell",
	"goddamn",
	"minger",
	"munter",
	"knob",
	"twat",
	"bellend",
	"snatch",
	"minge",
	"fucko",
	"fuckhead",
	"asshead",
	"hoe",
	"jade",
	"dork",
	"dorks",
	"dorky",
	"pansy",
	"scumbag",
	"wanker",
	"prat",
	"dwarf",
	"midget", "midgets",
	"gnome",
	"moron", "morons"

]
export{negativeWords}
//реакции на бранные слова и оскорбления
const rudeWords = [
	"лох", "лохи","лоха","лоху","лохов","лохам","лохом","лохами","лохе","лохах",
	"лошпед","лошпеды","лошпеда","лошпедов","лошпеду","лошпедам","лошпедом","лошпедами","лошпеде","лошпедах",
	"лошара","лошары","лошар","лошаре","лошарам","лошару","лошарой","лошарою","лошарами","лошарах",
	"лошок","лошки","лошка","лошков","лошку","лошкам","лошком","лошками","лошке","лошках",

	"дурак","дураки","дураку","дурака","дуракам","дураков","дураком","дураками","дураке","дураках",
	"дура","дуры","дур","дуре","дурам","дуру","дурой","дурою","дурами","дурах",
	"дурачина","дурачины","дурачин","дурачине","дурачинам","дурачину","дурачиной","дурачиною","дурачинами","дурачине","дурачинах",
	
	"придурок","придурки","придурка","придурков","придурку","придуркам","придурком","придурками","придурке","придурках",
	"болван","болваны","болвана","болванов","болвану","болванам","болванами","болване","болванах",
	"нуб","нубы","нуба","нубов","нубу","нубам","нубами","нубе","нубах",
	"сопляк","сопляки","сопляка","сопляков","сопляку","соплякам","сопляком","сопляками","сопляке","сопляках",
	"олух","олухи","олуха","олухов","олуху","олухам","олухом","олухами","олухе","олухах",
	"идиот","идиоты","идиота","идиотов","идиоту","идиотам","идиотом","идиотами","идиоте","идиотах",

	"мудак","мудаки","мудака","мудаков","мудаку","мудакам","мудаков","мудаком","мудаками","мудаке","мудаках",
	"мудень","мудни","мудня","мудней","мудню","мудням","муднем","муднями","мудне","муднях",

	"гей","геи","гея","геев","гею","геям","геем","геями","гее","геях",
	"педик","педики","педика","педиков","педику","педикам","педиком","педиками","педике","педиках",
	
	"член","члены","члена","членов","члену","членам","членом","членами","члене","членах",
	"пенис","пенисы","пениса","пенисов","пенису","пенисам","пенисом","пенисами","пенисе","пенисах",

	"сосунок","сосунки","сосунка","сосунков","сосунку","сосункам","сосунком","сосунками","сосунке","сосунках",

	"опущенный","опущен","опущеная",
	"тупой","тупая","тупое",
	"вафлер",
	"очко",
	"жопа","жопу",
	"задница","задницу",
	"зад",
	"кал","кала",
]
export{rudeWords}
//легкие грубости
const rudeMessages = [
	"При мне так не выражайся",
	"Плохо ты говоришь",
	"Ты полон злобы, раз пишешь такое",
	"Позор так писать",
	"Одумайся",
	"Позоришься сейчас",
]
export{rudeMessages}



const noIdeaMessages = [
	"Не понимаю о чем ты",
	"Я понял",
	"Я так и думал",
	"Даже не знаю",
	"Вот сам и думай об этом",
	"Посыл неясен",
	"Смутно представляю, о чём ты говоришь",
	"Просто воздух сотрясаешь",

]
export {noIdeaMessages}
//короткие реакции на полное непонимание темы

const randomSmiles = [
	"))",
	";)",
	":)",
	"0_0",
	"лол",
	"кек",
	"xd",
	"хд",
	"хе",
]
export{randomSmiles}
//смайлики из знаков


// ДЛИННЫЕ ПРЕДЛОЖЕНИЯ И ФРАЗЫ
const smalltalk = [
	"Смотрел новый фильм Озона?",
	"Смотрел последний матч в лиге?",
	"Что ты слушаешь в последнее время?",
	"Ты слышал про недавние сионистские гонения?",
	"Ты не ощущаешь общественный запрос на марксистский ревизионизм?",
	"Я успел разочароваться в левацких настроениях Франции, что ты думаешь?",
	"Ты не смотрел фильмы того румынского режиссёра?",
	"Мне неприятно думать о том, что наше поколение осталось без пенсии",
	"Ты знаешь, что мне не нужно твоё ютубовское мнение?",
	"Ты знал, что ты просто сотрясаешь воздух?",
	"Хочу напомнить тебе о том, что Bring Me The Horizon невозможно слушать",
]
export {smalltalk};
//small talk

const quotes = [
	"Сила – не в бабках. Ведь бабки – уже старые",
	"Я живу, как карта ляжет. Ты живёшь, как мамка скажет",
	"Если заблудился в лесу, иди домой",
	"Запомни: всего одна ошибка – и ты ошибся",
	"В жизни всегда есть две дороги: одна — первая, а другая — вторая",
	"Мы должны оставаться мыми, а они – оними",
	"Работа — это не волк. Работа — ворк. А волк — это ходить",
	"Как говорил мой дед, «Я твой дед»",
	"Без подошвы тапочки — это просто тряпочки",
	"Жи-ши пиши от души",
]
export{quotes}
const quotesAsking = [
	"цитата","цитаты","цитат","цитате","цитатам","цитату","цитатой","цитатою","цитатами","цитатах",
	"совет","советы","совета","советов","совету","советам","советом","советами","совете","советах",
	"поговорка","поговорки","поговорок","поговорке","поговоркам","поговорку","поговоркой","поговоркою","поговорками","поговорках",
	"наставление","наставления","наставлений","наставлению","наставлениям","наставлением","наставлениями","наставлении","наставлениях",
	"мотивация","мотивации","мотиваций","мотивациям","мотивацию","мотивацией","мотивациею","мотивациями", "мотивациях",
	"мудрость", "мудрости","мудростей","мудростями","мудростью","мудростях",
]
export{quotesAsking}
//длинные цитаты-наставления

const jokes = [
	"Какой самый любимый фильм у Макрона? 'Французский поцелуй'!",
	"Как Лукашенко сказал Макрону, что намекает ЕС на провокации? 'Атака макаронов на Макрона!'",
	"Какой алгоритм использует Макрон для принятия решений? 'Французский двушка-трешка'!",
	"Какую стратегию применил Макрон для победы на выборах? 'Французский Пощечина'!",
	"Англичане обвинили в своем поражении бразильского судью, который назначил в ворота французов всего два пенальти",
	"Собянин запретил выходить на работу прибывшим из Италии, Франции, Германии и Испании.Работа мэрии, Госдумы и правительства парализована",
	"Современная глобализация - это когда на смену немецким автомобилям, американским компьютерам и французским духам приходят китайские автомобили, китайские компьютеры и китайские духи",
	"В Швейцарии официальными языками являются немецкий, французский, итальянский, а весь внутренний документооборот на иврите",
	"Россияне искренне возмущены бесчеловечной пенсионной реформой во Франции",
	"А никого вообще не смущает, что звезды качества ресторанам дает французская шиномонтажка?",
	"Сборная Франции по футболу стала единственной африканской командой, вышедшей в финал ЧМ во второй раз в истории",
	"Только недальновидные французы ищут женщину. Умные люди сразу ищут деньги",
	"Макрон заявил, что Россия начала гибридную мировую войну и Франция, как всегда, готова к гибридной капитуляции",
	"Пока араб не грянет, француз не перекрестится",
	"Представители беженцев, осевших в Германии, Франции и Венгрии, встретились, чтобы обсудить проблему интеграции коренных граждан Европы",
	"Если вам говорят, что быть тупым в 21 веке - моветон, не парьтесь! Я гуглил, это херня какая-то на французском",
	"После разрешения однополых браков во Франции три мушкетера выглядят все более подозрительно",
	"На чемпионате мира по футболу за сборную Франции болела вся Африка",
]
export {jokes}
const jokesWords = [
	"шутка","шутки","шуток","шутке","шуткам","шутку","шуткой","шуткою","шутками","шутках",
	"веселье","веселья","веселий","веселью","весельям","весельем","весельями","весельях",
	"анекдот","анекдоты","анекдота","анекдотов","анекдоту","анекдотам","анекдотом","анекдотами","анекдоте","анекдотах",
	"хохма","хохмы","хохм","хохме","хохма","хохму","хохмой","хохмою","хохмами","хохмах",
]
export{jokesWords}
//шутки

//погода
const weatherWords = [
	"погода","погоды","погод","погоде","погодам","погоду","погодой","погодою","погодами","погодах",
	"непогода","непогоды","непогод","непогоде","непогодам","непогоду","непогодой","непогодою","непогодами","непогодах",
	"дождь","дожди","дождя","дождей","дождю","дождям","дождем","дождями","дожде","дождях",
	"ливень","ливни","ливня","ливней","ливню","ливням","ливнем","ливнями","ливне","ливнях",
	"ветер","ветра","ветры","ветров","ветру","ветрам","ветром","ветрами","ветре","ветрах",
	"град","грады","града","градов","граду","градам","градом","градами","граде","градах",
	"снег","снега","снегов","снегу","снегам","снегом","снегами","снеге","снегах",
	"влажно","облачно","дождливо","снежно","холодно","тепло","жарко","туманно","пасмурно","жарко","жаркое","жаркая","ветрено",
	"гроза","грозы","гроз","грозе","грозам","грозу","грозой","грозою","грозами","грозе","грозах",
	"ураган","ураганы","урагана","ураганов","урагану","ураганам","ураганом","ураганами","урагане","ураганах",
]
export{weatherWords}
const weatherMessages = [
	"Сегодня очень солнечно.",
	"Завтра обещают дождь.",
	"Вчера была сильная гроза.",
	"Сегодня на яме туманно.",
	"Прогнозируют теплую погоду на выходные.",
	"Недавно шел град, прикинь.",
	"На небе видны красивые радужные цвета.",
	"Вчера был сильный ветер.",
	"Послезавтра обещают сильный туман.",
	"Сегодня тихая погода без ветра.",
	"На небе видны красивые облака.",
	"Вчера была метель.",
	"Сегодня очень жарко.",
	"Завтра обещают метель.",
	"Вчера был мороз.",
	"На улице мокро после дождя.",
	"Прогнозируют снегопад на следующую неделю.",
	"Сегодня ветрено.",
	"Завтра обещают град.",
	"Вчера было облачно.",
	"На улице пасмурно.",
	"Прогнозируют аномально жаркое лето.",
	"Сегодня утром был густой туман.",
	"Завтра обещают переменную облачность.",
	"Вчера была полная луна.",
	"На улице светит яркое солнце.",
	"Прогнозируют сильный грозовой ветер.",
	"Сегодня прогнозируют ураган.",
	"Завтра обещают солнечную погоду.",
	"На улице холодно.",
	"Прогнозируют сильный снегопад.",
	"Сегодня воздух очень свежий.",
	"Завтра обещают жару.",
	"Вчера был холодный ветер.",
	"На небе видны прекрасные звезды.",
	"Прогнозируют солнечную погоду на выходные.",
	"Сегодня влажно.",
	"Завтра обещают умеренный климат.",
	"Вчера была непогода.",
	"На улице смешанная погода.",
]
export{weatherMessages}

// СЛОВА ДЛЯ КОНСТРУИРОВАНИЯ РАЗБОРНЫХ ПРЕДЛОЖЕНИЙ
const conjunction = [
	"и",
	"но",
	"хотя",
	"а",
	"еще",
	"а еще",
	"однако",
	"однако же",
	"только",
	"а все же",
	"но все же",
	"но еще",
	"только вот",
	"хоть и",
	"впрочем,",
	"и все же",
	" ",
]
export{conjunction}
// союзны и союзные слова
const agreeWords = [
	"да",
	"ага",
	"угу",
	"ну да",
	"конечно",
	"ок",
	"хорошо",
	"ладно",
	"разумеется",
	"точно",
	"круто",
	"естественно",
	"отлично",
]
export{agreeWords}
//слова согласия, как короткие, так и отдельные фразы
const disagreeWords = [
	"нет",
	"неа",
	"да не",
	"да ну",
]
export{disagreeWords}
//слова несогласия, как короткие, так и отдельные фразы
const neutralWords = [
	"хорошо",
	"понял",
	"ок",
	"понятно",
	"разумеется",
	"хорошо",
	"ладно",
	"нормально",
	"согласен",
	"принято",
	"все хорошо",
	"именно",
	"понимаю",
	"приемлемо",
	"верно",
	"уверен"
]
export{neutralWords}
//слова нейтрального ответа
const introductoryWords = [
	"наверное",
	"может",
	"вообще",
	"я бы сказал",
	"так вот",
]
export{introductoryWords}
//вводные вступительные, заключительные и нейтральные фразы

const descriptionWords = [
	"метафорически",
	"двойственно",
	"запутанно",
	"выразительно",
	"неординарно",
	"беспощадно",
	"фантастически",
	"изысканно",
	"характерно",
	"волнующе",
	"величественно",
	"бесхарактерно",
	"раздражающе",
	"язвительно",
	"изящно",
	"беспрекословно",
	"холодно",
	"непостижимо",
	"недоуменно",
	"безапелляционно",
	"плохонько",
	"небезразлично",
	"восторженно",
	"целомудренно",
	"профессионально",
	"пассивно",
	"мягонько",
	"беспрецедентно",
	"неодолимо",
	"недоверчиво",
	"бесшумно",
	"проницательно",
	"порядково",
	"безудержно",
	"бесстрашно",
	"сверхчувственно",
	"благородно",
	"безголосо",
	"ловко",
	"бесчувственно",
	"страстно",
	"развязно",
	"плачевно",
	"прозорливо",
	"душевно",
	"напыщенно",
	"трезво",
	"бесправно",
	"безнравственно",
	"безжалостно",
	"бескорыстно",
	"беспринципно",
	"нечисто",
	
]
export{descriptionWords}
//наречия для выражения своего мнения
const positiveDescriptionWords = [
	"супер",
	"смело",
	"искренне",
	"положительно",
	"дружелюбно",
	"оптимистично",
	"внимательно",
	"выразительно",
	"весело",
	"великодушно",
	"жизнерадостно",
	"энергично",
	"спонтанно",
	"находчиво",
	"активно",
	"решительно",
	"уверенно",
	"обаятельно",
	"креативно",
	"благоприятно",
	"эмоционально",
	"спокойно",
	"умело",
	"вдохновенно",
	"вежливо",
	"эффективно",
	"грациозно",
	"мудро",
	"успешно",
	"гармонично",
	"утонченно",
	"эффектно",
	"логично",
	"безопасно",
	"прогрессивно",
	"великолепно",
	"качественно",
	"уместно",
	"ревностно",
	"изящно",
	"благородно",
	"жизнеутверждающе",
	"сильно",
	"крепко",
	"достойно",
	"ясно",
	"красиво",
	
]
export{positiveDescriptionWords}

// РЕАКЦИЯ НА ОТДЕЛЬНЫЕ ИМЕНА И ОБРАЩЕНИЯ

const unknownNames = [
	"frank",
	"joe",
	"john",
	"mark",
	"antony",
	"tony",
	"albert",
	"adolf",
	"sam",
	"peter",
	"harry",
	"toby",
	"jason",
	"donald",
	"steven",
	"kevin",
	"brian",
	"eric",
	"dennis",
	"денис",
	"ден",
	"александр",
	"андрей",
	"владимир",
	"дмитрий",
	"евгений",
	"иван",
	"настя",
	"анастасия",
	"влада",
	"vlada",
	"nasty",
	"helen",
	"лена",
	"max",
	"толик",
	"толя",
	"катя",
	"аня",
	"даша",
	"dasha",
	"ксюша",
	"таня",
	"антон",
	"лиза",
	"елизавета",
	"эльза",
	"elizabeth",
	"beth",
	"lisa",
	"максим",
	"никита",
	"николай",
	"олег",
	"павел",
	"станислав",
	"анна",
	"александра",
	"виктория",
	"дарья",
	"екатерина",
	"елена",
	"ирина",
	"ксения",
	"мария",
	"наталья",
	"ольга",
	"светлана",
	"татьяна",
	"юлия",
	"юлия",
	"александр",
	"иван",
	"максим",
	"дмитрий",
	"никита",
	"илья",
	"павел",
	"андрей",
	"евгений",
	"станислав",
	"владимир",
	"кирилл",
	"георгий",
	"николай",
	"роман",
	"александр",
	"иван",
	"андрей",
	"максим",
	"дмитрий",
	"илья",
	"евгений",
	"никита",
	"владимир",
	"павел",
	"станислав",
	"кирилл",
	"николай",
	"владислав",
	"анатолий",
	"игорь",
	"роман",
	"alexander",
	"andrey",
	"vladimir",
	"dmitriy",
	"eugene",
	"ivan",
	"maksim",
	"michael",
	"nikita",
	"pavel",
	"nikolai",
	"paul",
	"sergey",
	"stanislav",
	"anna",
	"alexandra",
	"victoria",
	"daria",
	"catherine",
	"elena",
	"irina",
	"ksenia",
	"maria",
	"natalia",
	"olga",
	"svetlana",
	"tatiana",
	"alexander",
	"ivan",
	"maksim",
	"dmitriy",
	"sergey",
	"daniel",
	"nikita",
	"ilya",
	"paul",
	"andrey",
	"eugene",
	"stanislav",
	"vladimir",
	"kirill",
	"george",
	"nikolai",
	"vladislav",
	"ivan",
	"andrey",
	"maksim",
	"dmitriy",
	"sergey",
	"ilya",
	"eugene",
	"nikita",
	"vladimir",
	"paul",
	"stanislav",
	"daniel",
	"kirill",
	"nikolai",
	"vladislav",
	"anatoly",
	"igor",
	"roman",
	"liam", 
	"olivia", 
	"noah", 
	"emma", 
	"oliver", 
	"ava", 
	"elijah", 
	"charlotte", 
	"william", 
	"sophia",
	"james",
	"mia",
	"benjamin",
	"isabella",
	"lucas",
	"amelia",
	"mason",
	"harper",
	"ethan",
	"evelyn",
	"alexander",
	"abigail",
	"henry",
	"emily",
	"jacob",
	"elizabeth",
	"sofia",
	"daniel",
	"avery",
	"ella",
	"david",
	"scarlett",
	"luke",
	"grace",
	"jack",
	"chloe",
	"jackson",
	"lily",
	"ryan",
	"madison",
	"nathan",
	"zoe",
	"samuel",
	"layla",
	"joseph",
	"aria",
	"evan",
	"nora",
	"dylan",
	"hannah",
	"anthony",
	"leah",
	"isaac",
	"lillian",
	"gabriel",
	"aaliyah",
	"carter",
	"addison",
	"owen",
	"aubrey",
	"wyatt",
	"bella",
	"natalie",
	"leo",
	"mila",
	"jaxon",
	"nova",
	"julian",
	"serenity",
	"christopher",
	"riley",
	"joshua",
	"kimberly",
	"andrew",
	"penelope",
	"lincoln",
	"victoria",
	"theodore",
	"stella",
	"caleb",
	"ellie",
	"hunter",
	"brooklyn",
	"levi",
	"aurora",
	"jonathan",
	"willow",
	"isaiah",
	"claire",
	"aaron",
	"savannah",
	"elliot",
	"nevaeh",
	"adrian",
	"hazel",
	"nolan",
	"luna",
	"charles",
	"lydia",
	"eli",
	"camila",
	"connor",
	"skylar",
	"jordan",
	"lillian",
	"christian",
	"madelyn",
	"landon",
	"raelynn",
	"asher",
	"kaylee",
	"nicholas",
	"gianna",
	"colton",
	"isabelle",
	"dominic",
	"nina",
	"jaxson",
	"sara",
	"greyson",
	"alexa",
	"ian",
	"isabel",
	"adam",
	"hayden",
	"parker",
	"trinity",
	"austin",
	"lyla",
	"kai",
	"faith",
	"elias",
	"talia",
	"carson",
	"jade",
	"bentley",
	"elena",
	"ryder",
	"esther",
	"kingston",
	"mackenzie",
	"xavier",
	"paisley",
	"camden",
	"athena",
	"kaden",
	"valentina",
	"mateo",
	"lucy",
	"zachary",
	"annabelle",
	"sebastian",
	"daisy",
	"jace",
	"josephine",
	"tyler",
	"brielle",
	"luca",
	"delilah",
	"devin",
	"sophie",
	"miles",
	"vivian",
	"micah",
	"callie",
	"antonio",
	"megan",
	"brody",
	"rebecca",
	"jayden",
	"holly",
	"andrea",
	"piper",
	"tristan",
	"leilani",
	"julius",
	"ariana",
	"brayden",
	"daniela",,
	"jasmine",
	"jax",
	"danielle",
	"walker",
	"laila",
	"robert",
	"rylee",
	"kaiden",
	"adeline",
	"chance",
	"mckenna",
	"phoenix",
	"finn",
	"jennifer",
	"joel",
	"mariana",
	"nicolas",
	"camilla",
	"preston",
	"gabriella",
	"damian",
	"fiona",
	"colin",
	"maggie",

]
export{unknownNames}

const youWords = [
	"ты","тебя","тебе","тобой","тобою",
	"вы","вас","вам","вами",

]
export{youWords}
//прямое обращение к боту
const youPossessiveWords = [
	"твой","твое","твоя",
	"твоего","твоей","твоих",
	"твоему","твоим",
	"твою", "твои",
	"ваш","ваше","ваша","ваши",
	"вашего","вашей","ваших",
	"вашему","вашим","вашу","ваших",
	"вашею","вашими","вашем",

]
export {youPossessiveWords}

const meWords = [
	"я","меня","мне","мной","мною",

]
export{meWords}
//обращение от первого лица

const mePossessWords = [
	"мой","мое","моя","моего","моей","моих","моему","моим","мою","мои",

]
export{mePossessWords }
//личные местоимения притяжательного падежа


const questions = [
	"что","че", "чего","що","чем",
	"где","куда","откуда",
	"когда",
	"почему","зачем",
	"кто","кем",
	"какой","какая","какое","какие","каков","каково","какова","каковы","который","которая","которое","которые","каким","какими",
	"чей","чья","чье","чьи",
	"whom","кому",
	"как",
]
export{questions}


