let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg_label");
const uScore = document.querySelector("#user_score");
const cScore = document.querySelector("#com_score");


const comChoice = () => {
    const option = ['rock', 'paper', 'scissor']
    const c = Math.floor(Math.random() * option.length);
    // console.log(c);
    return option[c];

}

const drawGame = () => {
    console.log("game was draw!!");
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "#76ABAE"
    // document.querySelector("#msg_label").style.backgroundColor = "black";

}

const userWin = () => {
    console.log("User Win!!");
    msg.innerText = "You Win";
    msg.style.backgroundColor = "green";
    msg.style.color = "black";

}

const comWin = () => {
    console.log("You Lose Try Again!!");
    msg.innerText = "You Lose Try Again";
    msg.style.backgroundColor = "red";
    msg.style.color = "black";
}

const playGame = (userChoice) => {
    console.log("user choice  =", userChoice);
    const comRandomChoice = comChoice();
    console.log("computer choice  =", comRandomChoice);

    if (userChoice === comRandomChoice) {
        drawGame();

    }
    else if ((userChoice === "rock" && comRandomChoice === "scissor") ||
        (userChoice === "paper" && comRandomChoice === "rock") ||
        (userChoice === "scissor" && comRandomChoice === "paper")) {

        userWin();
        userscore++;
        // score();
        return score();
    }
    else {
        comWin();
        comscore++;
        return score();
    }
}


const score = () => {
    uScore.textContent = userscore;
    cScore.textContent = comscore;
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);

    });
});
