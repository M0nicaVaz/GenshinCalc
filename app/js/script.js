let primos = document.querySelector("#primogens");
let Welkin = document.querySelector("#Welkin");
let battlepass = document.querySelector("#battlepass");
let daily = document.querySelector("#daily");
let submitBtn = document.querySelector("#submit");
let setDate = document.querySelector("#finalDate");
let result = document.querySelector("#result");
let wraper = document.querySelector("#wraper");
let again = document.querySelector("#tryAgain");
let showSpan = document.querySelector("#clickInfo");
let showP = document.querySelector("#info");

submitBtn.addEventListener("click", checkDate);
showSpan.addEventListener("click", showInfo);
again.addEventListener("click", undo);

// change div display
function showInfo() {
  if (showP.style.display != "block") {
    showP.style.display = "block";
  } else {
    showP.style.display = "none";
  }
}

// get today's date, target date and calculates difference between dates
function getDays() {
  var today = new Date();
  var finalDay = new Date(setDate.value);
  let timeDiff = finalDay.getTime() - today.getTime();
  let daysDiff = timeDiff / (1000 * 3600 * 24) + 2;
  return daysDiff.toFixed(0);
}

// checks if date was filled in correctly, if so calls another function
function checkDate() {
    if (setDate.value == ""){
        alert ("Please insert date!")
    }else{
        calcPrimogens();
    }
}

// calculates amount of primogems according to input values
function calcPrimogens(){
    if (primos.value == "") {
        currentPrimos = 0;
      } else {
        currentPrimos = Number(primos.value);
      }
      if (daily.checked == true) {
        var dailyGems = getDays() * 60;
      } else {
        var dailyGems = 0;
      }
      if (Welkin.checked == true) {
        var Welkinems = getDays() * 90;
      } else {
        var Welkinems = 0;
      }
      if (battlepass.checked == true) {
        var battleGems = 1320;
      } else {
        var battleGems = 0;
      }
    
      let totalPrimos = dailyGems + Welkinems + battleGems + currentPrimos;
      let fates = Math.floor(totalPrimos / 160);
    
      result.innerHTML =
        "<p>Primogems: " +
        "<br>" +
        totalPrimos +
        "</p>" +
        "<br>" +
        " <p> Intertwined Fates: " +
        "<br>" +
        fates +
        "</p>";
      result.style.marginTop = "20px";
      wraper.style.display = "none";
      submitBtn.style.display = "none";
      result.style.display = "block";
      again.style.display = "block";
}

// change display back to initial state
function undo() {
  result.style.display = "none";
  wraper.style.display = "block";
  submitBtn.style.display = "block";
  again.style.display = "none";
}
