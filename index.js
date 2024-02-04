function no_clicked() {
  var snd = new Audio("buzzer.mp3");
  snd.play();
}

function yes_clicked() {
  var snd = new Audio("anita_2.mp3");
  snd.play();
  var image = document.getElementById("love-you");
  image.src = "yippee.gif";
  document.getElementById("prompt").innerHTML = "Ws in the chaaaaWs in the chaaaatt"
}
