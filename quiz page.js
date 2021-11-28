window.alert("plz close this website");
u1name = localStorage.getItem("u1name");
u2name = localStorage.getItem("u2name");
u1s = 0;
u2s = 0;
document.getElementById("player1_name").innerHTML = u1name + ":";
document.getElementById("player2_name").innerHTML = u2name + ":";


document.getElementById("player1_score").innerHTML = u1s;
document.getElementById("player2_score").innerHTML = u2s;
document.getElementById("player-question").innerHTML = u1name + " is asking";
document.getElementById("player-answer").innerHTML = u2name + " is answering";

function send() {
    number1 = document.getElementById("number1").innerHTML="disabled";
    number2 = document.getElementById("number2").innerHTML="disabled";
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    canswer = parseInt(number1) * parseInt(number2);
    qnum = "<h4>" + number1 + "X" + number2 + "</h4>";
    answerbox = "<br>Answer : <input type ='text' id='inputbox'>";
    checkbutton = "<br><br><button onclick='check()' class='btn btn-success'>Check</button>";
};
function check() {
    answer = document.getElementById("ABox").value;
    if (answer == canswer) {
        u2s = u2s + 1
    }
    else{
        u1s = u1s + 1
    }
}