const quotes = [
	{
		id: 1,
		name: "Confucius",
		profession: "Philosopher",
		quote: "It does not matter how slowly you go as long as you do not stop.",
		photo: "confucius.jpeg",
	},
	{
		id: 2,
		name: "Albert Einstein",
		profession: "Physicist",
		quote:
			"Life is like riding a bicycle. To keep your balance, you must keep moving.",
		photo: "albert_einstein.jpg",
	},
	{
		id: 3,
		name: "Aristotle",
		profession: "Philosopher",
		quote:
			"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
		photo: "aristotle.jpg",
	},
	{
		id: 4,
		name: "Isaac Newton",
		profession: "Physicist",
		quote:
			"If I have seen further it is by standing on the shoulders of Giants.",
		photo: "isaac_newton.jpg",
	},
	{
		id: 5,
		name: "Galileo Galilei",
		profession: "Astronomer",
		quote:
			"You cannot teach a man anything; you can only help him find it within himself.",
		photo: "galileo_galilei.jpg",
	},
	{
		id: 6,
		name: "Socrates",
		profession: "Philosopher",
		quote: "The only true wisdom is in knowing you know nothing.",
		photo: "socrates.jpg",
	},
	{
		id: 7,
		name: "Plato",
		profession: "Philosopher",
		quote: "The greatest wealth is to live content with little.",
		photo: "plato.jpg",
	},
	{
		id: 8,
		name: "Leonardo da Vinci",
		profession: "Artist",
		quote: "Learning never exhausts the mind.",
		photo: "leonardo_da_vinci.jpg",
	},
	{
		id: 9,
		name: "Michelangelo",
		profession: "Artist",
		quote:
			"The greater danger for most of us lies not in setting our aim too high and falling short, but in setting our aim too low and achieving our mark.",
		photo: "michelangelo.jpg",
	},
	{
		id: 10,
		name: "William Shakespeare",
		profession: "Playwright",
		quote: "All the world's a stage, and all the men and women merely players.",
		photo: "william_shakespeare.png",
	},
	{
		id: 11,
		name: "Charles Darwin",
		profession: "Naturalist",
		quote:
			"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
		photo: "charles_darwin.jpg",
	},
	{
		id: 12,
		name: "Marie Curie",
		profession: "Physicist",
		quote: "Nothing in life is to be feared, it is only to be understood.",
		photo: "marie_curie.jpg",
	},
	{
		id: 13,
		name: "Thomas Edison",
		profession: "Inventor",
		quote:
			"Genius is one percent inspiration and ninety-nine percent perspiration.",
		photo: "thomas_edison.jpg",
	},
	{
		id: 14,
		name: "Nikola Tesla",
		profession: "Inventor",
		quote:
			"The present is theirs; the future, for which I really worked, is mine.",
		photo: "nikola_tesla.jpeg",
	},
	{
		id: 15,
		name: "Alexander Graham Bell",
		profession: "Inventor",
		quote: "When one door closes, another opens.",
		photo: "alexander_graham_bell.jpg",
	},
	{
		id: 16,
		name: "Winston Churchill",
		profession: "Prime Minister",
		quote:
			"Success is not final, failure is not fatal: it is the courage to continue that counts.",
		photo: "winston_churchill.jpg",
	},
	{
		id: 17,
		name: "Nelson Mandela",
		profession: "Political Leader",
		quote:
			"The greatest glory in living lies not in never falling, but in rising every time we fall.",
		photo: "nelson_mandela.jpg",
	},
	{
		id: 18,
		name: "Mahatma Gandhi",
		profession: "Political Leader",
		quote: "You must be the change you wish to see in the world.",
		photo: "mahatma_gandhi.jpg",
	},
	{
		id: 19,
		name: "Martin Luther King Jr.",
		profession: "Civil Rights Leader",
		quote: "Injustice anywhere is a threat to justice everywhere.",
		photo: "martin_luther_king_jr.jpg",
	},
	{
		id: 20,
		name: "John F. Kennedy",
		profession: "President of the United States",
		quote:
			"Ask not what your country can do for you — ask what you can do for your country.",
		photo: "john_f_kennedy.jpg",
	},
	{
		id: 21,
		name: "Franklin D. Roosevelt",
		profession: "President of the United States",
		quote: "The only thing we have to fear is fear itself.",
		photo: "franklin_d_roosevelt.jpg",
	},
	{
		id: 22,
		name: "Theodore Roosevelt",
		profession: "President of the United States",
		quote: "Do what you can, with what you have, where you are.",
		photo: "theodore_roosevelt.jpg",
	},
	{
		id: 23,
		name: "Abraham Lincoln",
		profession: "President of the United States",
		quote:
			"Government of the people, by the people, for the people, shall not perish from the Earth.",
		photo: "abraham_lincoln.jpg",
	},
	{
		id: 24,
		name: "George Washington",
		profession: "President of the United States",
		quote: "It is better to offer no excuse than a bad one.",
		photo: "george_washington.jpeg",
	},
	{
		id: 25,
		name: "Thomas Jefferson",
		profession: "President of the United States",
		quote: "I cannot live without books.",
		photo: "thomas_jefferson.jpg",
	},
	{
		id: 26,
		name: "Benjamin Franklin",
		profession: "Founding Father",
		quote: "An investment in knowledge pays the best interest.",
		photo: "benjamin_franklin.jpg",
	},
	{
		id: 27,
		name: "Walt Disney",
		profession: "Entrepreneur",
		quote: "The way to get started is to quit talking and begin doing.",
		photo: "walt_disney.jpg",
	},
	{
		id: 28,
		name: "Steve Jobs",
		profession: "Entrepreneur",
		quote:
			"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
		photo: "steve_jobs.jpg",
	},
	{
		id: 29,
		name: "Elon Musk",
		profession: "Entrepreneur",
		quote:
			"When something is important enough, you do it even if the odds are not in your favor.",
		photo: "elon_musk.jpg",
	},
	// {
	// 	id: 30,
	// 	name: "Jeff Bezos",
	// 	profession: "Entrepreneur",
	// 	quote:
	// 		"If you do build a great experience, customers tell each other about that. Word of mouth is very powerful.",
	// 	photo: "https://example.com/photos/jeff_bezos.jpg",
	// },
	// {
	// 	id: 31,
	// 	name: "Mark Zuckerberg",
	// 	profession: "Entrepreneur",
	// 	quote: "The biggest risk is not taking any risk.",
	// 	photo: "https://example.com/photos/mark_zuckerberg.jpg",
	// },
	// {
	// 	id: 32,
	// 	name: "Bill Gates",
	// 	profession: "Entrepreneur",
	// 	quote: "Your most unhappy customers are your greatest source of learning.",
	// 	photo: "https://example.com/photos/bill_gates.jpg",
	// },
	// {
	// 	id: 33,
	// 	name: "Oprah Winfrey",
	// 	profession: "Television Host",
	// 	quote:
	// 		"The biggest adventure you can take is to live the life of your dreams.",
	// 	photo: "https://example.com/photos/oprah_winfrey.jpg",
	// },
	// {
	// 	id: 34,
	// 	name: "Ellen DeGeneres",
	// 	profession: "Television Host",
	// 	quote:
	// 		"Find out who you are and be that person. That's what your soul was put on this Earth to be.",
	// 	photo: "https://example.com/photos/ellen_degeneres.jpg",
	// },
	// {
	// 	id: 35,
	// 	name: "Maya Angelou",
	// 	profession: "Poet",
	// 	quote:
	// 		"You will face many defeats in life, but never let yourself be defeated.",
	// 	photo: "https://example.com/photos/maya_angelou.jpg",
	// },
	// {
	// 	id: 36,
	// 	name: "Langston Hughes",
	// 	profession: "Poet",
	// 	quote:
	// 		"Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.",
	// 	photo: "https://example.com/photos/langston_hughes.jpg",
	// },
	// {
	// 	id: 37,
	// 	name: "Emily Dickinson",
	// 	profession: "Poet",
	// 	quote: "Hope is the thing with feathers that perches in the soul.",
	// 	photo: "https://example.com/photos/emily_dickinson.jpg",
	// },
	// {
	// 	id: 38,
	// 	name: "Robert Frost",
	// 	profession: "Poet",
	// 	quote:
	// 		"In three words I can sum up everything I've learned about life: it goes on.",
	// 	photo: "https://example.com/photos/robert_frost.jpg",
	// },
	// {
	// 	id: 39,
	// 	name: "Walt Whitman",
	// 	profession: "Poet",
	// 	quote:
	// 		"Keep your face always toward the sunshine—and shadows will fall behind you.",
	// 	photo: "https://example.com/photos/walt_whitman.jpg",
	// },
	// {
	// 	id: 40,
	// 	name: "Sylvia Plath",
	// 	profession: "Poet",
	// 	quote: "The worst enemy to creativity is self-doubt.",
	// 	photo: "https://example.com/photos/sylvia_plath.jpg",
	// },
	// {
	// 	id: 41,
	// 	name: "Mark Twain",
	// 	profession: "Writer",
	// 	quote: "The secret of getting ahead is getting started.",
	// 	photo: "https://example.com/photos/mark_twain.jpg",
	// },
	// {
	// 	id: 42,
	// 	name: "Ernest Hemingway",
	// 	profession: "Writer",
	// 	quote:
	// 		"There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
	// 	photo: "https://example.com/photos/ernest_hemingway.jpg",
	// },
	// {
	// 	id: 43,
	// 	name: "F. Scott Fitzgerald",
	// 	profession: "Writer",
	// 	quote:
	// 		"The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function.",
	// 	photo: "https://example.com/photos/f_scott_fitzgerald.jpg",
	// },
	// {
	// 	id: 44,
	// 	name: "Harper Lee",
	// 	profession: "Writer",
	// 	quote:
	// 		"The one thing that doesn't abide by majority rule is a person's conscience.",
	// 	photo: "https://example.com/photos/harper_lee.jpg",
	// },
	// {
	// 	id: 45,
	// 	name: "Jane Austen",
	// 	profession: "Writer",
	// 	quote: "There is no charm equal to tenderness of heart.",
	// 	photo: "https://example.com/photos/jane_austen.jpg",
	// },
	// {
	// 	id: 46,
	// 	name: "J.K. Rowling",
	// 	profession: "Writer",
	// 	quote:
	// 		"It is our choices that show what we truly are, far more than our abilities.",
	// 	photo: "https://example.com/photos/jk_rowling.jpg",
	// },
	// {
	// 	id: 47,
	// 	name: "George Orwell",
	// 	profession: "Writer",
	// 	quote: "In a time of deceit telling the truth is a revolutionary act.",
	// 	photo: "https://example.com/photos/george_orwell.jpg",
	// },
	// {
	// 	id: 48,
	// 	name: "J.R.R. Tolkien",
	// 	profession: "Writer",
	// 	quote: "Not all those who wander are lost.",
	// 	photo: "https://example.com/photos/jrr_tolkien.jpg",
	// },
	// {
	// 	id: 49,
	// 	name: "Oscar Wilde",
	// 	profession: "Writer",
	// 	quote: "Be yourself; everyone else is already taken.",
	// 	photo: "https://example.com/photos/oscar_wilde.jpg",
	// },
	// {
	// 	id: 50,
	// 	name: "Charles Dickens",
	// 	profession: "Writer",
	// 	quote: "It was the best of times, it was the worst of times.",
	// 	photo: "https://example.com/photos/charles_dickens.jpg",
	// },
	// {
	// 	id: 51,
	// 	name: "Emily Brontë",
	// 	profession: "Writer",
	// 	quote: "Whatever our souls are made of, his and mine are the same.",
	// 	photo: "https://example.com/photos/emily_bronte.jpg",
	// },
	// {
	// 	id: 52,
	// 	name: "Virginia Woolf",
	// 	profession: "Writer",
	// 	quote:
	// 		"A woman must have money and a room of her own if she is to write fiction.",
	// 	photo: "https://example.com/photos/virginia_woolf.jpg",
	// },
	// {
	// 	id: 53,
	// 	name: "Leo Tolstoy",
	// 	profession: "Writer",
	// 	quote:
	// 		"Everyone thinks of changing the world, but no one thinks of changing himself.",
	// 	photo: "https://example.com/photos/leo_tolstoy.jpg",
	// },
	// {
	// 	id: 54,
	// 	name: "Fyodor Dostoevsky",
	// 	profession: "Writer",
	// 	quote: "The soul is healed by being with children.",
	// 	photo: "https://example.com/photos/fyodor_dostoevsky.jpg",
	// },
	// {
	// 	id: 55,
	// 	name: "Anton Chekhov",
	// 	profession: "Writer",
	// 	quote:
	// 		"Don't tell me the moon is shining; show me the glint of light on broken glass.",
	// 	photo: "https://example.com/photos/anton_chekhov.jpg",
	// },
	// {
	// 	id: 56,
	// 	name: "Gabriel Garcia Marquez",
	// 	profession: "Writer",
	// 	quote:
	// 		"What matters in life is not what happens to you but what you remember and how you remember it.",
	// 	photo: "https://example.com/photos/gabriel_garcia_marquez.jpg",
	// },
	// {
	// 	id: 57,
	// 	name: "James Joyce",
	// 	profession: "Writer",
	// 	quote: "Mistakes are the portals of discovery.",
	// 	photo: "https://example.com/photos/james_joyce.jpg",
	// },
	// {
	// 	id: 58,
	// 	name: "Franz Kafka",
	// 	profession: "Writer",
	// 	quote: "A book must be the axe for the frozen sea within us.",
	// 	photo: "https://example.com/photos/franz_kafka.jpg",
	// },
	// {
	// 	id: 59,
	// 	name: "Herman Melville",
	// 	profession: "Writer",
	// 	quote: "It is better to fail in originality than to succeed in imitation.",
	// 	photo: "https://example.com/photos/herman_melville.jpg",
	// },
	// {
	// 	id: 60,
	// 	name: "Homer",
	// 	profession: "Poet",
	// 	quote:
	// 		"There is a time for many words, and there is also a time for sleep.",
	// 	photo: "https://example.com/photos/homer.jpg",
	// },
	// {
	// 	id: 61,
	// 	name: "Virgil",
	// 	profession: "Poet",
	// 	quote: "Fortune favors the bold.",
	// 	photo: "https://example.com/photos/virgil.jpg",
	// },
	// {
	// 	id: 62,
	// 	name: "Dante Alighieri",
	// 	profession: "Poet",
	// 	quote:
	// 		"The darkest places in hell are reserved for those who maintain their neutrality in times of moral crisis.",
	// 	photo: "https://example.com/photos/dante_alighieri.jpg",
	// },
	// {
	// 	id: 63,
	// 	name: "Geoffrey Chaucer",
	// 	profession: "Poet",
	// 	quote: "Time and tide wait for no man.",
	// 	photo: "https://example.com/photos/geoffrey_chaucer.jpg",
	// },
	// {
	// 	id: 64,
	// 	name: "Edgar Allan Poe",
	// 	profession: "Writer",
	// 	quote: "All that we see or seem is but a dream within a dream.",
	// 	photo: "https://example.com/photos/edgar_allan_poe.jpg",
	// },
	// {
	// 	id: 65,
	// 	name: "H.P. Lovecraft",
	// 	profession: "Writer",
	// 	quote:
	// 		"The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.",
	// 	photo: "https://example.com/photos/hp_lovecraft.jpg",
	// },
	// {
	// 	id: 66,
	// 	name: "Jules Verne",
	// 	profession: "Writer",
	// 	quote:
	// 		"Science, my lad, is made up of mistakes, but they are mistakes which it is useful to make, because they lead little by little to the truth.",
	// 	photo: "https://example.com/photos/jules_verne.jpg",
	// },
	// {
	// 	id: 67,
	// 	name: "H.G. Wells",
	// 	profession: "Writer",
	// 	quote: "Adapt or perish, now as ever, is nature's inexorable imperative.",
	// 	photo: "https://example.com/photos/hg_wells.jpg",
	// },
	// {
	// 	id: 68,
	// 	name: "Arthur Conan Doyle",
	// 	profession: "Writer",
	// 	quote:
	// 		"It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.",
	// 	photo: "https://example.com/photos/arthur_conan_doyle.jpg",
	// },
	// {
	// 	id: 69,
	// 	name: "Agatha Christie",
	// 	profession: "Writer",
	// 	quote:
	// 		"The best time for planning a book is while you're doing the dishes.",
	// 	photo: "https://example.com/photos/agatha_christie.jpg",
	// },
	// {
	// 	id: 70,
	// 	name: "T.S. Eliot",
	// 	profession: "Poet",
	// 	quote:
	// 		"Only those who will risk going too far can possibly find out how far one can go.",
	// 	photo: "https://example.com/photos/ts_eliot.jpg",
	// },
	// {
	// 	id: 71,
	// 	name: "George Bernard Shaw",
	// 	profession: "Playwright",
	// 	quote:
	// 		"Life isn't about finding yourself. Life is about creating yourself.",
	// 	photo: "https://example.com/photos/george_bernard_shaw.jpg",
	// },
	// {
	// 	id: 72,
	// 	name: "Samuel Beckett",
	// 	profession: "Playwright",
	// 	quote:
	// 		"Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
	// 	photo: "https://example.com/photos/samuel_beckett.jpg",
	// },
	// {
	// 	id: 73,
	// 	name: "Antonin Artaud",
	// 	profession: "Playwright",
	// 	quote:
	// 		"No one has ever written, painted, sculpted, modeled, built, or invented except literally to get out of hell.",
	// 	photo: "https://example.com/photos/antonin_artaud.jpg",
	// },
	// {
	// 	id: 74,
	// 	name: "William Faulkner",
	// 	profession: "Writer",
	// 	quote:
	// 		"You cannot swim for new horizons until you have courage to lose sight of the shore.",
	// 	photo: "https://example.com/photos/william_faulkner.jpg",
	// },
	// {
	// 	id: 75,
	// 	name: "Haruki Murakami",
	// 	profession: "Writer",
	// 	quote:
	// 		"And once the storm is over, you won’t remember how you made it through, how you managed to survive. You won’t even be sure, in fact, whether the storm is really over. But one thing is certain. When you come out of the storm, you won’t be the same person who walked in. That’s what this storm’s all about.",
	// 	photo: "https://example.com/photos/haruki_murakami.jpg",
	// },
	// {
	// 	id: 76,
	// 	name: "Margaret Atwood",
	// 	profession: "Writer",
	// 	quote: "In the spring, at the end of the day, you should smell like dirt.",
	// 	photo: "https://example.com/photos/margaret_atwood.jpg",
	// },
	// {
	// 	id: 77,
	// 	name: "Neil Gaiman",
	// 	profession: "Writer",
	// 	quote:
	// 		"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
	// 	photo: "https://example.com/photos/neil_gaiman.jpg",
	// },
	// {
	// 	id: 78,
	// 	name: "Toni Morrison",
	// 	profession: "Writer",
	// 	quote:
	// 		"If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
	// 	photo: "https://example.com/photos/toni_morrison.jpg",
	// },
	// {
	// 	id: 79,
	// 	name: "Chinua Achebe",
	// 	profession: "Writer",
	// 	quote:
	// 		"The world is like a mask dancing. If you want to see it well, you do not stand in one place.",
	// 	photo: "https://example.com/photos/chinua_achebe.jpg",
	// },
	// {
	// 	id: 80,
	// 	name: "Gabriel García Márquez",
	// 	profession: "Writer",
	// 	quote:
	// 		"It is not true that people stop pursuing dreams because they grow old, they grow old because they stop pursuing dreams.",
	// 	photo: "https://example.com/photos/gabriel_garcia_marquez.jpg",
	// },
	// {
	// 	id: 81,
	// 	name: "Alice Walker",
	// 	profession: "Writer",
	// 	quote:
	// 		"The most common way people give up their power is by thinking they don’t have any.",
	// 	photo: "https://example.com/photos/alice_walker.jpg",
	// },
	// {
	// 	id: 82,
	// 	name: "Zadie Smith",
	// 	profession: "Writer",
	// 	quote: "The past is always tense, the future perfect.",
	// 	photo: "https://example.com/photos/zadie_smith.jpg",
	// },
	// {
	// 	id: 83,
	// 	name: "J.D. Salinger",
	// 	profession: "Writer",
	// 	quote:
	// 		"What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it.",
	// 	photo: "https://example.com/photos/jd_salinger.jpg",
	// },
	// {
	// 	id: 84,
	// 	name: "Jorge Luis Borges",
	// 	profession: "Writer",
	// 	quote: "I have always imagined that Paradise will be a kind of library.",
	// 	photo: "https://example.com/photos/jorge_luis_borges.jpg",
	// },
	// {
	// 	id: 85,
	// 	name: "Ray Bradbury",
	// 	profession: "Writer",
	// 	quote:
	// 		"You don't have to burn books to destroy a culture. Just get people to stop reading them.",
	// 	photo: "https://example.com/photos/ray_bradbury.jpg",
	// },
	// {
	// 	id: 86,
	// 	name: "Isaac Asimov",
	// 	profession: "Writer",
	// 	quote:
	// 		"The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
	// 	photo: "https://example.com/photos/isaac_asimov.jpg",
	// },
	// {
	// 	id: 87,
	// 	name: "Philip K. Dick",
	// 	profession: "Writer",
	// 	quote:
	// 		"Reality is that which, when you stop believing in it, doesn't go away.",
	// 	photo: "https://example.com/photos/philip_k_dick.jpg",
	// },
	// {
	// 	id: 88,
	// 	name: "Ursula K. Le Guin",
	// 	profession: "Writer",
	// 	quote:
	// 		"The only thing that makes life possible is permanent, intolerable uncertainty; not knowing what comes next.",
	// 	photo: "https://example.com/photos/ursula_k_le_guin.jpg",
	// },
	// {
	// 	id: 89,
	// 	name: "Aldous Huxley",
	// 	profession: "Writer",
	// 	quote:
	// 		"Experience is not what happens to you; it's what you do with what happens to you.",
	// 	photo: "https://example.com/photos/aldous_huxley.jpg",
	// },
	// {
	// 	id: 90,
	// 	name: "George R.R. Martin",
	// 	profession: "Writer",
	// 	quote:
	// 		"A reader lives a thousand lives before he dies. The man who never reads lives only one.",
	// 	photo: "https://example.com/photos/george_rr_martin.jpg",
	// },
	// {
	// 	id: 91,
	// 	name: "Stephen King",
	// 	profession: "Writer",
	// 	quote: "Get busy living or get busy dying.",
	// 	photo: "https://example.com/photos/stephen_king.jpg",
	// },
	// {
	// 	id: 92,
	// 	name: "Kurt Vonnegut",
	// 	profession: "Writer",
	// 	quote:
	// 		"We are what we pretend to be, so we must be careful about what we pretend to be.",
	// 	photo: "https://example.com/photos/kurt_vonnegut.jpg",
	// },
	// {
	// 	id: 93,
	// 	name: "Harper Lee",
	// 	profession: "Writer",
	// 	quote:
	// 		"The one thing that doesn’t abide by majority rule is a person’s conscience.",
	// },
	// {
	// 	id: 94,
	// 	name: "Ralph Waldo Emerson",
	// 	profession: "Writer",
	// 	quote:
	// 		"Do not go where the path may lead, go instead where there is no path and leave a trail.",
	// 	photo: "https://example.com/photos/ralph_waldo_emerson.jpg",
	// },
	// {
	// 	id: 95,
	// 	name: "William Blake",
	// 	profession: "Poet",
	// 	quote: "The road of excess leads to the palace of wisdom.",
	// 	photo: "https://example.com/photos/william_blake.jpg",
	// },
	// {
	// 	id: 96,
	// 	name: "James Baldwin",
	// 	profession: "Writer",
	// 	quote:
	// 		"Not everything that is faced can be changed, but nothing can be changed until it is faced.",
	// 	photo: "https://example.com/photos/james_baldwin.jpg",
	// },
	// {
	// 	id: 97,
	// 	name: "John Steinbeck",
	// 	profession: "Writer",
	// 	quote:
	// 		"The only thing you’ll find in the middle of the road is yellow stripes and dead armadillos.",
	// 	photo: "https://example.com/photos/john_steinbeck.jpg",
	// },
	// {
	// 	id: 98,
	// 	name: "Hermann Hesse",
	// 	profession: "Writer",
	// 	quote:
	// 		"Some of us think holding on makes us strong, but sometimes it is letting go.",
	// 	photo: "https://example.com/photos/hermann_hesse.jpg",
	// },
	// {
	// 	id: 99,
	// 	name: "Anne Rice",
	// 	profession: "Writer",
	// 	quote:
	// 		"The world changes, we do not, therein lies the irony that makes us laugh and cry.",
	// 	photo: "https://example.com/photos/anne_rice.jpg",
	// },
	// {
	// 	id: 100,
	// 	name: "Pablo Neruda",
	// 	profession: "Poet",
	// 	quote: "I want to do with you what spring does with the cherry trees.",
	// 	photo: "https://example.com/photos/pablo_neruda.jpg",
	// },
	// {
	// 	id: 101,
	// 	name: "Rainer Maria Rilke",
	// 	profession: "Poet",
	// 	quote: "The only journey is the one within.",
	// 	photo: "https://example.com/photos/rainer_maria_rilke.jpg",
	// },
	// {
	// 	id: 102,
	// 	name: "E.E. Cummings",
	// 	profession: "Poet",
	// 	quote: "It takes courage to grow up and become who you really are.",
	// 	photo: "https://example.com/photos/ee_cummings.jpg",
	// },
	// {
	// 	id: 103,
	// 	name: "John Updike",
	// 	profession: "Writer",
	// 	quote:
	// 		"What happens to a dream deferred? Does it dry up like a raisin in the sun?",
	// 	photo: "https://example.com/photos/john_updike.jpg",
	// },
	// {
	// 	id: 104,
	// 	name: "Ray Bradbury",
	// 	profession: "Writer",
	// 	quote:
	// 		"You don’t have to burn books to destroy a culture. Just get people to stop reading them.",
	// 	photo: "https://example.com/photos/ray_bradbury.jpg",
	// },
	// {
	// 	id: 105,
	// 	name: "Margaret Atwood",
	// 	profession: "Writer",
	// 	quote: "A word after a word after a word is power.",
	// 	photo: "https://example.com/photos/margaret_atwood.jpg",
	// },
	// {
	// 	id: 106,
	// 	name: "J.D. Salinger",
	// 	profession: "Writer",
	// 	quote:
	// 		"It’s funny. All you have to do is say something nobody understands and they’ll listen.",
	// 	photo: "https://example.com/photos/jd_salinger.jpg",
	// },
	// {
	// 	id: 107,
	// 	name: "Aldous Huxley",
	// 	profession: "Writer",
	// 	quote:
	// 		"The more powerful and original a mind, the more it will incline towards the religion of solitude.",
	// 	photo: "https://example.com/photos/aldous_huxley.jpg",
	// },
];
