let guessingGame = confirm('Do you want to play a game?');
const two = 2;
const maxAttempts = 3;
const four = 4;

if (!guessingGame) {
    alert('You did not become a billionaire, but can.');
} else {
    while (guessingGame) {
        let max = 8;
        let maxAttemptPrize = 100;
        let attemptPrize = maxAttemptPrize;
        let totalWin = 0;
        let attempts = maxAttempts;

        while (guessingGame && attempts > 0) {
            let randomNumber = Math.round(Math.random() * max);
            console.log(randomNumber); //for check a right number

            let userNumber = prompt(
`Choose a roulette number from 0 to ${max} :
Attempts left: ${attempts} 
Total prize: ${totalWin}$ 
Possible prize on current attempt : ${attemptPrize}$
      `);

            if (!userNumber) {
                break;
            }

            if (+userNumber === randomNumber) {
                totalWin += attemptPrize;
                attempts = maxAttempts;
                guessingGame = confirm(`Congratulation, you won! Your prize is: ${totalWin} $. 
Do you want to continue?`);

                if (!guessingGame) {
                    break;
                } else {
                    max += four;
                    maxAttemptPrize *= two;
                    attemptPrize = maxAttemptPrize;
                }

            } else {
                attempts--;
                attemptPrize /= two;
            }
        }

        guessingGame = confirm(`Thank you for your participation. Your prize is: ${totalWin}$. 
Do you want to play again?`);
    }

}