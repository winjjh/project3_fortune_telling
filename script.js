//console.log("Hello is this working?");

//load the aritable libray and call it air table
var Airtable = require("airtable");
//console.log(Airtable);

// connect our air table base to our website using API key
var base = new Airtable({ apiKey: "keyuZxN16RiqUv9vr" }).base(
    "applmrp6L7vZ2YqB1"
  );


const cards = document.querySelectorAll(".flip-card-inner");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));




//function hzplay($mp3){
  //hz = document.getElementById("hz");
  //hz.src = $mp3;
  //hz.play();
//}



// sound effect
var audio1 = $("#audio1")[0];
$("#image1").mouseenter(function(){
  audio1.play();
  audio1.loop = true;
});
$("#image1").mouseleave(function(){
  audio1.currentTime = 0;
  audio1.pause();
});

var audio2 = $("#audio2")[0];
$("#image2").mouseenter(function(){
  audio2.play();
  audio2.loop = true;
});
$("#image2").mouseleave(function(){
  audio2.currentTime = 0;
  audio2.pause();
});




  let rollingData = [
    'Welcome Visitor ',
    'This is ',
    'About Fortune',
    'Telling',
    'Wish a Luck',
    'Choose One'

]    // 롤링할 데이터를 넣으면 됩니다 갯수 제한 없음

let timer = 2000 // 롤링되는 주기 (1000 => 1초)
rollingData.classList.add("text-list")


let first = document.getElementById('first'),
second = document.getElementById('second'),
third = document.getElementById('third')
let move = 2
let dataCnt = 1
let listCnt = 1

//위 선언은 따로 완전히 수정하지 않는 한 조정할 필요는 없음.

first.children[0].innerHTML = rollingData[0]

setInterval(() => {
if(move == 2){
first.classList.remove('card_sliding')
first.classList.add('card_sliding_after')

second.classList.remove('card_sliding_after')
second.classList.add('card_sliding')

third.classList.remove('card_sliding_after')
third.classList.remove('card_sliding')

move = 0
} else if (move == 1){
first.classList.remove('card_sliding_after')
first.classList.add('card_sliding')

second.classList.remove('card_sliding_after')
second.classList.remove('card_sliding')

third.classList.remove('card_sliding')
third.classList.add('card_sliding_after')

move = 2
} else if (move == 0) {
first.classList.remove('card_sliding_after')
first.classList.remove('card_sliding')

second.classList.remove('card_sliding')
second.classList.add('card_sliding_after')

third.classList.remove('card_sliding_after')
third.classList.add('card_sliding')

move = 1
}

if(dataCnt < (rollingData.length - 1)) {
document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
dataCnt++
} else if(dataCnt == rollingData.length - 1) {
document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
dataCnt = 0
}

if(listCnt < 2) {
listCnt++
} else if (listCnt == 2) {
listCnt = 0
}

console.log(listCnt)
}, timer);
