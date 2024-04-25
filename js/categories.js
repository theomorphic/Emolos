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
	"Какую музыку ты сйчас слушаешь?",
	"А ты еще играешь на гитаре или сдулся?",
	"Что для тебя является главным критерием для хорошей музыки?",
	"Какую песню ты чаще всего слушаешь в последнее время?",
	"Тебе нравится читать реп?",
	"Как ты относишься к музыкальным наградам и премиям?",
	"Как ты относишься к музыкальным каверам?",
	"Какую песню ты бы исполнил на караоке, а?",
	"Слушаешь французский реп?",
	"Тебе интересно изучать историю музыкальных жанров?",
	"Как ты относишься к музыкальной индустрии и коммерции в музыке?",
	"Каким исполнителем ты мог бы стать, если бы у тебя был талант?",
	"Сколько времени ты ежедневно слушаешь музыку?",
	"Ты предпочитаешь живые выступления или записанные треки?",
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
const langRussian = [
	"русский","русское","русская","русские",
	"русского","русской","русских",
	"русскому","русским","русскую",
	"русскою","русскими","русском",
	"русски",
	"russian","рашн","рашен",
]
export{langRussian}
