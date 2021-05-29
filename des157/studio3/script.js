(function(){
    'use strict'; 

   /*  setting up the variables for the whole game */
    var startGame = document.getElementById('startgame');
	        const gameControl = document.getElementById('gamecontrol');
	        const game = document.getElementById('game');
            const p_1 = document.getElementById('p_1');
	        const p_2 = document.getElementById('p_2');
	        const actionArea = document.getElementById('actions');
            const kachingSound = new Audio('media/ka-ching.mp3');
            const buzzSound = new Audio('media/buzz.mp3');
            const bankruptcySound =  new Audio('media/bankruptcy.mp3');

            const gameData = {
	        dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 
		        'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
	        players: ['player 1', 'player 2'],
            p_1: [0, 0],
	        p_2: [0, 0],
	        roll1: 0,
	        roll2: 0,
	        rollSum: 0,
	        index: 0,
	        gameEnd: 29 
    }


   /*  adding and removing buttons based on when they need to be visible or hidden */
            startGame.addEventListener("click", function(){
                gameData.index = Math.round(Math.random());
                /*  gameControl.innerHTML = '<h2 id="center">The Game Has Started</h2>';  */
                /*   gameControl.innerHTML +='<button id="quit">Wanna Quit?</button>';   */
                document.getElementById('quit').addEventListener("click",function(){
                    location.reload(); 
                });  
                 document.getElementById("startgame").style.display = "none"; 
                 document.getElementById("quit").style.display = "block";
                setUpTurn();  

             });  

             /* setting up buttons such as roll the dice to set up the turn for current player */
            function setUpTurn(){
                console.log("in set up turn"); 
                game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`; 
                actionArea.innerHTML = '<button  id="roll">Roll the Dice</button>'; 
                document.getElementById('roll').addEventListener('click',function(){
                    throwDice();  

                 }); 
    
        } 


        /* function that basically rolls the dice; takes into account each scenario such as snake eyes or rolling a one */
         function throwDice(){
            actionArea.innerHTML = ''; 
            gameData.roll1 = Math.floor(Math.random()*6)+1; 
            gameData.roll2 = Math.floor(Math.random()*6)+1; 
            game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`; 
            game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
                               <img src="${gameData.dice[gameData.roll2-1]}">`; 
            gameData.rollSum = gameData.roll1 + gameData.roll2; 
            
             if(gameData.rollSum === 2){
                game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
                gameData.p_2[gameData.index]  = 0; 
                gameData.index ? (gameData.index = 0): (gameData.index = 1); 
                console.log("snake eyes were rolled"); 
                setTimeout(setUpTurn, 2000); 
                bankruptcySound.play(); 
                 

            }
            else if(gameData.roll1 === 1 || gameData.roll2 === 1){
                gameData.index ? (gameData.index = 0): (gameData.index = 1); 
                game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
                setTimeout(setUpTurn, 2000); 
                buzzSound.play(); 
                console.log("one of the two dice was a 1"); 
            }
            else{
                gameData.p_2[gameData.index] = gameData.p_2[gameData.index]+gameData.rollSum; 
                gameData.p_1[gameData.index] = gameData.p_1[gameData.index]+gameData.rollSum; 
                kachingSound.play();
                actionArea.innerHTML = '<button id="rollagain">Roll again</button>     OR     <button id="pass">Pass</button>'; 
                document.getElementById('rollagain').addEventListener('click',function(){
                    throwDice(); 
                }); 
                document.getElementById('pass').addEventListener('click',function(){
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1); 
                    setUpTurn(); 
                }); 
                console.log("the game proceeds"); 
            } 
            checkWinningCondition(); 
        }

       /*  checks if any one player has hit 30. If they did, changes quit button to start a new game etc.
 */
        function checkWinningCondition(){
           /* showCurrentScore(); */
           p_1.innerHTML = `<p>
           ${gameData.p_1[0]}</p>`; 
           p_2.innerHTML = `<p>
           ${gameData.p_2[1]}</p>`; 
            if(gameData.p_2[gameData.index]>gameData.gameEnd){
                winner.innerHTML = `<h2>${gameData.players[gameData.index]}
                wins with ${gameData.p_2[gameData.index]} points!</h2>`; 
                actionArea.innerHTML = ''; 
                document.getElementById('quit').innerHTML = "Start a New Game?"; 
            }
            else if(gameData.p_1[gameData.index]>gameData.gameEnd){
                p_1.innerHTML = `<h2>${gameData.players[gameData.index]}
                wins with ${gameData.p_1[gameData.index]} points!</h2>`; 
                actionArea.innerHTML = ''; 
                document.getElementById('startgame').innerHTML = "Start a New Game?"; 
            }
            else{
                p_1.innerHTML = `<p>
                ${gameData.p_1[0]}</p>`; 
                p_2.innerHTML = `<p>
                ${gameData.p_2[1]}</p>`; 

            }

           
        }

       /*  displays score */

         function showCurrentScore(){
            console.log("incurrentscore"); 
            p_2.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}
            ${gameData.p_2[0]}</strong> and <strong> ${gameData.players[1]}
            ${gameData.p_2[1]}</strong></p>`; 
        }   

})(); 