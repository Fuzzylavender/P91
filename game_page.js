player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");

player1score = 0;
player2score = 0;

document.getElementById("player1_name").innerHTML = player1name + ":";
document.getElementById("player2_name").innerHTML = player2name + ":";

document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "Question Turn: " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2name;

function send(){
    get_word = document.getElementById("word").value
    word = get_word.toLowerCase()
    console.log(word)

    letter1 = word.charAt(1)
    console.log(letter1)

    letter2 = word.charAt(Math.floor(word.length / 2))
    console.log(letter2)

    letter3 = word.charAt(word.length - 1)
    console.log(letter3)

    word1 = word.replace(letter1, "_")
    console.log(word1)

    word2 = word1.replace(letter2, "_")
    console.log(word2)

    word3 = word2.replace(letter3, "_")
    console.log(word3)

    question = "<h4>Q. " +word3+ "</h4>"
    textbox = "Answer:<input class = 'form-control' id = 'input_word'>"
    checkbutton = "<br><button onclick='check()' class='btn btn-success'>Check</button>"
    row = question + textbox + checkbutton
    document.getElementById("output").innerHTML = row
    document.getElementById("word").value = " "
}



















