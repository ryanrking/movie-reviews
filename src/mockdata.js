let mock = [{
    id: 7,
    name: "Avengers: Endgame",
    rating: 8,
    director: "Joe and Anthony Russo",
    tomatometer: 94,
    metacritic: 78,
    review: "Avengers: Endgame is a phenomenal movie. I love how it entirely subverts expectations after Infinity War and goes in a completely different direction. The last hour of this movie is near perfect. My only complaints with the movie are that I wish Hawkeye had a bigger role, as he wasn't in Infinity War and I feel he had an incredibly compelling motivation and potential arc in this movie, and that the first part of the movie stretched on a little too long. However, the movie was still excellent and an amazing way to pay homage to the MCU before it.",
    poster: "endgame.jpg",
},
{
    id: 22,
    name: "Avengers: Infinity War",
    rating: 9,
    director: "Joe and Anthony Russo",
    tomatometer: 85,
    metacritic: 68,
    review: "I almost gave this a 10, but the only thing that held me back was repetition. There's one particular character beat related to sacrifice that Infinity War uses one or two times too many, which ended up cheapening those moments for me. However, Infinity War is fantastic otherwise. It has incredibly tight pacing, one of the MCU's most compelling villains, and is much more a heist story than anything else. Except not a traditional heist, and the heroes aren't our protaganist. Our heroes provide at times entertaining and at times heartbreaking support, but the real core of this movie is Thanos. His morally gray intentions, along with the music, cutting-edge VFX, and the amazing ending all make this one of the MCU's best.",
    poster: "infinity-war.jpg",
},
{
    id: 1,
    name: "Batman v. Superman: Dawn of Justice",
    rating: 3,
    director: "Zack Snyder",
    tomatometer: 28,
    metacritic: 44,
    review: "The premise of the movie is admittedly interesting. Batman fears what he can't control, and the movie is him coming to terms with the fact that just because he can't control Superman doesn't mean Superman is evil. Except that wasn't the movie at all. The movie was a rambling mess that didn't spend nearly enough time on the core conflict. Instead, we get bailed out of tough moral decisions and character growth by sharing a mother's name and a convenient extra-bad villain who shows up at the very end.",
    poster: "batman-v-superman.jpg",
},
{
    id: 2,
    name: "The Bourne Identity",
    rating: 7,
    director: "Doug Liman",
    tomatometer: 83,
    metacritic: 68,
    review: "The first of the Bourne movies, this is an enjoyable film centered around outsmarting and outmaneuvering a seemingly omniscient force. It's incredibly engaging to follow Jason's struggle with amnesia while he's on the run. If you've never seen this series, I highly recommend it.",
    poster: "bourne-identity.jpg",
},
{
    id: 3,
    name: "The Bourne Supremacy",
    rating: 6,
    director: "Paul Greengrass",
    tomatometer: 82,
    metacritic: 73,
    review: "While it is my lowest ranked of the Bourne movies, this is still a very good movie. Everything the Bourne movies do right, it does right. Jason is inventive, determined, and resourceful. However, this movie relies a little too much on the shaky-cam tactics, which can make the action less enjoyable.",
    poster: "bourne-supremacy.jpg",
},
{
    id: 4,
    name: "The Bourne Ultimatum",
    rating: 8,
    director: "Paul Greengrass",
    tomatometer: 92,
    metacritic: 85,
    review: "The Bourne Ultimatum is my favorite of the Bourne trilogy. This movie has some incredible action sequences (that are much more comprehensible than the previous film's) and shows Bourne at his best.",
    poster: "bourne-ultimatum.jpg",
},
{
    id: 5,
    name: "Captain America: Civil War",
    rating: 8,
    director: "Joe and Anthony Russo",
    tomatometer: 90,
    metacritic: 75,
    review: "This movie is a lot of fun, while at the same time dealing with heavy issues. The more I watch it, the more I realize that both sides had very important points. And that's a quality in a movie that makes it grow on you the more you see it. Not only is it intellectually interesting, but this movie has heart. Steve has so many interesting relationships to explore, with Natasha, with Tony, with Peggy, and with Bucky. I will say, Bucky is the weakest part of this movie for me. I never feel all that attached or connected to him, which makes a lot of the core conflict fall flatter than it should. However, this is an excellent Avengers-lite film that deals with interesting concepts in fresh ways..",
    poster: "civil-war.jpg",
},
{
    id: 54,
    name: "Captain America: The Winter Soldier",
    rating: 10,
    director: "Joe and Anthony Russo",
    tomatometer: 90,
    metacritic: 70,
    review: "I'm a sucker for movies where the main character is on the run, and boy does Winter Soldier do it well. Captain America is given an actual moral dilemma to wrestle with, the twist near the beginning creates amazing suspense, and the movie has some of the best superhero action sequences period. It's fun to watch Steve, Natasha, and Sam play off each other. It's just an enjoyable, intense, and surprisingly heart-filled movie.",
    poster: "winter-soldier.jpg",
},
{
    id: 6,
    name: "The Dark Knight Rises",
    rating: 7,
    director: "Christopher Nolan",
    tomatometer: 87,
    metacritic: 78,
    review: "I think The Dark Knight Rises is more enjoyable than The Dark Knight. Which I'm sure will some torches and pitchforks going, but let me explain. You see, I just don't care about Batman. His character never emotionally connected with me in any of Christopher Nolan's trilogy. I just don't care for him. But Joseph Gordon-Levitt's character? I did care about him. He made the movie feel like it had stakes. So even though this has one of the most infamously bad death scenes in all of cinema and Bane is only a decently good antagonist compared to the Joker, this movie is still my favorite of the Batman trilogy.",
    poster: "dark-knight-rises.jpg",
},
{
    id: 11,
    name: "Guardians of the Galaxy",
    rating: 8,
    director: "James Gunn",
    tomatometer: 92,
    metacritic: 76,
    review: "This movie was the first extremely funny Marvel movie. The others had humor, but Guardians is hilarious. It took a bunch of characters absolutely no one cared about and turned them into fan favorites. You watch this movie, you're going to have a good time.",
    poster: "gotg.jpg",
},
{
    id: 12,
    name: "Harry Potter and the Sorcerer's Stone",
    rating: 6,
    director: "Chris Columbus",
    tomatometer: 81,
    metacritic: 64,
    review: "This movie is just a lot of fun. It's very light-hearted, very warm, very fuzzy. All of the main actors are so cute in this one. It's just a solid movie.",
    poster: "harry-potter-1.jpg",
},
{
    id: 13,
    name: "Harry Potter and the Chamber of Secrets",
    rating: 5,
    director: "Chris Columbus",
    tomatometer: 82,
    metacritic: 63,
    review: "This is my least favorite Potter movie. However, that's still about as good as your average movie. I simply detest Dobby. I do not care for him. I do not like him. Just get Dobby out of my sight. Other than the Dobbster, this is a decent movie with a semi-engaging mystery.",
    poster: "harry-potter-2.jpg",
},
{
    id: 14,
    name: "Harry Potter and the Prizoner of Azkaban",
    rating: 9,
    director: "Alfonso Cuaron",
    tomatometer: 90,
    metacritic: 82,
    review: "The objectively best Harry Potter movie, this movie is where the Potter series turns from (mostly) light-hearted romps to be a little more serious and dark. Harry starts dealing with some of his trauma, Lupin is the best Defense Against the Dark Arts Teacher, and the movie is able to balance between being overly happy and overly depressing. My one complaint with the movie is that it never talks about who the Marauders really are, which removes a dimension from the books.",
    poster: "harry-potter-3.jpg",
},
{
    id: 15,
    name: "Harry Potter and the Goblet and Fire",
    rating: 7,
    director: "Mike Newell",
    tomatometer: 88,
    metacritic: 81,
    review: "The Goblet of Fire has the advantage of being a pretty easy book adaptation. Thus, it keeps up with the well-written Potter books in quality. The emotional journeys of this book aren't quite as engaging as the last one, but it's still a good time. Everyone needs a haircut, though.",
    poster: "harry-potter-4.jpg",
},
{
    id: 16,
    name: "Harry Potter and the Order of the Phoenix",
    rating: 7,
    director: "David Yates",
    tomatometer: 77,
    metacritic: 71,
    review: "Harry Potter and the Order of the Phoenix is the first Potter movie that starts to struggle from not having enough space to fit the contents of the book. The movie is still enjoyable, but it feels emotionally lacking. In particular, one death at the end doesn't feel very impactful because the movies are missing so much of a relationship in the books.",
    poster: "harry-potter-5.jpg",
},
{
    id: 17,
    name: "Harry Potter and the Half-Blood Prince",
    rating: 6,
    director: "David Yates",
    tomatometer: 84,
    metacritic: 78,
    review: "The Half-Blood Prince is a funny movie, but also a movie that suffers from the book having far more content than the movie could reasonably portray. A lot of interesting side plots or details are missed, and the result is a movie that's just average. I will give special kudos to this movie for bringing back Quidditch, though. Additionally, Ginny and Harry's romance is not spectacular. It feels like it just pops up one day, rather than being natural and fulfilling.",
    poster: "harry-potter-6.jpg",
},
{
    id: 18,
    name: "Harry Potter and the Deathly Hallows - Part 1",
    rating: 6,
    director: "David Yates",
    tomatometer: 77,
    metacritic: 65,
    review: "This movie is alright. It's not the most exciting Harry Potter movie, since it's all building up to the climactic showdown in the next movie. The sad part about this movie is that it doesn't seem to really matter. If there had been a line in the next movie saying 'Harry, Ron, and Hermione found some Horcruxes,' you would get about everything you need to out of this movie. It's hard to not look at this as one of the weaker Potter entires.",
    poster: "harry-potter-7-pt-1.jpg",
},
{
    id: 19,
    name: "Harry Potter and the Deathly Hallows - Part 2",
    rating: 8,
    director: "David Yates",
    tomatometer: 96,
    metacritic: 85,
    review: "This Harry Potter is one of the most fun. The focus is the giant battle for Hogwarts, and every ounce of spectacle and heart missing from the last movie finds its way here. It's not the most cerebral of movies, but it is a fitting end to the Potter series. My only complaint is how the battle between Harry and Voldemort is handled, as I think it was handled much better and more significantly in the books.",
    poster: "harry-potter-7-pt-2.jpg",
},
{
    id: 20,
    name: "The Imitation Game",
    rating: 8,
    director: "Morten Tyldum",
    tomatometer: 89,
    metacritic: 73,
    review: "The Imitation Game is phenomenal. While it does play fast and loose with a few bits of history, the main story of Alan Turing, his work to crack the German code during WWII, and his subsequent destroyal because of his homosexuality is extremely well-told. Benedict Cumberbatch is great, as is the composer, Alexander Desplat. I recommend that everyone see this movie. It deals with important themes, has drama and intrigue, and is overall much better than I ever anticipated it to be.",
    poster: "imitation-game.jpg",
},
{
    id: 21,
    name: "Inception",
    rating: 10,
    director: "Christopher Nolan",
    tomatometer: 87,
    metacritic: 74,
    review: "I'll just say it. Inception is my favorite movie. It's got spectacle. It's got heart. It's got the greatest soundtrack I have ever heard. And it's got rotating hallways. What more can you ask from a movie?",
    poster: "inception.png",
},
{
    id: 23,
    name: "Jason Bourne",
    rating: 4,
    director: "Paul Greengrass",
    tomatometer: 54,
    metacritic: 58,
    review: "Jason Bourne is disappointing. The movie makes the odd decision of not actually following Jason Bourne, making him more of a presence than an actual main character. The plot isn't that interesting, none of the action sequences really stick out, and I ended up wishing they'd just stuck to the original trilogy. It's not an awful movie, but after the highs of the trilogy, it's definitely a step down.",
    poster: "jason-bourne.jpg",
},
{
    id: 34,
    name: "Jojo Rabbit",
    rating: 9,
    director: "Taika Waititi",
    tomatometer: 80,
    metacritic: 58,
    review: "Jojo Rabbit is phenomenal. This movie has incredible heart. The point of view of a little boy in Nazi Germany has been done a million times, but this one still pulled it off excellently. Jojo's relationship with his mother, with the Jewish girl, and with the imaginary Adolf Hitler are all unique, fun, and heartbreaking. This movie made me laugh extremely hard as well as want to bawl my eyes out, and the two tones never feel like they are jarring next to each other. This is ultimately a movie about humans. German humans. Jewish humans. Just humans.",
    poster: "jojo.jpg",
},
{
    id: 24,
    name: "Jumanji: Welcome to the Jungle",
    rating: 7,
    director: "Jake Kasdan",
    tomatometer: 76,
    metacritic: 58,
    review: "The Jumanji reboot is surprisingly good. I walked into the theater thinking it would suck, and was very pleasantly surprised. It's funny, it's got some heart, and it's got a little bit of teen romance. It's not going to win any awards, but for a funny adventure movie? This is a very good contender for the best of those.",
    poster: "jumanji.jpg",
},
{
    id: 25,
    name: "Jumanji: The Next Level",
    rating: 5,
    director: "Jake Kasdan",
    tomatometer: 71,
    metacritic: 58,
    review: "The sequel to Jumanji: Welcome to the Jungle tried to be everything it's predecessor was. And it sort of succeeded. Problem is, none of it felt new. I remember very little about this movie, because it just wasn't that gripping. The character swapping was an incredible gimmick, though. That one idea is why I still feel this movie is probably worth seeing.",
    poster: "jumanji-2.jpg",
},
{
    id: 26,
    name: "Logan",
    rating: 9,
    director: "James Mangold",
    tomatometer: 93,
    metacritic: 77,
    review: "Logan does so much right. Apart from one scene at the beginning that was probably just in there to secure the 'R' rating, I can't find many flaws in the movie. Logan's character arc is extremely satisfying, the bleak world is an incredibly interesting setting, and the twist halfway through the movie took me entirely by surprise. The relationship between Hugh Jackman and Daphne Keen's characters has so much heart that it's impossible not to love it.",
    poster: "Logan.jpg",
},
{
    id: 9,
    name: "The Lord of the Rings: The Fellowship of the Ring",
    rating: 8,
    director: "Peter Jackson",
    tomatometer: 91,
    metacritic: 92,
    review: "The Fellowship of the Ring is the one that started it all. Every aspect of this film is great, although there are times the film dwells on something for too long. And in a 3 hour movie, the impact of that really starts to be felt. But most of this movie is phenomenal. I have a profoundly personal relationship with this movie because of what the fall and redemption of Boromir taught me. But apart from my experience, this is just a great movie. Wonderful visuals, a great air of adventure, and a heartbreaking ending. If you haven't seen this, then you likely haven't seen the others. Fix that now, please. Or else.",
    poster: "fellowship.jpg",
},
{
    id: 50,
    name: "The Lord of the Rings: The Two Towers",
    rating: 9,
    director: "Peter Jackson",
    tomatometer: 95,
    metacritic: 87,
    review: "The Battle of Helm's Deep is in this one. That alone makes this movie worth watching. Every character is wonderful, the cinematography is absolutely beautiful, and the music is iconic, as always. There are a few parts of the movie that aren't as engaging as the others (Frodo's journey), but even at it's lowest, this movie is still incredible.",
    poster: "two-towers.jpg",
},
{
    id: 36,
    name: "The Lord of the Rings: The Return of the King",
    rating: 9,
    director: "Peter Jackson",
    tomatometer: 93,
    metacritic: 94,
    review: "The finale of Lord of the Rings deserves every bit of epicness it milks. Every aspect of this movie is amazing. The production design, the costumes, the acting, the effects (besides that one elephant scene), the music, all of it. The Lord of the Rings is one of the greatest movie franchises to ever grace the screen, and this movie is a perfect example of why. Just make sure you watch the Extended Editions. Anything else is heresy.",
    poster: "rotk.jpg",
},
{
    id: 27,
    name: "The Matrix",
    rating: 5,
    director: "The Wachowskis",
    tomatometer: 88,
    metacritic: 73,
    review: "The Matrix was probably good in the 80's. Now, it just feels extremely over the top and excessive. I still enjoyed the movie, but there were a ton of points where I went, 'okay, now THAT was a little too much' (I'm looking at you, bank lobby scene). However, the Matrix is still a fun adventure into a gripping reality created by the Wachowskis and broke ground in a bunch of ways to make shots that no other movie up to that point had had. The innovation of the bullet-time shot and the 360 frozen-spin make this movie especially interesting. It's a solid movie, if a bit outdated.",
    poster: "matrix.jpg",
},
{
    id: 28,
    name: "Mission: Impossible III",
    rating: 7,
    director: "J.J. Abrams",
    tomatometer: 71,
    metacritic: 66,
    review: "Mission: Impossible III is the one where the Mission: Impossible series started getting good again. Philip Seymour Hoffman is an incredible villain, and the choice of bookending most of the movie with the same scene provides a wonderful air of drama and suspense throughout the entire film. Also, Ethan Hunt having a wife fundamentally changes the stakes from every other secret agent film, and it's better off for it.",
    poster: "mi-3.jpg",
},
{
    id: 10,
    name: "Mission Impossible: Ghost Protocol",
    rating: 7,
    director: "Brad Bird",
    tomatometer: 93,
    metacritic: 73,
    review: "Ghost Protocol is a really fun action movie. If you don't know which Mission Impossible this is, it's the one where Tom Cruise climbs on the tallest building in the world. Yep. Mission Impossible continues to deliver and is the right mixture of action, humor, and intrigue. Just another solid entry in a solid series.",
    poster: "ghost-protocol.jpg",
},
{
    id: 35,
    name: "Mission: Impossible - Rogue Nation",
    rating: 7,
    director: "Christopher McQuarrie",
    tomatometer: 94,
    metacritic: 75,
    review: "Mission Impossible is a consistently exciting franchise and this is no different. If you're wondering which one this is, this is the one where Tom Cruise hangs off of a plane. I think that tells you all I need to about the action, but I'll talk about it anyways. The action and infiltration scenes are incredibly polished and engaging. It's clear that a lot of passion, time, and stunt men went into this movie. The plot is fun, although it does make you wonder how many more times Hunt can be stuck with no one to trust except his small team.",
    poster: "rogue-nation.jpg",
},
{
    id: 8,
    name: "Mission: Impossible - Fallout",
    rating: 8,
    director: "Christopher McQuarrie",
    tomatometer: 97,
    metacritic: 86,
    review: "Mission: Impossible - Fallout is quite possibly the best Mission: Impossible movie. Henry Cavill is a fun and interesting addition to the main cast. The action is top notch, with the bathroom fight being one of my all-time favorite action sequences. The whole movie is well-executed and has the right mixture of action and intrigue. If you're wondering which one this is, it's the one with Tom Cruise on the helicopter. And the one where he breaks his foot.",
    poster: "fallout.jpg",
},
{
    id: 29,
    name: "National Treasure",
    rating: 7,
    director: "Jon Turteltaub",
    tomatometer: 46,
    metacritic: 39,
    review: "National Treasure is one of the most fun adventure movies I've seen. Stealing the Declaration of Independence for a secret map is just such a wacky idea that you can't help but love it. The entire movie is a fun sequence of tracking down clues, dealing with rivals looking for the same treasure, and talking a walk down America's memory lane.",
    poster: "National-Treasure.jpg",
},
{
    id: 30,
    name: "National Treasure: Book of Secrets",
    rating: 6,
    director: "Jon Turteltaub",
    tomatometer: 36,
    metacritic: 48,
    review: "National Treasure 2 is a faithful sequel to the original. It's a fun adventure movie. That's it. It's not Shakespeare, but it never pretends to be. It's just a fun movie about kidnapping the president, finding American myths, and tracking down clues.",
    poster: "National-Treasure-2.jpg",
},
{
    id: 31,
    name: "Oceans 11",
    rating: 8,
    director: "Steven Soderbergh",
    tomatometer: 83,
    metacritic: 74,
    review: "Oceans 11 is one of the best heist movies in existence. It's not particularly inventive in any sense, but everything it does, it does well. The acting is excellent, the characters are fun and distinct, and every bit of the heist is so interesting and fun that you can't help but just love watching them prep and pull it off.",
    poster: "Oceans-11.jpg",
},
{
    id: 32,
    name: "Pirates of the Caribbean",
    rating: 4,
    director: "Jerry Bruckheimer",
    tomatometer: 79,
    metacritic: 63,
    review: "I don't know how this spawned a franchise. Johnny Depp was fun as Jack Sparrow, sure. And as far as movies about pirate mythology and undead pirate crews go, it was pretty good. But it wasn't all that memorable. Hans Zimmer created an iconic score, but other than that, little from the film stuck out to me. I definitely did not end it wanting another. I've seen what the hype is about, and I don't really think anyone else needs to.",
    poster: "pirates.jpg",
},
{
    id: 53,
    name: "Spider-Man: Into the Spider-Verse",
    rating: 10,
    director: "Peter Ramsey, Rodney Rothman, and Bob Persichetti",
    tomatometer: 97,
    metacritic: 87,
    review: "Masterpiece. The best animated movie I have ever seen. Not only is the animation style so different and unique, but the story is incredible. I genuinely cared about all of the characters (okay, maybe I didn't vibe with Anime Peter Parker all that much), and Miles's arcs with his dad, his uncle, and being Spiderman are emotional and incredibly engaging. This movie also has one of the best soundtracks I've ever heard. If you haven't seen this movie, do yourself a favor and just watch it. You won't regret it.",
    poster: "into-the-spiderverse.jpg",
},
{
    id: 37,
    name: "Split",
    rating: 8,
    director: "M. Night Shyamalan",
    tomatometer: 77,
    metacritic: 62,
    review: "James McAvoy carries this movie. He gives one of the greatest acting performances I have ever seen. The movie is suspenseful and intense. I choose to deny the existence of any other movies related to this one (other than James McAvoy's scenes in Glass. Again, this man is just brilliant), so this is a wonderful standalone movie. Someone get James McAvoy an Oscar already.",
    poster: "split.jpg",
},
{
    id: 38,
    name: "Star Wars: Episode I - The Phantom Menace",
    rating: 3,
    director: "George Lucas",
    tomatometer: 52,
    metacritic: 51,
    review: "This movie is not that great. I'll admit Darth Maul was my favorite villain as a child, but he doesn't do that much. He just stands around, tries to run over Anakin once, and then has a cool fight scene at the end. Also, Jar Jar is in this. The movie loses 2 points alone for that. Most of the main characters are fine, though not written that well. Little Anakin was cute and some of the conflict this movie sets up is really interesting. That said, the movie tries to be action, adventure, politcal, and a comedy, and never ends up succeeding for too long at any of those. The music is absolutely amazing, although that isn't a surprise from John Williams. This is a movie you'll watch once and then only again if you have to.",
    poster: "star-wars-1.jpg",
},
{
    id: 58,
    name: "Star Wars: Episode II - Attack of the Clones",
    rating: 2,
    director: "George Lucas",
    tomatometer: 65,
    metacritic: 54,
    review: "This movie is... not good. There are a bunch of technical innovations in the movie (such as it being the first major movie to be entirely shot on digital), but none of them make up for the abysmal writing. The relationship between Anakin and Padme feels forced and unnatural. It's hard to care about anything at all in this movie until the big fight scene at the end happens. And even then, some of the visuals suffer from an overreliance on blue screens. The other hour and a half is just a slog of poorly executed romance, mystery, and politics. This could have been an interesting story, told differently. It just wasn't told differently.",
    poster: "star-wars-2.jpg",
},
{
    id: 39,
    name: "Star Wars: Episode III - Revenge of the Sith",
    rating: 5,
    director: "George Lucas",
    tomatometer: 80,
    metacritic: 68,
    review: "This movie tried to be a lot. It had a lot of great ideas, but the execution was mediocre. Anakin's fall to the dark side and the execution of the Jedi is by far the most interesting part of the movie, but the movie instead chooses to focus the first hour on a very long rescue mission. If the movie had been built solely around what worked, this would probably be one of the greatest Star Wars movies. As is, it's only decent. The music in this movie is phenomenal, however. John Williams is a genius and this movie has some of my favorite tracks from the whole series. Shout out to 'Anakin's Betrayal' and 'I'm So Sorry.'",
    poster: "star-wars-3.jpg",
},
{
    id: 40,
    name: "Star Wars: Episode IV - A New Hope",
    rating: 7,
    director: "George Lucas",
    tomatometer: 92,
    metacritic: 90,
    review: "This movie is the Hero's Journey. It's everything you want from the Hero's Journey. It's innovative, it's exciting, and you care about all of the characters. The music is phenomenal, the VFX were great for their time, and it's just a lot of fun to watch. If you somehow haven't seen this movie, watch it. You'll enjoy it. If you have seen this, I don't know why you need me to tell you that you like it. You do. Everyone does.",
    poster: "star-wars-4.jpg",
},
{
    id: 41,
    name: "Star Wars: Episode V - The Empire Strikes Back",
    rating: 6,
    director: "Irvin Kershner",
    tomatometer: 94,
    metacritic: 82,
    review: "I never found this movie to be the pinnacle of Star Wars a lot of people hold it up as. Out of the original trilogy, I found this movie suffered the most from outdated VFX. Other than Luke's story, I didn't find myself caring very much about the plots in the movie. It's still a better movie than average, but it's no masterpiece.",
    poster: "star-wars-5.jpg",
},
{
    id: 42,
    name: "Star Wars: Episode VI - The Return of the Jedi",
    rating: 8,
    director: "Richard Marquand",
    tomatometer: 82,
    metacritic: 58,
    review: "This movie is an excellent conclusion to the original Star Wars trilogy. Darth Vader and Luke provide a compelling main conflict that is only accented by the adventures through the rest of the movie. It's not a groundbreaking movie, but it is purely enjoyable and one of the highlights of the Star Wars franchise.",
    poster: "star-wars-6.jpg",
},
{
    id: 43,
    name: "Star Wars: Episode VII - The Force Awakens",
    rating: 9,
    director: "J.J. Abrams",
    tomatometer: 93,
    metacritic: 80,
    review: "This movie is just a lot of fun. It gets dragged on a lot for its similarities to Episode 4, but what really did you expect from a villain who just wants to be Darth Vader? The similarities in the planet-destroying weapon that needs to be destroyed only adds to the story, in my opinion. Rey and Finn are extremely fun leads, the visual effects are wonderful, the music is as amazing as ever, and the whole experience just feels like a fun adventure.",
    poster: "star-wars-7.jpg",
},
{
    id: 44,
    name: "Star Wars: Episode VIII - The Last Jedi",
    rating: 6,
    director: "Rian Johnson",
    tomatometer: 90,
    metacritic: 84,
    review: "This movie is not the terrible piece of cinema it gets portrayed as. It's actually a very well-executed story with clear themes and fun visual effects. The film loses points in that one of the main side plots feels like it doesn't end up meaning anything. Once the film reaches its final planet, however, it is nothing short of a masterpiece. The characters are the core of this movie, and that investment is the main reason this movie succeeds.",
    poster: "star-wars-8.jpg",
},
{
    id: 45,
    name: "Star Wars: Episode IX - The Rise of Skywalker",
    rating: 3,
    director: "J.J. Abrams",
    tomatometer: 51,
    metacritic: 53,
    review: "This movie gets some points for the visual effects and score, which are phenomenal, as always. However, the story (and thus the core of the movie) is terrible. A villain is pulled from the midst of nowhere to change the trajectory of the saga, and manages to make the entire last movie feel like it meant nothing. Speaking of meaning nothing, allow me to introduce you to every single character's character arc. Not a single one of them lands well. Even Ben Solo's character arc culminates in a romance that is incredibly problematic, tone-deaf, and unearned. I do not like this movie, and I love Star Wars.",
    poster: "star-wars-9.jpg",
},
{
    id: 46,
    name: "The Incredibles",
    rating: 8,
    director: "Brad Bird",
    tomatometer: 97,
    metacritic: 90,
    review: "This is another classic Disney/Pixar movie that just can't help but be enjoyable. The characters are diverse and interesting, the film deals with serious situations while not taking itself too seriously, and the Incredibles have one of the coolest theme songs ever written. Just a very high quality animated movie.",
    poster: "The-Incredibles.jpg",
},
{
    id: 47,
    name: "The Martian",
    rating: 10,
    director: "Ridley Scott",
    tomatometer: 91,
    metacritic: 80,
    review: "The Martian manages to ride the line between an intense, science-based drama and a comedy with the amazing protaganist of Mark Watney. Matt Damon is so much fun to watch onscreen. Also, this film gets added kudos for tackling actual scientific problems and possible solutions, while managing to make them engaging.",
    poster: "the-martian.jpg",
},
{
    id: 33,
    name: "Thor: Ragnarok",
    rating: 8,
    director: "Taika Waititi",
    tomatometer: 93,
    metacritic: 74,
    review: "This movie made me care about Thor. And not just because it made him funny. This movie did give Thor a fun personality, but it also gave him emotional stakes in the story. Things to care about, beyond being a near immortal god. For the humor, the characters, and the visuals, I give this movie a high rating. My only complaint was that the humor sometimes overrode the heart of the story, with important emotional beats being undercut for the sake of a joke.",
    poster: "ragnarok.jpg",
},
{
    id: 48,
    name: "Toy Story 2",
    rating: 8,
    director: "John Lasseter",
    tomatometer: 100,
    metacritic: 88,
    review: "An absolutely amazing Disney classic. The movie is a fun adventure and deals with themes of belonging and friendship. The new characters are fun and interesting, the old ones are treated with every ounce of respect they deserve, and the result is an extremely worthy sequel to a quality movie.",
    poster: "toy-story-2.jpg",
},
{
    id: 49,
    name: "Transformers",
    rating: 2,
    director: "Michael Bay and Travis Knight",
    tomatometer: 58,
    metacritic: 61,
    review: "This is one of the few movies I've ever almost turned off because I hated it so much. It somehow manages to be explosive and boring at the same time. I simply could not bring myself to care about the characters, and was honestly relieved when it was finally over. Do not recommend.",
    poster: "Transformers.jpg",
},
{
    id: 51,
    name: "Up",
    rating: 7,
    director: "Pete Docter",
    tomatometer: 98,
    metacritic: 88,
    review: "Yes, the sad montage in Up is as great as everyone says it is. The story of an old man learning to care again and a boy learning to... not be useless are engaging and entertaining. The dynamic between Carl, Russell, and Dug is extremely funny. My only real complaint is that the villain is very one-note and I never cared about him compared to the relationships and adventure in the movie.",
    poster: "Up.jpg",
},
{
    id: 52,
    name: "WALL-E",
    rating: 9,
    director: "Andrew Stanton",
    tomatometer: 95,
    metacritic: 95,
    review: "My pick for the number one Pixar movie. WALL-E is such a cute charater and a very fun protagonist. The themes of the dangers of gluttony, our relationship with nature, taking responsibility, and love are well-executed and important. The sound design and animation are both incredible as well.",
    poster: "wall-e.jpg",
},
{
    id: 55,
    name: "Wonder Woman",
    rating: 8,
    director: "Patty Jenkins",
    tomatometer: 93,
    metacritic: 76,
    review: "A near-masterclass in superhero filmmaking, Wonder Woman is nearly perfect for its first two acts. The twist in the third act is horrible, entirely unneeded, and undermines the message of the entire movie. Gal Gadot and Chris Pine are great, and as long as you turn it off 20 minutes before the end, this is one of the best superhero movies.",
    poster: "wonder-woman.jpg",
},
{
    id: 56,
    name: "X-Men",
    rating: 4,
    director: "Bryan Singer",
    tomatometer: 82,
    metacritic: 64,
    review: "A pretty average superhero movie that has since been far outclassed by the MCU. Wolverine's insistence on trying to get Jean Gray to cheat on her boyfriend is grating and was incredibly detrimental to my investment in his well-being.",
    poster: "X-Men.jpg",
},
{
    id: 57,
    name: "X2: X-Men United",
    rating: 6,
    director: "Bryan Singer",
    tomatometer: 85,
    metacritic: 68,
    review: "X2 is a step up from the first X-Men in almost every way. The nuance of the mutant vs. human debate is interesting, Magneto is a wonderful villain, and Wolverine is not the insufferable idiot he was in the first movie. Quality action, quality villains, quality movie.",
    poster: "X-Men-2.jpg",
}]

export default mock;