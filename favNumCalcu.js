let fav_num = 28; 
let user_guess; 

while (user_guess !== fav_num) {
    user_guess = parseInt(prompt("Guess my Favorite Number:"));

    if (user_guess < fav_num) {
        console.log("Too low! Try again.");
    } else if (user_guess > fav_num) {
        console.log("Too high! Try again.");
    } else {
        console.log("Congratulations  you're correct! You've guessed my Favorite Number.");
    }
}
