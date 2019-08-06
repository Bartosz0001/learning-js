
	var ans1 = document.getElementById('ans1');
	var ans2 = document.getElementById('ans2');
	var ans3 = document.getElementById('ans3');
	
	var playerPoints = 0;
	var computerPoints = 0;
	
	ans1.addEventListener("click", function() { check(1); });
	ans2.addEventListener("click", function() { check(2); });
	ans3.addEventListener("click", function() { check(3); });
	
	function check(playerMove) {
		let computerMove = Math.floor(Math.random() * 3 + 1);
		let result;
		if(computerMove===1 && playerMove===1 || computerMove===2 && playerMove===2 || computerMove===3 && playerMove===3) result = 'There is a draw.';
		else if(computerMove===1 && playerMove===2 || computerMove===2 && playerMove===3 || computerMove===3 && playerMove===1) {
			result = 'You win!';
			playerPoints++;
		}
		else if(computerMove===1 && playerMove===3 || computerMove===2 && playerMove===1 || computerMove===3 && playerMove===2) {
			result = 'You lose!';
			computerPoints++;
		}
		if(computerMove===1) computerMove = 'paper';
		else if(computerMove===2) computerMove = 'scatters';
		else if(computerMove===3) computerMove = 'stone';
		if(playerMove===1) playerMove = 'paper';
		else if(playerMove===2) playerMove = 'scatters';
		else if(playerMove===3) playerMove = 'stone';
		document.getElementById('main-frame').innerHTML="Computer chose is "+computerMove+". Your move is "+playerMove+". "+result;
		document.getElementById('results').innerHTML="Player: "+playerPoints+" Computer: "+computerPoints;
	}