"use strict";

let wordsAndMeanings = [];

// 文字が入力されている時だけボタンが出現する処理
function appearSaveBtn() {
  if (document.getElementById("FlashCardsWords").value == "") {
    document.getElementById("nextBackBtn").style.display = "none";
  } else {
    document.getElementById("nextBackBtn").style.display = "flex";
  }
}

function nextBtn() {
  // 配列に英単語を入れる
  if (document.getElementById("FlashCardsWords").value !== "") {
    wordsAndMeanings.push(document.getElementById("FlashCardsWords").value);
    document.getElementById("FlashCardsWords").style.display = "none";
    document.getElementById("FlashCardsMeanigs").style.display = "block";
    console.log(wordsAndMeanings);
  }
}
