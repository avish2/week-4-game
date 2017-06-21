var wins = 0 
var losses = 0
var yournumber = 0
var number = (Math.floor(Math.random() * 120) + 19);

var crystal1 = (Math.floor(Math.random() * 12) + 1);
var crystal2 = (Math.floor(Math.random() * 12) + 1);
var crystal3 = (Math.floor(Math.random() * 12) + 1);
var crystal4 = (Math.floor(Math.random() * 12) + 1);

console.log("crystal1 " + crystal1)
console.log("crystal2 " + crystal2)
console.log("crystal3 " + crystal3)
console.log("crystal3 " + crystal3)

console.log("number " + number)
console.log("your number " + yournumber)

$(document).ready(function(){
	$("#number").html(number);
	$("#wins").html("Wins = " + wins);
	$("#losses").html("Losses = " + losses);
	$("#yournumber").html(yournumber);

	$("#crystal1").on("click", function() {
		yournumber = yournumber + crystal1;
		$("#yournumber").html(yournumber);
		console.log("your number " + yournumber)
		runGame();
	})
	$("#crystal2").click(function() {
		yournumber = yournumber + crystal2
		$("#yournumber").html(yournumber);
		runGame();
	})
	$("#crystal3").click(function() {
		yournumber = yournumber + crystal3
		$("#yournumber").html(yournumber);
		runGame();
	})
	$("#crystal4").click(function() {
		yournumber = yournumber + crystal4
		$("#yournumber").html(yournumber);
		runGame();
	})
});

function runGame() {
	if (yournumber === number) {
		wins = wins + 1;
		reload();
	} else if (yournumber > number) {
		losses = losses + 1;
		reload();
	} else {
		doMath();
	}
}

function doMath() {
	$("#yournumber").empty(yournumber);
	$("#yournumber").append(yournumber);

	$('#wins').empty();
	$('#wins').append("Wins = " + wins);

	$('#losses').empty();
	$('#losses').append("Losses = " + losses);
}

function reload() {
	yournumber = 0;
	number = Math.floor((Math.random() * 120) + 19);

	$('#number').empty();
	$('#number').append(number);

	var crystal1 = Math.floor((Math.random() * 12) + 1);
	var crystal2 = Math.floor((Math.random() * 12) + 1);
	var crystal3 = Math.floor((Math.random() * 12) + 1);
	var crystal4 = Math.floor((Math.random() * 12) + 1);
	doMath();
}	

// var crystals = [0]
// var crystal;

	// numbergen();
	// dispyournumber();
	// assignvalue();


  // setInterval(numbergen, 50);
 //  	var timesRun = 0;
	// var interval = setInterval(function(){
 //    	timesRun += 1;
 //    	if(timesRun === 60){
 //        clearInterval(interval);
 //    	}
	// }, 2000);
	// numbergen();


// function numbergen() {
//  	var number;
//  	var number = $('#number').text(Math.floor(Math.random() * 120) + 19);
//  	if (number>120 || number<19) {
//  		numbergen();
//  	}
//  	console.log(innerHTML)
//   }
// function assignvalue() {
// 	$("button").val(Math.floor(Math.random() * 12) + 1);
// 		if (crystal>12 || crystal<1) {
// 	 		assignvalue();
// 	 	}
// }
// function crystalmath(total,num) {
// 	return total + num;
// }
// function dispyournumber() {
// 	$('#yournumber').text(crystals.reduce(crystalmath));
// }
// $("button").click(function() {
// 	crystals.push(value);
// });
