//КАТЕГОРИИ РАЗНЫХ ПОНЯТИЙ

//описание природы
const natureWords = [
	"камень","камни","камня","камней","камню","камням","камнем","камнями","камне","камнях",
	"дерево","деревья","дерева","деревьев","дереву","деревьям","деревом","деревьями","дереве","деревьях",
	"солнце","солнца","солнц","солнцу","солнцам","солнцем","солнцами","солнцах",
	"река","реки","рек","реке","рекам","реку","рекой","рекою","реками","реках",
	"гора","горы","гор","горе","горам","гору","горой","горою","горами","горах",

	"clouds",
	"rain",
	"wind",
	"flower",
	"forest",
	"field",
	"lake",
	"sky",
	"grass",
	"sand",
	"dune",
	"valley",
	"canyon",
	"waterfall",
	"meadow",
	"desert",
	"island",
	"volcano",
	"tundra",
	"bamboo",
	"delta",
	"glacier",
	"lagoon",
	"reef",
	"cave",
	"plateau",
	"marsh",
	"pond",
	"summit",
	"rift",
	"fjord",
	"delta",
	"gulf",
	"savanna",
	"estuary",
	"cliff",
	"ridge",
	"stream",
	"hill",
	"bay",
	"quarry",
	"heath",
	"swamp",
	"ravine",
	"oasis",
	"crater",
	"basin",
	"promontory",
	"dell",
	"crag",
	"grove",
	"floodplain",
	"foothill",
	"quagmire",
	"arctic",
	"bush",
	"gorge",
	"fen",
	"knoll",
	"pinnacle",
	"escarpment",
	"alluvial",
	"estuary",
	"upland",
	"taiga",
	"saltmarsh",
	"crag",
	"tableland",
	"trellick",
	"wetland",
	"canyon",
	"wadi",
	"rainforest",
	"mesa",
	"prairie",
	"tropics",
	"arroyo",
	"bight",
	"trial",
	"cape",
	"isthmus",
	"moor",
	"foreland",
	"corrie",
	"polynya",
	"pocosin",
	"lava",
	"pebble",
	"gully"
]
export{natureWords}
const natureDescription = [
	'живописно',
	'красиво',
	'ярко',
	'тихо',
	'шумно',
	'величественно',
	'гармонично',
	'дико',
	'безмятежно',
	'вдохновенно',
	'колоссально',
	'монументально',
	'ослепительно',
	'пленительно',
	'потрясающе',
]
export{natureDescription}
const natureQuestions = [
	"Почему пустынные розы не пахнут?",
	"Как крокусы знают, когда цветок поднимается к солнцу?",
	"Могут ли растения плакать?",
	"Почему характерный запах после дождя так приятен?",
	"Какое животное способно выделять свет во тьме?",
	"Существует ли растение, которое может перемещаться?",
	"Каким образом растения общаются между собой?",
	"Может ли дерево видеть вокруг себя?",
	"Почему листья меняют цвет осенью?",
	"Какие растения способны противостоять магнитным полям?",
	"Как листья могут защищаться от вредителей без химических веществ?",
	"Существует ли растение, которое может вылечить заболевания человека?",
	"Какое животное может пережить абсолютный ноль?",
	"Почему тропические растения так разнообразны?",
	"Может ли растение чувствовать боль?",
	"Почему звуки в природе могут быть такими успокаивающими?",
	"Какие секреты хранит морская глубина?",
	"Может ли камень испытывать чувства?",
	"Почему существуют однолетние растения?",
	"Как животные могут предсказывать приближение непогоды?",
	"Существует ли растение, которое не нуждается в воде?",
	"Почему весенние цветы появляются после снегопада?",
	"Какую тайну скрывает запах свежей травы?",
	"Могут ли растения чувствовать эмоции?",
	"Почему редкие растения обитают в особо суровых условиях?",
	"Какие необычные способности есть у древесины?",
	"Может ли камыш расправиться сам по себе?",
	"Почему деревья могут создавать музыку при ветре?",
	"Какие тайны хранит морская пена?",
	"Могут ли растения обмениваться информацией во сне?",
	"Почему некоторые растения находятся под защитой закона?",
	"Каким образом растения выбирают своего опылителя?",
	"Может ли красное море стать снова красным?",
	"Почему некоторые растения растут только на определенной высоте?",
	"Существует ли растение, которое может укреплять почву?",
	"Какие секреты хранят деревья старше тысячи лет?",
	"Могут ли животные разговаривать с растениями?",
	"Почему водопады имеют такое успокаивающее действие?",
	"Каким образом растения могут защищаться от радиации?",
	"Может ли планета земля чувствовать человеческие эмоции?",
	"Почему некоторые растения способны питаться на солнечном свете?",
	"Каким образом земля плодородна и образует новую жизнь?",
	"Существует ли растение, которое может предсказать землетрясения?",
	"Почему некоторые растения выживают в условиях высокой температуры?",
]
export{natureQuestions}

//слово природа и подобные
const natureNames = [
	"природа","природы","природ","природе","природам","природу","природой","природою","природами","природах",
	"мир","миры","мира","миров","миру","мирам","миром","мирами","мире","мирах",
	"естество","естества","естеству","естеством","естестве",
	"растенье","растенья","растений","растенью","растеньями","растеньям","растеньем","растеньях",
]
export{natureNames}

//животные
const animalWords = [

	//животные
	"животное","животные","животного","животных","животному","животным","животным","животными","животном",
	"пес","псы","пса","псов","псу","псам","псом","псами","псе","псах",
	"собака","собаки","собак","собаке","собакам","собаку","собакой","собакою","собаками","собаке","собаках",
	"щенок","щенки","щенята","щенка","щенков","щенят","щенку","щенкам","щенятам","щенком","щенками","щенятами","щенке","щенках","щенятах",
	"олень","олени","оленя","оленей","оленю","оленям","оленями","олене","оленях",

	//птицы
	"птица","птицы","птиц","птице","птицам","птицу","птицей","птицею","птицами","птицах",
	"петух","петухи","петуха","петухов","петуху","петухам","петухов","петухом","петухами","петухе","петухах",

	"cat",
	"cats",
	"elephant",
	"elephants",
	"lion",
	"lions",
	"tiger",
	"tigers",
	"giraffe",
	"giraffes",
	"monkey",
	"monkeys",
	"bear",
	"bears",
	"penguin",
	"penguins",
	"zebra",
	"zebras",
	"dolphin",
	"dolphins",
	"squirrel",
	"squirrels",
	"rabbit",
	"rabbits",
	"owl",
	"owls",
	"horse",
	"horses",
	"cow",
	"cows",
	"sheep",
	"sheep",
	"pig",
	"pigs",
	"chicken",
	"chickens",
	"duck",
	"ducks",
	"goat",
	"goats",
	"deer",
	"deer",
	"fox",
	"foxes",
	"wolf",
	"wolves",
	"rhinoceros",
	"rhinoceroses",
	"whale",
	"whales",
	"dolphin",
	"dolphins",
	"shark",
	"sharks",
	"octopus",
	"octopuses",
	"seal",
	"seals",
	"polar bear",
	"polar bears",
	"kangaroo",
	"kangaroos",
	"hippopotamus",
	"hippopotamuses",
	"crocodile",
	"crocodiles",
	"platypus",
	"platypuses",
	"koala",
	"koalas",
	"sloth",
	"sloths",
	"chameleon",
	"chameleons",
	"lizard",
	"lizards",
	"camel",
	"camels",
	"bat",
	"bats",
	"parrot",
	"parrots",
	"panda",
	"pandas",
	"jaguar",
	"jaguars",
	"hamster",
	"hamsters",
	"hedgehog",
	"hedgehogs",
	"crow",
	"crows",
	"eagle",
	"eagles",
	"falcon",
	"falcons",
	"gazelle",
	"gazelles",
	"jaguarundi",
	"jaguarundis",
	"mongoose",
	"mongooses",
	"otter",
	"otters",
	"puma",
	"pumas",
	"red panda",
	"red pandas",
	"turtle",
	"turtles",
	"walrus",
	"walruses",
	"whale shark",
	"whale sharks",
	"yak",
	"yaks",
	"blue jay",
	"blue jays",
	"crab",
	"crabs",
]
export{animalWords}
const animalDescription = [
	"грациозно",
	"храбро",
	"жадно",
	"лениво",
	"игриво",
	"мило",
	"спокойно",
	"объемисто",
	"проникновенно",
	"хитро",
	"застенчиво",
	"горделиво",
	"беспокойно",
	"доброжелательно",
	"бесстрашно",
	"выразительно",
	"элегантно",
	"яростно",
	"по-братски",
	"весело",
]
export{animalDescription}
const animalQuestions = [
	"Как называется самое ядовитое животное на планете?",
	"Какой группы животных не существует на Антарктиде?",
	"Какую цветовую гамму видят пчелы?",
	"Какой вес является рекордным для слона?",
	"Какое животное не способно вырабатывать собственную температуру?",
	"В каком месте тела у паука находятся его легкие?",
	"Какого цвета кровь у голубей?",
	"Сколько желудков у коровы?",
	"Какие животные спят больше всего на свете?",
	"Сколько челюстей у пчелы?",
	"Какого цвета язык у жирафов?",
	"Сколько зубов у дельфина?",
	"Какие животные не спят во время зимней спячки?",
]
export{animalQuestions}


//жанры музыки и отношение к ним
const musicGenres = [
	"рок", "рока", "року", "роком", "роке",
	"поп", "попа", "попу", "попом", "попе",
	"джаз", "джаза", "джазу", "джазом", "джазе",
	"классика", "классики", "классике", "классику", "классикой",
	"ран", "рана", "рану", "раном", "ране",
	"метал", "метала", "металу", "металом", "метале",
	"электроника", "электроники", "электронике", "электронику", "электроникой",
	"панк", "панка", "панку", "панком", "панке",
	"блюз", "блюза", "блюзу", "блюзом", "блюзе",
	"регги",
	"ска",
	"фолк", "фолка", "фолку", "фолком", "фолке",
	"инди",
	"диско",
	"кантри",
	"реггетон", "реггетона", "реггетону", "реггетоном", "реггетоне",
	"рэп", "рэпа", "рэпу", "рэпом"," рэпе",
	"реп", "репа", "репу", "репом"," репе",
	"гранж", "гранжа", "гранжу", "гранжем", "гранже",
	"индастриал", "индастриала", "индастриалу", "индастриалом", "индастриале",
	"панк", "панка", "панку", "панком", "панке",
	"музыка", "музыки", "музыке", "музыку", "музыкой",
	"транс", "транса", "трансу", "трансом", "трансе",
	"лича", "личи", "личу", "личым", "личе",
	"хаус", "хауса", "хаусу", "хаусом", "хаусе",
	"прогрессив", "прогрессива", "прогрессиву", "прогрессивом", "прогрессиве",
	"мэйнстрим", "мэйнстрима", "мэйнстриму", "мэйнстримом", "мэйнстриме",
	"альтернатива", "альтернативы", "альтернативе", "альтернативу", "альтернативой",
	"диско",
	"техно", 
	"шансон", "шансона", "шансону", "шансоном", "шансоне",
	"эмбиент", "эмбиента", "эмбиенту", "эмбиентом", "эмбиенте",
	"соул", "соула", "соулу", "соулом", "соуле",
	"джунглист", "джунглиста", "джунглисту", "джунглистом", "джунглисте",
	"басс", "басса", "бассу", "бассом", "бассе",
	"фьюжн", "фьюжна", "фьюжну", "фьюжном", "фьюжне",
	"готика", "готики", "готике", "готику", "готикой",
	"диссонанс", "диссонанса", "диссонансу", "диссонансом", "диссонансе",
	"дабстеп", "дабстепа", "дабстепу", "дабстепом", "дабстепе",
	"рейв", "рейва", "рейву", "рейвом", "рейве",
	"трип",
	"нойз",
	"реггафьюжн", "реггафьюжна", "реггафьюжну", "реггафьюжном", "реггафьюжне",
	"эмо",

	"alternative",
	"blues",
	"country",
	"dance",
	"electronic",
	"folk",
	"gospel",
	"hiphop",
	"indie",
	"jazz",
	"kpop",
	"metal",
	"newwave",
	"opera",
	"pop",
	"rap",
	"reggae",
	"salsa",
	"techno",
	"underground",
	"vocal",
	"world",
	"xylophone",
	"zydeco",
	"classical",
	"disco",
	"funk",
	"garage",
	"hardrock",
	"instrumental",
	"jungle",
	"klezmer",
	"motown",
	"orchestral",
	"punk",
	"raggaeton",
	"samba",
	"triphop",
	"urban",
	"waltz",
	"yodeling",
	"zydeco",
	"ambient",
	"breakbeat",
	"cabaret",
	"deathmetal",
	"emo",
	"fusion",
	"grunge",
	"heavymetal",
	"industrial",
	"jpop",
	"krishnacore",
	"lounge",
	"mambo",
	"nujazz",
	"psychedelic",
	"rockabilly",
	"spacerock",
	"tango",
	"trance",
	"vaporwave",
	"yéyé",
	"zouk",
	"afrobeat",
	"bhangra",
	"celtic",
	"doommetal",
	"electroswing",
	"fado",
	"grime",
	"hardcore",
	"italodisco",
	"jive",
	"kwaito",
	"lambada",
	"mathrock",
	"neosoul",
	"oi",
	"quartet",
	"rumba",
	"ska",
	"thrashmetal",
	"vikingmetal",
	"xtrabass",
	"zumba",
	"rock",
	"hyperpop",
	"chanson",
]
export{musicGenres}
const musicDescription = [
	"мелодично",
	"ритмично",
	"гармонично",
	"эмоционально",
	"ярко",
	"динамично",
	"мощно",
	"зажигательно",
	"легко",
	"виртуозно",
	"нежно",
	"сильно",
	"трогательно",
	"красиво",
	"увлекательно",
	"величественно",
	"круто",
	"меланхолично",
	"печально",
	"органично",
	"смело",
	"радостно",
	"умеренно",
	"непринуждённо",
	"классно",
	"точно",
	"завораживающе",
]
export{musicDescription}
const musicQuestions = [
	"Какую музыку ты обычно слушаешь?",
	"Какое твое любимое музыкальное направление?",
	"Есть ли у тебя любимая группа или исполнитель?",
	"Сколько времени в день ты тратишь на прослушивание музыки?",
	"Какой альбом тебе нравится больше всего?",
	"Какую роль играет музыка в твоей жизни?",
	"Тебе нравится музыкальный театр?",
	"Как ты относишься к ремиксам?",
	"Какая музыка помогает тебе сконцентрироваться?",
	"Сколько раз ты был на концертах?",
	"Какие музыкальные группы тебе не нравятся?",
	"Какую музыку ты предпочитаешь слушать в дороге?",
	"Какую музыку ты слушаешь, когда тебе нужно успокоиться?",
	"Как часто ты слушаешь музыку на кухне?",
	"Какие музыкальные жанры ты считаешь необычными?",
	"Какую песню ты слушал последней?",
	"Какую музыку ты предпочитаешь слушать, когда тебе нужно вдохновиться?",
	"Какие музыкальные инструменты тебе кажутся самыми красивыми?",
	"Как часто ты поешь в душе?",
	"Какую музыку ты слушаешь, когда тебе нужно получить заряд бодрости?",
]
export{musicQuestions}


//лингвистика
const langNames = [
	"english", "английский","английское","английская","английские","английского","английской","английских","английскому","английским","английскую","английскою","английском","английски",
	"spanish", 
	"french", 
	"german", 
	"chinese", 
	"arabic", 
	"hindi", 
	"portuguese", 
	"japanese", 
	"italian", 
	"korean", 
	"turkish", 
	"dutch", 
	"polish", 
	"swedish", 
	"vietnamese", 
	"indonesian", 
	"greek", 
	"thai", 
	"finnish", 
	"hebrew", 
	"czech", 
	"norwegian", 
	"danish", 
	"hungarian", 
	"romanian", 
	"ukrainian", 
	"bulgarian", 
	"croatian", 
	"slovak", 
	"serbian", 
	"malay", 
	"kurdish", 
	"bengali", 
	"tagalog", 
	"urdu", 
	"lithuanian", 
	"latvian", 
	"estonian", 
	"georgian", 
	"armenian",
	"icelandic", 
	"mongolian", 
	"sinhala", 
	"tamil", 
	"telugu", 
	"kannada", 
	"gujarati", 
	"marathi", 
	"punjabi", 
	"burmese", 
	"khmer", 
	"maltese", 
	"macedonian", 
	"albanian", 
	"bosnian", 
	"slovenian", 
	"kazakh", 
	"turkmen", 
	"azerbaijani", 
	"uzbek", 
	"tajik", 
	"moldovan", 
	"kyrghyz", 
	"tibetan", 
	"nepali", 
	"tibetan", 
	"aymara", 
	"quechua", 
	"guarani", 
	"fijian", 
	"tongan", 
	"samoan", 
	"maori", 
	"bislama", 
	"marshallese", 
	"palauan", 
	"yapese", 
	"chamorro", 
	"chuukese", 
	"kiribati", 
	"nauruan", 
	"tuvaluan", 
	"tokelauan", 
	"niuean", 
	"tahitian", 
	"rapanui", 
	"rarotongan", 
	"pitkern", 
	"hawaiian", 
	"flemish",
	"сhechen",
	"чеченский",
	
]
export{langNames}
const langNamesMessages = [
	"Smurf, I don't speak this language, but I wish I could learn it.",
	"Smurphy smurf smurf, but smurfity smurf smurf smurf.",
	"I'm a smurf, not a linguist, but I smurf this language interests me.",
	"Smurf-a-linguist? Not me. But curious? Definitely!",
	"Smurf-tastic! Another language I don't speak but wish I did.",
	"Not fluent, but definitely intrigued by this smurfing language.",
	"Smurf-a-dabble in this language? Maybe someday.",
	"Smurf me, I can't talk the talk in this language, but I'm curious.",
	"New language? No speaking smurfy for me, but I smurf the desire to learn.",
	"Smurf and smurf, I'm not a polyglot, but this language piques my interest.",
	"Nope, can't smurf in this language, but I wish I could!",
	"This language is smurfing alien to me, but I wish it wasn't!",
	"Don't speak this language, but a smurf can dream, right?",
	"I may not smurf this language, but it's on my smurf list to learn.",
	"I'm a smurf of few words in this language, but I'm keen to learn more.",
	"Speaka no linguistini, but I wanta learna this language.",
	"Smurf's up! I don't speak this language, but maybe one day.",
	"Smurf it! I don't speak this language, but wish I could.",
	"Smurfity smurf! I'm not fluent in this language, but it's on my smurf wishlist.",
	"No smurfing way I speak this language, but a smurf can dream.",
	"Smurf me sideways, this language is foreign to me, but intriguing.",
	"Not a smurfy speaker of this language, but someday, maybe.",
	"This language is a mystery to me, but a smurf can dream, right?",
	"Smurf it all! I'm not versed in this language, but I wish I was.",
	"Can't speak this language, but it's on my smurf radar.",
	"I may not speak this language, but the smurfiness is strong in me.",
	"Smurf my words, I don't speak this language, but I wish I did.",
	"Smurfing elusive this language may be, but I'm up for the challenge.",
	"I don't smurf the lingo, but I'm game to learn.",
	"No smurf in this language, but a smurf can dream, can't they?",
	"Smurf smurf no smurf, but the desire to learn is there.",
	"This language is a mystery to me, but I'd love to crack the code.",
	"Can't smurf my way through this language, but I sure wish I could.",
	"I'm smurfing clueless in this language, but I'm open to learning.",
	"Not a smurfy speaker of this language, but maybe one day.",
	"Speaking in tongues is not my forte, but learning new languages is.",
	"I may not speak this language, but the curiosity is smurf-strong in me.",
	"I don't smurf in this language, but I'm eager to smurf.",
	"Smurfity smurf, this language is beyond me, but I'm up for the challenge.",
	"I may not speak this language, but I'm smurfing interested.",
	"Smurfity smurf smurf, I don't speak this language, but I wish I did.",
	"I'm not a polyglot, but I'm intrigued by this language.",
	"Not fluent, but definitely keen on this language.",
	"Smurf my words, this language is foreign to me, but I wish it wasn't.",
	"I may not speak the language, but I'm all ears to learn it.",
	"No smurfing way I speak this language, but I'm smurfing interested.",
	"Smurf me sideways! I don't speak this language, but I'd love to.",
	"Smurfing heck, I don't speak this language, but I wish I did.",
	"Smurf me, this language isn't in my repertoire, but I'd love to add it.",
	"Can't smurf my way through this language, but I'm smurfing curious.",
	"I don't smurf in this language, but I'm smurfing interested.",
	"Can't smurf this language, but I'm all ears to learn it."
]
export{langNamesMessages}
const langNamesQuestions = [
	"Why do humans learn so many languages?",
	"What makes learning a new language so exciting?",
	"How do people decide which language to learn?",
	"What is the best way to learn a new language?",
	"Why do some people find language learning difficult?",
	"What role does culture play in language learning?",
	"Is it important to preserve endangered languages?",
	"How does learning a new language benefit the brain?",
	"What is the connection between language and identity?",
	"Why do some people have a natural talent for languages?",
	"Is it possible to become fluent in a language without living in a country where it's spoken?",
	"What motivates people to learn languages?",
	"How do languages evolve over time?",
	"What challenges do people face when learning a new language?",
	"Can technology make language learning easier?",
	"What impact does speaking multiple languages have on cognitive abilities?",
	"How do children learn language differently from adults?",
	"Why are some languages considered more difficult to learn than others?",
	"What is the importance of language diversity?",
	"How do language barriers affect communication?",
	"Why is it beneficial to be multilingual in today's world?",
	"Is language learning a lifelong process?",
	"What are the benefits of learning a second language from a young age?",
	"How do emotions impact language learning?",
	"What are the most effective language learning techniques?",
	"Why do some languages have more speakers than others?",
	"What are the advantages of being bilingual?",
	"How do languages influence each other?",
	"Why do accents vary from region to region?",
	"What is lost when a language becomes extinct?",
	"How do translators and interpreters bridge language barriers?",
	"What are the challenges of teaching a language to non-native speakers?",
	"Why do people enjoy learning languages as a hobby?",
	"What role do gestures and body language play in communication?",
	"How do dialects develop within a language?",
	"Why do some languages have more complex grammar rules?",
	"What impact does language have on thought processes?",
	"Is sign language considered a universal language?",
	"How do languages reflect societal values and norms?",
	"Why do some languages have unique writing systems?",
	"What is the role of language in preserving cultural traditions?",
	"How do language differences influence global interactions?",
	"Why do some languages have more words for certain concepts than others?",
	"What can studying ancient languages teach us about history?",
	"How do language policies shape education and government?",
	"Why do some languages borrow words from other languages?"
]
export{langNamesQuestions}

const langRussian = [
	"русский","русское","русская","русские",
	"русского","русской","русских",
	"русскому","русским","русскую",
	"русскою","русскими","русском",
	"русски",
	"russian","рашн","рашен",
]
export{langRussian}
