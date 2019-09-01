
const computerChoice = () => {

    let makeChoice = Math.floor((Math.random() * 3) + 1);
    if (makeChoice === 1) {
        makeChoice = "rock";
    } else if (makeChoice === 2) {
        makeChoice = "paper";
    } else {
        makeChoice = "scissors";
    }
    return makeChoice;
}