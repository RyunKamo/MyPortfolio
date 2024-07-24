"use strict";

let wordsAndMeanings = new Array();
let newWordsAndMeanings = new Array();

// 文字が入力されている時だけボタンが出現する処理
function appearSaveBtn() {
  if(document.getElementById("words").value !== "" || document.getElementById("meanings").value !== ""){
    document.getElementById("nextBtnContainer").style.display = "flex";
  }else{
    document.getElementById("nextBtnContainer").style.display = "none";
  }
}

// 配列に英単語と意味を加える処理
function nextBtn() {
  if(document.getElementById("FlashCardsWords").style.display != "none" && document.getElementById("words").value !==""){
    wordsAndMeanings.push(document.getElementById("words").value);
    document.getElementById("FlashCardsWords").style.display = "none";
    document.getElementById("words").value="";
    document.getElementById("nextBtnContainer").style.display = "none";
    document.getElementById("FlashCardsMeanigs").style.display = "flex";
    
    // 一つ前の英単語を消すボタンを出現させる処理
    if(wordsAndMeanings.length!==0&&wordsAndMeanings.length%2==1){
      document.getElementById("deleteBtnContainer").style.display="block";
      document.getElementById("deleteMeaningsBtn").style.display="none";
      document.getElementById("deleteWordsBtn").style.display="block";
    }
  }else if(document.getElementById("FlashCardsMeanigs").style.display = "flex" && document.getElementById("meanings").value !==""){
    wordsAndMeanings.push(document.getElementById("meanings").value);
    document.getElementById("FlashCardsMeanigs").style.display = "none";
    document.getElementById("meanings").value="";
    document.getElementById("nextBtnContainer").style.display = "none";
    document.getElementById("FlashCardsWords").style.display = "flex";
    
    // 一つ前の意味を消すボタンを出現させる処理
    if(wordsAndMeanings.length!==0&&wordsAndMeanings.length%2==0){
      document.getElementById("deleteBtnContainer").style.display="block";
      document.getElementById("deleteWordsBtn").style.display="none";
      document.getElementById("deleteMeaningsBtn").style.display="block";
    }

  }
    // 英単語とその意味のペアを一つ以上入力した際に完了ボタンが出現する処理
    if(wordsAndMeanings.length % 2 == 0 && wordsAndMeanings.length !== 0){
      document.getElementById("blackBoardTitle").style.display="none";
      document.getElementById("useFlashCards").style.display="block";
    }else{
      document.getElementById("useFlashCards").style.display="none";
      document.getElementById("blackBoardTitle").style.display="block";
    }
  // console.log(wordsAndMeanings);
}

// チェックボックスに✓が付け加えられた際に、（一次元）配列を英単語とその意味ごとに区切りに多次元配列に変更
function makeFlashCards(checkbox){
  if(checkbox.checked){
    for(let i = 0; wordsAndMeanings.length>i; i++ ){
      if(newWordsAndMeanings.length===wordsAndMeanings.length/2){
        break;
      }else{
        newWordsAndMeanings.push(wordsAndMeanings.slice(i*2,(i+2)+i*1))
      }
    }
  }else{
    ;
  }
  console.log(newWordsAndMeanings)
}