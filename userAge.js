let age = prompt("What is your Age? ");

if (age < 5) {
    console.log("Toddler");
} else if (age >= 5 && age <= 12){
    console.log("child");
} else if (age >=13 && age <= 19){
    console.log("Teenager");
} else if (age >= 20 && age <= 35){
    console.log("Young Adult");
} else if (age >= 36 && age <= 60){
    console.log("Middle Age");

}else{
    
    console.log("Senior");
}
