// ACNH Build Challenge Data
// Generated from housewares.csv and miscellaneous.csv

const indoorItems = [
  "ABD",
  "ACNH Nintendo Switch",
  "Aquarius urn",
  "Aries rocking chair",
  "Baby bear",
  "Baby panda",
  "Brake Tapper",
  "Bunny Day arch",
  "Bunny Day basket",
  "Bunny Day bed",
  "Bunny Day candy",
  "Bunny Day festive balloons",
  "Bunny Day lamp",
  "Bunny Day merry balloons",
  "Bunny Day stool",
  "Bunny Day table",
  "Bunny Day vanity",
  "Bunny Day wardrobe",
  "Cancer table",
  "Capricorn ornament",
  "Casablanca lilies",
  "Chinese-style meal",
  "Cinnamoroll sofa",
  "Cinnamoroll stool",
  "Cinnamoroll table",
  "Cinnamoroll tray",
  "DAL model plane",
  "DAL mug",
  "DIY workbench",
  "DJ's turntable",
  "Dala horse",
  "EKG machine",
  "Gemini closet",
  "Hello Kitty bed",
  "Hello Kitty chair",
  "Hello Kitty drawers",
  "Hello Kitty planter",
  "Hello Kitty table",
  "IV drip",
  "Japanese dresser",
  "Japanese-style meal",
  "Kerokerokeroppi doll",
  "Kerokerokeroppi snack",
  "Kerokerokeroppi tray",
  "Kiki & Lala bed",
  "Kiki & Lala cloud maker",
  "Kiki & Lala sofa",
  "Kiki & Lala table",
  "LCD TV (20 in.)",
  "LCD TV (50 in.)",
  "Libra scale",
  "Luna's bed",
  "M. sunset moth model",
  "Mama bear",
  "Mama panda",
  "Market Place decoration",
  "Mom's candle set",
  "Mom's cushion",
  "Mom's homemade cake",
  "Mom's pen stand",
  "Mom's plushie",
  "Mom's tea cozy",
  "Mom's tissue box",
  "Moroccan footrest",
  "Moroccan sofa",
  "Moroccan tray table",
  "My Melody bed",
  "My Melody chair",
  "My Melody dresser",
  "My Melody table",
  "Napoleonfish model",
  "New Year's noodles",
  "Newton's cradle",
  "Nintendo Switch",
  "Nintendo Switch Lite",
  "Nook Inc. cushion",
  "Nook Inc. toilet paper",
  "Nook Inc. yoga mat",
  "Nordic chair",
  "Nordic low table",
  "Nordic lowboard",
  "Nordic shelves",
  "Nordic sofa",
  "Nordic table",
  "OK Motors sign",
  "Olivier salad",
  "PA speaker",
  "Papa bear",
  "Papa panda",
  "Paradise Planning candles",
  "Paradise Planning cushion",
  "Paradise Planning mug",
  "Paradise Planning photo",
  "Paradise Planning planter",
  "Paradise Planning tissues",
  "Pisces lamp",
  "Pocket modern camper",
  "Pocket vintage camper",
  "Pompompurin bed",
  "Pompompurin chair",
  "Pompompurin pudding",
  "Pompompurin rack",
  "Pompompurin table",
  "R. Brooke's birdwing model",
  "Reese & Cyrus photo plate",
  "Resetti model",
  "Ring-Con",
  "Roost sablé cookie",
  "Rover's briefcase",
  "SLR camera",
  "Scorpio lamp",
  "TV camera",
  "TV with VCR",
  "Taurus bathtub",
  "Turkey Day casserole",
  "Turkey Day chair",
  "Turkey Day decorations",
  "Turkey Day hearth",
  "Turkey Day table",
  "Turkey Day table setting",
  "Turkey Day wheat decor",
  "Virgo harp",
  "Yule log",
  "Yut Nori",
  "accessories stand",
  "acoustic guitar",
  "afternoon-tea set",
  "agrias butterfly model",
  "aji fry",
  "aloha-edition carrying case",
  "alto saxophone",
  "aluminum briefcase",
  "amazing machine",
  "amp",
  "analog kitchen scale",
  "anatomical model",
  "anchoas al ajillo",
  "anchovy model",
  "angelfish model",
  "ant farm",
  "ant model",
  "anthurium plant",
  "antique bed",
  "antique bureau",
  "antique cash register",
  "antique chair",
  "antique clock",
  "antique console table",
  "antique map",
  "antique mini table",
  "antique radio",
  "antique table",
  "antique vanity",
  "antique wardrobe",
  "apple chair",
  "apple jam",
  "apple jelly",
  "apple pie",
  "apple smoothie",
  "apple tart",
  "arapaima model",
  "arcade combat game",
  "arcade fighting game",
  "arcade mahjong game",
  "arcade seat",
  "arched reception counter",
  "aroma pot",
  "arowana model",
  "artsy chair",
  "artsy table",
  "automatic washer",
  "baby bed",
  "baby chair",
  "backlit sign",
  "bagworm model",
  "baked potatoes",
  "bamboo basket",
  "bamboo candleholder",
  "bamboo doll",
  "bamboo drum",
  "bamboo floor lamp",
  "bamboo grass",
  "bamboo lunch box",
  "bamboo partition",
  "bamboo shelf",
  "bamboo speaker",
  "bamboo sphere",
  "bamboo-shoot lamp",
  "bamboo-shoot soup",
  "banker's lamp",
  "barbell",
  "barred knifejaw model",
  "barred-knifejaw carpaccio",
  "barreleye model",
  "basic school chair",
  "basic teacher's desk",
  "bath bucket",
  "bath stool",
  "bathroom sink",
  "bathroom stall",
  "bell cricket model",
  "berliner",
  "betta model",
  "bidet",
  "billiard table",
  "bingo wheel",
  "birdcage",
  "birthday cake",
  "birthday candles",
  "birthday cupcake",
  "birthday sign",
  "birthday table",
  "biryani",
  "bitterling model",
  "black bass model",
  "blood-orange juice",
  "blossom lantern",
  "blowfish model",
  "blue corner",
  "blue marlin model",
  "blue weevil beetle model",
  "bluegill model",
  "board game",
  "book",
  "book stands",
  "bottled beverage",
  "bottled ship",
  "bow",
  "box corner sofa",
  "box sofa",
  "box-shaped seat",
  "boxy stool",
  "bread",
  "bread gratin",
  "brine-shrimp aquarium",
  "bronze HHA trophy",
  "bronze bug trophy",
  "bronze fish trophy",
  "brown cicada model",
  "brown-sugar cupcakes",
  "brown-sugar pound cake",
  "bunk bed",
  "busing station",
  "butterfly fish model",
  "cacao tree",
  "cake salé",
  "campsite sign",
  "candle",
  "candy machine",
  "cans",
  "caprese sandwich set",
  "card tower",
  "cardboard bed",
  "cardboard box",
  "cardboard chair",
  "cardboard sofa",
  "cardboard table",
  "cards",
  "carnations",
  "carp model",
  "carp on a cutting board",
  "carpaccio di capesante",
  "carpaccio di marlin blu",
  "carpaccio di salmone",
  "carrot bagel sandwich",
  "carrot cake",
  "carrot juice",
  "carrot potage",
  "carrot scones",
  "carrot-tops curry",
  "carton beverage",
  "cartoonist's set",
  "cat grass",
  "cat tower",
  "catfish model",
  "celebratory candles",
  "cello",
  "centipede model",
  "chafing dish",
  "chalkboard",
  "champion's pennant",
  "champiñones al ajillo",
  "changing room",
  "char model",
  "checkout counter",
  "cherry jam",
  "cherry jelly",
  "cherry pie",
  "cherry salmon model",
  "cherry smoothie",
  "cherry speakers",
  "cherry tart",
  "cherry-blossom branches",
  "chessboard",
  "chocolate heart",
  "cicada shell model",
  "citrus long-horned b. model",
  "clackercart",
  "clam chowder",
  "clarinet",
  "classic pitcher",
  "claw-foot tub",
  "clay furnace",
  "clipboard",
  "clothes closet",
  "clown fish model",
  "coconut cookies",
  "coconut milk",
  "coconut oil",
  "coconut pancakes",
  "coconut pudding",
  "coelacanth model",
  "coffee beans",
  "coffee cup",
  "coffee grinder",
  "coffee plant",
  "cold sleep pod",
  "colorful juice",
  "colorful wheel",
  "common bluebottle model",
  "common butterfly model",
  "compact kitchen",
  "conveyor belt",
  "cookies",
  "cooking tools",
  "cool bed",
  "cool chair",
  "cool dining table",
  "cool globe",
  "cool low table",
  "cool side table",
  "cool sofa",
  "copy machine",
  "cordless phone",
  "corner clothing rack",
  "cornucopia",
  "cosmos shower",
  "counter chair",
  "counter table",
  "covered counter",
  "crane game",
  "crawfish model",
  "cream and sugar",
  "crescent-moon chair",
  "crew member's seat",
  "cricket model",
  "crucian carp model",
  "cube light",
  "cucumber horse",
  "cup with saucer",
  "curry with rice",
  "curtain partition",
  "cushion",
  "cute DIY table",
  "cute bed",
  "cute chair",
  "cute floor lamp",
  "cute music player",
  "cute sofa",
  "cute tea table",
  "cute vanity",
  "cute wardrobe",
  "cutting board",
  "cyclommatus stag model",
  "cypress bathtub",
  "dab model",
  "dace model",
  "damselfly model",
  "darner dragonfly model",
  "dartboard",
  "decorative bottles",
  "decorative plate",
  "decoy duck",
  "deep fryer",
  "deluxe washer",
  "den chair",
  "den desk",
  "desk mirror",
  "desktop computer",
  "desktop mic",
  "dessert carrier",
  "dessert case",
  "dharma",
  "diced-salad sandwich set",
  "die",
  "digital alarm clock",
  "digital scale",
  "diner chair",
  "diner counter chair",
  "diner counter table",
  "diner dining table",
  "diner mini table",
  "diner neon sign",
  "diner sofa",
  "dinnerware",
  "dinosaur toy",
  "dish-drying rack",
  "dispenser",
  "display stand",
  "diving beetle model",
  "document stack",
  "dollhouse",
  "dolly",
  "donation box",
  "donut stool",
  "dorado model",
  "double Gloucester cheese",
  "double sofa",
  "double-door refrigerator",
  "dreamy bear toy",
  "dreamy bed",
  "dreamy rabbit toy",
  "dreamy shelves",
  "dreamy unicorn toy",
  "dress mannequin",
  "dress-up doll",
  "drone beetle model",
  "drum set",
  "dung beetle model",
  "earth-boring dung b. model",
  "effects rack",
  "eggplant cow",
  "elaborate display case",
  "elaborate kimono stand",
  "electric bass",
  "electric guitar",
  "electronics kit",
  "elegant bed",
  "elegant chair",
  "elegant console table",
  "elegant dresser",
  "elegant lamp",
  "elegant mirror",
  "elegant sofa",
  "elephant slide",
  "emperor butterfly model",
  "espresso maker",
  "essay set",
  "evening cicada model",
  "exam table",
  "examination-room desk",
  "exercise ball",
  "exercise bike",
  "extinguisher",
  "extravagant meal",
  "fan",
  "fan palm",
  "fancy bathroom vanity",
  "fancy tea set",
  "fancy violin",
  "fancy water pitcher",
  "fax machine",
  "festival zongzi",
  "festive top set",
  "festive tree",
  "film projector",
  "fine vase",
  "firefly model",
  "fireplace",
  "first-aid kit",
  "first-anniversary cake",
  "fish-and-chips",
  "fishing-rod stand",
  "flea model",
  "floor lamp",
  "floor monitor",
  "floor seat",
  "floor sign",
  "flower display case",
  "flower stand",
  "flower tabletop mirror",
  "fly model",
  "folding chair",
  "folding floor lamp",
  "foosball table",
  "football fish model",
  "forbidden altar",
  "forsythia",
  "fortune-cookie cart",
  "fortune-telling set",
  "fragrance diffuser",
  "fragrance sticks",
  "framed photo",
  "freezer",
  "french fries",
  "fresh-food trays",
  "freshwater goby model",
  "fried rice",
  "frog model",
  "froggy chair",
  "frosted cookies",
  "frosted pretzels",
  "frozen-drink machine",
  "frozen-treat set",
  "fruit basket",
  "fruit cupcakes",
  "fruit pizza",
  "fruit salad",
  "fruit scones",
  "fruit-topped pancakes",
  "frying pan",
  "full-length mirror",
  "futon",
  "futuristic meal",
  "game-show stand",
  "gaming chair",
  "gaming desk",
  "gar model",
  "gas range",
  "gear apparatus",
  "gear tower",
  "giant cicada model",
  "giant snakehead model",
  "giant stag model",
  "giant teddy bear",
  "giant trevally model",
  "giant water bug model",
  "gift pile",
  "glass holder with candle",
  "glass jar",
  "glass showcase",
  "globe",
  "glowing-moss jar",
  "glowing-moss-jar shelves",
  "gnocchi di carote",
  "gnocchi di patate",
  "gnocchi di zucca",
  "go board",
  "gold HHA trophy",
  "gold bars",
  "gold bug trophy",
  "gold fish trophy",
  "gold turtle figurine",
  "golden altar",
  "golden arowana model",
  "golden bathtub",
  "golden candlestick",
  "golden casket",
  "golden decorative plate",
  "golden dharma",
  "golden dishes",
  "golden dung beetle",
  "golden gear apparatus",
  "golden gear tower",
  "golden meter and pipes",
  "golden piggy bank",
  "golden plate armor",
  "golden samurai suit",
  "golden seat",
  "golden stag model",
  "golden toilet",
  "golden trout model",
  "golden urn",
  "golden vase",
  "golden wristwatch",
  "goldfish model",
  "golf bag",
  "grand Atlas moth model",
  "grand Q. A. birdwing model",
  "grand b. dragonfly model",
  "grand giraffe stag model",
  "grand goliath beetle model",
  "grand h. hercules model",
  "grand piano",
  "grass standee",
  "grasshopper model",
  "gratin",
  "great purple emperor model",
  "great white shark model",
  "grilled sea bass with herbs",
  "guppy model",
  "gurney",
  "hammerhead shark model",
  "hamster cage",
  "hanger rack",
  "hanging clothing rack",
  "harp",
  "heart-shaped bouquet",
  "hearth",
  "hearty ramen",
  "hedge standee",
  "hermit crab model",
  "hi-fi stereo",
  "high chair",
  "high-end stereo",
  "hinaningyo",
  "holiday candle",
  "homework set",
  "honeybee model",
  "horizontal organizer",
  "horned atlas model",
  "horned dynastid model",
  "horned elephant model",
  "horse mackerel model",
  "hospital bed",
  "hospital screen",
  "hourglass",
  "hula doll",
  "humidifier",
  "hyacinth lamp",
  "ice-cream display",
  "iced caffè latte",
  "iced coffee",
  "iced lemon tea",
  "imperial bed",
  "imperial chest",
  "imperial dining chair",
  "imperial dining table",
  "imperial low table",
  "imperial partition",
  "imperial pot",
  "incense burner",
  "infused-water dispenser",
  "inspection equipment",
  "instant noodles",
  "iron closet",
  "iron hanger stand",
  "iron shelf",
  "iron worktable",
  "ironing board",
  "ironing set",
  "ironwood DIY workbench",
  "ironwood bed",
  "ironwood cart",
  "ironwood chair",
  "ironwood cupboard",
  "ironwood dresser",
  "ironwood kitchenette",
  "ironwood low table",
  "ironwood table",
  "jarred bamboo shoots",
  "jarred mushrooms",
  "jewel beetle model",
  "judge's bell",
  "juicy-apple TV",
  "jukebox",
  "kabu ankake",
  "kagamimochi",
  "karaoke system",
  "karei no nitsuke",
  "katana",
  "ketchup fried rice",
  "kettle",
  "kettlebell",
  "key tray",
  "kids' tent",
  "killifish model",
  "kimono stand",
  "king salmon model",
  "kitchen counter",
  "kitchen dishwasher",
  "kitchen island",
  "kitchen stove",
  "kitty litter box",
  "knife block",
  "koi model",
  "kotatsu",
  "lab chair",
  "lab-experiments set",
  "ladybug model",
  "laptop",
  "large café table",
  "large cardboard boxes",
  "large covered round table",
  "large magazine rack",
  "leaf stool",
  "lecture-hall bench",
  "lecture-hall desk",
  "left chalkboard section",
  "lighted display stand",
  "lily record player",
  "lily-pad table",
  "loach model",
  "loft bed with desk",
  "log bed",
  "log chair",
  "log decorative shelves",
  "log dining table",
  "log extra-long sofa",
  "long bathtub",
  "long folding table",
  "long locust model",
  "loom",
  "low folding table",
  "low screen",
  "lucky cat",
  "lucky gold cat",
  "luncheon plate meal",
  "magazine",
  "magazine rack",
  "magic kit",
  "mahi-mahi model",
  "makeup pouch",
  "man-faced stink bug model",
  "mantis model",
  "marigold decoration",
  "marimba",
  "matryoshka",
  "medicine chest",
  "medium cardboard boxes",
  "medium wooden partition",
  "meeting-room table",
  "melon soda",
  "merchandise table",
  "mermaid bed",
  "mermaid chair",
  "mermaid closet",
  "mermaid dresser",
  "mermaid lamp",
  "mermaid screen",
  "mermaid shelf",
  "mermaid sofa",
  "mermaid table",
  "mermaid vanity",
  "metal pot",
  "meter and pipes",
  "metronome",
  "mic stand",
  "microscope",
  "microwave",
  "midsized clothing rack",
  "migratory locust model",
  "milkshake",
  "minestrone soup",
  "mini DIY workbench",
  "mini circuit",
  "mini dharma",
  "mini fridge",
  "mini golden dharma",
  "mini-cactus set",
  "miso ramen",
  "mitten crab model",
  "mixed-fruits bagel sandwich",
  "mixed-fruits crepe",
  "mixed-fruits pie",
  "mixed-fruits sandwich",
  "mixed-fruits tart",
  "mixer",
  "miyama stag model",
  "model kit",
  "model kits",
  "modeling clay",
  "modern cash register",
  "modern hospital bed",
  "modern office chair",
  "mole cricket model",
  "monarch butterfly model",
  "monstera",
  "moon cakes",
  "mop",
  "moray eel model",
  "mosquito model",
  "moss ball",
  "moth model",
  "mountain standee",
  "mug",
  "mum cushion",
  "mushroom crepe",
  "mushroom curry",
  "mushroom pizza",
  "mushroom potage",
  "mushroom salad",
  "music stand",
  "nail-art set",
  "nanakusa gayu",
  "nearly busted radio",
  "neon tetra model",
  "neutral corner",
  "nibble fish model",
  "nigirizushi",
  "nova light",
  "nuptial ring pillow",
  "nutcracker",
  "oarfish model",
  "ocean sunfish model",
  "office cabinet",
  "office chair",
  "office desk",
  "office materials",
  "oil lamp",
  "old sewing machine",
  "old-fashioned alarm clock",
  "olive flounder model",
  "olive-flounder meunière",
  "omurice",
  "open wooden shelves",
  "open-frame kitchen",
  "operating-room cart",
  "orange end table",
  "orange jelly",
  "orange marmalade",
  "orange pie",
  "orange pound cake",
  "orange smoothie",
  "orange tart",
  "orchid mantis model",
  "organic bread",
  "ornament table lamp",
  "osechi",
  "owl clock",
  "pad krapow",
  "paint cans",
  "painting set",
  "pale chub model",
  "pancakes",
  "pansy table",
  "pants press",
  "paper kite butterfly model",
  "paper lantern",
  "paper tiger",
  "patchwork bed",
  "patchwork chair",
  "patchwork low table",
  "patchwork sofa chair",
  "peach chair",
  "peach jam",
  "peach jelly",
  "peach pie",
  "peach smoothie",
  "peach surprise box",
  "peach tart",
  "peacock butterfly model",
  "peacock chair",
  "pear bed",
  "pear jam",
  "pear jelly",
  "pear pie",
  "pear smoothie",
  "pear tart",
  "pear wardrobe",
  "pedal board",
  "pesce all'acqua pazza",
  "pet bed",
  "pet food bowl",
  "phonograph",
  "piano bench",
  "pickled veggies",
  "piggy bank",
  "pike model",
  "pilaf",
  "pile of cardboard boxes",
  "pile of cash",
  "pile of zen cushions",
  "pill bug model",
  "pinball machine",
  "piranha model",
  "pirate barrel",
  "pirate-ship cannon",
  "pirate-ship helm",
  "pirate-treasure chest",
  "pizza margherita",
  "plain cupcakes",
  "plain scones",
  "plain sink",
  "plant partition",
  "plasma ball",
  "plastic canister",
  "plastic clothing organizer",
  "plate armor",
  "plush massage chair",
  "podium",
  "poke",
  "pond smelt model",
  "pondskater model",
  "pop-eyed goldfish model",
  "pop-up book",
  "pop-up toaster",
  "popcorn snack set",
  "porcelain vase",
  "poster stand",
  "pot",
  "potato curry",
  "potato galette",
  "potato potage",
  "pound cake",
  "powder-room booth",
  "power stone",
  "premium nigirizushi",
  "pretzels",
  "pro coffee grinder",
  "pro tape recorder",
  "professional headphones",
  "project table",
  "projection screen",
  "protein shaker bottle",
  "public telephone",
  "puffer fish model",
  "pull-apart bread",
  "pull-up-bar stand",
  "pumpkin bagel sandwich",
  "pumpkin cupcakes",
  "pumpkin curry",
  "pumpkin pie",
  "pumpkin pound cake",
  "pumpkin scones",
  "pumpkin soup",
  "punching bag",
  "puppy plushie",
  "rainbow stag model",
  "rainbowfish model",
  "ranch bed",
  "ranch chair",
  "ranch cupboard",
  "ranch kitchen",
  "ranch lowboard",
  "ranch tea table",
  "ranch wardrobe",
  "ranchu goldfish model",
  "rattan armchair",
  "rattan bed",
  "rattan end table",
  "rattan low table",
  "rattan stool",
  "rattan table lamp",
  "rattan towel basket",
  "rattan vanity",
  "rattan wardrobe",
  "rattan waste bin",
  "ray model",
  "reception chair",
  "reception counter",
  "record box",
  "recycled-can thumb piano",
  "red corner",
  "red dragonfly model",
  "red snapper model",
  "refrigerator",
  "rescue mannequin",
  "retro TV",
  "retro fan",
  "retro ice-cream case",
  "retro massage chair",
  "retro stereo",
  "revolving spice rack",
  "ribbon eel model",
  "rice cooker",
  "rice grasshopper model",
  "right chalkboard section",
  "ring",
  "ring light",
  "ringtoss",
  "risotto",
  "robot arm",
  "robust cicada model",
  "rock guitar",
  "rocket lamp",
  "rocking chair",
  "rocking horse",
  "rolling cart",
  "rope partition",
  "rosalia batesi beetle model",
  "rose bed",
  "rotary phone",
  "round pillow",
  "round space heater",
  "saddled bichir model",
  "safe",
  "safety railing",
  "salad",
  "salad bar",
  "salad-stuffed tomato",
  "salade de carottes râpées",
  "salmon bagel sandwich",
  "salmon model",
  "salmon sandwich",
  "sample case",
  "sampler",
  "samurai suit",
  "sandwich plate meal",
  "sardines in oil",
  "sauna heater",
  "sautéed olive flounder",
  "savory bread",
  "saw shark model",
  "saw stag model",
  "scarab beetle model",
  "scattered papers",
  "schefflera",
  "school chair",
  "school desk",
  "school locker",
  "science pod",
  "scoreboard",
  "scorpion model",
  "scrapbook",
  "screen",
  "sea bass model",
  "sea butterfly model",
  "sea globe",
  "sea horse model",
  "sea-bass pie",
  "seafood ajillo",
  "seafood pizza",
  "seafood salad",
  "seaweed soup",
  "senmaizuke barrel",
  "server",
  "serving cart",
  "sewing machine",
  "sewing project",
  "shaded floor lamp",
  "shaved-ice maker",
  "shell music box",
  "shio ramen",
  "shoji divider",
  "shopping bag",
  "shopping basket",
  "shopping cart",
  "short file cabinet",
  "short simple panel",
  "shower booth",
  "shoyu ramen",
  "sideways pirate barrel",
  "silver HHA trophy",
  "silver bug trophy",
  "silver confetti blower",
  "silver fish trophy",
  "silver mic",
  "simple bed",
  "simple chair",
  "simple kettle",
  "simple panel",
  "simple small dresser",
  "simple sofa",
  "simple stool",
  "simple table",
  "simple vanity",
  "siphon",
  "siren",
  "skeleton",
  "sloppy bed",
  "sloppy sink",
  "sloppy sofa",
  "sloppy table",
  "small café table",
  "small cardboard boxes",
  "small clothing rack",
  "small covered round table",
  "small mannequin",
  "small vase",
  "small wooden partition",
  "snack",
  "snack bread",
  "snail model",
  "snapping turtle model",
  "snare drum",
  "snow globe",
  "soft-shelled turtle model",
  "songpyeon",
  "soup kettle",
  "spaceship control panel",
  "spaghetti carbonara",
  "spaghetti genovese",
  "spaghetti marinara",
  "spaghetti napolitan",
  "spaghetti peperoncino",
  "speed bag",
  "spider model",
  "spinning wheel",
  "spooky candy set",
  "spooky cookies",
  "spooky trick lamp",
  "square bathtub",
  "squat toilet",
  "squid model",
  "squid-ink curry",
  "squid-ink spaghetti",
  "stack of books",
  "stack of clothes",
  "stacked magazines",
  "stacked senmaizuke barrels",
  "stacked shoeboxes",
  "stacked shopping baskets",
  "stadiometer",
  "stage lights",
  "stair dresser",
  "stand mixer",
  "standard umbrella stand",
  "standing toilet",
  "star clock",
  "steamer-basket set",
  "stewpot",
  "stinkbug model",
  "stone tablet",
  "stonework kitchen",
  "store shelf",
  "stovetop espresso maker",
  "strapped books",
  "strategic meeting table",
  "strawberry soda",
  "street piano",
  "stringfish model",
  "studio spotlight",
  "study carrel",
  "study chair",
  "study desk",
  "sturdy office desk",
  "sturdy paper bag",
  "sturdy sewing box",
  "sturgeon model",
  "stylish spotlight",
  "succulent plant",
  "suckerfish model",
  "sugar crepe",
  "super-premium nigirizushi",
  "surgeonfish model",
  "surichwi tteok",
  "suspicious cauldron",
  "sweetfish model",
  "sword",
  "synthesizer",
  "system kitchen",
  "table lamp",
  "table setting",
  "table with cloth",
  "tablet device",
  "tabletop POP display",
  "tabletop festive tree",
  "tabletop record player",
  "tadpole model",
  "tall file cabinet",
  "tangled cords",
  "tangyuan",
  "tank",
  "tankless toilet",
  "tantanmen",
  "tarantula model",
  "tatami bed",
  "tea set",
  "tea table",
  "tennis table",
  "tension-pole rack",
  "terrarium",
  "thank-you Dad mug",
  "thank-you Mom mug",
  "theremin",
  "throne",
  "throwback container",
  "throwback dino screen",
  "throwback gothic mirror",
  "throwback hat table",
  "throwback mitt chair",
  "throwback race-car bed",
  "throwback rocket",
  "throwback skull radio",
  "throwback wrestling figure",
  "thumbprint jam cookies",
  "tiger beetle model",
  "tiger butterfly model",
  "tilapia model",
  "timpani drums",
  "tin robot",
  "tissue box",
  "toilet",
  "toilet-cleaning set",
  "tokonoma",
  "tomates al ajillo",
  "tomato bagel sandwich",
  "tomato curry",
  "tomato juice",
  "tomato puree",
  "tool cart",
  "tool shelf",
  "toolbox",
  "toothbrush-and-cup set",
  "touchscreen cash register",
  "toy box",
  "toy centipede",
  "toy cockroach",
  "toy duck",
  "traditional balancing toy",
  "traditional tea set",
  "train set",
  "transit seat",
  "treadmill",
  "tree standee",
  "tree's bounty lamp",
  "tree's bounty little tree",
  "trophy case",
  "trumpet",
  "tulip surprise box",
  "tuna model",
  "turnip salad",
  "twelve-grape dish",
  "typewriter",
  "ukulele",
  "unfinished puzzle",
  "unfolded reference sheet",
  "unglazed dish set",
  "unknown machine",
  "upright locker",
  "upright organizer",
  "upright piano",
  "upright speaker",
  "upright vacuum",
  "vacuum cleaner",
  "veggie basket",
  "veggie cookies",
  "veggie crepe",
  "veggie cupcakes",
  "veggie plate meal",
  "veggie quiche",
  "veggie sandwich",
  "veggie sandwich set",
  "vehicle cabin seat",
  "velvet stool",
  "video camera",
  "vine hanging chair",
  "vine lamp",
  "vintage TV tray",
  "vintage desk",
  "vintage dresser",
  "vintage low table",
  "vintage sofa",
  "vintage stool",
  "violin beetle model",
  "volleyball net",
  "walker cicada model",
  "walking leaf model",
  "walking stick model",
  "washbasin",
  "wasp model",
  "water bird",
  "water cooler",
  "wedding arch",
  "wedding bench",
  "wedding cake",
  "wedding candle set",
  "wedding chair",
  "wedding flower stand",
  "wedding head table",
  "wedding pipe organ",
  "wedding table",
  "wedding welcome board",
  "weight bench",
  "western-style meal",
  "whale shark model",
  "wharf roach model",
  "wheelchair",
  "whirlpool bath",
  "whiteboard",
  "whoopee cushion",
  "wide display stand",
  "windflower fan",
  "wobbling Zipper toy",
  "wood partition",
  "wood-burning stove",
  "wood-plank table",
  "wooden bookshelf",
  "wooden box",
  "wooden chair",
  "wooden chest",
  "wooden double bed",
  "wooden end table",
  "wooden fish",
  "wooden full-length mirror",
  "wooden locker",
  "wooden low table",
  "wooden mini table",
  "wooden music box",
  "wooden simple bed",
  "wooden stool",
  "wooden table",
  "wooden table mirror",
  "wooden toolbox",
  "wooden wardrobe",
  "wooden waste bin",
  "wooden-block bed",
  "wooden-block bench",
  "wooden-block bookshelf",
  "wooden-block chair",
  "wooden-block chest",
  "wooden-block stereo",
  "wooden-block stool",
  "wooden-block table",
  "wooden-block toy",
  "wristwatch",
  "yellow butterfly model",
  "yellow perch model",
  "yoga mat",
  "yucca",
  "yunomi teacup",
  "zebra turkeyfish model",
  "zen cushion",
  "zen low table",
  "zen lowboard",
  "zodiac boar figurine",
  "zodiac dog figurine",
  "zodiac dragon figurine",
  "zodiac horse figurine",
  "zodiac monkey figurine",
  "zodiac ox figurine",
  "zodiac pig figurine",
  "zodiac rabbit figurine",
  "zodiac rat figurine",
  "zodiac rooster figurine",
  "zodiac sheep figurine",
  "zodiac snake figurine",
  "zodiac tiger figurine",
  "π pie"
];

const outdoorItems = [
  "1-Up Mushroom",
  "2021 celebratory arch",
  "2022 celebratory arch",
  "? Block",
  "Bunny Day garden flag",
  "Bunny Day planter box",
  "Bunny Day topiary",
  "Bunny Day tree",
  "Cinnamoroll parasol",
  "Cinnamoroll signage",
  "Festivale balloon lamp",
  "Festivale confetti machine",
  "Festivale drum",
  "Festivale flag",
  "Festivale float",
  "Festivale garland",
  "Festivale lamp",
  "Festivale parasol",
  "Festivale stage",
  "Festivale stall",
  "Fire Flower",
  "Goal Pole",
  "Kerokerokeroppi bridge",
  "Kerokerokeroppi hallway",
  "Kerokerokeroppi lantern",
  "Mr. Flamingo",
  "Mrs. Flamingo",
  "Paradise Planning hammock",
  "RC helicopter",
  "Shell",
  "South Pole",
  "Statue of Liberty",
  "Stonehenge",
  "Super Mushroom",
  "Super Star",
  "Thwomp",
  "Tower of Pisa",
  "Toy Day sleigh",
  "Turkey Day garden stand",
  "air circulator",
  "anchor statue",
  "angled signpost",
  "artisanal bug cage",
  "asteroid",
  "astronaut suit",
  "azumaya gazebo",
  "ball",
  "ball catcher",
  "bamboo bench",
  "bamboo noodle slide",
  "bamboo stool",
  "bamboo stopblock",
  "baobab",
  "barbecue",
  "barrel",
  "baseball set",
  "basketball hoop",
  "bathtub with yuzu",
  "beach ball",
  "beach chair",
  "beach chairs with parasol",
  "beach towel",
  "beekeeper's hive",
  "big festive tree",
  "birdbath",
  "birdhouse",
  "bistro table",
  "block",
  "blossom-viewing lantern",
  "bonfire",
  "bonsai shelf",
  "bottle crate",
  "brick oven",
  "brick well",
  "bubble machine",
  "bulldozer",
  "bunny garden decoration",
  "butter churn",
  "cactus",
  "caged cart",
  "camp stove",
  "campfire",
  "campfire cookware",
  "camping cot",
  "capsule-toy machine",
  "carp banner",
  "cassette player",
  "castle gate",
  "castle tower",
  "castle wall",
  "cave",
  "cement mixer",
  "chainsaw",
  "cherry-blossom bonsai",
  "cherry-blossom pond stone",
  "cherry-blossom-petal pile",
  "climbing wall",
  "clothesline",
  "clothesline pole",
  "coconut juice",
  "coin",
  "cone",
  "construction scaffolding",
  "construction sign",
  "cooler box",
  "cotton-candy stall",
  "covered wagon",
  "creepy skeleton",
  "crewed spaceship",
  "crosswalk signal",
  "cruiser bike",
  "curved streetlight",
  "cypress plant",
  "dango",
  "decayed tree",
  "decorative pillar",
  "deer scare",
  "destinations signpost",
  "director's chair",
  "doghouse",
  "dormant volcano",
  "double-edged sword",
  "drink machine",
  "drinking fountain",
  "drying rack",
  "electric kick scooter",
  "evergreen ash",
  "excavator",
  "fence",
  "fire hydrant",
  "fire pit",
  "firewood",
  "fish container",
  "fish-drying rack",
  "flashy-flower sign",
  "flat garden rock",
  "floating block",
  "floating-biotope planter",
  "floor light",
  "flower bed",
  "flying saucer",
  "football",
  "fountain",
  "fresh cooler",
  "frozen arch",
  "frozen bed",
  "frozen chair",
  "frozen counter",
  "frozen mini snowperson",
  "frozen partition",
  "frozen pillar",
  "frozen sculpture",
  "frozen table",
  "frozen tree",
  "garbage bin",
  "garbage can",
  "garbage pail",
  "garden bench",
  "garden chair",
  "garden faucet",
  "garden gnome",
  "garden lantern",
  "garden rock",
  "garden table",
  "garden wagon",
  "gazebo",
  "giant ornament",
  "giant vine",
  "glowing-moss balloon",
  "glowing-moss boulder",
  "glowing-moss pond",
  "glowing-moss statue",
  "glowing-moss stool",
  "gold-nugget mining car",
  "golden garden bunny",
  "gong",
  "green-leaf pile",
  "greenhouse box",
  "hammock",
  "handcart",
  "handwashing area",
  "handy water cooler",
  "hay bed",
  "hose reel",
  "illuminated present",
  "illuminated reindeer",
  "illuminated snowflakes",
  "illuminated tree",
  "inflatable bird ring",
  "inflatable plaza toy",
  "inflatable sofa",
  "iron frame",
  "iron garden bench",
  "iron garden chair",
  "iron garden table",
  "jackhammer",
  "jail bars",
  "kadomatsu",
  "kettle bathtub",
  "lantern",
  "large Mushroom Platform",
  "lawn chair",
  "lawn mower",
  "leaf campfire",
  "life ring",
  "lifeguard chair",
  "lighthouse",
  "log bench",
  "log garden lounge",
  "log round table",
  "log stakes",
  "log stool",
  "lunar lander",
  "lunar rover",
  "luxury car",
  "manhole cover",
  "maple-leaf pond stone",
  "maypole",
  "medieval building side",
  "menu chalkboard",
  "metal can",
  "metal-and-wood chair",
  "metal-and-wood table",
  "milk can",
  "minicar",
  "mining car",
  "moai statue",
  "mochi pestle",
  "monster statue",
  "moon",
  "mossy garden rock",
  "mountain bike",
  "mush lamp",
  "mush log",
  "mush low stool",
  "mush parasol",
  "mush partition",
  "mush table",
  "natural garden chair",
  "natural garden table",
  "natural square table",
  "nuptial bell",
  "oil barrel",
  "oil-barrel bathtub",
  "old-fashioned washtub",
  "ornament garland",
  "ornament tree",
  "outdoor air conditioner",
  "outdoor bath",
  "outdoor bench",
  "outdoor folding chair",
  "outdoor folding table",
  "outdoor generator",
  "outdoor kitchen",
  "outdoor picnic set",
  "outdoor table",
  "pagoda",
  "palm-tree lamp",
  "parabolic antenna",
  "park clock",
  "park fountain",
  "pergola",
  "phone box",
  "picnic basket",
  "pile of leaves",
  "pine bonsai tree",
  "pine tree",
  "pipe",
  "plain party-lights arch",
  "plain wooden shop sign",
  "plastic bench",
  "plastic pool",
  "playground gym",
  "plaza arch",
  "plaza balloon wagon",
  "plaza bench",
  "plaza clock",
  "plaza ferris wheel",
  "plaza game stand",
  "plaza merry-go-round",
  "plaza teacup ride",
  "plaza train",
  "pond stone",
  "pool",
  "poolside bed",
  "popcorn machine",
  "portable radio",
  "portable record player",
  "portable toilet",
  "potted starter plants",
  "public bench",
  "pyramid",
  "raccoon figurine",
  "recycled-paper bundle",
  "red-leaf pile",
  "retro gas pump",
  "retro transportation stop",
  "robot hero",
  "rocket",
  "rodeo-style springy ride-on",
  "round streetlight",
  "round topiary",
  "ruined arch",
  "ruined broken pillar",
  "ruined decorated pillar",
  "ruined seat",
  "safety barrier",
  "sand castle",
  "sandbox",
  "satellite",
  "scarecrow",
  "scooter",
  "shell arch",
  "shell bed",
  "shell fountain",
  "shell lamp",
  "shell partition",
  "shell speaker",
  "shell stool",
  "shell table",
  "signpost",
  "silo",
  "simple DIY workbench",
  "simple well",
  "skateboard",
  "ski rack",
  "sleeping bag",
  "sleigh",
  "small LED display",
  "small Mushroom Platform",
  "smoker",
  "snack machine",
  "soccer goal",
  "soft-serve lamp",
  "solar panel",
  "space shuttle",
  "sphinx",
  "spooky arch",
  "spooky carriage",
  "spooky chair",
  "spooky lantern",
  "spooky lantern set",
  "spooky scarecrow",
  "spooky standing lamp",
  "spooky table",
  "spooky table setting",
  "spooky tower",
  "spooky tree",
  "spray can",
  "springy ride-on",
  "stacked bags",
  "stacked bottle crates",
  "stacked fish containers",
  "stadium light",
  "stage flame machine",
  "stall",
  "standing electric sign",
  "standing shop sign",
  "steamroller",
  "steel fence",
  "steel trash can",
  "stepladder",
  "stone arch",
  "stone lion-dog",
  "stone stool",
  "stone table",
  "storage shed",
  "storefront",
  "street lamp with banners",
  "street organ",
  "streetlamp",
  "stroller",
  "surfboard",
  "swinging bench",
  "tall garden rock",
  "tall lantern",
  "tape deck",
  "telescope",
  "termite mound",
  "three-tiered snowperson",
  "tiki torch",
  "tin bucket",
  "tiny library",
  "tire stack",
  "tire toy",
  "titan arum",
  "torii",
  "tourist telescope",
  "tractor",
  "trash bags",
  "tree's bounty arch",
  "tree's bounty big tree",
  "triangular topiary",
  "tricycle",
  "truck",
  "utility pole",
  "utility sink",
  "utility wagon",
  "vertical banner",
  "vine bench",
  "water pump",
  "wave breaker",
  "western-style stone",
  "wheat field",
  "wild log bench",
  "wind turbine",
  "windmill",
  "winnowing machine",
  "wooden bucket",
  "wooden field sign",
  "wooden storage shed",
  "yacht",
  "yellow-leaf pile",
  "zen bench",
  "zen-style stone"
];

const itemCategories = {
  "acoustic guitar": "musicalinstrument",
  "alto saxophone": "musicalinstrument",
  "antique clock": "clock",
  "antique vanity": "dresser",
  "automatic washer": "appliance",
  "bamboo floor lamp": "lighting",
  "bamboo speaker": "audio",
  "birdcage": "pet",
  "blossom-viewing lantern": "lighting",
  "bonfire": "ac",
  "bonsai shelf": "plant",
  "bunny day planter box": "plant",
  "bunny day topiary": "plant",
  "bunny day vanity": "dresser",
  "busing station": "trash",
  "cacao tree": "plant",
  "campfire": "ac",
  "cello": "musicalinstrument",
  "cherry-blossom branches": "plant",
  "clarinet": "musicalinstrument",
  "clay furnace": "kitchen",
  "coffee plant": "plant",
  "compact kitchen": "kitchen",
  "curved streetlight": "lighting",
  "cute floor lamp": "lighting",
  "cute vanity": "dresser",
  "cypress plant": "plant",
  "deluxe washer": "appliance",
  "digital scale": "appliance",
  "dj's turntable": "audio",
  "double-door refrigerator": "appliance",
  "drum set": "musicalinstrument",
  "electric bass": "musicalinstrument",
  "electric guitar": "musicalinstrument",
  "fan": "ac",
  "fan palm": "plant",
  "fancy bathroom vanity": "dresser",
  "festivale balloon lamp": "lighting",
  "fire pit": "ac",
  "fireplace": "ac",
  "floor lamp": "lighting",
  "floor light": "lighting",
  "flower stand": "plant",
  "folding floor lamp": "lighting",
  "forsythia": "plant",
  "freezer": "appliance",
  "full-length mirror": "dresser",
  "garbage bin": "trash",
  "garbage can": "trash",
  "garbage pail": "trash",
  "garden lantern": "lighting",
  "giant teddy bear": "doll",
  "grand piano": "musicalinstrument",
  "harp": "musicalinstrument",
  "hi-fi stereo": "audio",
  "high-end stereo": "audio",
  "ironing board": "appliance",
  "ironwood kitchenette": "kitchen",
  "juicy-apple tv": "tv",
  "jukebox": "audio",
  "karaoke system": "audio",
  "kitchen island": "kitchen",
  "kitchen stove": "kitchen",
  "lily record player": "audio",
  "mama bear": "doll",
  "mama panda": "doll",
  "marimba": "musicalinstrument",
  "mermaid lamp": "lighting",
  "mermaid vanity": "dresser",
  "mini fridge": "appliance",
  "monstera": "plant",
  "mr. flamingo": "doll",
  "mrs. flamingo": "doll",
  "mush lamp": "lighting",
  "my melody dresser": "dresser",
  "open-frame kitchen": "kitchen",
  "outdoor air conditioner": "ac",
  "outdoor kitchen": "kitchen",
  "palm-tree lamp": "lighting",
  "pants press": "appliance",
  "papa bear": "doll",
  "papa panda": "doll",
  "paper lantern": "lighting",
  "park clock": "clock",
  "pisces lamp": "lighting",
  "plaza clock": "clock",
  "powder-room booth": "dresser",
  "projection screen": "tv",
  "raccoon figurine": "doll",
  "ranch kitchen": "kitchen",
  "rattan vanity": "dresser",
  "rattan waste bin": "trash",
  "rc helicopter": "smallgoods",
  "refrigerator": "appliance",
  "retro fan": "ac",
  "retro stereo": "audio",
  "retro tv": "tv",
  "rock guitar": "musicalinstrument",
  "rocket lamp": "lighting",
  "round space heater": "ac",
  "round streetlight": "lighting",
  "sauna heater": "ac",
  "schefflera": "plant",
  "shaded floor lamp": "lighting",
  "simple vanity": "dresser",
  "snare drum": "musicalinstrument",
  "soft-serve lamp": "lighting",
  "steel trash can": "trash",
  "stonework kitchen": "kitchen",
  "street piano": "musicalinstrument",
  "streetlamp": "lighting",
  "studio spotlight": "lighting",
  "stylish spotlight": "lighting",
  "synthesizer": "musicalinstrument",
  "system kitchen": "kitchen",
  "throwback race-car bed": "smallgoods",
  "timpani drums": "musicalinstrument",
  "titan arum": "plant",
  "trumpet": "musicalinstrument",
  "turkey day hearth": "ac",
  "upright piano": "musicalinstrument",
  "upright vacuum": "appliance",
  "vacuum cleaner": "appliance",
  "video camera": "appliance",
  "virgo harp": "musicalinstrument",
  "wood-burning stove": "ac",
  "wooden full-length mirror": "dresser",
  "wooden waste bin": "trash",
  "wooden-block stereo": "audio",
  "yucca": "plant",
  "accessories stand": "smallgoods",
  "acnh nintendo switch": "appliance",
  "afternoon-tea set": "food",
  "air circulator": "ac",
  "aji fry": "food",
  "anchoas al ajillo": "food",
  "anthurium plant": "plant",
  "antique radio": "audio",
  "apple jam": "food",
  "apple jelly": "food",
  "apple pie": "food",
  "apple tart": "food",
  "aroma pot": "smallgoods",
  "baby bear": "doll",
  "baby panda": "doll",
  "baked potatoes": "food",
  "bamboo candleholder": "lighting",
  "bamboo drum": "musicalinstrument",
  "bamboo sphere": "smallgoods",
  "bamboo-shoot lamp": "lighting",
  "bamboo-shoot soup": "food",
  "banker's lamp": "lighting",
  "barred-knifejaw carpaccio": "food",
  "berliner": "food",
  "birthday cake": "food",
  "birthday candles": "lighting",
  "biryani": "food",
  "blossom lantern": "lighting",
  "bottled ship": "smallgoods",
  "bread": "food",
  "bread gratin": "food",
  "brine-shrimp aquarium": "smallgoods",
  "brown-sugar cupcakes": "food",
  "brown-sugar pound cake": "food",
  "bunny day candy": "food",
  "bunny day lamp": "lighting",
  "cake salé": "food",
  "candle": "lighting",
  "caprese sandwich set": "food",
  "carpaccio di capesante": "food",
  "carpaccio di marlin blu": "food",
  "carpaccio di salmone": "food",
  "carrot bagel sandwich": "food",
  "carrot cake": "food",
  "carrot potage": "food",
  "carrot scones": "food",
  "carrot-tops curry": "food",
  "carton beverage": "food",
  "casablanca lilies": "plant",
  "cassette player": "audio",
  "cat grass": "plant",
  "celebratory candles": "lighting",
  "chafing dish": "food",
  "champiñones al ajillo": "food",
  "cherry jam": "food",
  "cherry jelly": "food",
  "cherry pie": "food",
  "cherry speakers": "audio",
  "cherry tart": "food",
  "cherry-blossom bonsai": "plant",
  "chessboard": "smallgoods",
  "chinese-style meal": "food",
  "chocolate heart": "food",
  "clam chowder": "food",
  "coconut cookies": "food",
  "coconut juice": "smallgoods",
  "coconut oil": "food",
  "coconut pancakes": "food",
  "coconut pudding": "food",
  "cookies": "food",
  "cordless phone": "appliance",
  "cube light": "lighting",
  "cucumber horse": "smallgoods",
  "curry with rice": "food",
  "cute music player": "audio",
  "dal model plane": "smallgoods",
  "dala horse": "doll",
  "decorative bottles": "smallgoods",
  "decoy duck": "doll",
  "desk mirror": "dresser",
  "dessert carrier": "food",
  "dharma": "smallgoods",
  "diced-salad sandwich set": "food",
  "die": "smallgoods",
  "digital alarm clock": "clock",
  "dinosaur toy": "doll",
  "dolly": "doll",
  "dreamy bear toy": "doll",
  "dreamy rabbit toy": "doll",
  "dreamy unicorn toy": "doll",
  "dress-up doll": "doll",
  "eggplant cow": "smallgoods",
  "elegant lamp": "lighting",
  "extravagant meal": "food",
  "fancy tea set": "food",
  "fancy violin": "musicalinstrument",
  "festival zongzi": "food",
  "festivale drum": "musicalinstrument",
  "festivale lamp": "lighting",
  "festive top set": "smallgoods",
  "firewood": "smallgoods",
  "first-anniversary cake": "food",
  "fish-and-chips": "food",
  "floating-biotope planter": "plant",
  "flower tabletop mirror": "dresser",
  "fragrance diffuser": "appliance",
  "fragrance sticks": "smallgoods",
  "framed photo": "smallgoods",
  "french fries": "food",
  "fried rice": "food",
  "frosted cookies": "food",
  "frosted pretzels": "food",
  "frozen mini snowperson": "doll",
  "fruit cupcakes": "food",
  "fruit pizza": "food",
  "fruit salad": "food",
  "fruit scones": "food",
  "fruit-topped pancakes": "food",
  "futuristic meal": "food",
  "garden gnome": "doll",
  "glass holder with candle": "smallgoods",
  "globe": "smallgoods",
  "glowing-moss jar": "smallgoods",
  "gnocchi di carote": "food",
  "gnocchi di patate": "food",
  "gnocchi di zucca": "food",
  "gold turtle figurine": "smallgoods",
  "golden candlestick": "lighting",
  "golden piggy bank": "smallgoods",
  "golden wristwatch": "smallgoods",
  "gratin": "food",
  "grilled sea bass with herbs": "food",
  "hamster cage": "pet",
  "hearty ramen": "food",
  "hello kitty planter": "plant",
  "holiday candle": "lighting",
  "hourglass": "smallgoods",
  "hula doll": "doll",
  "humidifier": "appliance",
  "hyacinth lamp": "lighting",
  "instant noodles": "food",
  "ironing set": "appliance",
  "japanese-style meal": "food",
  "jarred bamboo shoots": "food",
  "jarred mushrooms": "food",
  "kabu ankake": "food",
  "karei no nitsuke": "food",
  "kerokerokeroppi doll": "doll",
  "kerokerokeroppi snack": "food",
  "ketchup fried rice": "food",
  "lantern": "lighting",
  "lcd tv (20 in.)": "tv",
  "lcd tv (50 in.)": "tv",
  "lucky cat": "doll",
  "lucky gold cat": "doll",
  "luncheon plate meal": "food",
  "matryoshka": "doll",
  "metronome": "musicalinstrument",
  "microwave": "appliance",
  "minestrone soup": "food",
  "mini dharma": "smallgoods",
  "mini golden dharma": "smallgoods",
  "mini-cactus set": "plant",
  "miso ramen": "food",
  "mixed-fruits bagel sandwich": "food",
  "mixed-fruits crepe": "food",
  "mixed-fruits pie": "food",
  "mixed-fruits sandwich": "food",
  "mixed-fruits tart": "food",
  "mixer": "appliance",
  "modeling clay": "smallgoods",
  "mom's candle set": "lighting",
  "mom's homemade cake": "food",
  "mom's plushie": "smallgoods",
  "moon cakes": "food",
  "moss ball": "plant",
  "mushroom crepe": "food",
  "mushroom curry": "food",
  "mushroom pizza": "food",
  "mushroom potage": "food",
  "mushroom salad": "food",
  "nanakusa gayu": "food",
  "nearly busted radio": "audio",
  "new year's noodles": "food",
  "nigirizushi": "food",
  "nintendo switch": "appliance",
  "nintendo switch lite": "appliance",
  "nova light": "lighting",
  "nutcracker": "doll",
  "old-fashioned alarm clock": "clock",
  "olive-flounder meunière": "food",
  "olivier salad": "food",
  "omurice": "food",
  "orange jelly": "food",
  "orange marmalade": "food",
  "orange pie": "food",
  "orange pound cake": "food",
  "orange tart": "food",
  "organic bread": "food",
  "ornament table lamp": "lighting",
  "osechi": "food",
  "owl clock": "clock",
  "pad krapow": "food",
  "pancakes": "food",
  "paper tiger": "doll",
  "paradise planning candles": "smallgoods",
  "paradise planning photo": "smallgoods",
  "peach jam": "food",
  "peach jelly": "food",
  "peach pie": "food",
  "peach tart": "food",
  "pear jam": "food",
  "pear jelly": "food",
  "pear pie": "food",
  "pear tart": "food",
  "pesce all'acqua pazza": "food",
  "phonograph": "audio",
  "pickled veggies": "food",
  "piggy bank": "smallgoods",
  "pilaf": "food",
  "pine bonsai tree": "plant",
  "pizza margherita": "food",
  "plain cupcakes": "food",
  "plain scones": "food",
  "plasma ball": "smallgoods",
  "pocket modern camper": "smallgoods",
  "pocket vintage camper": "smallgoods",
  "poke": "food",
  "pompompurin pudding": "food",
  "pop-up book": "smallgoods",
  "pop-up toaster": "appliance",
  "popcorn snack set": "food",
  "portable radio": "audio",
  "portable record player": "audio",
  "potato curry": "food",
  "potato galette": "food",
  "potato potage": "food",
  "pound cake": "food",
  "power stone": "smallgoods",
  "premium nigirizushi": "food",
  "pretzels": "food",
  "pro tape recorder": "audio",
  "pull-apart bread": "food",
  "pumpkin bagel sandwich": "food",
  "pumpkin cupcakes": "food",
  "pumpkin curry": "food",
  "pumpkin pie": "food",
  "pumpkin pound cake": "food",
  "pumpkin scones": "food",
  "pumpkin soup": "food",
  "puppy plushie": "doll",
  "rattan table lamp": "lighting",
  "record box": "musicalinstrument",
  "recycled-can thumb piano": "musicalinstrument",
  "resetti model": "doll",
  "rice cooker": "appliance",
  "ring": "smallgoods",
  "ring light": "lighting",
  "risotto": "food",
  "roost sablé cookie": "food",
  "rotary phone": "appliance",
  "salad": "food",
  "salad-stuffed tomato": "food",
  "salade de carottes râpées": "food",
  "salmon bagel sandwich": "food",
  "salmon sandwich": "food",
  "sandwich plate meal": "food",
  "sardines in oil": "food",
  "sautéed olive flounder": "food",
  "savory bread": "food",
  "scorpio lamp": "lighting",
  "sea globe": "smallgoods",
  "sea-bass pie": "food",
  "seafood ajillo": "food",
  "seafood pizza": "food",
  "seafood salad": "food",
  "seaweed soup": "food",
  "sewing machine": "appliance",
  "shell lamp": "lighting",
  "shell music box": "audio",
  "shell speaker": "audio",
  "shio ramen": "food",
  "shoyu ramen": "food",
  "slr camera": "smallgoods",
  "snack": "food",
  "snack bread": "food",
  "snow globe": "smallgoods",
  "songpyeon": "food",
  "spaghetti carbonara": "food",
  "spaghetti genovese": "food",
  "spaghetti marinara": "food",
  "spaghetti napolitan": "food",
  "spaghetti peperoncino": "food",
  "spooky candy set": "smallgoods",
  "spooky cookies": "food",
  "spooky lantern": "lighting",
  "squid-ink curry": "food",
  "squid-ink spaghetti": "food",
  "stack of books": "smallgoods",
  "stand mixer": "appliance",
  "star clock": "clock",
  "strapped books": "smallgoods",
  "succulent plant": "plant",
  "sugar crepe": "food",
  "super-premium nigirizushi": "food",
  "surichwi tteok": "food",
  "table lamp": "lighting",
  "tangyuan": "food",
  "tantanmen": "food",
  "tape deck": "audio",
  "terrarium": "plant",
  "throwback gothic mirror": "dresser",
  "throwback skull radio": "audio",
  "throwback wrestling figure": "doll",
  "thumbprint jam cookies": "food",
  "tin robot": "smallgoods",
  "tomates al ajillo": "food",
  "tomato bagel sandwich": "food",
  "tomato curry": "food",
  "tomato puree": "food",
  "toy duck": "smallgoods",
  "tree's bounty lamp": "lighting",
  "tree's bounty little tree": "smallgoods",
  "turkey day decorations": "smallgoods",
  "turnip salad": "food",
  "tv with vcr": "tv",
  "twelve-grape dish": "food",
  "ukulele": "musicalinstrument",
  "upright speaker": "audio",
  "veggie cookies": "food",
  "veggie crepe": "food",
  "veggie cupcakes": "food",
  "veggie plate meal": "food",
  "veggie quiche": "food",
  "veggie sandwich": "food",
  "veggie sandwich set": "food",
  "water bird": "smallgoods",
  "wedding cake": "food",
  "wedding candle set": "smallgoods",
  "western-style meal": "food",
  "windflower fan": "ac",
  "wobbling zipper toy": "doll",
  "wooden music box": "audio",
  "wooden table mirror": "dresser",
  "wristwatch": "smallgoods",
  "yule log": "food",
  "yunomi teacup": "food",
  "yut nori": "smallgoods",
  "zodiac boar figurine": "doll",
  "zodiac dog figurine": "doll",
  "zodiac dragon figurine": "doll",
  "zodiac horse figurine": "doll",
  "zodiac monkey figurine": "doll",
  "zodiac ox figurine": "doll",
  "zodiac pig figurine": "doll",
  "zodiac rabbit figurine": "doll",
  "zodiac rat figurine": "doll",
  "zodiac rooster figurine": "doll",
  "zodiac sheep figurine": "doll",
  "zodiac snake figurine": "doll",
  "zodiac tiger figurine": "doll",
  "π pie": "food"
};

const itemConcepts = {
  "? block": [
    "fancy",
    "child's room"
  ],
  "2021 celebratory arch": [
    "party"
  ],
  "2022 celebratory arch": [
    "party"
  ],
  "abd": [
    "facility",
    "city life"
  ],
  "acoustic guitar": [
    "music"
  ],
  "alto saxophone": [
    "music"
  ],
  "amazing machine": [
    "lab",
    "sci-fi"
  ],
  "amp": [
    "concert"
  ],
  "anatomical model": [
    "school",
    "lab"
  ],
  "anchor statue": [
    "ocean"
  ],
  "angled signpost": [
    "city life",
    "local"
  ],
  "antique bed": [
    "retro",
    "expensive"
  ],
  "antique bureau": [
    "retro",
    "expensive"
  ],
  "antique chair": [
    "retro",
    "expensive"
  ],
  "antique clock": [
    "retro",
    "expensive"
  ],
  "antique console table": [
    "retro",
    "expensive"
  ],
  "antique mini table": [
    "retro",
    "expensive"
  ],
  "antique table": [
    "retro",
    "expensive"
  ],
  "antique vanity": [
    "retro",
    "expensive"
  ],
  "antique wardrobe": [
    "retro",
    "expensive"
  ],
  "apple chair": [
    "fancy"
  ],
  "aquarius urn": [
    "expensive",
    "bathroom"
  ],
  "arcade combat game": [
    "arcade",
    "shop"
  ],
  "arcade fighting game": [
    "arcade",
    "shop"
  ],
  "arcade mahjong game": [
    "arcade",
    "shop"
  ],
  "arcade seat": [
    "facility",
    "arcade"
  ],
  "arched reception counter": [
    "hospital",
    "office"
  ],
  "aries rocking chair": [
    "expensive",
    "fancy"
  ],
  "artisanal bug cage": [
    "local",
    "nature"
  ],
  "artsy chair": [
    "sci-fi",
    "stylish"
  ],
  "artsy table": [
    "sci-fi",
    "stylish"
  ],
  "asteroid": [
    "space",
    "facility"
  ],
  "astronaut suit": [
    "space"
  ],
  "automatic washer": [
    "bathroom"
  ],
  "azumaya gazebo": [
    "garden",
    "harmonious"
  ],
  "baby bed": [
    "child's room"
  ],
  "baby chair": [
    "child's room"
  ],
  "ball catcher": [
    "school",
    "sports"
  ],
  "bamboo basket": [
    "harmonious"
  ],
  "bamboo bench": [
    "harmonious"
  ],
  "bamboo doll": [
    "harmonious",
    "fantasy"
  ],
  "bamboo floor lamp": [
    "harmonious"
  ],
  "bamboo grass": [
    "harmonious",
    "heritage"
  ],
  "bamboo noodle slide": [
    "harmonious",
    "garden"
  ],
  "bamboo partition": [
    "harmonious"
  ],
  "bamboo shelf": [
    "harmonious"
  ],
  "bamboo speaker": [
    "harmonious"
  ],
  "bamboo stool": [
    "harmonious"
  ],
  "bamboo stopblock": [
    "harmonious"
  ],
  "baobab": [
    "local",
    "nature"
  ],
  "barbecue": [
    "outdoors",
    "resort"
  ],
  "barbell": [
    "fitness"
  ],
  "barrel": [
    "workshop",
    "ocean"
  ],
  "basic school chair": [
    "school"
  ],
  "basic teacher's desk": [
    "school"
  ],
  "basketball hoop": [
    "sports",
    "school"
  ],
  "bath stool": [
    "public bath",
    "bathroom"
  ],
  "bathroom sink": [
    "bathroom"
  ],
  "bathroom stall": [
    "facility",
    "school"
  ],
  "bathtub with yuzu": [
    "heritage",
    "public bath"
  ],
  "beach chair": [
    "ocean",
    "resort"
  ],
  "beach chairs with parasol": [
    "ocean",
    "resort"
  ],
  "beach towel": [
    "ocean",
    "resort"
  ],
  "beekeeper's hive": [
    "garden",
    "local"
  ],
  "bidet": [
    "bathroom"
  ],
  "big festive tree": [
    "party",
    "city life"
  ],
  "billiard table": [
    "shop",
    "facility"
  ],
  "birdbath": [
    "park",
    "local"
  ],
  "birdcage": [
    "living room"
  ],
  "birdhouse": [
    "garden",
    "local"
  ],
  "birthday sign": [
    "party",
    "fancy"
  ],
  "birthday table": [
    "party",
    "fancy"
  ],
  "bistro table": [
    "café",
    "amusement park"
  ],
  "block": [
    "fancy",
    "child's room"
  ],
  "blossom-viewing lantern": [
    "harmonious",
    "garden"
  ],
  "blue corner": [
    "sports"
  ],
  "bonfire": [
    "outdoors",
    "ancient"
  ],
  "bonsai shelf": [
    "harmonious",
    "garden"
  ],
  "bow": [
    "heritage",
    "harmonious"
  ],
  "box corner sofa": [
    "restaurant",
    "hospital"
  ],
  "box sofa": [
    "restaurant",
    "hospital"
  ],
  "box-shaped seat": [
    "school",
    "workshop"
  ],
  "boxy stool": [
    "living room"
  ],
  "brake tapper": [
    "facility",
    "arcade"
  ],
  "brick oven": [
    "european",
    "restaurant"
  ],
  "brick well": [
    "garden",
    "local"
  ],
  "bubble machine": [
    "party",
    "amusement park"
  ],
  "bulldozer": [
    "construction site"
  ],
  "bunk bed": [
    "facility"
  ],
  "bunny day arch": [
    "fancy",
    "party"
  ],
  "bunny day bed": [
    "fancy"
  ],
  "bunny day festive balloons": [
    "fancy",
    "party"
  ],
  "bunny day garden flag": [
    "fancy",
    "amusement park"
  ],
  "bunny day merry balloons": [
    "fancy",
    "party"
  ],
  "bunny day planter box": [
    "fancy",
    "amusement park"
  ],
  "bunny day stool": [
    "fancy"
  ],
  "bunny day table": [
    "fancy"
  ],
  "bunny day topiary": [
    "fancy",
    "amusement park"
  ],
  "bunny day tree": [
    "fancy"
  ],
  "bunny day vanity": [
    "fancy"
  ],
  "bunny day wardrobe": [
    "fancy"
  ],
  "busing station": [
    "restaurant",
    "café"
  ],
  "butter churn": [
    "facility",
    "local"
  ],
  "cacao tree": [
    "living room"
  ],
  "cactus": [
    "local",
    "nature"
  ],
  "caged cart": [
    "supermarket",
    "workshop"
  ],
  "campfire": [
    "outdoors",
    "ancient"
  ],
  "campfire cookware": [
    "outdoors"
  ],
  "camping cot": [
    "outdoors"
  ],
  "campsite sign": [
    "outdoors",
    "local"
  ],
  "cancer table": [
    "expensive",
    "ocean"
  ],
  "candy machine": [
    "arcade",
    "restaurant"
  ],
  "capricorn ornament": [
    "expensive"
  ],
  "capsule-toy machine": [
    "restaurant",
    "arcade"
  ],
  "cardboard bed": [
    "workshop"
  ],
  "cardboard chair": [
    "workshop"
  ],
  "cardboard sofa": [
    "workshop"
  ],
  "cardboard table": [
    "workshop"
  ],
  "carp banner": [
    "garden",
    "child's room"
  ],
  "castle gate": [
    "european",
    "fantasy"
  ],
  "castle tower": [
    "european",
    "fantasy"
  ],
  "castle wall": [
    "european",
    "fantasy"
  ],
  "cat tower": [
    "living room"
  ],
  "cave": [
    "ancient",
    "fantasy"
  ],
  "cello": [
    "music",
    "expensive"
  ],
  "cement mixer": [
    "construction site"
  ],
  "chalkboard": [
    "school"
  ],
  "champion's pennant": [
    "school",
    "sports"
  ],
  "changing room": [
    "apparel shop",
    "facility"
  ],
  "checkout counter": [
    "shop",
    "supermarket"
  ],
  "cherry-blossom branches": [
    "harmonious",
    "fancy"
  ],
  "cherry-blossom pond stone": [
    "harmonious",
    "garden"
  ],
  "cherry-blossom-petal pile": [
    "harmonious",
    "fancy"
  ],
  "cinnamoroll parasol": [
    "fancy",
    "café"
  ],
  "cinnamoroll signage": [
    "fancy",
    "café"
  ],
  "cinnamoroll sofa": [
    "fancy"
  ],
  "cinnamoroll stool": [
    "fancy",
    "café"
  ],
  "cinnamoroll table": [
    "fancy",
    "café"
  ],
  "clackercart": [
    "child's room"
  ],
  "clarinet": [
    "music"
  ],
  "claw-foot tub": [
    "bathroom",
    "expensive"
  ],
  "clay furnace": [
    "kitchen",
    "retro"
  ],
  "climbing wall": [
    "fitness"
  ],
  "clothes closet": [
    "living room"
  ],
  "clothesline": [
    "garden",
    "local"
  ],
  "clothesline pole": [
    "garden",
    "city life"
  ],
  "coffee plant": [
    "café",
    "living room"
  ],
  "cold sleep pod": [
    "sci-fi",
    "space"
  ],
  "colorful wheel": [
    "party"
  ],
  "compact kitchen": [
    "kitchen",
    "café"
  ],
  "cone": [
    "construction site",
    "city life"
  ],
  "construction scaffolding": [
    "construction site"
  ],
  "construction sign": [
    "construction site",
    "city life"
  ],
  "conveyor belt": [
    "facility"
  ],
  "cool bed": [
    "stylish",
    "living room"
  ],
  "cool chair": [
    "stylish",
    "living room"
  ],
  "cool dining table": [
    "stylish",
    "living room"
  ],
  "cool low table": [
    "stylish",
    "living room"
  ],
  "cool side table": [
    "stylish",
    "living room"
  ],
  "cool sofa": [
    "stylish",
    "living room"
  ],
  "copy machine": [
    "office"
  ],
  "corner clothing rack": [
    "apparel shop"
  ],
  "cosmos shower": [
    "bathroom",
    "fancy"
  ],
  "cotton-candy stall": [
    "amusement park",
    "party"
  ],
  "counter chair": [
    "café",
    "shop"
  ],
  "counter table": [
    "café",
    "shop"
  ],
  "covered counter": [
    "café",
    "shop"
  ],
  "covered wagon": [
    "retro",
    "european"
  ],
  "crane game": [
    "arcade",
    "amusement park"
  ],
  "creepy skeleton": [
    "horror",
    "ancient"
  ],
  "crescent-moon chair": [
    "space",
    "fancy"
  ],
  "crew member's seat": [
    "sci-fi",
    "space"
  ],
  "crewed spaceship": [
    "space"
  ],
  "crosswalk signal": [
    "city life"
  ],
  "cruiser bike": [
    "city life",
    "garden"
  ],
  "curtain partition": [
    "hospital",
    "facility"
  ],
  "curved streetlight": [
    "local",
    "city life"
  ],
  "cute bed": [
    "fancy"
  ],
  "cute chair": [
    "fancy"
  ],
  "cute diy table": [
    "fancy"
  ],
  "cute floor lamp": [
    "fancy"
  ],
  "cute sofa": [
    "fancy"
  ],
  "cute tea table": [
    "fancy"
  ],
  "cute vanity": [
    "fancy"
  ],
  "cute wardrobe": [
    "fancy"
  ],
  "cypress bathtub": [
    "public bath",
    "resort"
  ],
  "cypress plant": [
    "living room",
    "café"
  ],
  "dartboard": [
    "shop",
    "arcade"
  ],
  "decayed tree": [
    "horror",
    "nature"
  ],
  "decorative pillar": [
    "city life",
    "amusement park"
  ],
  "deer scare": [
    "harmonious",
    "garden"
  ],
  "deluxe washer": [
    "bathroom"
  ],
  "den chair": [
    "den",
    "expensive"
  ],
  "den desk": [
    "den",
    "expensive"
  ],
  "dessert case": [
    "café",
    "restaurant"
  ],
  "destinations signpost": [
    "local",
    "city life"
  ],
  "digital scale": [
    "bathroom",
    "public bath"
  ],
  "diner chair": [
    "shop",
    "restaurant"
  ],
  "diner counter chair": [
    "shop",
    "restaurant"
  ],
  "diner counter table": [
    "shop",
    "restaurant"
  ],
  "diner dining table": [
    "shop",
    "restaurant"
  ],
  "diner mini table": [
    "shop",
    "restaurant"
  ],
  "diner neon sign": [
    "shop",
    "restaurant"
  ],
  "diner sofa": [
    "shop",
    "restaurant"
  ],
  "director's chair": [
    "outdoors",
    "resort"
  ],
  "display stand": [
    "facility"
  ],
  "diy workbench": [
    "workshop"
  ],
  "dj's turntable": [
    "party",
    "concert"
  ],
  "doghouse": [
    "garden"
  ],
  "donut stool": [
    "office",
    "hospital"
  ],
  "dormant volcano": [
    "local",
    "nature"
  ],
  "double sofa": [
    "living room"
  ],
  "double-door refrigerator": [
    "kitchen",
    "restaurant"
  ],
  "double-edged sword": [
    "fantasy",
    "european"
  ],
  "dreamy bed": [
    "fancy",
    "child's room"
  ],
  "dreamy shelves": [
    "fancy",
    "child's room"
  ],
  "dress mannequin": [
    "apparel shop",
    "city life"
  ],
  "drink machine": [
    "city life",
    "facility"
  ],
  "drinking fountain": [
    "park",
    "local"
  ],
  "drum set": [
    "concert"
  ],
  "drying rack": [
    "garden",
    "bathroom"
  ],
  "effects rack": [
    "concert",
    "facility"
  ],
  "ekg machine": [
    "hospital"
  ],
  "elaborate display case": [
    "shop",
    "expensive"
  ],
  "elaborate kimono stand": [
    "harmonious",
    "expensive"
  ],
  "electric bass": [
    "concert"
  ],
  "electric guitar": [
    "concert"
  ],
  "electric kick scooter": [
    "park",
    "garden"
  ],
  "elegant bed": [
    "european",
    "expensive"
  ],
  "elegant chair": [
    "european",
    "expensive"
  ],
  "elegant console table": [
    "european",
    "expensive"
  ],
  "elegant dresser": [
    "european",
    "expensive"
  ],
  "elegant mirror": [
    "european",
    "expensive"
  ],
  "elegant sofa": [
    "european",
    "expensive"
  ],
  "elephant slide": [
    "park",
    "child's room"
  ],
  "evergreen ash": [
    "city life",
    "garden"
  ],
  "exam table": [
    "hospital"
  ],
  "examination-room desk": [
    "hospital"
  ],
  "excavator": [
    "construction site"
  ],
  "exercise ball": [
    "fitness",
    "office"
  ],
  "exercise bike": [
    "fitness"
  ],
  "fan": [
    "living room",
    "child's room"
  ],
  "fan palm": [
    "living room"
  ],
  "fancy bathroom vanity": [
    "bathroom",
    "expensive"
  ],
  "fence": [
    "city life",
    "school"
  ],
  "festivale balloon lamp": [
    "party",
    "amusement park"
  ],
  "festivale flag": [
    "party",
    "amusement park"
  ],
  "festivale float": [
    "party",
    "amusement park"
  ],
  "festivale garland": [
    "party",
    "amusement park"
  ],
  "festivale parasol": [
    "party",
    "amusement park"
  ],
  "festivale stage": [
    "party",
    "amusement park"
  ],
  "festivale stall": [
    "party",
    "amusement park"
  ],
  "festive tree": [
    "party",
    "fancy"
  ],
  "fine vase": [
    "expensive",
    "living room"
  ],
  "fire hydrant": [
    "city life"
  ],
  "fire pit": [
    "outdoors"
  ],
  "fireplace": [
    "living room",
    "european"
  ],
  "fish-drying rack": [
    "ocean",
    "local"
  ],
  "fishing-rod stand": [
    "ocean",
    "living room"
  ],
  "flashy-flower sign": [
    "party",
    "city life"
  ],
  "flat garden rock": [
    "garden",
    "nature"
  ],
  "floating block": [
    "fancy",
    "child's room"
  ],
  "floor lamp": [
    "living room"
  ],
  "floor light": [
    "facility",
    "concert"
  ],
  "floor monitor": [
    "concert"
  ],
  "floor seat": [
    "harmonious",
    "retro"
  ],
  "floor sign": [
    "construction site",
    "facility"
  ],
  "flower bed": [
    "amusement park",
    "city life"
  ],
  "flower display case": [
    "shop",
    "city life"
  ],
  "flower stand": [
    "party"
  ],
  "flying saucer": [
    "space",
    "sci-fi"
  ],
  "folding chair": [
    "facility",
    "school"
  ],
  "folding floor lamp": [
    "child's room",
    "living room"
  ],
  "foosball table": [
    "arcade",
    "retro"
  ],
  "forbidden altar": [
    "ancient",
    "horror"
  ],
  "forsythia": [
    "living room",
    "garden"
  ],
  "fortune-cookie cart": [
    "amusement park",
    "city life"
  ],
  "fountain": [
    "city life",
    "amusement park"
  ],
  "freezer": [
    "kitchen",
    "workshop"
  ],
  "fresh cooler": [
    "ocean",
    "shop"
  ],
  "froggy chair": [
    "child's room",
    "fancy"
  ],
  "frozen arch": [
    "freezing cold",
    "fantasy"
  ],
  "frozen bed": [
    "freezing cold",
    "fantasy"
  ],
  "frozen chair": [
    "freezing cold",
    "fantasy"
  ],
  "frozen counter": [
    "freezing cold",
    "fantasy"
  ],
  "frozen partition": [
    "freezing cold",
    "fantasy"
  ],
  "frozen pillar": [
    "freezing cold",
    "fantasy"
  ],
  "frozen sculpture": [
    "freezing cold",
    "city life"
  ],
  "frozen table": [
    "freezing cold",
    "fantasy"
  ],
  "frozen tree": [
    "freezing cold",
    "fantasy"
  ],
  "frozen-drink machine": [
    "restaurant",
    "café"
  ],
  "full-length mirror": [
    "apparel shop",
    "fitness"
  ],
  "futon": [
    "harmonious",
    "retro"
  ],
  "game-show stand": [
    "party",
    "facility"
  ],
  "gaming chair": [
    "child's room",
    "office"
  ],
  "gaming desk": [
    "child's room",
    "office"
  ],
  "garbage bin": [
    "facility",
    "amusement park"
  ],
  "garbage can": [
    "park",
    "city life"
  ],
  "garbage pail": [
    "park",
    "city life"
  ],
  "garden bench": [
    "park",
    "city life"
  ],
  "garden chair": [
    "garden",
    "amusement park"
  ],
  "garden faucet": [
    "garden",
    "park"
  ],
  "garden lantern": [
    "garden",
    "city life"
  ],
  "garden rock": [
    "garden",
    "nature"
  ],
  "garden table": [
    "garden",
    "amusement park"
  ],
  "garden wagon": [
    "garden",
    "city life"
  ],
  "gas range": [
    "kitchen",
    "restaurant"
  ],
  "gazebo": [
    "garden",
    "park"
  ],
  "gear apparatus": [
    "sci-fi",
    "lab"
  ],
  "gear tower": [
    "sci-fi",
    "lab"
  ],
  "gemini closet": [
    "expensive"
  ],
  "giant ornament": [
    "amusement park",
    "city life"
  ],
  "giant teddy bear": [
    "fancy",
    "child's room"
  ],
  "giant vine": [
    "fantasy",
    "nature"
  ],
  "gift pile": [
    "child's room",
    "party"
  ],
  "glass showcase": [
    "shop",
    "apparel shop"
  ],
  "glowing-moss balloon": [
    "fantasy",
    "nature"
  ],
  "glowing-moss boulder": [
    "fantasy",
    "nature"
  ],
  "glowing-moss pond": [
    "fantasy",
    "nature"
  ],
  "glowing-moss statue": [
    "fantasy",
    "ancient"
  ],
  "glowing-moss stool": [
    "fantasy",
    "nature"
  ],
  "glowing-moss-jar shelves": [
    "sci-fi",
    "lab"
  ],
  "go board": [
    "harmonious",
    "retro"
  ],
  "goal pole": [
    "fancy",
    "child's room"
  ],
  "gold-nugget mining car": [
    "expensive",
    "fantasy"
  ],
  "golden altar": [
    "expensive",
    "ancient"
  ],
  "golden bathtub": [
    "expensive",
    "public bath"
  ],
  "golden casket": [
    "ancient",
    "horror"
  ],
  "golden gear apparatus": [
    "sci-fi",
    "lab"
  ],
  "golden gear tower": [
    "sci-fi",
    "lab"
  ],
  "golden meter and pipes": [
    "sci-fi",
    "lab"
  ],
  "golden plate armor": [
    "fantasy",
    "european"
  ],
  "golden samurai suit": [
    "expensive",
    "harmonious"
  ],
  "golden seat": [
    "expensive",
    "ancient"
  ],
  "golden toilet": [
    "bathroom",
    "expensive"
  ],
  "golden vase": [
    "expensive",
    "ancient"
  ],
  "golf bag": [
    "sports",
    "expensive"
  ],
  "gong": [
    "harmonious",
    "music"
  ],
  "grand piano": [
    "music",
    "school"
  ],
  "grass standee": [
    "school"
  ],
  "green-leaf pile": [
    "garden",
    "nature"
  ],
  "greenhouse box": [
    "garden",
    "local"
  ],
  "gurney": [
    "hospital",
    "lab"
  ],
  "hammock": [
    "outdoors",
    "resort"
  ],
  "handcart": [
    "garden",
    "local"
  ],
  "handwashing area": [
    "school"
  ],
  "hanger rack": [
    "apparel shop"
  ],
  "hanging clothing rack": [
    "apparel shop"
  ],
  "harp": [
    "music"
  ],
  "hay bed": [
    "local",
    "outdoors"
  ],
  "hearth": [
    "harmonious",
    "retro"
  ],
  "hedge standee": [
    "school"
  ],
  "hello kitty bed": [
    "fancy"
  ],
  "hello kitty chair": [
    "fancy"
  ],
  "hello kitty drawers": [
    "fancy"
  ],
  "hello kitty table": [
    "fancy"
  ],
  "hi-fi stereo": [
    "living room",
    "expensive"
  ],
  "high chair": [
    "living room",
    "restaurant"
  ],
  "high-end stereo": [
    "living room"
  ],
  "hinaningyo": [
    "party",
    "harmonious"
  ],
  "horizontal organizer": [
    "child's room",
    "living room"
  ],
  "hose reel": [
    "garden",
    "local"
  ],
  "hospital bed": [
    "hospital"
  ],
  "hospital screen": [
    "hospital"
  ],
  "ice-cream display": [
    "city life",
    "restaurant"
  ],
  "illuminated present": [
    "amusement park",
    "city life"
  ],
  "illuminated reindeer": [
    "amusement park",
    "city life"
  ],
  "illuminated snowflakes": [
    "freezing cold",
    "city life"
  ],
  "illuminated tree": [
    "amusement park",
    "city life"
  ],
  "imperial bed": [
    "harmonious"
  ],
  "imperial chest": [
    "harmonious"
  ],
  "imperial dining chair": [
    "restaurant",
    "harmonious"
  ],
  "imperial dining table": [
    "restaurant",
    "harmonious"
  ],
  "imperial low table": [
    "harmonious"
  ],
  "imperial partition": [
    "harmonious"
  ],
  "inflatable bird ring": [
    "ocean",
    "resort"
  ],
  "inflatable plaza toy": [
    "amusement park",
    "fancy"
  ],
  "inflatable sofa": [
    "outdoors"
  ],
  "inspection equipment": [
    "hospital",
    "lab"
  ],
  "iron closet": [
    "living room"
  ],
  "iron frame": [
    "workshop",
    "construction site"
  ],
  "iron garden bench": [
    "garden",
    "amusement park"
  ],
  "iron garden chair": [
    "garden",
    "amusement park"
  ],
  "iron garden table": [
    "garden",
    "amusement park"
  ],
  "iron hanger stand": [
    "living room"
  ],
  "iron shelf": [
    "living room"
  ],
  "iron worktable": [
    "workshop",
    "living room"
  ],
  "ironing board": [
    "living room"
  ],
  "ironwood bed": [
    "living room"
  ],
  "ironwood cart": [
    "living room"
  ],
  "ironwood chair": [
    "living room"
  ],
  "ironwood cupboard": [
    "kitchen"
  ],
  "ironwood diy workbench": [
    "workshop"
  ],
  "ironwood dresser": [
    "living room"
  ],
  "ironwood kitchenette": [
    "kitchen"
  ],
  "ironwood low table": [
    "living room"
  ],
  "ironwood table": [
    "living room"
  ],
  "iv drip": [
    "hospital"
  ],
  "jackhammer": [
    "construction site",
    "city life"
  ],
  "jail bars": [
    "facility",
    "horror"
  ],
  "japanese dresser": [
    "harmonious",
    "retro"
  ],
  "juicy-apple tv": [
    "fancy"
  ],
  "jukebox": [
    "shop",
    "restaurant"
  ],
  "kadomatsu": [
    "harmonious"
  ],
  "karaoke system": [
    "facility"
  ],
  "katana": [
    "harmonious",
    "heritage"
  ],
  "kerokerokeroppi bridge": [
    "garden",
    "harmonious"
  ],
  "kerokerokeroppi hallway": [
    "retro",
    "harmonious"
  ],
  "kerokerokeroppi lantern": [
    "garden",
    "harmonious"
  ],
  "kerokerokeroppi tray": [
    "retro",
    "harmonious"
  ],
  "kettle bathtub": [
    "outdoors",
    "retro"
  ],
  "kids' tent": [
    "child's room",
    "outdoors"
  ],
  "kiki & lala bed": [
    "fancy"
  ],
  "kiki & lala cloud maker": [
    "fancy"
  ],
  "kiki & lala sofa": [
    "fancy"
  ],
  "kiki & lala table": [
    "fancy"
  ],
  "kimono stand": [
    "harmonious",
    "retro"
  ],
  "kitchen counter": [
    "restaurant",
    "kitchen"
  ],
  "kitchen dishwasher": [
    "restaurant",
    "facility"
  ],
  "kitchen island": [
    "kitchen",
    "expensive"
  ],
  "kitchen stove": [
    "restaurant",
    "kitchen"
  ],
  "kitty litter box": [
    "living room"
  ],
  "kotatsu": [
    "harmonious"
  ],
  "lab chair": [
    "lab",
    "sci-fi"
  ],
  "large café table": [
    "café",
    "amusement park"
  ],
  "large cardboard boxes": [
    "workshop"
  ],
  "large covered round table": [
    "restaurant",
    "party"
  ],
  "large magazine rack": [
    "supermarket",
    "hospital"
  ],
  "large mushroom platform": [
    "fancy",
    "child's room"
  ],
  "lawn chair": [
    "ocean",
    "resort"
  ],
  "lawn mower": [
    "garden",
    "local"
  ],
  "leaf campfire": [
    "garden",
    "nature"
  ],
  "leaf stool": [
    "child's room",
    "fancy"
  ],
  "lecture-hall bench": [
    "school"
  ],
  "lecture-hall desk": [
    "school"
  ],
  "left chalkboard section": [
    "school"
  ],
  "lifeguard chair": [
    "ocean",
    "resort"
  ],
  "lighted display stand": [
    "facility"
  ],
  "lighthouse": [
    "ocean",
    "local"
  ],
  "lily record player": [
    "fancy"
  ],
  "lily-pad table": [
    "child's room",
    "fancy"
  ],
  "loft bed with desk": [
    "child's room"
  ],
  "log bed": [
    "garden",
    "living room"
  ],
  "log bench": [
    "garden",
    "nature"
  ],
  "log chair": [
    "garden",
    "living room"
  ],
  "log decorative shelves": [
    "garden",
    "living room"
  ],
  "log dining table": [
    "garden",
    "living room"
  ],
  "log extra-long sofa": [
    "garden",
    "living room"
  ],
  "log garden lounge": [
    "garden",
    "outdoors"
  ],
  "log round table": [
    "garden",
    "living room"
  ],
  "log stakes": [
    "garden",
    "local"
  ],
  "log stool": [
    "garden",
    "nature"
  ],
  "long bathtub": [
    "bathroom"
  ],
  "long folding table": [
    "school",
    "office"
  ],
  "loom": [
    "retro"
  ],
  "low folding table": [
    "school"
  ],
  "low screen": [
    "harmonious"
  ],
  "luna's bed": [
    "expensive",
    "harmonious"
  ],
  "lunar lander": [
    "space"
  ],
  "lunar rover": [
    "space"
  ],
  "luxury car": [
    "city life",
    "expensive"
  ],
  "mama bear": [
    "fancy",
    "child's room"
  ],
  "mama panda": [
    "fancy",
    "child's room"
  ],
  "manhole cover": [
    "city life",
    "construction site"
  ],
  "maple-leaf pond stone": [
    "harmonious",
    "garden"
  ],
  "marimba": [
    "music",
    "school"
  ],
  "market place decoration": [
    "amusement park",
    "city life"
  ],
  "maypole": [
    "european",
    "garden"
  ],
  "medicine chest": [
    "lab",
    "hospital"
  ],
  "medieval building side": [
    "fantasy",
    "european"
  ],
  "medium cardboard boxes": [
    "workshop"
  ],
  "medium wooden partition": [
    "living room",
    "office"
  ],
  "meeting-room table": [
    "office"
  ],
  "menu chalkboard": [
    "restaurant",
    "city life"
  ],
  "merchandise table": [
    "supermarket",
    "apparel shop"
  ],
  "mermaid bed": [
    "ocean",
    "fancy"
  ],
  "mermaid chair": [
    "ocean",
    "fancy"
  ],
  "mermaid closet": [
    "ocean",
    "fancy"
  ],
  "mermaid dresser": [
    "ocean",
    "fancy"
  ],
  "mermaid lamp": [
    "ocean",
    "fancy"
  ],
  "mermaid screen": [
    "ocean",
    "fancy"
  ],
  "mermaid shelf": [
    "ocean",
    "fancy"
  ],
  "mermaid sofa": [
    "ocean",
    "fancy"
  ],
  "mermaid table": [
    "ocean",
    "fancy"
  ],
  "mermaid vanity": [
    "ocean",
    "fancy"
  ],
  "metal-and-wood chair": [
    "garden",
    "city life"
  ],
  "metal-and-wood table": [
    "garden",
    "city life"
  ],
  "meter and pipes": [
    "sci-fi",
    "lab"
  ],
  "mic stand": [
    "music",
    "party"
  ],
  "midsized clothing rack": [
    "apparel shop"
  ],
  "milk can": [
    "local",
    "workshop"
  ],
  "mini diy workbench": [
    "workshop"
  ],
  "mini fridge": [
    "facility",
    "kitchen"
  ],
  "minicar": [
    "city life",
    "local"
  ],
  "mining car": [
    "construction site",
    "local"
  ],
  "moai statue": [
    "ancient"
  ],
  "mochi pestle": [
    "harmonious",
    "party"
  ],
  "modern hospital bed": [
    "hospital"
  ],
  "modern office chair": [
    "office"
  ],
  "monster statue": [
    "fantasy",
    "sci-fi"
  ],
  "monstera": [
    "living room"
  ],
  "moon": [
    "space",
    "fancy"
  ],
  "mop": [
    "school",
    "hospital"
  ],
  "moroccan footrest": [
    "living room",
    "stylish"
  ],
  "moroccan sofa": [
    "living room",
    "stylish"
  ],
  "moroccan tray table": [
    "living room",
    "stylish"
  ],
  "mossy garden rock": [
    "harmonious",
    "garden"
  ],
  "mountain bike": [
    "sports",
    "outdoors"
  ],
  "mountain standee": [
    "school"
  ],
  "mr. flamingo": [
    "nature",
    "fancy"
  ],
  "mrs. flamingo": [
    "nature",
    "fancy"
  ],
  "mum cushion": [
    "fancy",
    "nature"
  ],
  "mush lamp": [
    "nature"
  ],
  "mush log": [
    "nature"
  ],
  "mush low stool": [
    "nature"
  ],
  "mush parasol": [
    "nature"
  ],
  "mush partition": [
    "nature"
  ],
  "mush table": [
    "nature"
  ],
  "music stand": [
    "music"
  ],
  "my melody bed": [
    "fancy"
  ],
  "my melody chair": [
    "fancy"
  ],
  "my melody dresser": [
    "fancy"
  ],
  "my melody table": [
    "fancy"
  ],
  "natural garden chair": [
    "garden",
    "café"
  ],
  "natural garden table": [
    "garden",
    "café"
  ],
  "natural square table": [
    "garden",
    "café"
  ],
  "neutral corner": [
    "sports"
  ],
  "nook inc. yoga mat": [
    "fitness",
    "sports"
  ],
  "nordic chair": [
    "living room"
  ],
  "nordic low table": [
    "living room"
  ],
  "nordic lowboard": [
    "living room"
  ],
  "nordic shelves": [
    "living room"
  ],
  "nordic sofa": [
    "living room"
  ],
  "nordic table": [
    "living room"
  ],
  "nuptial bell": [
    "party",
    "expensive"
  ],
  "office cabinet": [
    "office"
  ],
  "office chair": [
    "office"
  ],
  "office desk": [
    "office"
  ],
  "oil barrel": [
    "workshop"
  ],
  "oil-barrel bathtub": [
    "outdoors",
    "local"
  ],
  "ok motors sign": [
    "city life"
  ],
  "old sewing machine": [
    "living room",
    "retro"
  ],
  "open wooden shelves": [
    "child's room",
    "living room"
  ],
  "open-frame kitchen": [
    "kitchen",
    "restaurant"
  ],
  "operating-room cart": [
    "hospital",
    "lab"
  ],
  "orange end table": [
    "fancy"
  ],
  "ornament garland": [
    "party",
    "city life"
  ],
  "ornament tree": [
    "party",
    "expensive"
  ],
  "outdoor air conditioner": [
    "city life",
    "garden"
  ],
  "outdoor bath": [
    "public bath",
    "harmonious"
  ],
  "outdoor bench": [
    "outdoors",
    "garden"
  ],
  "outdoor folding chair": [
    "outdoors"
  ],
  "outdoor folding table": [
    "outdoors"
  ],
  "outdoor generator": [
    "outdoors"
  ],
  "outdoor kitchen": [
    "outdoors"
  ],
  "outdoor picnic set": [
    "harmonious",
    "garden"
  ],
  "outdoor table": [
    "outdoors",
    "garden"
  ],
  "pa speaker": [
    "concert",
    "music"
  ],
  "pagoda": [
    "city life",
    "harmonious"
  ],
  "palm-tree lamp": [
    "ocean",
    "resort"
  ],
  "pansy table": [
    "fancy"
  ],
  "pants press": [
    "facility"
  ],
  "papa bear": [
    "fancy",
    "child's room"
  ],
  "papa panda": [
    "fancy",
    "child's room"
  ],
  "paper lantern": [
    "harmonious",
    "retro"
  ],
  "parabolic antenna": [
    "facility",
    "city life"
  ],
  "paradise planning hammock": [
    "ocean",
    "garden"
  ],
  "park clock": [
    "park",
    "amusement park"
  ],
  "park fountain": [
    "amusement park",
    "park"
  ],
  "patchwork bed": [
    "living room",
    "fancy"
  ],
  "patchwork chair": [
    "living room",
    "fancy"
  ],
  "patchwork low table": [
    "living room",
    "fancy"
  ],
  "patchwork sofa chair": [
    "living room",
    "fancy"
  ],
  "peach chair": [
    "fancy"
  ],
  "peacock chair": [
    "living room",
    "stylish"
  ],
  "pear bed": [
    "fancy"
  ],
  "pear wardrobe": [
    "fancy"
  ],
  "pergola": [
    "garden",
    "amusement park"
  ],
  "pet bed": [
    "living room"
  ],
  "phone box": [
    "city life",
    "park"
  ],
  "piano bench": [
    "music",
    "school"
  ],
  "pile of cardboard boxes": [
    "workshop"
  ],
  "pile of leaves": [
    "garden",
    "nature"
  ],
  "pile of zen cushions": [
    "harmonious",
    "living room"
  ],
  "pinball machine": [
    "arcade",
    "retro"
  ],
  "pine tree": [
    "garden",
    "harmonious"
  ],
  "pipe": [
    "fancy",
    "child's room"
  ],
  "pirate barrel": [
    "ocean",
    "workshop"
  ],
  "pirate-ship cannon": [
    "ocean",
    "horror"
  ],
  "pirate-ship helm": [
    "ocean"
  ],
  "pirate-treasure chest": [
    "ocean",
    "expensive"
  ],
  "pisces lamp": [
    "expensive",
    "ocean"
  ],
  "plain party-lights arch": [
    "party",
    "amusement park"
  ],
  "plain sink": [
    "bathroom"
  ],
  "plain wooden shop sign": [
    "local",
    "city life"
  ],
  "plant partition": [
    "city life",
    "café"
  ],
  "plastic bench": [
    "city life",
    "local"
  ],
  "plastic clothing organizer": [
    "bathroom",
    "living room"
  ],
  "plastic pool": [
    "garden"
  ],
  "plate armor": [
    "european",
    "fantasy"
  ],
  "playground gym": [
    "park",
    "child's room"
  ],
  "plaza arch": [
    "amusement park",
    "fancy"
  ],
  "plaza balloon wagon": [
    "amusement park",
    "fancy"
  ],
  "plaza bench": [
    "amusement park",
    "fancy"
  ],
  "plaza clock": [
    "amusement park",
    "fancy"
  ],
  "plaza ferris wheel": [
    "amusement park",
    "fancy"
  ],
  "plaza game stand": [
    "amusement park",
    "fancy"
  ],
  "plaza merry-go-round": [
    "amusement park",
    "fancy"
  ],
  "plaza teacup ride": [
    "amusement park",
    "fancy"
  ],
  "plaza train": [
    "amusement park",
    "fancy"
  ],
  "plush massage chair": [
    "public bath",
    "facility"
  ],
  "podium": [
    "school"
  ],
  "pompompurin bed": [
    "fancy"
  ],
  "pompompurin chair": [
    "fancy"
  ],
  "pompompurin rack": [
    "fancy"
  ],
  "pompompurin table": [
    "fancy"
  ],
  "pond stone": [
    "harmonious",
    "garden"
  ],
  "pool": [
    "garden",
    "resort"
  ],
  "poolside bed": [
    "ocean",
    "resort"
  ],
  "popcorn machine": [
    "city life",
    "amusement park"
  ],
  "portable toilet": [
    "city life",
    "local"
  ],
  "poster stand": [
    "city life",
    "amusement park"
  ],
  "powder-room booth": [
    "bathroom",
    "facility"
  ],
  "project table": [
    "workshop",
    "school"
  ],
  "projection screen": [
    "facility",
    "office"
  ],
  "public bench": [
    "facility",
    "city life"
  ],
  "pull-up-bar stand": [
    "fitness"
  ],
  "punching bag": [
    "fitness",
    "sports"
  ],
  "pyramid": [
    "ancient"
  ],
  "raccoon figurine": [
    "harmonious",
    "heritage"
  ],
  "ranch bed": [
    "living room",
    "retro"
  ],
  "ranch chair": [
    "living room",
    "retro"
  ],
  "ranch cupboard": [
    "kitchen",
    "retro"
  ],
  "ranch kitchen": [
    "kitchen",
    "retro"
  ],
  "ranch lowboard": [
    "living room",
    "retro"
  ],
  "ranch tea table": [
    "living room",
    "retro"
  ],
  "ranch wardrobe": [
    "living room",
    "retro"
  ],
  "rattan armchair": [
    "living room",
    "resort"
  ],
  "rattan bed": [
    "living room",
    "resort"
  ],
  "rattan end table": [
    "living room",
    "resort"
  ],
  "rattan low table": [
    "living room",
    "resort"
  ],
  "rattan stool": [
    "living room",
    "resort"
  ],
  "rattan vanity": [
    "living room",
    "resort"
  ],
  "rattan wardrobe": [
    "living room",
    "resort"
  ],
  "rattan waste bin": [
    "living room",
    "resort"
  ],
  "rc helicopter": [
    "child's room",
    "garden"
  ],
  "reception chair": [
    "facility"
  ],
  "reception counter": [
    "facility",
    "café"
  ],
  "red corner": [
    "sports"
  ],
  "red-leaf pile": [
    "garden",
    "nature"
  ],
  "refrigerator": [
    "kitchen",
    "restaurant"
  ],
  "rescue mannequin": [
    "outdoors",
    "ocean"
  ],
  "retro fan": [
    "living room"
  ],
  "retro gas pump": [
    "city life",
    "retro"
  ],
  "retro ice-cream case": [
    "retro",
    "supermarket"
  ],
  "retro massage chair": [
    "public bath",
    "retro"
  ],
  "retro stereo": [
    "living room",
    "retro"
  ],
  "retro transportation stop": [
    "local",
    "retro"
  ],
  "retro tv": [
    "living room",
    "retro"
  ],
  "right chalkboard section": [
    "school"
  ],
  "robot arm": [
    "construction site",
    "sci-fi"
  ],
  "robot hero": [
    "fantasy",
    "sci-fi"
  ],
  "rock guitar": [
    "concert"
  ],
  "rocket": [
    "space"
  ],
  "rocket lamp": [
    "lab",
    "sci-fi"
  ],
  "rocking chair": [
    "living room"
  ],
  "rocking horse": [
    "child's room",
    "fancy"
  ],
  "rodeo-style springy ride-on": [
    "fancy",
    "park"
  ],
  "rolling cart": [
    "supermarket",
    "workshop"
  ],
  "rope partition": [
    "facility",
    "amusement park"
  ],
  "rose bed": [
    "fancy"
  ],
  "round pillow": [
    "harmonious"
  ],
  "round space heater": [
    "living room",
    "school"
  ],
  "round streetlight": [
    "city life",
    "park"
  ],
  "round topiary": [
    "city life",
    "garden"
  ],
  "ruined arch": [
    "ancient",
    "nature"
  ],
  "ruined broken pillar": [
    "ancient",
    "nature"
  ],
  "ruined decorated pillar": [
    "ancient",
    "nature"
  ],
  "ruined seat": [
    "ancient",
    "nature"
  ],
  "safe": [
    "facility",
    "expensive"
  ],
  "safety barrier": [
    "construction site",
    "city life"
  ],
  "safety railing": [
    "facility",
    "hospital"
  ],
  "salad bar": [
    "restaurant"
  ],
  "sample case": [
    "facility",
    "restaurant"
  ],
  "samurai suit": [
    "heritage",
    "harmonious"
  ],
  "sand castle": [
    "ocean",
    "park"
  ],
  "sandbox": [
    "garden",
    "park"
  ],
  "satellite": [
    "space"
  ],
  "sauna heater": [
    "bathroom",
    "public bath"
  ],
  "scarecrow": [
    "garden",
    "local"
  ],
  "scattered papers": [
    "den",
    "office"
  ],
  "schefflera": [
    "living room"
  ],
  "school chair": [
    "school"
  ],
  "school desk": [
    "school"
  ],
  "school locker": [
    "school"
  ],
  "science pod": [
    "sci-fi",
    "lab"
  ],
  "scooter": [
    "city life",
    "local"
  ],
  "scoreboard": [
    "school",
    "sports"
  ],
  "screen": [
    "harmonious",
    "retro"
  ],
  "senmaizuke barrel": [
    "harmonious",
    "local"
  ],
  "server": [
    "office",
    "sci-fi"
  ],
  "serving cart": [
    "restaurant",
    "café"
  ],
  "shaded floor lamp": [
    "living room"
  ],
  "shell arch": [
    "ocean",
    "expensive"
  ],
  "shell bed": [
    "ocean",
    "expensive"
  ],
  "shell fountain": [
    "ocean",
    "expensive"
  ],
  "shell partition": [
    "ocean"
  ],
  "shell stool": [
    "ocean"
  ],
  "shell table": [
    "ocean"
  ],
  "shoji divider": [
    "harmonious",
    "restaurant"
  ],
  "shopping cart": [
    "supermarket",
    "shop"
  ],
  "short file cabinet": [
    "office",
    "hospital"
  ],
  "short simple panel": [
    "office",
    "facility"
  ],
  "shower booth": [
    "bathroom",
    "fitness"
  ],
  "sideways pirate barrel": [
    "ocean",
    "workshop"
  ],
  "signpost": [
    "local",
    "city life"
  ],
  "silo": [
    "garden",
    "local"
  ],
  "silver confetti blower": [
    "concert",
    "amusement park"
  ],
  "silver mic": [
    "concert",
    "party"
  ],
  "simple bed": [
    "living room"
  ],
  "simple chair": [
    "living room"
  ],
  "simple diy workbench": [
    "outdoors",
    "garden"
  ],
  "simple panel": [
    "office",
    "facility"
  ],
  "simple small dresser": [
    "living room"
  ],
  "simple sofa": [
    "living room"
  ],
  "simple stool": [
    "living room"
  ],
  "simple table": [
    "living room"
  ],
  "simple vanity": [
    "bathroom",
    "facility"
  ],
  "simple well": [
    "garden",
    "local"
  ],
  "skeleton": [
    "school",
    "lab"
  ],
  "ski rack": [
    "freezing cold",
    "sports"
  ],
  "sleeping bag": [
    "outdoors"
  ],
  "sleigh": [
    "local",
    "freezing cold"
  ],
  "sloppy bed": [
    "child's room",
    "horror"
  ],
  "sloppy sink": [
    "child's room",
    "horror"
  ],
  "sloppy sofa": [
    "child's room",
    "horror"
  ],
  "sloppy table": [
    "child's room",
    "horror"
  ],
  "small café table": [
    "café",
    "amusement park"
  ],
  "small cardboard boxes": [
    "workshop"
  ],
  "small clothing rack": [
    "apparel shop"
  ],
  "small covered round table": [
    "restaurant",
    "party"
  ],
  "small led display": [
    "city life",
    "amusement park"
  ],
  "small mannequin": [
    "apparel shop",
    "city life"
  ],
  "small mushroom platform": [
    "fancy",
    "child's room"
  ],
  "small wooden partition": [
    "living room",
    "office"
  ],
  "smoker": [
    "outdoors"
  ],
  "snack machine": [
    "city life",
    "facility"
  ],
  "snare drum": [
    "concert",
    "music"
  ],
  "soccer goal": [
    "school",
    "sports"
  ],
  "soft-serve lamp": [
    "city life",
    "café"
  ],
  "solar panel": [
    "local",
    "facility"
  ],
  "south pole": [
    "freezing cold"
  ],
  "space shuttle": [
    "space"
  ],
  "spaceship control panel": [
    "sci-fi",
    "space"
  ],
  "speed bag": [
    "fitness",
    "sports"
  ],
  "sphinx": [
    "ancient"
  ],
  "spinning wheel": [
    "retro"
  ],
  "spooky arch": [
    "horror"
  ],
  "spooky carriage": [
    "horror",
    "fancy"
  ],
  "spooky chair": [
    "horror"
  ],
  "spooky lantern set": [
    "horror"
  ],
  "spooky scarecrow": [
    "horror"
  ],
  "spooky standing lamp": [
    "horror"
  ],
  "spooky table": [
    "horror"
  ],
  "spooky tower": [
    "horror"
  ],
  "spooky tree": [
    "horror"
  ],
  "springy ride-on": [
    "amusement park",
    "park"
  ],
  "square bathtub": [
    "public bath"
  ],
  "squat toilet": [
    "harmonious",
    "bathroom"
  ],
  "stacked fish containers": [
    "supermarket",
    "ocean"
  ],
  "stacked senmaizuke barrels": [
    "harmonious",
    "local"
  ],
  "stacked shopping baskets": [
    "supermarket"
  ],
  "stadiometer": [
    "school",
    "hospital"
  ],
  "stadium light": [
    "sports"
  ],
  "stage flame machine": [
    "party",
    "concert"
  ],
  "stage lights": [
    "concert"
  ],
  "stair dresser": [
    "harmonious",
    "retro"
  ],
  "stall": [
    "amusement park",
    "party"
  ],
  "standard umbrella stand": [
    "school",
    "office"
  ],
  "standing electric sign": [
    "café",
    "city life"
  ],
  "standing shop sign": [
    "city life",
    "café"
  ],
  "standing toilet": [
    "bathroom",
    "facility"
  ],
  "statue of liberty": [
    "city life"
  ],
  "steamroller": [
    "construction site"
  ],
  "steel fence": [
    "city life",
    "amusement park"
  ],
  "steel trash can": [
    "city life",
    "amusement park"
  ],
  "stepladder": [
    "supermarket",
    "construction site"
  ],
  "stone arch": [
    "local",
    "ancient"
  ],
  "stone lion-dog": [
    "heritage",
    "harmonious"
  ],
  "stone stool": [
    "garden"
  ],
  "stone table": [
    "garden"
  ],
  "stone tablet": [
    "local",
    "ancient"
  ],
  "stonehenge": [
    "ancient",
    "nature"
  ],
  "stonework kitchen": [
    "kitchen",
    "european"
  ],
  "storage shed": [
    "garden",
    "school"
  ],
  "store shelf": [
    "supermarket",
    "shop"
  ],
  "storefront": [
    "retro",
    "fantasy"
  ],
  "strategic meeting table": [
    "sci-fi",
    "space"
  ],
  "street lamp with banners": [
    "city life",
    "amusement park"
  ],
  "street organ": [
    "park",
    "fancy"
  ],
  "street piano": [
    "concert",
    "city life"
  ],
  "streetlamp": [
    "city life",
    "amusement park"
  ],
  "stroller": [
    "city life",
    "child's room"
  ],
  "studio spotlight": [
    "facility",
    "concert"
  ],
  "study carrel": [
    "office",
    "facility"
  ],
  "study chair": [
    "child's room"
  ],
  "study desk": [
    "child's room"
  ],
  "sturdy office desk": [
    "office"
  ],
  "stylish spotlight": [
    "apparel shop",
    "facility"
  ],
  "surfboard": [
    "ocean",
    "sports"
  ],
  "suspicious cauldron": [
    "horror",
    "fantasy"
  ],
  "swinging bench": [
    "garden",
    "park"
  ],
  "sword": [
    "harmonious",
    "heritage"
  ],
  "synthesizer": [
    "concert"
  ],
  "system kitchen": [
    "kitchen",
    "restaurant"
  ],
  "table with cloth": [
    "restaurant",
    "party"
  ],
  "tall file cabinet": [
    "office",
    "hospital"
  ],
  "tall garden rock": [
    "garden",
    "nature"
  ],
  "tall lantern": [
    "harmonious",
    "garden"
  ],
  "tank": [
    "lab",
    "facility"
  ],
  "tankless toilet": [
    "bathroom"
  ],
  "tatami bed": [
    "harmonious",
    "retro"
  ],
  "taurus bathtub": [
    "bathroom",
    "expensive"
  ],
  "tea table": [
    "harmonious",
    "retro"
  ],
  "telescope": [
    "space",
    "local"
  ],
  "tennis table": [
    "public bath",
    "school"
  ],
  "tension-pole rack": [
    "living room",
    "café"
  ],
  "termite mound": [
    "local",
    "nature"
  ],
  "theremin": [
    "music"
  ],
  "three-tiered snowperson": [
    "freezing cold",
    "garden"
  ],
  "throne": [
    "fantasy",
    "expensive"
  ],
  "throwback dino screen": [
    "child's room"
  ],
  "throwback hat table": [
    "child's room",
    "sports"
  ],
  "throwback mitt chair": [
    "child's room",
    "sports"
  ],
  "throwback race-car bed": [
    "child's room",
    "city life"
  ],
  "throwback rocket": [
    "child's room",
    "space"
  ],
  "thwomp": [
    "fancy",
    "child's room"
  ],
  "tiki torch": [
    "outdoors",
    "ancient"
  ],
  "timpani drums": [
    "music"
  ],
  "tiny library": [
    "park",
    "city life"
  ],
  "tire stack": [
    "workshop",
    "garden"
  ],
  "tire toy": [
    "park",
    "city life"
  ],
  "titan arum": [
    "local",
    "nature"
  ],
  "toilet": [
    "bathroom",
    "facility"
  ],
  "toilet-cleaning set": [
    "bathroom",
    "facility"
  ],
  "tokonoma": [
    "harmonious",
    "retro"
  ],
  "tool cart": [
    "workshop"
  ],
  "tool shelf": [
    "workshop",
    "lab"
  ],
  "torii": [
    "harmonious",
    "heritage"
  ],
  "tourist telescope": [
    "local",
    "facility"
  ],
  "tower of pisa": [
    "european"
  ],
  "toy day sleigh": [
    "fancy",
    "freezing cold"
  ],
  "tractor": [
    "local"
  ],
  "train set": [
    "child's room"
  ],
  "transit seat": [
    "facility"
  ],
  "trash bags": [
    "workshop",
    "city life"
  ],
  "treadmill": [
    "fitness"
  ],
  "tree standee": [
    "school"
  ],
  "tree's bounty arch": [
    "fancy",
    "nature"
  ],
  "tree's bounty big tree": [
    "party",
    "fancy"
  ],
  "triangular topiary": [
    "city life",
    "amusement park"
  ],
  "tricycle": [
    "garden",
    "park"
  ],
  "trophy case": [
    "expensive",
    "living room"
  ],
  "truck": [
    "construction site",
    "city life"
  ],
  "trumpet": [
    "music"
  ],
  "tulip surprise box": [
    "child's room",
    "fancy"
  ],
  "turkey day chair": [
    "living room",
    "party"
  ],
  "turkey day garden stand": [
    "living room",
    "party"
  ],
  "turkey day hearth": [
    "living room",
    "party"
  ],
  "turkey day table": [
    "living room",
    "party"
  ],
  "tv camera": [
    "facility",
    "concert"
  ],
  "unknown machine": [
    "sci-fi",
    "lab"
  ],
  "upright locker": [
    "school",
    "office"
  ],
  "upright organizer": [
    "child's room",
    "living room"
  ],
  "upright piano": [
    "music",
    "school"
  ],
  "upright vacuum": [
    "living room"
  ],
  "utility pole": [
    "city life",
    "local"
  ],
  "utility sink": [
    "school",
    "lab"
  ],
  "utility wagon": [
    "outdoors",
    "workshop"
  ],
  "vacuum cleaner": [
    "living room"
  ],
  "vehicle cabin seat": [
    "facility"
  ],
  "velvet stool": [
    "music",
    "school"
  ],
  "vertical banner": [
    "city life",
    "shop"
  ],
  "video camera": [
    "facility",
    "school"
  ],
  "vine bench": [
    "nature",
    "fantasy"
  ],
  "vine hanging chair": [
    "nature",
    "fantasy"
  ],
  "vintage desk": [
    "living room",
    "retro"
  ],
  "vintage dresser": [
    "living room",
    "retro"
  ],
  "vintage low table": [
    "living room",
    "retro"
  ],
  "vintage sofa": [
    "living room",
    "retro"
  ],
  "vintage stool": [
    "living room",
    "retro"
  ],
  "vintage tv tray": [
    "living room",
    "retro"
  ],
  "virgo harp": [
    "expensive",
    "music"
  ],
  "volleyball net": [
    "school",
    "sports"
  ],
  "washbasin": [
    "hospital"
  ],
  "water cooler": [
    "living room",
    "office"
  ],
  "water pump": [
    "local",
    "retro"
  ],
  "wave breaker": [
    "ocean"
  ],
  "wedding arch": [
    "party",
    "fancy"
  ],
  "wedding bench": [
    "party",
    "expensive"
  ],
  "wedding chair": [
    "party",
    "fancy"
  ],
  "wedding flower stand": [
    "party",
    "fancy"
  ],
  "wedding head table": [
    "party",
    "fancy"
  ],
  "wedding pipe organ": [
    "party",
    "music"
  ],
  "wedding table": [
    "party",
    "fancy"
  ],
  "wedding welcome board": [
    "party",
    "fancy"
  ],
  "weight bench": [
    "fitness"
  ],
  "western-style stone": [
    "local",
    "horror"
  ],
  "wheat field": [
    "local",
    "ancient"
  ],
  "wheelchair": [
    "hospital",
    "facility"
  ],
  "whirlpool bath": [
    "bathroom",
    "expensive"
  ],
  "whiteboard": [
    "office",
    "school"
  ],
  "wide display stand": [
    "facility"
  ],
  "wild log bench": [
    "garden",
    "nature"
  ],
  "wind turbine": [
    "ocean",
    "local"
  ],
  "windmill": [
    "local",
    "amusement park"
  ],
  "winnowing machine": [
    "local"
  ],
  "wood partition": [
    "restaurant",
    "café"
  ],
  "wood-burning stove": [
    "shop",
    "living room"
  ],
  "wood-plank table": [
    "living room",
    "garden"
  ],
  "wooden bookshelf": [
    "child's room",
    "living room"
  ],
  "wooden box": [
    "workshop",
    "construction site"
  ],
  "wooden chair": [
    "child's room",
    "living room"
  ],
  "wooden chest": [
    "child's room",
    "living room"
  ],
  "wooden double bed": [
    "child's room",
    "living room"
  ],
  "wooden end table": [
    "child's room",
    "living room"
  ],
  "wooden field sign": [
    "sports"
  ],
  "wooden full-length mirror": [
    "child's room",
    "living room"
  ],
  "wooden locker": [
    "school",
    "facility"
  ],
  "wooden low table": [
    "child's room",
    "living room"
  ],
  "wooden mini table": [
    "child's room",
    "living room"
  ],
  "wooden simple bed": [
    "child's room",
    "living room"
  ],
  "wooden stool": [
    "child's room",
    "living room"
  ],
  "wooden storage shed": [
    "garden",
    "school"
  ],
  "wooden table": [
    "child's room",
    "living room"
  ],
  "wooden wardrobe": [
    "child's room",
    "living room"
  ],
  "wooden waste bin": [
    "child's room",
    "living room"
  ],
  "wooden-block bed": [
    "child's room"
  ],
  "wooden-block bench": [
    "child's room"
  ],
  "wooden-block bookshelf": [
    "child's room"
  ],
  "wooden-block chair": [
    "child's room"
  ],
  "wooden-block chest": [
    "child's room"
  ],
  "wooden-block stereo": [
    "child's room"
  ],
  "wooden-block stool": [
    "child's room"
  ],
  "wooden-block table": [
    "child's room"
  ],
  "yacht": [
    "ocean"
  ],
  "yellow-leaf pile": [
    "garden",
    "nature"
  ],
  "yoga mat": [
    "fitness"
  ],
  "yucca": [
    "living room"
  ],
  "zen bench": [
    "harmonious",
    "garden"
  ],
  "zen cushion": [
    "harmonious",
    "living room"
  ],
  "zen low table": [
    "harmonious",
    "living room"
  ],
  "zen lowboard": [
    "harmonious",
    "living room"
  ],
  "zen-style stone": [
    "harmonious",
    "horror"
  ],
  "1-up mushroom": [
    "fancy",
    "child's room"
  ],
  "accessories stand": [
    "stylish",
    "apparel shop"
  ],
  "acnh nintendo switch": [
    "child's room",
    "living room"
  ],
  "afternoon-tea set": [
    "café",
    "fancy"
  ],
  "air circulator": [
    "living room",
    "office"
  ],
  "aji fry": [
    "restaurant"
  ],
  "aloha-edition carrying case": [
    "child's room",
    "living room"
  ],
  "aluminum briefcase": [
    "office",
    "expensive"
  ],
  "analog kitchen scale": [
    "kitchen",
    "restaurant"
  ],
  "anchoas al ajillo": [
    "party",
    "restaurant"
  ],
  "ant farm": [
    "lab",
    "child's room"
  ],
  "anthurium plant": [
    "living room"
  ],
  "antique cash register": [
    "retro",
    "shop"
  ],
  "antique map": [
    "den",
    "retro"
  ],
  "antique radio": [
    "retro",
    "expensive"
  ],
  "apple jam": [
    "kitchen",
    "shop"
  ],
  "apple jelly": [
    "café",
    "party"
  ],
  "apple pie": [
    "party",
    "shop"
  ],
  "apple smoothie": [
    "café",
    "restaurant"
  ],
  "apple tart": [
    "café",
    "party"
  ],
  "aroma pot": [
    "living room",
    "stylish"
  ],
  "baby bear": [
    "fancy",
    "child's room"
  ],
  "baby panda": [
    "fancy",
    "child's room"
  ],
  "baked potatoes": [
    "party",
    "restaurant"
  ],
  "ball": [
    "sports",
    "school"
  ],
  "bamboo candleholder": [
    "harmonious"
  ],
  "bamboo drum": [
    "harmonious"
  ],
  "bamboo lunch box": [
    "harmonious"
  ],
  "bamboo sphere": [
    "harmonious"
  ],
  "bamboo-shoot lamp": [
    "harmonious"
  ],
  "bamboo-shoot soup": [
    "harmonious",
    "restaurant"
  ],
  "banker's lamp": [
    "facility",
    "den"
  ],
  "barred-knifejaw carpaccio": [
    "party",
    "restaurant"
  ],
  "baseball set": [
    "child's room",
    "sports"
  ],
  "bath bucket": [
    "public bath",
    "bathroom"
  ],
  "beach ball": [
    "ocean",
    "resort"
  ],
  "berliner": [
    "living room",
    "party"
  ],
  "bingo wheel": [
    "party"
  ],
  "birthday cake": [
    "party",
    "fancy"
  ],
  "birthday candles": [
    "party",
    "fancy"
  ],
  "biryani": [
    "harmonious",
    "restaurant"
  ],
  "blood-orange juice": [
    "café",
    "restaurant"
  ],
  "blossom lantern": [
    "party",
    "harmonious"
  ],
  "board game": [
    "child's room",
    "living room"
  ],
  "book": [
    "den",
    "school"
  ],
  "book stands": [
    "den",
    "child's room"
  ],
  "bottle crate": [
    "workshop",
    "supermarket"
  ],
  "bottled beverage": [
    "school",
    "child's room"
  ],
  "bottled ship": [
    "ocean",
    "heritage"
  ],
  "bread": [
    "café",
    "shop"
  ],
  "bread gratin": [
    "café",
    "restaurant"
  ],
  "brine-shrimp aquarium": [
    "lab",
    "child's room"
  ],
  "bronze bug trophy": [
    "expensive"
  ],
  "bronze fish trophy": [
    "expensive"
  ],
  "bronze hha trophy": [
    "expensive"
  ],
  "brown-sugar cupcakes": [
    "café",
    "shop"
  ],
  "brown-sugar pound cake": [
    "café",
    "shop"
  ],
  "bunny day basket": [
    "fancy"
  ],
  "bunny day candy": [
    "fancy"
  ],
  "bunny day lamp": [
    "fancy"
  ],
  "bunny garden decoration": [
    "garden"
  ],
  "cake salé": [
    "café",
    "shop"
  ],
  "camp stove": [
    "outdoors"
  ],
  "candle": [
    "horror",
    "retro"
  ],
  "cans": [
    "supermarket",
    "kitchen"
  ],
  "caprese sandwich set": [
    "restaurant",
    "café"
  ],
  "card tower": [
    "living room",
    "child's room"
  ],
  "cardboard box": [
    "workshop",
    "supermarket"
  ],
  "cards": [
    "living room",
    "child's room"
  ],
  "carnations": [
    "living room",
    "fancy"
  ],
  "carp on a cutting board": [
    "restaurant",
    "supermarket"
  ],
  "carpaccio di capesante": [
    "party",
    "restaurant"
  ],
  "carpaccio di marlin blu": [
    "party",
    "restaurant"
  ],
  "carpaccio di salmone": [
    "party",
    "restaurant"
  ],
  "carrot bagel sandwich": [
    "café",
    "shop"
  ],
  "carrot cake": [
    "café",
    "party"
  ],
  "carrot juice": [
    "café",
    "restaurant"
  ],
  "carrot potage": [
    "café",
    "restaurant"
  ],
  "carrot scones": [
    "café",
    "shop"
  ],
  "carrot-tops curry": [
    "restaurant",
    "harmonious"
  ],
  "carton beverage": [
    "kitchen"
  ],
  "cartoonist's set": [
    "child's room",
    "den"
  ],
  "casablanca lilies": [
    "living room"
  ],
  "cassette player": [
    "living room"
  ],
  "cat grass": [
    "living room"
  ],
  "celebratory candles": [
    "party"
  ],
  "chafing dish": [
    "restaurant",
    "party"
  ],
  "chainsaw": [
    "construction site",
    "workshop"
  ],
  "champiñones al ajillo": [
    "party",
    "restaurant"
  ],
  "cherry jam": [
    "kitchen",
    "shop"
  ],
  "cherry jelly": [
    "café",
    "party"
  ],
  "cherry pie": [
    "party",
    "shop"
  ],
  "cherry smoothie": [
    "café",
    "restaurant"
  ],
  "cherry speakers": [
    "fancy"
  ],
  "cherry tart": [
    "café",
    "party"
  ],
  "cherry-blossom bonsai": [
    "harmonious",
    "fancy"
  ],
  "chessboard": [
    "living room",
    "expensive"
  ],
  "chinese-style meal": [
    "restaurant",
    "harmonious"
  ],
  "chocolate heart": [
    "fancy",
    "shop"
  ],
  "cinnamoroll tray": [
    "fancy",
    "café"
  ],
  "clam chowder": [
    "kitchen",
    "party"
  ],
  "classic pitcher": [
    "kitchen",
    "shop"
  ],
  "clipboard": [
    "office",
    "lab"
  ],
  "coconut cookies": [
    "café",
    "shop"
  ],
  "coconut juice": [
    "resort",
    "ocean"
  ],
  "coconut milk": [
    "café",
    "restaurant"
  ],
  "coconut oil": [
    "kitchen",
    "supermarket"
  ],
  "coconut pancakes": [
    "café",
    "shop"
  ],
  "coconut pudding": [
    "café",
    "party"
  ],
  "coffee beans": [
    "café"
  ],
  "coffee cup": [
    "café",
    "restaurant"
  ],
  "coffee grinder": [
    "kitchen",
    "café"
  ],
  "coin": [
    "fancy",
    "child's room"
  ],
  "colorful juice": [
    "café",
    "restaurant"
  ],
  "cookies": [
    "party",
    "shop"
  ],
  "cooking tools": [
    "restaurant",
    "kitchen"
  ],
  "cool globe": [
    "den",
    "expensive"
  ],
  "cooler box": [
    "outdoors",
    "ocean"
  ],
  "cordless phone": [
    "office",
    "living room"
  ],
  "cornucopia": [
    "party"
  ],
  "cream and sugar": [
    "kitchen",
    "café"
  ],
  "cube light": [
    "living room",
    "stylish"
  ],
  "cucumber horse": [
    "living room",
    "harmonious"
  ],
  "cup with saucer": [
    "café",
    "restaurant"
  ],
  "curry with rice": [
    "european",
    "restaurant"
  ],
  "cushion": [
    "living room",
    "child's room"
  ],
  "cute music player": [
    "fancy"
  ],
  "cutting board": [
    "kitchen",
    "restaurant"
  ],
  "dal model plane": [
    "child's room",
    "living room"
  ],
  "dal mug": [
    "kitchen",
    "living room"
  ],
  "dala horse": [
    "heritage"
  ],
  "dango": [
    "living room",
    "harmonious"
  ],
  "decorative bottles": [
    "shop",
    "restaurant"
  ],
  "decorative plate": [
    "expensive",
    "living room"
  ],
  "decoy duck": [
    "child's room"
  ],
  "deep fryer": [
    "restaurant"
  ],
  "desk mirror": [
    "living room",
    "apparel shop"
  ],
  "desktop computer": [
    "office",
    "living room"
  ],
  "desktop mic": [
    "sports",
    "party"
  ],
  "dessert carrier": [
    "café",
    "kitchen"
  ],
  "dharma": [
    "harmonious",
    "heritage"
  ],
  "diced-salad sandwich set": [
    "restaurant",
    "café"
  ],
  "die": [
    "facility",
    "child's room"
  ],
  "digital alarm clock": [
    "living room",
    "child's room"
  ],
  "dinnerware": [
    "café",
    "restaurant"
  ],
  "dinosaur toy": [
    "child's room",
    "ancient"
  ],
  "dish-drying rack": [
    "kitchen",
    "restaurant"
  ],
  "dispenser": [
    "bathroom",
    "public bath"
  ],
  "document stack": [
    "office",
    "lab"
  ],
  "dollhouse": [
    "child's room",
    "fancy"
  ],
  "dolly": [
    "child's room",
    "fancy"
  ],
  "donation box": [
    "local",
    "city life"
  ],
  "double gloucester cheese": [
    "kitchen",
    "garden"
  ],
  "dreamy bear toy": [
    "fancy",
    "child's room"
  ],
  "dreamy rabbit toy": [
    "fancy",
    "child's room"
  ],
  "dreamy unicorn toy": [
    "fancy",
    "child's room"
  ],
  "dress-up doll": [
    "child's room",
    "fancy"
  ],
  "eggplant cow": [
    "living room",
    "harmonious"
  ],
  "electronics kit": [
    "school",
    "lab"
  ],
  "elegant lamp": [
    "european",
    "expensive"
  ],
  "espresso maker": [
    "kitchen",
    "café"
  ],
  "essay set": [
    "den",
    "retro"
  ],
  "extinguisher": [
    "facility",
    "school"
  ],
  "extravagant meal": [
    "restaurant",
    "harmonious"
  ],
  "fancy tea set": [
    "restaurant",
    "expensive"
  ],
  "fancy violin": [
    "music",
    "expensive"
  ],
  "fancy water pitcher": [
    "restaurant",
    "café"
  ],
  "fax machine": [
    "office"
  ],
  "festival zongzi": [
    "living room",
    "harmonious"
  ],
  "festivale confetti machine": [
    "party",
    "amusement park"
  ],
  "festivale drum": [
    "party",
    "amusement park"
  ],
  "festivale lamp": [
    "party",
    "amusement park"
  ],
  "festive top set": [
    "party",
    "living room"
  ],
  "film projector": [
    "facility",
    "retro"
  ],
  "fire flower": [
    "fancy",
    "child's room"
  ],
  "firewood": [
    "local",
    "garden"
  ],
  "first-aid kit": [
    "school",
    "hospital"
  ],
  "first-anniversary cake": [
    "party"
  ],
  "fish container": [
    "supermarket",
    "ocean"
  ],
  "fish-and-chips": [
    "party",
    "restaurant"
  ],
  "floating-biotope planter": [
    "nature",
    "garden"
  ],
  "flower tabletop mirror": [
    "child's room",
    "fancy"
  ],
  "football": [
    "sports",
    "school"
  ],
  "fortune-telling set": [
    "horror",
    "fantasy"
  ],
  "fragrance diffuser": [
    "living room"
  ],
  "fragrance sticks": [
    "living room",
    "stylish"
  ],
  "framed photo": [
    "living room"
  ],
  "french fries": [
    "party",
    "restaurant"
  ],
  "fresh-food trays": [
    "kitchen",
    "supermarket"
  ],
  "fried rice": [
    "harmonious",
    "restaurant"
  ],
  "frosted cookies": [
    "café",
    "shop"
  ],
  "frosted pretzels": [
    "café",
    "shop"
  ],
  "frozen mini snowperson": [
    "freezing cold",
    "living room"
  ],
  "frozen-treat set": [
    "freezing cold",
    "child's room"
  ],
  "fruit basket": [
    "kitchen",
    "fancy"
  ],
  "fruit cupcakes": [
    "café",
    "shop"
  ],
  "fruit pizza": [
    "party",
    "restaurant"
  ],
  "fruit salad": [
    "party",
    "restaurant"
  ],
  "fruit scones": [
    "café",
    "shop"
  ],
  "fruit-topped pancakes": [
    "café",
    "shop"
  ],
  "frying pan": [
    "kitchen",
    "restaurant"
  ],
  "futuristic meal": [
    "sci-fi",
    "facility"
  ],
  "garden gnome": [
    "garden"
  ],
  "glass holder with candle": [
    "living room",
    "stylish"
  ],
  "glass jar": [
    "kitchen",
    "shop"
  ],
  "globe": [
    "child's room",
    "school"
  ],
  "glowing-moss jar": [
    "sci-fi",
    "lab"
  ],
  "gnocchi di carote": [
    "café",
    "restaurant"
  ],
  "gnocchi di patate": [
    "café",
    "restaurant"
  ],
  "gnocchi di zucca": [
    "café",
    "restaurant"
  ],
  "gold bars": [
    "expensive",
    "ancient"
  ],
  "gold bug trophy": [
    "expensive"
  ],
  "gold fish trophy": [
    "expensive"
  ],
  "gold hha trophy": [
    "expensive"
  ],
  "gold turtle figurine": [
    "expensive",
    "harmonious"
  ],
  "golden arowana model": [
    "ocean",
    "facility"
  ],
  "golden candlestick": [
    "expensive",
    "horror"
  ],
  "golden decorative plate": [
    "expensive",
    "harmonious"
  ],
  "golden dharma": [
    "expensive",
    "harmonious"
  ],
  "golden dishes": [
    "kitchen",
    "expensive"
  ],
  "golden dung beetle": [
    "expensive",
    "ancient"
  ],
  "golden garden bunny": [
    "garden",
    "expensive"
  ],
  "golden piggy bank": [
    "expensive",
    "living room"
  ],
  "golden urn": [
    "expensive",
    "retro"
  ],
  "golden wristwatch": [
    "expensive",
    "den"
  ],
  "gratin": [
    "kitchen",
    "party"
  ],
  "grilled sea bass with herbs": [
    "party",
    "restaurant"
  ],
  "hamster cage": [
    "living room",
    "school"
  ],
  "handy water cooler": [
    "fitness",
    "sports"
  ],
  "heart-shaped bouquet": [
    "fancy",
    "expensive"
  ],
  "hearty ramen": [
    "harmonious",
    "restaurant"
  ],
  "hello kitty planter": [
    "fancy",
    "garden"
  ],
  "holiday candle": [
    "party",
    "fancy"
  ],
  "homework set": [
    "school",
    "child's room"
  ],
  "hourglass": [
    "kitchen",
    "living room"
  ],
  "hula doll": [
    "heritage",
    "ocean"
  ],
  "humidifier": [
    "office",
    "living room"
  ],
  "hyacinth lamp": [
    "fancy"
  ],
  "iced caffè latte": [
    "café",
    "restaurant"
  ],
  "iced coffee": [
    "café",
    "restaurant"
  ],
  "iced lemon tea": [
    "café",
    "restaurant"
  ],
  "imperial pot": [
    "restaurant",
    "harmonious"
  ],
  "incense burner": [
    "harmonious",
    "heritage"
  ],
  "infused-water dispenser": [
    "kitchen",
    "café"
  ],
  "instant noodles": [
    "supermarket",
    "child's room"
  ],
  "ironing set": [
    "living room"
  ],
  "japanese-style meal": [
    "harmonious",
    "restaurant"
  ],
  "jarred bamboo shoots": [
    "harmonious",
    "restaurant"
  ],
  "jarred mushrooms": [
    "kitchen",
    "supermarket"
  ],
  "judge's bell": [
    "sports"
  ],
  "kabu ankake": [
    "harmonious",
    "restaurant"
  ],
  "kagamimochi": [
    "harmonious"
  ],
  "karei no nitsuke": [
    "restaurant",
    "harmonious"
  ],
  "kerokerokeroppi doll": [
    "retro",
    "harmonious"
  ],
  "kerokerokeroppi snack": [
    "café",
    "harmonious"
  ],
  "ketchup fried rice": [
    "european",
    "restaurant"
  ],
  "kettle": [
    "kitchen",
    "restaurant"
  ],
  "kettlebell": [
    "fitness"
  ],
  "key tray": [
    "living room"
  ],
  "knife block": [
    "kitchen",
    "restaurant"
  ],
  "lab-experiments set": [
    "school",
    "lab"
  ],
  "lantern": [
    "outdoors"
  ],
  "laptop": [
    "office",
    "living room"
  ],
  "lcd tv (20 in.)": [
    "living room"
  ],
  "lcd tv (50 in.)": [
    "living room"
  ],
  "libra scale": [
    "expensive"
  ],
  "life ring": [
    "ocean",
    "resort"
  ],
  "lucky cat": [
    "heritage",
    "harmonious"
  ],
  "lucky gold cat": [
    "expensive"
  ],
  "luncheon plate meal": [
    "café",
    "restaurant"
  ],
  "magazine": [
    "living room",
    "child's room"
  ],
  "magazine rack": [
    "living room",
    "shop"
  ],
  "magic kit": [
    "child's room",
    "city life"
  ],
  "makeup pouch": [
    "fancy"
  ],
  "marigold decoration": [
    "party"
  ],
  "matryoshka": [
    "heritage",
    "fancy"
  ],
  "melon soda": [
    "café",
    "restaurant"
  ],
  "metal can": [
    "workshop"
  ],
  "metal pot": [
    "retro",
    "european"
  ],
  "metronome": [
    "music",
    "school"
  ],
  "microscope": [
    "school",
    "lab"
  ],
  "microwave": [
    "kitchen",
    "café"
  ],
  "milkshake": [
    "café",
    "restaurant"
  ],
  "minestrone soup": [
    "café",
    "restaurant"
  ],
  "mini circuit": [
    "child's room"
  ],
  "mini dharma": [
    "harmonious",
    "heritage"
  ],
  "mini golden dharma": [
    "expensive",
    "harmonious"
  ],
  "mini-cactus set": [
    "living room",
    "garden"
  ],
  "miso ramen": [
    "harmonious",
    "restaurant"
  ],
  "mixed-fruits bagel sandwich": [
    "café",
    "shop"
  ],
  "mixed-fruits crepe": [
    "café",
    "party"
  ],
  "mixed-fruits pie": [
    "café",
    "party"
  ],
  "mixed-fruits sandwich": [
    "café",
    "party"
  ],
  "mixed-fruits tart": [
    "café",
    "party"
  ],
  "mixer": [
    "kitchen",
    "den"
  ],
  "model kit": [
    "child's room",
    "workshop"
  ],
  "model kits": [
    "child's room",
    "shop"
  ],
  "modeling clay": [
    "school",
    "child's room"
  ],
  "modern cash register": [
    "shop",
    "supermarket"
  ],
  "mom's candle set": [
    "living room",
    "fancy"
  ],
  "mom's cushion": [
    "living room",
    "fancy"
  ],
  "mom's homemade cake": [
    "living room",
    "fancy"
  ],
  "mom's pen stand": [
    "living room",
    "fancy"
  ],
  "mom's plushie": [
    "living room",
    "fancy"
  ],
  "mom's tea cozy": [
    "living room",
    "fancy"
  ],
  "mom's tissue box": [
    "living room",
    "fancy"
  ],
  "moon cakes": [
    "living room",
    "harmonious"
  ],
  "moss ball": [
    "harmonious",
    "garden"
  ],
  "mug": [
    "kitchen",
    "café"
  ],
  "mushroom crepe": [
    "café",
    "party"
  ],
  "mushroom curry": [
    "restaurant",
    "harmonious"
  ],
  "mushroom pizza": [
    "party",
    "restaurant"
  ],
  "mushroom potage": [
    "café",
    "restaurant"
  ],
  "mushroom salad": [
    "party",
    "restaurant"
  ],
  "nail-art set": [
    "stylish",
    "fancy"
  ],
  "nanakusa gayu": [
    "harmonious"
  ],
  "nearly busted radio": [
    "workshop",
    "horror"
  ],
  "new year's noodles": [
    "living room",
    "kitchen"
  ],
  "newton's cradle": [
    "school",
    "lab"
  ],
  "nigirizushi": [
    "harmonious",
    "restaurant"
  ],
  "nintendo switch": [
    "child's room",
    "living room"
  ],
  "nintendo switch lite": [
    "child's room",
    "living room"
  ],
  "nook inc. cushion": [
    "living room"
  ],
  "nook inc. toilet paper": [
    "bathroom"
  ],
  "nova light": [
    "space",
    "fancy"
  ],
  "nuptial ring pillow": [
    "party",
    "expensive"
  ],
  "nutcracker": [
    "heritage",
    "european"
  ],
  "office materials": [
    "office",
    "school"
  ],
  "oil lamp": [
    "school",
    "lab"
  ],
  "old-fashioned alarm clock": [
    "living room",
    "child's room"
  ],
  "old-fashioned washtub": [
    "bathroom",
    "retro"
  ],
  "olive-flounder meunière": [
    "kitchen",
    "party"
  ],
  "olivier salad": [
    "living room",
    "kitchen"
  ],
  "omurice": [
    "european",
    "restaurant"
  ],
  "orange jelly": [
    "café",
    "party"
  ],
  "orange marmalade": [
    "kitchen",
    "shop"
  ],
  "orange pie": [
    "party",
    "shop"
  ],
  "orange pound cake": [
    "café",
    "shop"
  ],
  "orange smoothie": [
    "café",
    "restaurant"
  ],
  "orange tart": [
    "café",
    "party"
  ],
  "organic bread": [
    "café",
    "shop"
  ],
  "ornament table lamp": [
    "party",
    "expensive"
  ],
  "osechi": [
    "harmonious",
    "party"
  ],
  "owl clock": [
    "living room",
    "expensive"
  ],
  "pad krapow": [
    "harmonious",
    "restaurant"
  ],
  "paint cans": [
    "workshop"
  ],
  "painting set": [
    "school",
    "child's room"
  ],
  "pancakes": [
    "café",
    "shop"
  ],
  "paper tiger": [
    "harmonious"
  ],
  "paradise planning candles": [
    "living room"
  ],
  "paradise planning cushion": [
    "living room"
  ],
  "paradise planning mug": [
    "child's room",
    "living room"
  ],
  "paradise planning photo": [
    "living room"
  ],
  "paradise planning planter": [
    "garden",
    "local"
  ],
  "paradise planning tissues": [
    "living room"
  ],
  "peach jam": [
    "kitchen",
    "shop"
  ],
  "peach jelly": [
    "café",
    "party"
  ],
  "peach pie": [
    "party",
    "shop"
  ],
  "peach smoothie": [
    "café",
    "restaurant"
  ],
  "peach surprise box": [
    "child's room",
    "fancy"
  ],
  "peach tart": [
    "café",
    "party"
  ],
  "pear jam": [
    "kitchen",
    "shop"
  ],
  "pear jelly": [
    "café",
    "party"
  ],
  "pear pie": [
    "party",
    "shop"
  ],
  "pear smoothie": [
    "café",
    "restaurant"
  ],
  "pear tart": [
    "café",
    "party"
  ],
  "pedal board": [
    "concert",
    "facility"
  ],
  "pesce all'acqua pazza": [
    "party",
    "restaurant"
  ],
  "pet food bowl": [
    "living room",
    "garden"
  ],
  "phonograph": [
    "expensive",
    "retro"
  ],
  "pickled veggies": [
    "kitchen",
    "shop"
  ],
  "picnic basket": [
    "outdoors",
    "resort"
  ],
  "piggy bank": [
    "living room",
    "child's room"
  ],
  "pilaf": [
    "european",
    "restaurant"
  ],
  "pile of cash": [
    "expensive"
  ],
  "pine bonsai tree": [
    "harmonious",
    "garden"
  ],
  "pizza margherita": [
    "party",
    "restaurant"
  ],
  "plain cupcakes": [
    "café",
    "shop"
  ],
  "plain scones": [
    "café",
    "shop"
  ],
  "plasma ball": [
    "child's room",
    "sci-fi"
  ],
  "plastic canister": [
    "workshop",
    "garden"
  ],
  "pocket modern camper": [
    "child's room"
  ],
  "pocket vintage camper": [
    "child's room"
  ],
  "poke": [
    "party",
    "restaurant"
  ],
  "pompompurin pudding": [
    "fancy",
    "café"
  ],
  "pop-up book": [
    "child's room"
  ],
  "pop-up toaster": [
    "kitchen",
    "café"
  ],
  "popcorn snack set": [
    "facility"
  ],
  "porcelain vase": [
    "harmonious",
    "heritage"
  ],
  "portable radio": [
    "outdoors"
  ],
  "portable record player": [
    "shop",
    "retro"
  ],
  "pot": [
    "harmonious",
    "retro"
  ],
  "potato curry": [
    "restaurant",
    "harmonious"
  ],
  "potato galette": [
    "restaurant",
    "shop"
  ],
  "potato potage": [
    "café",
    "restaurant"
  ],
  "potted starter plants": [
    "local",
    "garden"
  ],
  "pound cake": [
    "café",
    "shop"
  ],
  "power stone": [
    "fantasy"
  ],
  "premium nigirizushi": [
    "harmonious",
    "restaurant"
  ],
  "pretzels": [
    "café",
    "shop"
  ],
  "pro coffee grinder": [
    "café"
  ],
  "pro tape recorder": [
    "retro",
    "music"
  ],
  "professional headphones": [
    "music",
    "concert"
  ],
  "protein shaker bottle": [
    "sports",
    "fitness"
  ],
  "public telephone": [
    "city life",
    "retro"
  ],
  "pull-apart bread": [
    "party",
    "restaurant"
  ],
  "pumpkin bagel sandwich": [
    "café",
    "shop"
  ],
  "pumpkin cupcakes": [
    "café",
    "shop"
  ],
  "pumpkin curry": [
    "restaurant",
    "harmonious"
  ],
  "pumpkin pie": [
    "kitchen",
    "party"
  ],
  "pumpkin pound cake": [
    "café",
    "shop"
  ],
  "pumpkin scones": [
    "café",
    "shop"
  ],
  "pumpkin soup": [
    "café",
    "restaurant"
  ],
  "puppy plushie": [
    "child's room",
    "fancy"
  ],
  "rattan table lamp": [
    "living room",
    "resort"
  ],
  "rattan towel basket": [
    "bathroom",
    "resort"
  ],
  "record box": [
    "music",
    "retro"
  ],
  "recycled-can thumb piano": [
    "concert",
    "music"
  ],
  "recycled-paper bundle": [
    "city life",
    "workshop"
  ],
  "reese & cyrus photo plate": [
    "party",
    "fancy"
  ],
  "resetti model": [
    "workshop",
    "child's room"
  ],
  "revolving spice rack": [
    "kitchen",
    "restaurant"
  ],
  "rice cooker": [
    "kitchen",
    "restaurant"
  ],
  "ring": [
    "expensive",
    "fancy"
  ],
  "ring light": [
    "facility",
    "den"
  ],
  "ring-con": [
    "fitness",
    "living room"
  ],
  "ringtoss": [
    "child's room",
    "fancy"
  ],
  "risotto": [
    "european",
    "restaurant"
  ],
  "roost sablé cookie": [
    "café",
    "shop"
  ],
  "rotary phone": [
    "living room",
    "retro"
  ],
  "rover's briefcase": [
    "living room"
  ],
  "salad": [
    "party",
    "restaurant"
  ],
  "salad-stuffed tomato": [
    "party",
    "restaurant"
  ],
  "salade de carottes râpées": [
    "party",
    "restaurant"
  ],
  "salmon bagel sandwich": [
    "café",
    "shop"
  ],
  "salmon sandwich": [
    "café",
    "party"
  ],
  "sampler": [
    "concert",
    "music"
  ],
  "sandwich plate meal": [
    "café",
    "restaurant"
  ],
  "sardines in oil": [
    "kitchen",
    "shop"
  ],
  "sautéed olive flounder": [
    "restaurant"
  ],
  "savory bread": [
    "café",
    "shop"
  ],
  "scorpio lamp": [
    "expensive",
    "horror"
  ],
  "scrapbook": [
    "child's room"
  ],
  "sea globe": [
    "living room",
    "ocean"
  ],
  "sea-bass pie": [
    "party",
    "restaurant"
  ],
  "seafood ajillo": [
    "café",
    "shop"
  ],
  "seafood pizza": [
    "party",
    "restaurant"
  ],
  "seafood salad": [
    "party",
    "restaurant"
  ],
  "seaweed soup": [
    "harmonious",
    "restaurant"
  ],
  "sewing machine": [
    "living room",
    "apparel shop"
  ],
  "sewing project": [
    "living room"
  ],
  "shaved-ice maker": [
    "kitchen",
    "ocean"
  ],
  "shell": [
    "fancy",
    "child's room"
  ],
  "shell lamp": [
    "ocean"
  ],
  "shell music box": [
    "ocean",
    "fancy"
  ],
  "shell speaker": [
    "ocean"
  ],
  "shio ramen": [
    "harmonious",
    "restaurant"
  ],
  "shopping bag": [
    "supermarket",
    "kitchen"
  ],
  "shopping basket": [
    "supermarket"
  ],
  "shoyu ramen": [
    "harmonious",
    "restaurant"
  ],
  "silver bug trophy": [
    "expensive"
  ],
  "silver fish trophy": [
    "expensive"
  ],
  "silver hha trophy": [
    "expensive"
  ],
  "simple kettle": [
    "kitchen",
    "restaurant"
  ],
  "siphon": [
    "café"
  ],
  "siren": [
    "city life"
  ],
  "skateboard": [
    "park",
    "sports"
  ],
  "slr camera": [
    "living room",
    "outdoors"
  ],
  "small vase": [
    "harmonious"
  ],
  "snack": [
    "child's room"
  ],
  "snack bread": [
    "café",
    "shop"
  ],
  "snow globe": [
    "living room",
    "freezing cold"
  ],
  "songpyeon": [
    "living room",
    "harmonious"
  ],
  "soup kettle": [
    "kitchen",
    "restaurant"
  ],
  "spaghetti carbonara": [
    "european",
    "restaurant"
  ],
  "spaghetti genovese": [
    "european",
    "restaurant"
  ],
  "spaghetti marinara": [
    "café",
    "restaurant"
  ],
  "spaghetti napolitan": [
    "café",
    "restaurant"
  ],
  "spaghetti peperoncino": [
    "european",
    "restaurant"
  ],
  "spooky candy set": [
    "horror",
    "party"
  ],
  "spooky cookies": [
    "horror",
    "party"
  ],
  "spooky lantern": [
    "horror"
  ],
  "spooky table setting": [
    "horror",
    "party"
  ],
  "spooky trick lamp": [
    "horror"
  ],
  "spray can": [
    "workshop",
    "lab"
  ],
  "squid-ink curry": [
    "restaurant",
    "harmonious"
  ],
  "squid-ink spaghetti": [
    "café",
    "restaurant"
  ],
  "stack of books": [
    "den",
    "living room"
  ],
  "stack of clothes": [
    "apparel shop",
    "bathroom"
  ],
  "stacked bags": [
    "workshop",
    "construction site"
  ],
  "stacked bottle crates": [
    "supermarket",
    "workshop"
  ],
  "stacked magazines": [
    "workshop",
    "child's room"
  ],
  "stacked shoeboxes": [
    "apparel shop",
    "workshop"
  ],
  "stand mixer": [
    "café",
    "restaurant"
  ],
  "star clock": [
    "space",
    "fancy"
  ],
  "steamer-basket set": [
    "harmonious",
    "restaurant"
  ],
  "stewpot": [
    "kitchen",
    "restaurant"
  ],
  "stovetop espresso maker": [
    "kitchen",
    "café"
  ],
  "strapped books": [
    "school",
    "den"
  ],
  "strawberry soda": [
    "café",
    "restaurant"
  ],
  "sturdy paper bag": [
    "apparel shop",
    "shop"
  ],
  "sturdy sewing box": [
    "living room",
    "retro"
  ],
  "succulent plant": [
    "living room"
  ],
  "sugar crepe": [
    "café",
    "party"
  ],
  "super mushroom": [
    "fancy",
    "child's room"
  ],
  "super star": [
    "fancy",
    "child's room"
  ],
  "super-premium nigirizushi": [
    "harmonious",
    "restaurant"
  ],
  "surichwi tteok": [
    "living room",
    "harmonious"
  ],
  "table lamp": [
    "den",
    "child's room"
  ],
  "table setting": [
    "restaurant",
    "expensive"
  ],
  "tablet device": [
    "office",
    "den"
  ],
  "tabletop festive tree": [
    "party",
    "fancy"
  ],
  "tabletop pop display": [
    "apparel shop",
    "shop"
  ],
  "tabletop record player": [
    "concert",
    "party"
  ],
  "tangled cords": [
    "office",
    "horror"
  ],
  "tangyuan": [
    "harmonious"
  ],
  "tantanmen": [
    "harmonious",
    "restaurant"
  ],
  "tape deck": [
    "living room",
    "retro"
  ],
  "tea set": [
    "kitchen",
    "café"
  ],
  "terrarium": [
    "living room",
    "stylish"
  ],
  "thank-you dad mug": [
    "living room",
    "den"
  ],
  "thank-you mom mug": [
    "living room",
    "fancy"
  ],
  "throwback container": [
    "child's room",
    "city life"
  ],
  "throwback gothic mirror": [
    "child's room",
    "horror"
  ],
  "throwback skull radio": [
    "child's room",
    "horror"
  ],
  "throwback wrestling figure": [
    "child's room",
    "sports"
  ],
  "thumbprint jam cookies": [
    "café",
    "shop"
  ],
  "tin bucket": [
    "workshop",
    "school"
  ],
  "tin robot": [
    "child's room",
    "sci-fi"
  ],
  "tissue box": [
    "living room",
    "office"
  ],
  "tomates al ajillo": [
    "party",
    "restaurant"
  ],
  "tomato bagel sandwich": [
    "café",
    "restaurant"
  ],
  "tomato curry": [
    "restaurant",
    "harmonious"
  ],
  "tomato juice": [
    "café",
    "restaurant"
  ],
  "tomato puree": [
    "kitchen",
    "supermarket"
  ],
  "toolbox": [
    "workshop"
  ],
  "toothbrush-and-cup set": [
    "bathroom"
  ],
  "touchscreen cash register": [
    "supermarket",
    "shop"
  ],
  "toy box": [
    "child's room",
    "fancy"
  ],
  "toy centipede": [
    "child's room",
    "horror"
  ],
  "toy cockroach": [
    "child's room",
    "horror"
  ],
  "toy duck": [
    "public bath",
    "bathroom"
  ],
  "traditional balancing toy": [
    "child's room",
    "fancy"
  ],
  "traditional tea set": [
    "harmonious",
    "café"
  ],
  "tree's bounty lamp": [
    "fancy",
    "nature"
  ],
  "tree's bounty little tree": [
    "party",
    "fancy"
  ],
  "turkey day casserole": [
    "kitchen"
  ],
  "turkey day decorations": [
    "living room",
    "party"
  ],
  "turkey day table setting": [
    "kitchen",
    "party"
  ],
  "turkey day wheat decor": [
    "party"
  ],
  "turnip salad": [
    "party",
    "restaurant"
  ],
  "tv with vcr": [
    "living room",
    "retro"
  ],
  "twelve-grape dish": [
    "living room",
    "party"
  ],
  "typewriter": [
    "den",
    "retro"
  ],
  "ukulele": [
    "ocean",
    "resort"
  ],
  "unfinished puzzle": [
    "child's room"
  ],
  "unfolded reference sheet": [
    "den",
    "office"
  ],
  "unglazed dish set": [
    "kitchen",
    "shop"
  ],
  "upright speaker": [
    "living room"
  ],
  "veggie basket": [
    "local",
    "supermarket"
  ],
  "veggie cookies": [
    "café",
    "shop"
  ],
  "veggie crepe": [
    "café",
    "party"
  ],
  "veggie cupcakes": [
    "café",
    "shop"
  ],
  "veggie plate meal": [
    "restaurant",
    "café"
  ],
  "veggie quiche": [
    "café",
    "party"
  ],
  "veggie sandwich": [
    "café",
    "party"
  ],
  "veggie sandwich set": [
    "restaurant",
    "café"
  ],
  "vine lamp": [
    "nature",
    "fantasy"
  ],
  "water bird": [
    "school",
    "child's room"
  ],
  "wedding cake": [
    "party",
    "fancy"
  ],
  "wedding candle set": [
    "party",
    "fancy"
  ],
  "western-style meal": [
    "restaurant"
  ],
  "whoopee cushion": [
    "child's room",
    "party"
  ],
  "windflower fan": [
    "fancy",
    "nature"
  ],
  "wobbling zipper toy": [
    "fancy",
    "child's room"
  ],
  "wooden bucket": [
    "garden",
    "local"
  ],
  "wooden fish": [
    "harmonious"
  ],
  "wooden music box": [
    "child's room",
    "fancy"
  ],
  "wooden table mirror": [
    "child's room",
    "living room"
  ],
  "wooden toolbox": [
    "workshop"
  ],
  "wooden-block toy": [
    "child's room"
  ],
  "wristwatch": [
    "den",
    "expensive"
  ],
  "yule log": [
    "living room",
    "party"
  ],
  "yunomi teacup": [
    "heritage",
    "harmonious"
  ],
  "yut nori": [
    "living room",
    "child's room"
  ],
  "zodiac boar figurine": [
    "harmonious",
    "heritage"
  ],
  "zodiac dog figurine": [
    "harmonious",
    "heritage"
  ],
  "zodiac dragon figurine": [
    "harmonious",
    "heritage"
  ],
  "zodiac horse figurine": [
    "harmonious",
    "heritage"
  ],
  "zodiac monkey figurine": [
    "harmonious",
    "heritage"
  ],
  "zodiac ox figurine": [
    "harmonious",
    "heritage"
  ],
  "zodiac pig figurine": [
    "harmonious",
    "heritage"
  ],
  "zodiac rabbit figurine": [
    "harmonious",
    "heritage"
  ],
  "zodiac rat figurine": [
    "harmonious",
    "heritage"
  ],
  "zodiac rooster figurine": [
    "harmonious",
    "heritage"
  ],
  "zodiac sheep figurine": [
    "harmonious",
    "heritage"
  ],
  "zodiac snake figurine": [
    "harmonious",
    "heritage"
  ],
  "zodiac tiger figurine": [
    "harmonious",
    "heritage"
  ],
  "π pie": [
    "party",
    "shop"
  ]
};

const hhaCategories = [
  "ac",
  "appliance",
  "audio",
  "clock",
  "doll",
  "dresser",
  "food",
  "kitchen",
  "lighting",
  "musicalinstrument",
  "pet",
  "plant",
  "smallgoods",
  "trash",
  "tv"
];

const hhaConcepts = [
  "amusement park",
  "ancient",
  "apparel shop",
  "arcade",
  "bathroom",
  "café",
  "child's room",
  "city life",
  "concert",
  "construction site",
  "den",
  "european",
  "expensive",
  "facility",
  "fancy",
  "fantasy",
  "fitness",
  "freezing cold",
  "garden",
  "harmonious",
  "heritage",
  "horror",
  "hospital",
  "kitchen",
  "lab",
  "living room",
  "local",
  "music",
  "nature",
  "ocean",
  "office",
  "outdoors",
  "park",
  "party",
  "public bath",
  "resort",
  "restaurant",
  "retro",
  "school",
  "sci-fi",
  "shop",
  "space",
  "sports",
  "stylish",
  "supermarket",
  "workshop"
];
