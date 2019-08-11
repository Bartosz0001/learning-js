
	const paperbtn = document.getElementById('paper-btn');
	const scissorsbtn = document.getElementById('scissors-btn');
	const rockbtn = document.getElementById('rock-btn');
	
	let playerPoints = 0;
	let computerPoints = 0;
	
	paperbtn.addEventListener("click", function() { check(1); });
	scissorsbtn.addEventListener("click", function() { check(2); });
	rockbtn.addEventListener("click", function() { check(3); });
	
	function checkWinners(playerMove) {
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
		/*if(computerMove===1) computerMove = 'paper';
		else if(computerMove===2) computerMove = 'scissors';
		else if(computerMove===3) computerMove = 'rock';
		if(playerMove===1) playerMove = 'paper';
		else if(playerMove===2) playerMove = 'scissors';
		else if(playerMove===3) playerMove = 'rock';*/
		computerMove = changeNumberToString(computerMove);
		playerMove = changeNumberToString(playerMove);
		document.getElementById('main-frame').innerHTML="Computer choise is "+computerMove+". Your move is "+playerMove+". "+result;
		document.getElementById('results').innerHTML="Player: "+playerPoints+" Computer: "+computerPoints;
	}
	
	function changeNumberToString(number) {
		if(number===1) return 'paper';
		else if(number===2) return 'scissors';
		else if(number===3) return 'rock';
	}