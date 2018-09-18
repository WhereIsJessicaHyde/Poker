// Characters

mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: "45",
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: "26",
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation: "Scientist"
};

profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: "22",
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};

missScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: "31",
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};

mrsPeacock = {
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: "36",
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};

mrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: "62",
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};
// Weapons
var rope = {
  name: "rope",
  weight: 10
};
var knife = {
  name: "knife",
  weight: 8
};
var candlestick = {
  name: "candlestick",
  weight: 2
};
var dumbbell = {
  name: "dumbbell",
  weight: 30
};
var poison = {
  name: "poison",
  weight: 2
};
var axe = {
  name: "axe",
  weight: 15
};
var bat = {
  name: "bat",
  weight: 13
};
var trophy = {
  name: "trophy",
  weight: 25
};
var pistol = {
  name: "pistol",
  weight: 20
};
// Rooms
var dinningRoom = {
  name: "Dinning Room"
};
var conservatory = {
  name: "Conservatory"
};
var kitchen = {
  name: "Kitchen"
};
var study = {
  name: "Study"
};
var library = {
  name: "Library"
};
var billiardRoom = {
  name: "Billiard Room"
};
var lounge = {
  name: "Lounge"
};
var ballroom = {
  name: "Ballroom"
};
var hall = {
  name: "Hall"
};
var spa = {
  name: "Spa"
};
var livingRoom = {
  name: "Living Room"
};
var observatory = {
  name: "Observatory"
};
var theater = {
  name: "Theater"
};
var guestHouse = {
  name: "Guest House"
};
var patio = {
  name: "Patio"
};


// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Weapons Collection
var weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

// Rooms' Collection
var roomsArray = [dinningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];

//funcion para elegir una tarjeta aleatoria de cada mazo
function randomSelector (card) {
var randomCard = (Math.floor(Math.random() * card.length));

  return card[randomCard];
}

//crear el misterio
var misteryEnvelope;
function pickMistery (){
  var cards = [charactersArray, weaponsArray, roomsArray];
  misteryEnvelope = [];
  for (i=0; i< cards.length; i++) {
    // randomSelector (cards[i]);
    misteryEnvelope.push(randomSelector (cards[i]));
  }
  return misteryEnvelope;
}

/* opcion 2
var misteryEnvelope = []
function pickMistery () {
  var Weapon = randomSelector(weaponsArray);
  var Characters = randomSelector(charactersArray);
  var Room = randomSelector(roomsArray);
  var misteryEnvelope = [Characters,Weapon,Room];
  return misteryEnvelope;
  console.log(misteryEnvelope)
} */


/* opcion 3
function pickMistery (){
  var cards = [charactersArray, weaponsArray, roomsArray];
  var misteryEnvelope = cards.map(function(element) {
    return randomSelector (element);
  });
  return misteryEnvelope;
}*/
// pickMistery();


/*function revealMistery (play) {
  var firstName = play[0].first_name;
  var lastName = play[0].last_name;
  var weapon = play[1].name;
  var room = play[2].name;
  return firstName + " " + lastName +  " mató a Mr.Boddy usando " + weapon +  " en " + room + "!!!!"
}
function revealMistery () {
return play[0].first_name + " " + play[0].last_name +  " mató a Mr.Boddy usando " + play[1].name +  " en " + play[2].name + "!!!!"
}
revealMistery(misteryEnvelope);
*/


 /*
function revealMistery () {
  var firstName = play[0].first_name;
  var lastName = play[0].last_name;
  var weapon = play[1].name;
  var room = play[2].name;
  return firstName + " " + lastName +  " mató a Mr.Boddy usando " + weapon +  " en " + room + "!!!!"
} */

/* function revealMistery (play) {
return play[0].first_name + " " + play[0].last_name +  " mató a Mr.Boddy usando " + play[1].name +  " en " + play[2].name + "!!!!";
}
 revealMistery(pickMistery()); */
