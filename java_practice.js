var greeting = prompt("What's your name?");

alert("Welcome to our page! " + greeting);

var userTeam = confirm("Do you like WSU?");

var teamName = "WSU";
var teamType = "NCAA";
var firstGame = 8;
var teamIsWsu = true;

if (userTeam) {
    alert(teamName + " " + teamType + " " + firstGame);
}
else {
    alert("You don't like WSU??");
}

if (teamIsWsu) {
    alert("My favorite team is WSU!!")
}
else {
    alert("You must like UW?!?!")
}

if (firstGame !== 7) {
    prompt("How old were you at your first WSU game?")
}