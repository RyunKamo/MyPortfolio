"use strict";

let wordsAndMeanings = new Array();

// 文字が入力されている時だけボタンが出現する処理
function appearSaveBtn() {
  if(document.getElementById("words").value !== "" || document.getElementById("meanings").value !== ""){
    document.getElementById("nextBackBtn").style.display = "flex";
  }else{
    document.getElementById("nextBackBtn").style.display = "none";
  }
}

// 配列に英単語と意味を加える処理
function nextBtn() {
  if(document.getElementById("FlashCardsWords").style.display != "none" && document.getElementById("words").value !==""){
    wordsAndMeanings.push(document.getElementById("words").value);
    document.getElementById("FlashCardsWords").style.display = "none";
    document.getElementById("words").value="";
    document.getElementById("nextBackBtn").style.display = "none";
    document.getElementById("FlashCardsMeanigs").style.display = "flex";
    
  }else if(document.getElementById("FlashCardsMeanigs").style.display = "flex" && document.getElementById("meanings").value !==""){
    wordsAndMeanings.push(document.getElementById("meanings").value);
    document.getElementById("FlashCardsMeanigs").style.display = "none";
    document.getElementById("meanings").value="";
    document.getElementById("nextBackBtn").style.display = "none";
    document.getElementById("FlashCardsWords").style.display = "flex";
  }
  console.log(wordsAndMeanings);
}

// 英単語とその意味のペアを一つ以上入力した際に完了ボタンが出現する処理
if(wordsAndMeanings.length % 2 == 0 && wordsAndMeanings.length !== 0){
  console.log("ok");
}else{
  console.log("no");
}