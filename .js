"use strict";

let wordsAndMeanings = new Array();

// 文字が入力されている時だけボタンが出現する処理
function appearSaveBtn() {
  if (
    document.getElementById("FlashCardsWords").value !== "" ||
    document.getElementById("FlashCardsMeanigs").value !== ""
  ) {
    document.getElementById("nextBackBtn").style.display = "flex";
  } else {
    document.getElementById("nextBackBtn").style.display = "none";
  }
}

function nextBtn() {
  // 配列に英単語を入れる
  wordsAndMeanings.push(document.getElementById("words").value);
  console.log(wordsAndMeanings);
  document.getElementById("FlashCardsWords").style.display = "none";
  document.getElementById("FlashCardsMeanigs").style.display = "flex";
  document.getElementById("nextBackBtn").style.display = "none";
}
