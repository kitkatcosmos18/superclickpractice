let ranNumb1 = 0;
let ranNumb2 = 0;
let ranNumb3 = 0;
let ranNumb4 = 0;
let ranNumb5 = 0;
let ranNumb6 = 0;

let score = 0;
let seconds = 60;
let highscore = 0;
let clicks = 0;
let miss = 0;

function getRanNum() {
  ranNumb1 = Math.floor(Math.random() * 80) + 5;
  ranNumb2 = Math.floor(Math.random() * 80) + 5;
  ranNumb3 = Math.floor(Math.random() * 80) + 5;
  ranNumb4 = Math.floor(Math.random() * 80) + 5;

  ranNumb5 = Math.floor(Math.random() * 75) + 25;
}

function moveCircle() {
  getRanNum();

  score = score + 1;

  document.getElementById("circle01").style.left = ranNumb1 + "%";
  document.getElementById("circle01").style.right = ranNumb2 + "%";
  document.getElementById("circle01").style.top = ranNumb3 + "%";
  document.getElementById("circle01").style.bottom = ranNumb4 + "%";

  document.getElementById("circle01").style.width = ranNumb5 + "px";
  document.getElementById("circle01").style.height = ranNumb5 + "px";
}

function miss1() {
  clicks = clicks + 1;
}

function startGame() {
  document.getElementById("circle01").style.display = "block";
  document.getElementById("cover01").style.display = "none";

  seconds--;
  if (seconds < 0) {
    document.getElementById("circle01").style.display = "none";
    document.getElementById("cover01").style.display = "block";

    if (score > highscore) {
      highscore = score;
    }
    document.getElementById("highscore1").innerHTML = "Highscore: " + highscore;
    seconds = 60;
  } else {
    setTimeout(startGame, 1000);
  }
}

function startGame2() {
  document.getElementById("time1").innerHTML = "Time: " + seconds;
  document.getElementById("score1").innerHTML = "Score: " + score;
  document.getElementById("accuracy1").innerHTML =
    "Accuracy: " + Math.floor((1 - (clicks - score) / clicks) * 100) + "%";
  if (seconds < 0) {
    console.log("Yikes Cowboy");
  } else {
    setTimeout(startGame2, 100);
  }
}

function startGame3() {
  score = 0;
  clicks = 0;
}

function goToHome() {
  window.location.href = "index.html";
}

function goToGame() {
  window.location.href = "game.html";
}
