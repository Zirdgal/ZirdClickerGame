var button = document.getElementById("button");
var u1Button = document.getElementById("upgrade1Button");
var count = 0;
var level = 0;

button.onclick = function() {
    count = count + 1 + level;
    document.getElementById("counter").innerHTML = count;
}

u1Button.onclick = function() {
    level = level + 1;
}