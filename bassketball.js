let homeName = document.getElementById("homeName");
let guestName = document.getElementById("guestName");
let score1 =document.getElementById("score1");
let score2 =document.getElementById("score2");
let homeScoreValue = 0;
let guestScoreValue = 0;
function updateLeader() {
    homeName.classList.remove("fire");
    guestName.classList.remove("fire");

    if (homeScoreValue > guestScoreValue) {
        homeName.classList.add("fire");
    } else if (guestScoreValue > homeScoreValue) {
        guestName.classList.add("fire");
    }
}
function homeScore(points){
    homeScoreValue += points;
    score1.textContent = homeScoreValue;
     updateLeader();
}
function guestScore(points){
    guestScoreValue += points;
    score2.textContent = guestScoreValue;
    updateLeader();
}
function reset(){
    homeScoreValue = 0;
    guestScoreValue = 0;
    score1.textContent = homeScoreValue;
    score2.textContent = guestScoreValue;
    homeName.classList.remove("fire");
    guestName.classList.remove("fire");
}
