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

let selectMode = document.getElementById("selection");
let selectTheme = document.getElementById("selection2");
let board = document.getElementById("board1");
let circle = document.getElementById("circle01");

let maxWidth = 65;
let minWidth = 25;

function getRanNum() {
  ranNumb1 = Math.floor(Math.random() * 80) + 5;
  ranNumb2 = Math.floor(Math.random() * 80) + 5;
  ranNumb3 = Math.floor(Math.random() * 80) + 5;
  ranNumb4 = Math.floor(Math.random() * 80) + 5;

  ranNumb5 = Math.floor(Math.random() * maxWidth) + minWidth;
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

function moveCircle2() {
  getRanNum();

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
  document.getElementById("select1").style.display = "none";
  document.getElementById("select2").style.display = "none";

  seconds--;
  if (seconds < 0) {
    document.getElementById("circle01").style.display = "none";
    document.getElementById("cover01").style.display = "block";
    document.getElementById("select1").style.display = "block";
    document.getElementById("select2").style.display = "block";

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
  moveCircle2();
}

function goToHome() {
  window.location.href = "index.html";
}

function goToGame() {
  window.location.href = "game.html";
}

function newMode() {
  if (selectMode.value == "easy") {
    board.style.width = "400px";
    board.style.height = "400px";
    maxWidth = 55;
    minWidth = 25;
  } else if (selectMode.value == "normal") {
    board.style.width = "600px";
    board.style.height = "600px";
    maxWidth = 45;
    minWidth = 20;
  } else if (selectMode.value == "hard") {
    board.style.width = "800px";
    board.style.height = "800px";
    maxWidth = 35;
    minWidth = 15;
  } else if (selectMode.value == "insane") {
    board.style.width = "900px";
    board.style.height = "900px";
    maxWidth = 15;
    minWidth = 10;
  }
}

function newTheme() {
  if (selectTheme.value == "normal") {
    board.style.backgroundColor = "rgb(9, 0, 61)";
    circle.style.backgroundColor = "white";
  } else if (selectTheme.value == "classic") {
    board.style.backgroundColor = "green";
    circle.style.backgroundColor = "rgb(9, 0, 61)";
  } else if (selectTheme.value == "dark") {
    board.style.backgroundColor = "black";
    circle.style.backgroundColor = "white";
  } else if (selectTheme.value == "light") {
    board.style.backgroundColor = "rgb(207, 207, 207)";
    circle.style.backgroundColor = "black";
  }
}
