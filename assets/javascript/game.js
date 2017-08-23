// Initial values are created

var score = 0;

var wins = 0;

var losses = 0;

var img1num = 0;

var img2num = 0;

var img3num = 0;

var img4num = 0;

// Random number is selected from array on page load (19-120)

var randomN = []
for (var i = 19; i <= 120; i++) {
    randomN.push(i);
}
var randomN = randomN[Math.floor(Math.random() * randomN.length)];
console.log(randomN);

function reset() {
    randomN = []
    for (var i = 19; i <= 120; i++) {
    randomN.push(i);
    }
    randomN = randomN[Math.floor(Math.random() * randomN.length)];
    score = 0;
    $("#score").html(score);
    $("#randomN").html(randomN);
    resetCrystals();
}

// Crystals are each assigned unique numerical value (1-12)

var crystalValue = [];
for (var x = 1; x <= 12; x++) {
    crystalValue.push(x);
}

var img1num = crystalValue[Math.floor(Math.random() * crystalValue.length)];
console.log(img1num);

var img2num = crystalValue[Math.floor(Math.random() * crystalValue.length)];
console.log(img2num);

var img3num = crystalValue[Math.floor(Math.random() * crystalValue.length)];
console.log(img3num);

var img4num = crystalValue[Math.floor(Math.random() * crystalValue.length)];
console.log(img4num);

function resetCrystals() {
    crystalValue = [];
    for (var x = 1; x <= 12; x++) {
    crystalValue.push(x);
    }
    
    img1num = crystalValue[Math.floor(Math.random() * crystalValue.length)];
    console.log(img1num);

    img2num = crystalValue[Math.floor(Math.random() * crystalValue.length)];
    console.log(img2num);

    img3num = crystalValue[Math.floor(Math.random() * crystalValue.length)];
    console.log(img3num);

    img4num = crystalValue[Math.floor(Math.random() * crystalValue.length)];
    console.log(img4num);
}

// Begin jQuery

$( document ).ready(function() {

// Random number is displayed, score displayed on page

    $("#randomN").html(randomN);
    $("#score").html(score);

   	$('img').mouseover(function() {
  		$(this).css('cursor','pointer');
	});
  	
// When clicked, crystal will add same amount of points to user's score

// When score > random number, player loses

// When score === random number, player wins

// Alert player on result and restart game (restart game, log win/loss)

// Create unique function that reset score and then uses if statements for end of game. Call them under each jQuery action

    $('#pic1').on('click', function() {
    	score = score + img1num;
    	$("#score").html(score);
    	 if (score > randomN) {
    	 	losses = losses + 1;
            reset();
    	 } 
    	 if (score === randomN) {
    	 	wins = wins + 1;
            randomN = randomN[Math.floor(Math.random() * randomN.length)];
            reset();
    	 }
    	 $("#wins").html(wins);
    	 $("#losses").html(losses);
    }); 

    $('#pic2').on('click', function() {
    	score = score + img2num;
    	$("#score").html(score);
    	if (score > randomN) {
    	    losses = losses + 1;
            reset();
    	} 
    	if (score === randomN) {
    	 	wins = wins + 1;
            reset();
    	}
    	$("#wins").html(wins);
    	$("#losses").html(losses);
    }); 

    $('#pic3').on('click', function() {
    	score = score + img3num;
    	$("#score").html(score);
    	if (score > randomN) {
    	 	losses = losses + 1;
            reset();
    	} 
    	if (score === randomN) {
    	 	wins = wins + 1;
            reset();
    	}
    	$("#wins").html(wins);
    	$("#losses").html(losses);
    }); 

    $('#pic4').on('click', function() {
    	score = score + img4num;
    	$("#score").html(score);
    	if (score > randomN) {
    	 	losses = losses + 1;
            reset();
    	} 
    	if (score === randomN) {
    	 	wins = wins + 1;
            reset();
    	}
    	$("#wins").html(wins);
    	$("#losses").html(losses);
    }); 
});