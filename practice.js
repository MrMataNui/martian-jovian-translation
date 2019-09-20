$(() =>{

	// code written by MrMataNui
	var punctuation = ['!', '.', '?', ',', ';', ':', '"', "'" ];
	var punctuate = [];
	var toWho = ['ME','YOU','HIM', 'HER', 'IT', 'US', 'THEM'];
	var numWords = {Zero: '0', One: '1', Two: '2', Three: '3', Four: '4', Five: '5', Six: '6', Seven: '7', Eight: '8', Nine: '9', Ten: '10', Eleven: '11', Twelve: '12', Thirteen: '13', Fourteen: '14', Fifteen: '15'};
	var wordPlacement = { Would: 'verb', Beard: 'noun', Air: 'noun', City: 'noun', Urban: 'adjective', Perfect: 'adjective', Perfection: 'noun', Point: 'verb', Train: 'noun', Food: 'noun', Manage: 'verb', Level: 'noun', Not_hit: 'verb', Prove: 'verb', Proof: 'noun', Ground: 'noun', Muscle: 'noun', Wolf: 'noun', Combine: 'verb', Politics: 'noun', Politician: 'noun', Pass: 'verb', Stamp: 'verb', Not_take_advantage_of: 'verb', Stuff: 'noun', Skull: 'noun', Home: 'noun', Rail: 'noun', Square: 'noun', Read: 'verb', Cotton: 'noun', Factor: 'noun', Thousand: 'number', Population: 'noun', Energy: 'noun', Sail: 'verb', Sailor: 'noun', Assassin: 'noun', Thing: 'noun', Earth: 'noun', Relationship: 'noun', Horizon: 'noun', Dragon: 'noun', Plane: 'noun', Federal: 'adjective', Policy: 'noun', Pay: 'verb', Blank: 'adjective', Sweet: 'adjective', Skirt: 'noun', Miniskirt: 'noun', Bath: 'noun', Form: 'verb', Carry: 'verb', Human: 'adjective', Coffee: 'noun', Cafe: 'noun', Pain: 'noun', Painful: 'adjective', Cream: 'noun', Guide: 'noun', Certainly: 'adverb', Carriage: 'noun', Grey: 'adjective', Figure: 'noun', Sky: 'noun', Space: 'noun', Frown: 'verb', Frown: 'noun', Rent: 'verb', Purpose: 'noun', Anything: 'pronoun', Change: 'verb', Into: 'preposition', List: 'noun', Seek: 'verb', Most: 'adverb', Lock: 'noun', Locksmith: 'noun', Student: 'noun', Look: 'verb', Same: 'determiner', Team: 'noun', Discuss: 'verb', Flower: 'noun', Success: 'noun', Build: 'verb', Florist: 'noun', Successful: 'adjective', Diamond: 'noun', Skill: 'noun', Skilled: 'adjective', Blood: 'noun', Bloody: 'adjective', Vein: 'noun', Single: 'adjective', Calculate: 'verb', Opinion: 'noun', Drop: 'verb', Nephew: 'noun', President: 'noun', Worm: 'noun', Climate: 'noun', Smell: 'verb', Evening: 'noun', Fat: 'adjective', Fat: 'noun', Party: 'noun', Throw: 'verb', Sense: 'noun', Expression: 'noun', Cry: 'verb', Baby: 'noun', Community: 'noun', Hallway: 'noun', Plant: 'noun', System: 'noun', Well: 'adverb', Strap: 'noun', Comfort: 'noun', Per: 'preposition', Breath: 'noun', Breathe: 'verb', School: 'noun', Teacher: 'noun', Own: 'determiner', Kidnap: 'verb', Damage: 'verb', Count: 'verb', Up: 'adverb', Rank: 'noun', Limp: 'verb', Country: 'noun', Rock: 'noun', Stone: 'noun', Phone: 'noun', Really: 'adverb', Dead: 'adjective', Stream: 'noun', Sound: 'noun', Sign: 'verb', Regret: 'verb', Weak: 'adjective', Site: 'noun', Empty: 'adjective', Close: 'verb', Tooth: 'noun', Away: 'adverb', Need: 'verb', Yes: 'interjection', Something: 'pronoun', Nice: 'adjective', Send: 'verb', Claim: 'verb', Term: 'noun', Gun: 'noun', Increase: 'verb', Subject: 'noun', Enough: 'adverb', Stab: 'verb', Down: 'adverb', Island: 'noun', Frequent: 'adjective', Touch: 'verb', Touch: 'noun', Entire: 'adjective', About: 'preposition', Remove: 'verb', Plot: 'noun', Blank: 'adjective', White: 'adjective', Job: 'noun', Clean: 'verb', Clean: 'adjective', Early: 'adverb', Similar: 'adjective', One: 'noun', Toy: 'noun', Sponge: 'noun', Cave: 'noun', East: 'noun', Yesterday: 'adverb', Ass: 'noun', Boyfriend: 'noun', Question: 'noun', Question: 'verb', Information: 'noun', Nail: 'noun', Everybody: 'pronoun', Basket: 'noun', Care: 'verb', Careful: 'adjective', Crime: 'noun', Rule: 'noun', Flavour: 'noun', Flavoursome: 'adjective', Rich: 'adjective', As: 'conjuction', I: 'pronounP', Adjustment: 'noun', Support: 'verb', Support: 'noun', Pretty: 'adverb', Cut: 'verb', Cut: 'noun', Salt: 'noun', Thread: 'noun', Rain: 'noun', Plan: 'noun', Anxious: 'adjective', Anxiety: 'noun', Hear: 'verb', Hearing: 'noun', Bake: 'verb', Berry: 'noun', Oven: 'noun', Twist: 'verb', Belly: 'noun', Liquid: 'noun', Chemical: 'noun', Drink: 'verb', There: 'adverb', Believe: 'verb', Belief: 'noun', Than: 'preposition', Moment: 'noun', Uniform: 'noun', Holiday: 'noun', Orgasm: 'noun', Perform: 'verb', Off: 'preposition', Dry: 'adjective', Mine: 'pronounP', My: 'pronounP', Cigarette: 'noun', Stupid: 'adjective', Lay: 'verb', Me: 'pronounP', View: 'noun', To_me: 'pronounP', Who: 'pronoun', Age: 'noun', Woman: 'noun', Dig: 'verb', Shadow: 'noun', Before: 'adverb', Deep: 'adjective', Work: 'verb', Hand: 'noun', Decorative_bow: 'noun', Quality: 'noun', Indicate: 'verb', Difficult: 'adjective', Homosexual: 'adjective', Kettle: 'noun', Push: 'verb', Drive: 'verb', Driver: 'noun', Call: 'noun', Contain: 'verb', Building: 'noun', Side: 'noun', Appear: 'verb', Include: 'verb', All: 'adverb', Harmony: 'noun', Bottle: 'noun', Take_out: 'verb', Will: 'verb', Major: 'adjective', Sticky: 'adjective', Palm: 'noun', Metal: 'noun', Project: 'noun', Write: 'verb', Author: 'noun', Decade: 'noun', Cloak: 'noun', Today: 'adverb', Top: 'noun', Breast: 'noun', Starve: 'verb', Wait: 'verb', Onto: 'preposition', To: 'preposition', Recent: 'adjective', Recently: 'adverb', Forehead: 'noun', Magazine: 'noun', Kill: 'verb', Killer: 'noun', Require: 'verb', Equal: 'adjective', Fan: 'noun', Big: 'adjective', Should: 'verb', Magic: 'noun', Journey: 'noun', Fashionable: 'adjective', Alcohol: 'noun', Drown: 'verb', Wise: 'adjective', Ornament: 'noun', Ring: 'verb', Cause: 'verb', Eye: 'noun', Protest: 'verb', Must: 'verb', Sex: 'noun', Sexy: 'adjective', Net: 'noun', Process: 'noun', Tell: 'verb', Without: 'preposition', Shit: 'verb', Shit: 'noun', Cow: 'noun', Cork: 'noun', People: 'noun', Smile: 'verb', Smile: 'noun', Fail: 'verb', Failure: 'noun', Head: 'verb', Save: 'verb', Thigh: 'noun', Suck: 'verb', Speak: 'verb', Speech: 'noun', Chest: 'noun', Treat: 'verb', Treatment: 'noun', Potion: 'noun', Catch: 'verb', Paper: 'noun', Mass: 'noun', Someone: 'pronoun', Verse: 'noun', Kitchen: 'noun', Circle: 'noun', Thus: 'adverb', Such: 'determiner', Stand: 'verb', Shield: 'noun', Set: 'verb', Here: 'adverb', Zero: 'number', Five: 'number', Cost: 'noun', Loud: 'adjective', Cake: 'noun', Rather: 'adverb', Compare: 'verb', Fund: 'verb', Fund: 'noun', Pubic_hair: 'noun', Power: 'noun', Powerful: 'adjective', Unit: 'noun', Sand: 'noun', Chin: 'noun', Reward: 'verb', Reward: 'noun', Leader: 'noun', Follow: 'verb', Jewel: 'noun', Few: 'determiner', Acid: 'noun', Prostitute: 'noun', Stiff: 'adjective', Boot: 'noun', Apple: 'noun', Ocean_wave: 'noun', Fashion: 'noun', Fashionable: 'adjective', Over: 'preposition', Second: 'noun', Government: 'noun', Flame: 'noun', Out: 'preposition', Order: 'noun', Government_official: 'noun', Room: 'noun', Fowl: 'noun', Bank: 'noun', Ink: 'noun', Produce: 'verb', Product: 'noun', Edge: 'noun', Limit: 'noun', Plant: 'noun', Tree: 'noun', Plough: 'verb', How: 'adverb', Work: 'noun', Humour: 'noun', Funny: 'adjective', Yellow: 'adjective', Employee: 'noun', Worker: 'noun', Piece: 'noun', Collar: 'noun', Rag: 'noun', Sleep: 'verb', Sleep: 'noun', Realize: 'verb', Day: 'noun', Sun: 'noun', Even: 'adverb', Rate: 'noun', Ring: 'verb', Settle: 'verb', Settlement: 'noun', Lead: 'verb', God: 'noun', Divine: 'adjective', Pray: 'verb', Course: 'adverb', Class: 'noun', Accent: 'noun', Region: 'noun', Result: 'noun', Copper: 'noun', Rifle: 'noun', Case: 'noun', Head: 'noun', All: 'determiner', Thunder: 'noun', Maybe: 'adverb', Dialect: 'noun', Salutation: 'verb', Salutation: 'noun', Masturbate: 'verb', Test: 'noun', Test: 'verb', End: 'noun', Evidence: 'noun', Evident: 'adjective', Stop: 'verb', Cloth: 'noun', Wheel: 'noun', Crown: 'noun', Past: 'noun', Particular: 'adjective', Period: 'noun', Stretch: 'verb', Clock: 'noun', Part: 'noun', Rather: 'preposition', Happy: 'adjective', Happiness: 'noun', Go_back: 'verb', Moss: 'noun', Put: 'verb', Probably: 'adverb', Complicate: 'verb', Ride: 'verb', Less: 'determiner', Cheese: 'noun', Glasses: 'noun', Glass: 'noun', Understand: 'verb', Argue: 'verb', Argument: 'noun', Age: 'verb', Value: 'noun', Ok: 'adverb', Water: 'noun', Tall: 'adjective', Design: 'verb', Letter: 'noun', Type: 'noun', Thin_object: 'adjective', Maintain: 'verb', First: 'number', Fog: 'noun', Butter: 'noun', TRUE: 'adjective', Truth: 'noun', Meat: 'noun', Adult: 'noun', Take: 'verb', Why: 'adverb', Whore: 'noun', Finally: 'adverb', Pocket: 'noun', Once: 'adverb', Better: 'adjective', Liver: 'noun', Especially: 'adverb', Structure: 'noun', Respect: 'verb', Respect: 'noun', Orange: 'adjective', Local: 'adjective', Tongue: 'noun', Seed: 'noun', Theory: 'noun', Leaf: 'noun', Easy: 'adjective', Rubbish: 'noun', Under: 'preposition', Ray: 'noun', Fruit: 'noun', High: 'adjective', Goat: 'noun', To_them: 'pronounP', Dirt: 'noun', Dirty: 'adjective', Ice: 'noun', Receive: 'verb', Interest: 'noun', Office: 'noun', Eight: 'number', Stomach: 'noun', If: 'conjuction', Later: 'adverb', Weather: 'noun', Chain: 'noun', See: 'verb', On: 'adverb', Profit: 'noun', Indeed: 'adverb', Either: 'adverb', Paint: 'noun', Paint: 'verb', Painter: 'noun', Painting: 'noun', Hiss: 'verb', Popular: 'adjective', Plain: 'noun', Series: 'noun', Army: 'noun', Lose: 'verb', Loss: 'noun', Fence: 'noun', Oil: 'noun', Owner: 'noun', Judge: 'noun', Mist: 'noun', Still: 'adverb', Fear: 'noun', Because: 'preposition', Public: 'adjective', Freeze: 'verb', Frost: 'noun', Music: 'noun', Then: 'adverb', Time: 'noun', Awful: 'adjective', Establish: 'verb', Silver: 'noun', Now: 'adverb', Ever: 'adverb', Theirs: 'pronounP', Their: 'pronounP', Rice: 'noun', Spend: 'verb', Cost: 'noun', Expensive: 'adjective', Full: 'adjective', Swim: 'verb', Located: 'verb', Person: 'noun', They: 'pronounP', Them: 'pronounP', Much: 'determiner', Pencil: 'noun', Waste: 'verb', Keep: 'verb', Flour: 'noun', Insect: 'noun', Personal: 'adjective', Vocabulary: 'noun', Help: 'verb', Help: 'noun', Soil: 'noun', Current: 'adjective', Shame: 'noun', Certain: 'adjective', Close: 'adverb', Place: 'noun', Threat: 'noun', Want: 'verb', Path: 'noun', Horn: 'noun', Shrine: 'noun', Offer: 'verb', Bite: 'verb', Print: 'noun', Scale: 'noun', Fork: 'noun', Wet: 'adjective', Two: 'number', Even: 'conjuction', Siege: 'noun', Hole: 'noun', Wear: 'verb', Shake: 'verb', Erase: 'verb', Snow: 'noun', Snow: 'verb', Train: 'verb', Training: 'noun', Likely: 'adjective', Advice: 'noun', Defend: 'verb', Defence: 'noun', News: 'noun', Ticket: 'noun', Education: 'noun', Attractive: 'adjective', Both: 'adverb', Good: 'adjective', Show: 'verb', Imagine: 'verb', Magic_spell: 'noun', Spelling: 'noun', Guy: 'noun', Everything: 'pronoun', Fat: 'noun', This: 'determiner', Law: 'noun', Lawyer: 'noun', Legal: 'adjective', Too: 'adverb', Pub: 'noun', Talk: 'verb', Although: 'conjuction', Dictionary: 'noun', Seat: 'noun', Sap: 'noun', Tide: 'noun', Girlfriend: 'noun', Different: 'adjective', Difference: 'noun', Tray: 'noun', Husband: 'noun', World: 'noun', Mirror: 'noun', Around: 'preposition', Throughout: 'preposition', Boil: 'verb', So: 'conjuction', End: 'verb', Enough: 'determiner', Worry: 'verb', Attack: 'verb', Attack: 'noun', Long_for: 'verb', Since: 'conjuction', Defecate: 'verb', Shoot: 'verb', Best: 'adverb', Lizard: 'noun', Bend: 'verb', Roof: 'noun', Check: 'verb', Wound: 'noun', West: 'noun', Through: 'preposition', Lean: 'verb', While: 'conjuction', Very: 'adverb', Needle: 'noun', Long: 'adverb', Length: 'noun', Goal: 'noun', Powder: 'noun', Drug: 'noun', Chemist: 'noun', Chalk: 'noun', Control: 'noun', With: 'preposition', Course: 'noun', Brother: 'noun', Hunt: 'noun', Hunter: 'noun', Hill: 'noun', Brass: 'noun', Vagina: 'noun', Learn: 'verb', Much: 'adverb', Where: 'conjuction', Size: 'noun', Scene: 'noun', Knee: 'noun', Tomb: 'noun', Ten: 'number', Coat: 'noun', Linen: 'noun', What: 'determiner', Toward: 'preposition', Finger: 'noun', History: 'noun', However: 'adverb', Allow: 'verb', Pipe: 'noun', Borrow: 'verb', Serious: 'adjective', Previous: 'adjective', Social: 'adjective', Act: 'verb', Row: 'verb', More: 'adverb', Only: 'adjective', Hunt: 'noun', Hunt: 'verb', Month: 'noun', Sour: 'adjective', Bulb: 'noun', Crystal: 'noun', Row: 'noun', Winter: 'noun', Luck: 'noun', Lucky: 'adjective', Pillow: 'noun', Slope: 'noun', Psychology: 'noun', Psychologist: 'noun', Irony: 'noun', Ironic: 'adjective', Mess: 'noun', Messy: 'adjective', Above: 'preposition', Shelf: 'noun', One: 'pronoun', Everyone: 'pronoun', Open: 'verb', Minute: 'noun', Usually: 'adverb', Hedge: 'noun', Kid: 'noun', Mother: 'noun', Thank: 'verb', Member: 'noun', Analyse: 'verb', Analysis: 'noun', Anyone: 'pronoun', Hint: 'verb', Hint: 'noun', Flood: 'verb', Flood: 'noun', Regular: 'adjective', Where: 'adverb', Try: 'verb', Material: 'noun', Bee: 'noun', Billion: 'number', Noise: 'noun', Dungeon: 'noun', Inside: 'preposition', Nest: 'noun', Sad: 'adjective', Sadness: 'noun', Roll: 'verb', Claw: 'noun', Price: 'noun', Hag: 'noun', Those: 'determiner', Smooth: 'adjective', Because: 'conjuction', Shore: 'noun', Only: 'adverb', Father: 'noun', Listen: 'verb', Break: 'verb', Broken: 'adjective', Danger: 'noun', Dangerous: 'adjective', Walk: 'verb', Unwell: 'adjective', Clothing: 'noun', Recipe: 'noun', Black: 'adjective', Note: 'verb', Nothing: 'pronoun', Business: 'noun', Medicine: 'noun', Tin: 'noun', Disease: 'noun', Reveal: 'verb', Light: 'noun', Including: 'preposition', Blasphemy: 'noun', Near: 'preposition', Often: 'adverb', Authority: 'noun', Hold: 'verb', Sign: 'noun', Against: 'preposition', Long: 'adjective', Riot: 'noun', Glue: 'noun', Library: 'noun', Language: 'noun', Us: 'pronounP', Decide: 'verb', Decision: 'noun', That: 'determiner', Action: 'noun', Cover: 'verb', Flirt: 'verb', Say: 'verb', Rub: 'verb', Until: 'conjuction', Pick: 'verb', Ours: 'pronounP', Our: 'pronounP', Vegetable: 'noun', Grocer: 'noun', Morning: 'noun', Early: 'adjective', Fall: 'verb', We: 'pronounP', To_us: 'pronounP', Officer: 'noun', Mud: 'noun', Name: 'verb', Umbrella: 'noun', Little: 'adjective', Way: 'noun', Wax: 'noun', Quite: 'adverb', Mail: 'noun', Book: 'noun', Colour: 'noun', Crack: 'noun', Crack: 'verb', Any: 'determiner', Tree_stick: 'noun', Credit: 'noun', Card: 'noun', Hundred: 'number', Present_time: 'noun', Earthquake: 'noun', Move: 'verb', Movement: 'noun', Floor: 'noun', Rise: 'verb', Area: 'noun', River: 'noun', Planet: 'noun', Brick: 'noun', Fact: 'noun', Offend: 'verb', Offensive: 'adjective', Beyond: 'preposition', Nine: 'number', Place: 'verb', Issue: 'noun', Lip: 'noun', Knife: 'noun', Around: 'adverb', Climb: 'verb', Pull: 'verb', To_be: 'verb', Servant: 'noun', Frame: 'noun', When: 'adverb', More: 'determiner', Respond: 'verb', Response: 'noun', Standard: 'noun', Short: 'adjective', Bay: 'noun', Condition: 'noun', Add: 'verb', Combine: 'verb', Worse: 'adjective', Special: 'adjective', Forward: 'adverb', Final: 'adjective', Away: 'preposition', Paste: 'noun', Brown: 'adjective', Pink: 'adjective', Use: 'verb', Eat: 'verb', Root: 'noun', Waist: 'noun', Cart: 'noun', Castle: 'noun', Right_direction: 'adjective', Erection: 'noun', Player: 'noun', Avoid: 'verb', Whether: 'conjuction', Watch: 'verb', Night: 'noun', Concern: 'noun', Make: 'verb', Market: 'noun', Car: 'noun', Teacher: 'noun', Breeze: 'noun', Hard: 'adjective', Soon: 'adverb', Monster: 'noun', Fur: 'noun', Situation: 'noun', Hood: 'noun', Blow: 'verb', Prepare_food: 'verb', Chef: 'noun', Voice: 'noun', Bottom: 'noun', Body_hair: 'noun', Fur: 'noun', Limit: 'noun', Bread: 'noun', In: 'adverb', Sword: 'noun', Drunk: 'adjective', Expect: 'verb', Become: 'verb', Always: 'adverb', Actually: 'adverb', Turn_on: 'verb', Hit: 'verb', Problem: 'noun', Float: 'verb', Whose: 'determiner', Call: 'verb', Among: 'preposition', Whole: 'adjective', Rest: 'noun', Art: 'noun', Artist: 'noun', Imitate: 'verb', Hospital: 'noun', Plate: 'noun', Comb: 'noun', Simple: 'adjective', Simply: 'adverb', Gate: 'noun', Hell: 'noun', Angry: 'adjective', Anger: 'noun', Other: 'pronoun', Transport: 'noun', Out: 'adverb', Individual: 'noun', Strong: 'adjective', Strength: 'noun', Attractive: 'adjective', Hot: 'adjective', Heat: 'noun', Beautiful: 'adjective', Beauty: 'noun', Lend: 'verb', Apply: 'verb', Perhaps: 'adverb', North: 'noun', Give: 'verb', Carcass: 'noun', Steel: 'noun', Receipt: 'noun', Know: 'verb', Knowledge: 'noun', Sudden: 'adjective', Suddenly: 'adverb', Position: 'noun', Puzzle: 'noun', Character: 'noun', Mend: 'verb', Pin: 'noun', Moon: 'noun', Think: 'verb', Thought: 'noun', Pensive: 'adjective', Cold: 'adjective', Important: 'adjective', Sport: 'noun', Wake_up: 'verb', Past: 'adjective', Thumb: 'noun', Foot: 'noun', Map: 'noun', Media: 'noun', Flat: 'adjective', Many: 'determiner', Already: 'adverb', Rhythm: 'noun', Jaw: 'noun', Bag: 'noun', Couple: 'noun', Bad: 'adjective', Slip: 'verb', Body: 'noun', Wall: 'noun', Polish: 'verb', Court: 'noun', Boss: 'noun', Point: 'noun', Pants: 'noun', Trousers: 'noun', Torch: 'noun', Canvas: 'noun', Sin: 'noun', Almost: 'adverb', Between: 'preposition', About: 'adverb', Focus: 'verb', From: 'preposition', Bill: 'noun', Over: 'adverb', In: 'preposition', Insurance: 'noun', Outside: 'preposition', Bridge: 'noun', Rumour: 'noun', Example: 'noun', Secret: 'noun', Secret: 'adjective', Article: 'noun', Far: 'adjective', Old: 'adjective', Enthusiast: 'noun', Mention: 'verb', Display: 'verb', Spoon: 'noun', Street: 'noun', Tonight: 'adverb', Pull: 'verb', Nature: 'noun', Natural: 'adjective', Manager: 'noun', Effort: 'noun', Bucket: 'noun', Murder: 'verb', Of: 'preposition', Else: 'adverb', Deal: 'verb', Station: 'noun', Feel: 'verb', Deal: 'noun', Wrong: 'adjective', Bone: 'noun', Behind: 'adverb', Grandmother: 'noun', Base: 'verb', Feeling: 'noun', Milk: 'noun', Grave: 'noun', Graveyard: 'noun', Brain: 'noun', Culture: 'noun', Cough: 'verb', Cough: 'noun', Bed: 'noun', Leather: 'noun', Taste: 'verb', Grandfather: 'noun', Sea: 'noun', Practise: 'verb', Research: 'noun', Divide: 'verb', Division: 'noun', During: 'preposition', Affect: 'verb', Century: 'noun', House: 'noun', Mark: 'verb', Mark: 'noun', Mansion: 'noun', Fine: 'adjective', Ancestor: 'noun', Forefather: 'noun', Design: 'noun', Race: 'noun', Style: 'noun', Drawer: 'noun', Firm: 'adjective', Dust: 'noun', Smoke: 'noun', Bird: 'noun', Ship: 'noun', Sink: 'verb', Grind: 'verb', Fire: 'noun', Best: 'adjective', Common: 'adjective', Writer: 'noun', Foreign: 'adjective', Foreigner: 'noun', Little: 'adverb', Quiet: 'adjective', Red: 'adjective', Cup: 'noun', Grain: 'noun', Mean: 'verb', Die: 'verb', Death: 'noun', On: 'preposition', Which: 'determiner', Free: 'adjective', Request: 'verb', Fertile: 'adjective', Fertility: 'noun', Store: 'noun', Love: 'verb', Love: 'noun', Lover: 'noun', Shirt: 'noun', These: 'determiner', Cat: 'noun', Kitten: 'noun', Branch: 'noun', Mind: 'noun', Across: 'preposition', Possible: 'adjective', Possibility: 'noun', Hill: 'noun', Mountain: 'noun', Poison: 'noun', Jerk: 'verb', Fold: 'verb', Fold: 'noun', Match: 'noun', Interrupt: 'verb', Never: 'adverb', South: 'noun', Armour: 'noun', Weight: 'noun', Weigh: 'verb', Prison: 'noun', Data: 'noun', Prisoner: 'noun', Louse: 'noun', Mint: 'noun', Please: 'verb', Pleasure: 'noun', Name: 'noun', Well: 'noun', Disease: 'noun', Room_of_house: 'noun', Glove: 'noun', Instead: 'adverb', Feather: 'noun', Reach: 'verb', Guess: 'verb', Guess: 'noun', Nation: 'noun', Like: 'verb', Direction: 'noun', Female: 'adjective', Sure: 'adjective', Amount: 'noun', Future: 'noun', Economy: 'noun', Economic: 'adjective', Cell: 'noun', Garden: 'noun', Gardener: 'noun', Wash: 'verb', Wash: 'verb', General: 'adjective', Be: 'verb', Since: 'preposition', Stage: 'noun', Whatever: 'determiner', At: 'preposition', Outer_space: 'noun', Ant: 'noun', Effect: 'noun', Camera: 'noun', Valley: 'noun', Instrument: 'noun', Sometimes: 'adverb', Second: 'number', Somebody: 'pronoun', Shoe: 'noun', Blade: 'noun', No: 'interjection', Not: 'negation', Three: 'number', Challenge: 'noun', Group: 'noun', Pen: 'noun', Sock: 'noun', Brake: 'verb', Saddle: 'noun', That: 'adverb', Technology: 'noun', Technological: 'adjective', Weapon: 'noun', Armoury: 'noun', Message: 'noun', Control: 'verb', Brothel: 'noun', Iron: 'noun', Subtle: 'adjective', Subtlety: 'noun', Stitch: 'noun', Stitch: 'verb', Necessary: 'adjective', Sheep: 'noun', Remain: 'verb', Less: 'adverb', Late: 'adjective', Within: 'preposition', Home: 'adverb', Note: 'noun', Note: 'noun', Embrace: 'verb', Homely: 'adjective', Pump: 'noun', Compliment: 'noun', Compliment: 'verb', Bell: 'noun', Expert: 'noun', Step: 'verb', Step: 'noun', Arrow: 'noun', Quick: 'adjective', Quickly: 'adverb', Force: 'noun', Before: 'conjuction', Trap: 'noun', Rake: 'noun', Gift: 'noun', Line: 'noun', Most: 'determiner', Consider: 'verb', Stem: 'noun', Resource: 'noun', As: 'adverb', Favourite: 'noun', Dust: 'noun', Religion: 'noun', Dark: 'adjective', Darkness: 'noun', Kind: 'noun', Horse: 'noun', Stable: 'noun', Stick: 'verb', Religious: 'adjective', Candle: 'noun', Wonder: 'verb', Engine: 'noun', Plague: 'noun', Correct: 'adjective', Game: 'noun', Fuck: 'verb', Laboratory: 'noun', Toe: 'noun', Straight: 'adjective', Year: 'noun', Curious: 'adjective', Hammer: 'noun', Trial: 'noun', Tree_bark: 'noun', Themselves: 'pronounP', Advertisement: 'noun', Kick: 'verb', Kick: 'noun', Tired: 'adjective', Activity: 'noun', Peace: 'noun', Earn: 'verb', Shark: 'noun', Cord: 'noun', Axe: 'noun', Seven: 'number', Ash: 'noun', Wood: 'noun', Grind: 'verb', Distance: 'noun', Distant: 'adjective', Both: 'determiner', React: 'verb', Probable: 'adjective', Organization: 'noun', Meal: 'noun', Judge: 'verb', Hide: 'verb', Separate: 'verb', Screw: 'noun', One: 'number', Buxom: 'adjective', Thick: 'adjective', When: 'conjuction', Penis: 'noun', Tail: 'noun', Form: 'noun', Broom: 'noun', Tax: 'noun', Need: 'noun', Military: 'adjective', Sneeze: 'noun', Cheap: 'adjective', Prey: 'noun', Ear: 'noun', Again: 'adverb', Cute: 'adjective', Live: 'verb', Come: 'verb', Boat: 'noun', Risk: 'noun', Shell: 'noun', Dangerous: 'adjective', Network: 'noun', Band: 'noun', Detail: 'noun', Than: 'conjuction', Beer: 'noun', Eyelash: 'noun', Force: 'verb', Swallow: 'verb', Emit_odour: 'verb', Spit: 'verb', Spit: 'noun', Heart: 'noun', Spell: 'verb', Sort: 'verb', Burn: 'verb', Yours: 'pronounP', Your: 'pronounP', Doctor: 'noun', By: 'preposition', Stable: 'adjective', Sew: 'verb', Develop: 'verb', Chair: 'noun', Property: 'noun', Seed: 'noun', Development: 'noun', Along: 'preposition', Burst: 'verb', Others: 'noun', Debt: 'noun', Scissors: 'noun', Range: 'noun', Parent: 'noun', Sister: 'noun', singYouN: 'pronounP', Shoulder: 'noun', Enjoy: 'verb', singToYou: 'pronounP', Young: 'adjective', Youth: 'noun', Mouse: 'noun', Create: 'verb', Arrive: 'verb', Arrival: 'noun', singYouA: 'pronounP', Degree: 'noun', Waiter: 'noun', Paradise: 'noun', Hope: 'verb', Bark: 'noun', Bark: 'verb', Poem: 'noun', Grip: 'verb', Grip: 'noun', Poet: 'noun', Arm: 'noun', Small: 'adjective', Wine: 'noun', Hat: 'noun', Fish_fin: 'noun', Winery: 'noun', Begin: 'verb', Elastic: 'noun', Alphabet: 'noun', That: 'conjuction', Agency: 'noun', Shadow: 'noun', Ancient: 'adjective', Health: 'noun', Healthy: 'adjective', Angle: 'noun', Trip: 'noun', Just: 'adverb', Plan: 'verb', Friend: 'noun', Friendly: 'adjective', Tomorrow: 'adverb', Broom: 'noun', Roast: 'verb', Some: 'determiner', Get: 'verb', Mathematics: 'noun', Top: 'adjective', No: 'art.', Trade: 'noun', Flesh: 'noun', Right: 'noun', Huge: 'adjective', Dream: 'noun', Picture: 'noun', Jump: 'verb', Jump: 'noun', Box: 'noun', Prepare: 'verb', Preparation: 'noun', Visit: 'verb', Visitor: 'noun', Reason: 'noun', Little: 'determiner', Edit: 'verb', Frog: 'noun', Career: 'noun', Stubborn: 'adjective', Defecate: 'verb', Excrement: 'noun', Identify: 'verb', Identity: 'noun', Bitch: 'noun', Excuse: 'noun', Hang: 'verb', Moan: 'verb', Moan: 'noun', Pig: 'noun', Other: 'adjective', Ball: 'noun', Smash: 'verb', Desire: 'verb', Back: 'adverb', Trouble: 'noun', Troublesome: 'adjective', Exercise: 'verb', Exercise: 'noun', Lot: 'noun', Private: 'adjective', Turn: 'verb', Pot: 'noun', Thorn: 'noun', Elbow: 'noun', Or: 'conjuction', Upon: 'preposition', Military_rank: 'noun', Ready: 'adjective', Wire: 'noun', Interview: 'noun', Section: 'noun', Destroy: 'verb', Destruction: 'noun', Sit: 'verb', Chance: 'noun', Reduce: 'verb', Face: 'noun', Side: 'noun', Town: 'noun', Several: 'determiner', Snake: 'noun', Aunt: 'noun', Wide: 'adjective', Width: 'noun', Excite: 'verb', Excitement: 'noun', Public: 'noun', Paradox: 'noun', Spear: 'noun', Punish: 'verb', Forget: 'verb', Forgetful: 'adjective', Study: 'verb', Idiot: 'noun', Idiotic: 'adjective', Error: 'noun', Mistake: 'noun', Fragile: 'adjective', Table: 'noun', Bow_weapon: 'noun', Corpse: 'noun', Main: 'adjective', Seem: 'verb', Niece: 'noun', Fly: 'verb', Flight: 'noun', Blue: 'adjective', So: 'adverb', Go: 'verb', Far: 'adverb', Must: 'noun', Star: 'noun', Page: 'noun', Violent: 'adjective', Violence: 'noun', Though: 'conjuction', Beak: 'noun', Slim_person: 'adjective', Crawl: 'noun', Record: 'noun', Drain: 'verb', Drain: 'noun', Pretty: 'adjective', Third: 'number', Well: 'preposition', Church: 'noun', Greed: 'noun', Family: 'noun', Greedy: 'adjective', Stump: 'noun', Potato: 'noun', Blink: 'verb', Blink: 'noun', Triangle: 'noun', Accept: 'verb', Word: 'noun', Better: 'adverb', Buy: 'verb', Goods: 'noun', Report: 'noun', Oven: 'noun', Six: 'number', Swamp: 'noun', Mouth: 'noun', Oral: 'adjective', Choose: 'verb', Choice: 'noun', State: 'verb', Sofa: 'noun', Leg: 'noun', Enter: 'verb', Wind: 'noun', Meet: 'verb', Meeting: 'noun', But: 'conjuction', Clay: 'noun', Dog: 'noun', Puppy: 'noun', Spring: 'noun', Answer: 'verb', Sharp: 'adjective', Farm: 'noun', Farmer: 'noun', Curtain: 'noun', Agree: 'verb', Agreement: 'noun', Steal: 'verb', Thief: 'noun', Happen: 'verb', Laugh: 'verb', Laugh: 'noun', Soap: 'noun', Buttocks: 'noun', Patient: 'noun', Exactly: 'adverb', Invite: 'verb', Torture: 'verb', Eyeball: 'noun', Throne: 'noun', Kiss: 'verb', Kiss: 'noun', Life: 'noun', Silent: 'adjective', Silence: 'noun', Gold: 'noun', Golden: 'adjective', Bean: 'noun', Wrist: 'noun', Witch: 'noun', Clear: 'adjective', Clearly: 'adverb', Industry: 'noun', Industrial: 'adjective', Motion: 'noun', Organise: 'verb', Soup: 'noun', Plate: 'noun', Round: 'adjective', Register: 'verb', Desk: 'noun', Together: 'adverb', Ugly: 'adjective', Shock: 'verb', Loop: 'noun', Stage_play: 'noun', Cushion: 'noun', Strategy: 'noun', Week: 'noun', Vague: 'adjective', Matter: 'noun', Uncle: 'noun', Impact: 'noun', Finish: 'verb', Final: 'adjective', Specific: 'adjective', Head_hair: 'noun', After: 'preposition', Can: 'verb', Number: 'noun', Jelly: 'noun', Police: 'noun', Cloud: 'noun', Married: 'adjective', Penis: 'noun', Center: 'noun', Serve: 'verb', Slave: 'noun', Service: 'noun', Wool_fur: 'noun', Stock: 'noun', Share: 'verb', Ago: 'adverb', Each: 'pronounP', Model: 'noun', Imitate: 'verb', Ditch: 'noun', No: 'interjection', Draw: 'verb', According: 'preposition', Grass: 'noun', Underwear: 'noun', Low: 'adjective', Doubt: 'verb', Doubt: 'noun', Self: 'noun', Season: 'noun', Large: 'adjective', Balcony: 'noun', Birth: 'noun', Teach: 'verb', Fake: 'adjective', Green: 'adjective', Board: 'noun', Spirit: 'noun', Giggle: 'verb', Win: 'verb', Measure: 'noun', New: 'adjective', Experience: 'noun', Wing: 'noun', Program: 'noun', Another: 'determiner', Explain: 'verb', Nod: 'verb', Explanation: 'noun', Sugar: 'noun', Describe: 'verb', Description: 'noun', Source: 'noun', Close: 'adjective', Despite: 'preposition', Bowl: 'noun', Steam: 'noun', Middle: 'adjective', Might: 'verb', Remember: 'verb', Memory: 'noun', Answer: 'noun', Hook: 'noun', Such: 'preposition', Bench: 'noun', Each: 'determiner', Able: 'adjective', Beast: 'noun', Ability: 'noun', Wife: 'noun', Skeleton: 'noun', Soldier: 'noun', Belt: 'noun', Naked: 'adjective', Complain: 'verb', Grow: 'verb', Growth: 'noun', Leave: 'verb', May: 'verb', Son: 'noun', For: 'preposition', Event: 'noun', Provide: 'verb', Attractive: 'adjective', Land: 'noun', Coal: 'noun', Protect: 'verb', Protection: 'noun', Recognize: 'verb', Recognition: 'noun', Appearance: 'noun', Key: 'noun', Trick: 'verb', Trick: 'noun', Sell: 'verb', Vendor: 'noun', Tower: 'noun', Lift: 'verb', Show: 'noun', Window: 'noun', Snap: 'verb', Tire: 'noun', Surprise: 'verb', Could: 'verb', Balance: 'verb', Hour: 'noun', Temporary_state: 'verb', Vulgar: 'adjective', Gentle: 'adjective', Male: 'adjective', Play: 'verb', Elect: 'verb', Election: 'noun', Run: 'verb', Runner: 'noun', Footprint: 'noun', Also: 'adverb', Medical: 'adjective', Boy: 'noun', Boyfriend: 'noun', Talk: 'noun', Raise: 'verb', Eyelash: 'noun', Eyelid: 'noun', Million: 'number', Mood: 'noun', Four: 'number', Flag: 'noun', Nostril: 'noun', Government: 'noun', Do: 'verb', Aroused: 'adjective', Summer: 'noun', Song: 'noun', Singer: 'noun', Sing: 'verb', Attention: 'noun', Execute: 'verb', Cousin: 'noun', Benefit: 'noun', Role: 'noun', Real: 'adjective', Involve: 'verb', Girl: 'noun', Girlfriend: 'noun', Up: 'adverb', Half: 'determiner', Arch: 'noun', Harbour: 'noun', Impulse: 'noun', Early: 'adjective', Film: 'noun', Occur: 'verb', Before: 'preposition', Hair_brush: 'noun', And: 'conjuction', Tight: 'adjective', Toe: 'noun', Purple: 'adjective', Drift: 'verb', Change: 'noun', After: 'conjuction', Nose: 'noun', Restaurant: 'noun', Mask: 'noun', Next: 'adjective', Yet: 'adverb', Company: 'noun', Accompany: 'verb', Normal: 'adjective', Tree: 'noun', Continue: 'verb', Fragile: 'adjective', Light: 'adjective', Available: 'adjective', Confess: 'verb', Throat: 'noun', Join: 'verb', Wealth: 'noun', Wealthy: 'adjective', State: 'noun', Find: 'verb', Environment: 'noun', Daughter: 'noun', Plot: 'noun', Dance: 'verb', Dancer: 'noun', Fight: 'verb', Fight: 'noun', Discover: 'verb', Discovery: 'noun', Hate: 'verb', Massage: 'verb', Massage: 'noun', Warm: 'adjective', Have: 'verb', Front: 'noun', Money: 'noun', Day: 'noun', Light: 'noun', Vomit: 'verb', Bring: 'verb', Battle: 'noun', Battle: 'verb', Use: 'noun', Behave_well: 'verb', Open: 'adjective', Opening: 'noun', Fill: 'verb', Silk: 'noun', Fiction: 'noun', Rod: 'noun', Image: 'noun', Dress: 'noun', Child: 'noun', Lie: 'verb', Nerve: 'noun', Field: 'noun', Cook: 'verb', Pressure: 'noun', Crash: 'verb', Crash: 'noun', Lens: 'noun', War: 'noun', Warrior: 'noun', Left: 'adjective', Committee: 'noun', Abuse: 'verb', Poor: 'adjective', Right: 'adverb', Skin: 'noun', Fish: 'noun', Whistle: 'verb', Great: 'adjective', Door: 'noun', Physical: 'adjective', Idea: 'noun', Base: 'noun', Every: 'adjective', Male: 'adjective', Man: 'noun', Security: 'noun', Ask: 'verb', Animal: 'noun', Report: 'verb', Set: 'noun', Back: 'adverb', Back_of_body: 'noun', Reverse: 'noun', Knot: 'noun', Button: 'noun', Shape: 'noun', Neck: 'noun', Road: 'noun', Science: 'noun', Scientist: 'noun', Delicious: 'adjective', Parcel: 'noun', Society: 'noun', Machine: 'noun', Stretch: 'verb', Off: 'adverb', Improve: 'verb', Like: 'preposition', Charge: 'noun', Grease: 'noun', Various: 'adjective', Egg: 'noun', Least: 'adverb', Approach: 'noun', Significant: 'adjective', Promise: 'verb', Bus: 'noun', Pharmacy: 'noun', To_him: 'pronounP', To_her: 'pronounP', Suggest: 'verb', Suggestion: 'noun', Tread: 'verb', Behave: 'verb', Behaviour: 'noun', Bit: 'noun', Debate: 'verb', His: 'pronounP', Hers: 'pronounP', Him: 'pronounP', Her: 'pronounP', Curve: 'noun', Staff: 'noun', He: 'pronounP', She: 'pronounP', It: 'pronounP', plurYouN: 'pronounP', To_you: 'pronounP', plurYouA: 'pronounP', Martian: 'adjective', Translate: 'verb' }

	$('#eng_text').focus();
	$('#eng_text').keypress((event) =>{
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13')
			jovTranslate();
	});
	$('#calculate').click(() =>{
		jovTranslate();
	});
	$('#jov_text').keypress((event) =>{
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13')
			engTranslate();
	});
	$('#EngCalculate').click(() =>{
		engTranslate();
	});
	function jovTranslate() {

		var user_text = $.trim($('#eng_text').val().toUpperCase());
		var split_text = user_text.split(' ');

		var solutionArray = [];
		var placementArray = [];
		var placementDict = {};
		var stringPunc = [];
		var solutionVar = '';
		var Tenses = '';
		var split_letter = [];

		// checks if there is a punctuation at the end
		$.each(split_text, (i, split_val) => {
			$.each(punctuation, (j, punct_val) => {
				// checks daitive pronouns
				if (split_val == 'TO') {
					$.each(toWho, (k, value) => {
						if ( split_text[i+1] == toWho[k] ) {
							split_text[i] += ' '+split_text[i+1];
							split_text[i+1] = '';
							return false;
						} else if ( split_text[i+1] == toWho[k] + punct_val ) {
							split_text[i] += ' '+split_text[i+1];
							split_text[i+1] = '';
							return false;
						}
					});
				}
				if (split_text[i].indexOf(punct_val) >= 0) {
					stringPunc[i] = split_val;
					stringPunc[i] = stringPunc[i].split(punct_val);
					punctuate[i] = punct_val;
					$.each(stringPunc, (k, value) => {
						if (stringPunc[i][k] != ''){
							split_val = stringPunc[i][k];
							return false;
						}
					});
				}
			});
		});
		// console.log(punctuate);

		function puncTest (val, key, punc) {
			var test = false;
			$.each(key, (funct_key, funct_val) => {
				if (val == key + punc
					|| val == punc + key
					|| val == punc + key + punc )
					test = true;
			});
				return test;
		}
		function punctu (val, key1, dict, dict_key, punc) {
			$.each(key1, (funct_key, funct_val) => {
				if (val == punc + funct_val + punc ) {
					solutionVar += punc;
					solutionVar += dict[dict_key];
					solutionVar = $.trim(solutionVar);
					solutionVar += punc + ' ';
				} else if (val == punc + funct_val ) {
					solutionVar += punc;
					solutionVar += dict[dict_key] + ' ';
				} else if (val == funct_val + punc) {
					solutionVar += dict[dict_key];
					solutionVar = $.trim(solutionVar);
					solutionVar += punc + ' ';
				}
			});
		}
		// translates numerals
		$.each(split_text, (i, split_val) => {
			if (split_val > -Infinity && split_val < Infinity) {
				$.each(numWords, (num_key, num_val) => {
					if (split_val == num_val)
						split_text[i] = num_key.toUpperCase();
				});
				return false;
			}
		});
		// translates each word
		$.each(split_text, (i, split_val) => {
			$.each(dict, (dict_key, dict_val) => {
					var upperKey = dict_key.toUpperCase();
					// checks for punctuation
					if (punctuate[i]) {
						// console.log( stringPunc[i] );
						if ( puncTest(split_val, ['TO HIM', 'TO HER', 'TO IT'], punctuate[i]) ) {
							punctu (split_val, ['TO HIM', 'TO HER', 'TO IT'], dict, 'To_him', punctuate[i]);
							return false;
						} else if ( puncTest(split_val, ['YOU'], punctuate[i]) ) {
							punctu (split_val, ['YOU'], dict, 'singYouN', punctuate[i]);
							return false;
						} else if ( puncTest(split_val, ['TO YOU'], punctuate[i]) ) {
							punctu (split_val, ['TO YOU'], dict, 'singToYou', punctuate[i]);
							return false;
						} else if ( puncTest(split_val, ['COLOR'], punctuate[i]) ) {
							punctu (split_val, ['COLOR'], dict, 'Colour', punctuate[i]);
							return false;
						} else if ( puncTest(split_val, [upperKey], punctuate[i]) ) {
							punctu (split_val, [upperKey], dict, dict_key, punctuate[i] );
							return false;
						} else {
							// checks daitive pronouns
							var test;
							$.each(toWho, (k, value) => {
								// console.log('TO ' + toWho[k]);
								if ( puncTest(split_val, [ 'TO ' + toWho[k] ], punctuate[i]) ) {
									punctu (split_val, [ 'TO ' + toWho[k] ], dict, 'To_' + toWho[k].toLowerCase(), punctuate[i] );
									test = true;
									return false;
								}
							});
							if (test)
								return false;
						}
						return;
					} else {
						if ( split_val == upperKey ) {
							solutionVar += dict[dict_key] + ' ';
							return false;
						} else if ( split_val == 'YOU' ) {
							solutionVar += dict['singYouN'] + ' ';
							return false;
						} else if ( split_val == 'TO YOU' ) {
							solutionVar += dict['singToYou'] + ' ';
							return false;
						} else if ( split_val == 'COLOR' ) {
							solutionVar += dict['Colour'] + ' ';
							return false;
						} else if ( split_val == 'TO HIM'
								|| split_val == 'TO HER'
								|| split_val == 'TO IT') {
							solutionVar += dict['To_him'] + ' ';
							return false;
						} else {
							// checks daitive pronouns
							var test;
							$.each(toWho, (k, value) => {
								if ( split_val == 'TO ' + toWho[k] ) {
									punctu (solutionVar, dict, 'To_' + toWho[k].toLowerCase() );
									test = true;
									return false;
								}
							});
							if (test)
								return false;
						}
					}
					// checks for the tense
					switch (split_val) {
						case 'DID':
						case 'HAD':
							Tenses = 'past';
							break;
						case 'DO':
						case 'DOES':
						case 'HOLD':
						case 'HAVE':
							Tenses = 'present';
							break;
						case 'WILL':
							Tenses = 'future';
							break;
					}
					if (split_val + ' ' + split_text[i+1] == 'WILL HAVE') {
						Tenses = 'future';
						return false;
					}
					return;
			});
		});

		var solution = $.trim(solutionVar);
		solutionArray = solution.split(' ');

		var set = '';
		// removes the words 'will' and 'do'
		$.each(solutionArray, (i, val) => {
			$.each(dict, (dict_key, dict_val) => {
				if (dict_key == 'Will' && val == dict_val)
					solutionArray.splice(i, 1);
				else if (dict_key == 'Do' && val == dict_val)
					solutionArray.splice(i, 1);
			});
		});
		// adds the parts of speech to placementArray
		$.each(solutionArray, (i, val) => {
			$.each(dict, (dict_key, dict_val) => {
				if ( val.toUpperCase() == dict_val.toUpperCase() + punctuate[i]
					|| val.toUpperCase() == dict_val.toUpperCase() ) {
					$.each(wordPlacement, (place_key, place_val) => {
						if ( dict_key.toUpperCase() == place_key.toUpperCase() ) {
							placementDict[place_val] = dict_val;
							placementArray[i] = [dict_val, place_val];
						}
					});
				} else if ( val.toUpperCase() == dict_val.toUpperCase() ) {
					$.each(wordPlacement, (place_key, place_val) => {
						if ( dict_key.toUpperCase() == place_key.toUpperCase() ) {
							placementDict[place_val] = dict_val;
							placementArray[i] = [dict_val, place_val];
						}
					});
				}
			});
		});
		// console.log(placementDict);
		// console.log(placementArray);
		// checks the parts of speech to see if affixes are neccesary
		var affixCheck = -1;
		var affixCheck2 = [];
		var solutionArray2 = [];
		var solutionArray3 = [];
		$.each(placementArray, (i, val) => {
			// console.log(val);
				var place;
			if ( placementArray[i][1] == 'pronounP' && placementArray[i+1] && placementArray[i+1][1] == 'verb' ) {
				affixCheck += 1;
				switch ( placementArray[i][0] ) {
					case 'De':
					case 'Do&zcaron;':
					case 'Dos':
					case 'Du':
						// affixCheck += 1;
						place = '#FPS';
						break;
					case 'U&scaron;e':
					case 'U&scaron;uy':
					case 'Un&scaron;&euml;':
					case 'U&scaron;o':
						// affixCheck += 1;
						place = '#SPS';
						break;
					case '&Zcaron;&euml;f':
					case '&Zcaron;&euml;b':
					case '&Zcaron;uf':
					case '&Zcaron;ey':
						// affixCheck += 1;
						place = '#TPS';
						break;
					case 'Mon':
					case 'M&euml;v':
					case 'Moc':
					case 'Moq':
						// affixCheck += 1;
						place = '#FPP';
						break;
					case 'Qo':
					case 'Qu&scaron;':
					case 'Qo&scaron;':
					case 'Qu':
						// affixCheck += 1;
						place = '#SPP';
						break;
					case 'Gu':
					case 'Gub':
					case 'Goc':
					case 'Gam':
						// affixCheck += 1;
						place = '#TPP';
						break;
				}
				// console.log(place);
				affixCheck2[i] = placementArray[i][0];
				affixCheck2[i+1] = placementArray[i][1];
			}
			if (place)
			$(place).each(() => {
				$.each(solutionArray, (sol_key, sol_val) => {
					if (sol_val == placementArray[i][0] ) {
						// solutionArray2[ placementArray[i][1] ] = placementArray[i][0];
						// solutionArray2[ placementArray[i+1][1] ] = placementArray[i+1][0];
						// solutionArray3[i] = [ placementArray[i][0], placementArray[i][1] ];
						solutionArray3[i] = [ placementArray[i+1][0], placementArray[i+1][1] ];
					}
					solutionArray2[sol_key] = sol_val;
				});
				$.each(solutionArray2, (sol_key, sol_val) => {
					// console.log(sol_key+':',"'"+solutionArray[sol_key]+"',", "'"+sol_val+"'");
				});
				// console.log(solutionArray);
				console.log(affixCheck);
				// console.log(affixCheck2);
				// console.log(solutionArray2);
				// console.log(solutionArray3);
				// console.log('');
				if ( solutionArray3[i][0].slice(-1) == punctuate[i] ) {
					solutionArray[i+1] = solutionArray3[i][0].slice(0, -1);
					var solPunc = true;
				}
				if ( Tenses == 'past' )
					var num = 'td:nth-child(2)';
				else if ( Tenses == 'future' )
					var num = 'td:nth-child(4)';
				else
					var num = 'td:nth-child(3)';
				var tense = $(this).siblings(num).text();
				tense = $.trim(tense);
				// checks if the affix has parenthesis
				if (tense.indexOf('(') >= 0 ) {
					var parenthesis = tense.indexOf('(');
					var parenthesis2 = tense.indexOf(')');

					// sets valToDel to letters in parenthesis
					var valToDel = tense.slice(parenthesis, parenthesis2+1);
					$.each(vowels, (vowKey, vowVal) => {
						var new_val = vowVal.toLowerCase();
						// checks if letters in parenthesis starts with a vowel
						if ( tense.charAt(parenthesis+1).toUpperCase() == vowVal ) {
							// checks if the word ends with a vowel
							$.each(vowels, (vowKey2, vowVal2) => {
								if ( solutionArray3[i][0].slice(-1).toUpperCase() == vowVal2
									|| solutionArray3[i][0].slice(-6).toUpperCase() == '&EUML;') {
									// // valToDel = valToDel.replace('(', '');
									// // valToDel = valToDel.replace(')', '');
									tense = tense.replace(valToDel, '');
									// return false;
								} else {
									tense = tense.replace('(', '');
									tense = tense.replace(')', '');
								}
							});
						}
					});
				}
				var tensePunc;
				$.each(solutionArray3[i][0], (sol_key, sol_val) => {
					$.each(punctuation, (punct_key, punct_val) => {
						if (sol_val == punct_val) {
							// checks if the last character is a special character
							if (solutionArray3[i][0].slice(-6, -5) == '&' && punct_val == ';')
								return;
							else if (solutionArray3[i][0].slice(-8, -7) == '&' && punct_val == ';')
								return;
							else
								tensePunc = solutionArray3[i][0].slice(0, -1);
						}
					});
				});
				// adds the affix to the word
				if (tensePunc)
					tense = tense.replace( '-', tensePunc );
				else
					tense = tense.replace( '-', solutionArray3[i][0] );

				console.log(solutionArray);
				// capitalises the first letter of the word
				if ( tense.charAt(0) == '&' ) {
					tense = tense.charAt(0)
						+ tense.charAt(1).toUpperCase()
						+ tense.slice(2).toLowerCase();
				} else {
					tense = tense.charAt(0).toUpperCase()
						+ tense.slice(1).toLowerCase();
				}
				if (tensePunc)
					solutionArray[i+1+affixCheck] = tense + solutionArray3[i][0].slice(-1);
				else
					solutionArray[i+affixCheck] = tense;
				console.log(solutionArray, tense);
				if (solPunc)
					solutionArray[i+1] += punctuate[i];
				solutionArray.splice(i-affixCheck, affixCheck+1);
				/* var solutionVar2 = '';
				$.each(solutionArray2, (sol_key, sol_val) => {
					var solNum = 0;
					console.log(sol_key+':',"'"+solutionArray[sol_key]+"',", "'"+sol_val+"'");
					if ( !solutionArray[sol_key] ) {
						solutionVar2 += sol_val + ' ';
					} else if ( solutionArray[sol_key].length > sol_val.length ) {
						$.each(solutionArray[sol_key], (key, val) => {
							if ( val == sol_val[key] )
								solNum += 1;
						});
						if (solNum == sol_val.length)
							solutionVar2 +=  solutionArray[sol_key] + ' ';
					} else if ( solutionArray[sol_key+1].length > solutionArray2[sol_key+1].length ) {
						return;
					} else if (solutionArray[sol_key] == sol_val) {
						solutionVar2 += sol_val + ' ';
					}
				}); */
				console.log(solutionArray);
				// console.log(solutionArray2);
				// console.log('');
				solutionVar = solutionArray.join(' ');
				solution = $.trim(solutionVar);
			});
		});
		solutionArray = solution.split(' ');
		// var solutionArray2 = solutionArray;
		var midPunc = '';
		$(solutionArray).each((sol_key, sol_val) => {
			$(punctuate).each((punct_key, punct_val) => {
				if (punct_val && sol_key == punct_key) {
					// console.log(punct_key, punct_val);
					midPunc = punct_val;
				}
			});
		});

		// adds the translated text to $('#div')
		$('#div').children('p.translation').html(solution);
		$('#div').children('p.translation').text((_, txt) => {
			if (midPunc != '' && midPunc >= 0) {
				// console.log( midPunc, txt.indexOf(midPunc) );
				return txt.charAt(0).toUpperCase()
						+ txt.slice( 1, txt.indexOf(midPunc) ).toLowerCase()
						+ txt.slice( txt.indexOf(midPunc) ).toUpperCase()
						+ txt.slice( txt.indexOf(midPunc) + 1 ).toLowerCase();
			} else
				return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
		});

		// adds the user text to $('#div')
		$('#div').find('h3').text(user_text);
		$('#div').find('h3').text((_, txt) => {
			if (txt.indexOf(' I ') >= 0) {
				var textFind = txt.indexOf(' I ')+1;
				var english = txt.charAt(0).toUpperCase()
						+ txt.slice(1, textFind).toLowerCase()
						+ txt.charAt(textFind).toUpperCase()
						+ txt.slice(textFind + 1).toLowerCase();
				$('#eng_text').val(english);
				return english;

			}
			if (txt.indexOf(' JOVIAN') >= 0 ) {
				var textFind = txt.indexOf(' JOVIAN')+1;
				var english = txt.charAt(0).toUpperCase()
						+ txt.slice(1, textFind).toLowerCase()
						+ txt.charAt(textFind).toUpperCase()
						+ txt.slice(textFind + 1).toLowerCase();
				$('#eng_text').val(english);
				return english;
			// } else if (txt.indexOf(' I') >= 0) {
				// var textFind = txt.indexOf(' I')+1;
				// if (textFind == (txt.indexOf(punctuate[i])-1) || (txt.length-1) ) {
					// if (textFind == (txt.indexOf(punctuate[i])-1) )
						// var textFind2 = txt.indexOf(punctuate[i])-1;
					// else
						// var textFind2 = txt.length-1;
					// var english = txt.charAt(0).toUpperCase();
					// english += txt.slice(1, textFind2).toLowerCase();
					// english += txt.charAt(textFind2).toUpperCase();
					// english += txt.slice(textFind2 + 1).toLowerCase();
					// $('#eng_text').val(english);
					// return english;
				// }
			} else {
				$('#eng_text').val(txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
				return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
			}
		});

		// gets the translation in order to transcribe into IPA
		var divC = $('#div').children('p.translation').html().toUpperCase();
		split_text = divC.split(' ');
		// removes the punctuation from the translated text
		$.each(split_text, (i, split_val) => {
			$.each(punctuation, (j, punct_val) => {
				if (split_val.indexOf(punct_val) >= 0) {
					stringPunc[i] = split_val;
					stringPunc[i] = stringPunc[i].split(punct_val);
					$.each(stringPunc, (k, value) => {
						if (stringPunc[i][k] != ''){
							split_text[i] = stringPunc[i][k];
							return false;
						}
					});
				}
			});
			split_letter[i] = split_val.split('');
		});

		var IPA = '';
		// transcribes the translated text into IPA
		$.each(split_letter, (i, split_val) => {
			$.each(split_val, (j, split_val2) => {
				$.each(letters, (k, letter_val) => {
					if (split_val2 == k) {
						if ( split_val[j-1] + split_val2 == 'ŠZ' )
							IPA += '';
						else if ( split_val[j-1] + split_val2 == 'ŠY' )
							IPA += '';
						else if ( split_val[j-1] + split_val2 == 'NG' )
							IPA += '';
						else if ( split_val2 + split_val[j+1] == 'NG' )
							IPA += '&#331;';
						else
							IPA += letter_val;
					}
				});
				if (split_val2 == 'Ë' )
					IPA += '&#601;';
				else if (split_val2 + split_val[j+1] == 'ŠZ')
					IPA += '&#658;';
				else if (split_val2 == 'Š')
					IPA += '&#643;';
				else if (split_val2 == 'Ž')
					IPA += '&#658;';
			});
			IPA += ' ';
		});
		IPA = $.trim(IPA).split('');
		$.each(IPA, (i, IPA_val) => {
    		$.each(vowels, (j, vow_val) => {
    			if (IPA_val == vow_val && IPA[i-1] == vow_val ) {
    				IPA.splice(i, 1, ':');
    			}
    		});
		});
		IPA = IPA.join('');
		$('#div').children('p.IPA').html( '/' + $.trim(IPA) + '/' );

		$('#div').find('p.translation:not(.Martian, .Jovian)').wrapInner('<strong><em></em></strong>');
		$('#div').find('p.IPA').wrapInner('<strong></strong>');
		// console.log(punctuate);
		// console.log(solutionArray);
		// console.log(solutionArray2);
		$('#eng_text').focus();
		var MarSplit = $('#div').children('p.Martian').text().split('');
		$.each(MarSplit, (i, Mar_val) => {
    		$.each(punctuation, (j, punc_val) => {
    			if (Mar_val == ' ' && MarSplit[i-1] == punc_val ) {
					MarSplit.splice(i, 1);
    			}
    		});
		});
		$('#div').children('p.Martian').html( MarSplit.join('') );
	}
	function engTranslate() {
		$.each(split_text, (i, split_val) => {
			$.each(dict, (dict_key, dict_val) => {
					var upperKey = dict_key.toUpperCase();
					// checks for punctuation
					if (stringPunc[i]) {
						if ( split_val == (upperKey + punctuate[i]) ) {
							solutionVar = punctu (solutionVar, dict, dict_key, punctuate[i]);
							return false;
						} else if ( split_val ==  ('YOU' + punctuate[i]) ) {
							solutionVar = punctu (solutionVar, dict, 'singYouN', punctuate[i]);
							return false;
						} else if ( split_val ==  ('TO YOU' + punctuate[i]) ) {
							solutionVar = punctu (solutionVar, dict, 'singToYou', punctuate[i]);
							return false;
						} else if ( split_val ==  'COLOR' ) {
							solutionVar = punctu (solutionVar, dict, 'Colour', punctuate[i]);
							return false;
						} else if ( split_val ==  ('TO HIM' + punctuate[i] )
							|| split_val ==  ('TO HER' + punctuate[i])
							|| split_val ==  ('TO IT' + punctuate[i]) ) {
							solutionVar = punctu (solutionVar, dict, 'To_him', punctuate[i]);
							return false;
						} else {
							// checks daitive pronouns
							var test;
							$.each(toWho, (k, value) => {
								if ( split_val == 'TO ' + toWho[k] + punctuate[i] ) {
									solutionVar = punctu (solutionVar, dict, 'To_' + toWho[k].toLowerCase(), punctuate[i] );
									test = true;
									return false;
								}
							});
							if (test)
								return false;
						}
						return;
					} else {
						if ( split_val == upperKey ) {
							solutionVar += dict[dict_key] + ' ';
							return false;
						} else if ( split_val == 'YOU' ) {
							solutionVar += dict['singYouN'] + ' ';
							return false;
						} else if ( split_val == 'TO YOU' ) {
							solutionVar += dict['singToYou'] + ' ';
							return false;
						} else if ( split_val == 'COLOR' ) {
							solutionVar += dict['Colour'] + ' ';
							return false;
						} else if ( split_val == 'TO HIM'
								|| split_val == 'TO HER'
								|| split_val == 'TO IT') {
							solutionVar += dict['To_him'] + ' ';
							return false;
						} else {
							// checks daitive pronouns
							var test;
							$.each(toWho, (k, value) => {
								if ( split_val == 'TO ' + toWho[k] ) {
									solutionVar = punctu (solutionVar, dict, 'To_' + toWho[k].toLowerCase() );
									test = true;
									return false;
								}
							});
							if (test)
								return false;
						}
					}
					// checks for the tense
					switch (split_val) {
						case 'DID':
						case 'HAD':
							Tenses = 'past';
							break;
						case 'DO':
						case 'DOES':
						case 'HOLD':
						case 'HAVE':
							Tenses = 'present';
							break;
						case 'WILL':
							Tenses = 'future';
							break;
					}
					if (split_val + ' ' + split_text[i+1] == 'WILL HAVE') {
						Tenses = 'future';
						return false;
					}
					return;
			});
		});
	}
	$('.Martian').each( () => {
        if( $(this).css('font-weight') == 'bold' )
            $(this).css('font-weight', 'normal')
    });

});