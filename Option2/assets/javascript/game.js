// Create starting variables for game

var lukeSkywalker = {
	name: "Luke Skywalker",
	health: 100,
	attack: 10,
	selected: false,
	enemy: false, 
}

var darthVader = {
	name: "Darth Vader",
	health: 150,
	attack: 10,
	selected: false,
	enemy: false,
}

var obiWan = {
	name: "Obi Wan",
	health: 150,
	attack: 10,
	selected: false,
	enemy: false,
}

var hanSolo = {
	name: "Han Solo",
	health: 100,
	attack: 10,
	selected: false,
	enemy: false,
}

var beginGame = false;

var win = false;

//jQuery displaying each character's individual health
console.log(lukeSkywalker.health);
$("#char1HP").html(lukeSkywalker.health);
$("#char2HP").html(darthVader.health);
$("#char3HP").html(obiWan.health);
$("#char4HP").html(hanSolo.health);

// Insert action jQuery once character is selected (lots of "if" statements)

if (beginGame == false) {
	$("#char1").click(function(){
    $("#char1").appendTo("#charSpot");
    $("#char2, #char3, #char4").appendTo("#enemySpot");
	});

	$("#char2").click(function(){
    $("#char2").appendTo("#charSpot");
	});

	$("#char3").click(function(){
    $("#char3").appendTo("#charSpot");
    $("#char1, #char2, #char4").appendTo("#enemySpot");
	});

	$("#char4").click(function(){
    $("#char4").appendTo("#charSpot");
    $("#char1, #char2, #char3").appendTo("#enemySpot");
	});
}   

// Could use an array for attack strength (goes up by an index after each hit)

var userAttack = 10;

// Insert action jQuery for attack function

$("#attack").click(attack());

function attack() {
	// /*EnemyHP*/ = /*EnemyHP*/ - userAttack;
	// // userAttack = userAttack + 15;
	// /*UserHP*/ - /*EnemyAttack*/
	$("#readout").html("Enemy attacked for " + enemyAttack + "!")
}

// Insert action jQuery for defeating opponent/game over'

// Reset

$("#reset").click(function(){
	location.reload();
});