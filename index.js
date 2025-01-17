"use strict";

let wordsAndMeanings = new Array();
let newWordsAndMeanings = new Array();

// 文字が入力されている時だけボタンが出現する処理
function appearSaveBtn() {
  if (
    document.getElementById("words").value !== "" ||
    document.getElementById("meanings").value !== ""
  ) {
    document.getElementById("saveBtnContainer").style.display = "flex";
  } else {
    document.getElementById("saveBtnContainer").style.display = "none";
  }
}

// 配列に英単語と意味を加える処理
function saveBtn() {
  if (
    document.getElementById("FlashCardsWords").style.display != "none" &&
    document.getElementById("words").value !== ""
  ) {
    wordsAndMeanings.push(document.getElementById("words").value);
    document.getElementById("FlashCardsWords").style.display = "none";
    document.getElementById("words").value = "";
    document.getElementById("saveBtnContainer").style.display = "none";
    document.getElementById("FlashCardsMeanigs").style.display = "flex";

    // 一つ前の英単語を消すボタンを出現させる処理
    if (wordsAndMeanings.length !== 0 && wordsAndMeanings.length % 2 == 1) {
      document.getElementById("deleteBtnContainer").style.display = "block";
      document.getElementById("deleteMeaningsBtn").style.display = "none";
      document.getElementById("deleteWordsBtn").style.display = "block";
    }
  } else if (
    (document.getElementById("FlashCardsMeanigs").style.display =
      "flex" && document.getElementById("meanings").value !== "")
  ) {
    wordsAndMeanings.push(document.getElementById("meanings").value);
    document.getElementById("FlashCardsMeanigs").style.display = "none";
    document.getElementById("meanings").value = "";
    document.getElementById("saveBtnContainer").style.display = "none";
    document.getElementById("FlashCardsWords").style.display = "flex";

    // 一つ前の意味を消すボタンを出現させる処理
    if (wordsAndMeanings.length !== 0 && wordsAndMeanings.length % 2 == 0) {
      document.getElementById("deleteBtnContainer").style.display = "block";
      document.getElementById("deleteWordsBtn").style.display = "none";
      document.getElementById("deleteMeaningsBtn").style.display = "block";
    }
  }
  // 英単語とその意味のペアを一つ以上入力した際に完了ボタンが出現する処理
  if (wordsAndMeanings.length % 2 == 0 && wordsAndMeanings.length !== 0) {
    document.getElementById("blackBoardTitle").style.display = "none";
    document.getElementById("useFlashCards").style.display = "block";
  } else {
    document.getElementById("useFlashCards").style.display = "none";
    document.getElementById("blackBoardTitle").style.display = "block";
  }
}

// ✓が付け加えられた際に、（一次元）配列を英単語とその意味ごとに区切りに多次元配列に変更、及び単語帳の種類選択できるよ画面に変更する
function makeFlashCards(checkbox) {
  if (checkbox.checked) {
    for (let i = 0; wordsAndMeanings.length > i; i++) {
      if (newWordsAndMeanings.length === wordsAndMeanings.length / 2) {
        break;
      } else {
        newWordsAndMeanings.push(wordsAndMeanings.slice(i * 2, i + 2 + i * 1));
        document.getElementById("mainPageContent").style.display = "none";
        document.getElementById("selectFlashCardsTypesPage").style.display =
          "flex";
      }
    }
  } else {
  }
}

function deleteBtn(element) {
  if (element.id == "deleteWordsBtn") {
    // 配列の最新の要素（＝一番最後の要素）を抽出し、消去する
    wordsAndMeanings.pop();
    document.getElementById("FlashCardsMeanigs").style.display = "none";
    document.getElementById("deleteBtnContainer").style.display = "none";
    document.getElementById("deleteMeaningsBtn").style.display = "none";
    document.getElementById("FlashCardsWords").style.display = "flex";

    // 英単語とその意味のペアを一つ以上入力した際に完了ボタンが出現する処理
    if (wordsAndMeanings.length % 2 == 0 && wordsAndMeanings.length !== 0) {
      document.getElementById("blackBoardTitle").style.display = "none";
      document.getElementById("useFlashCards").style.display = "block";
    } else {
      document.getElementById("useFlashCards").style.display = "none";
      document.getElementById("blackBoardTitle").style.display = "block";
    }
  } else {
    // 配列の最新の要素（＝一番最後の要素）を抽出し、消去する
    wordsAndMeanings.pop();
    document.getElementById("FlashCardsWords").style.display = "none";
    document.getElementById("deleteBtnContainer").style.display = "none";
    document.getElementById("deleteWordsBtn").style.display = "none";
    document.getElementById("FlashCardsMeanigs").style.display = "flex";

    // 英単語とその意味のペアを一つ以上入力した際に完了ボタンが出現する処理
    if (wordsAndMeanings.length % 2 == 0 && wordsAndMeanings.length !== 0) {
      document.getElementById("blackBoardTitle").style.display = "none";
      document.getElementById("useFlashCards").style.display = "block";
    } else {
      document.getElementById("useFlashCards").style.display = "none";
      document.getElementById("blackBoardTitle").style.display = "block";
    }
  }
}

// 単語帳の意味をタイプを選択する画面
function toPracticePage(checkbox) {
  document.getElementById("selectFlashCardsTypesPage").style.display = "none";
  document.getElementById("practicePage").style.display = "flex";

  // 単語のスペルを覚える
  if (checkbox.id == "checkboxMemorizeWords") {
    // シャッフル
    shuffleFlashCardsOrder();
    // 最初の画面の単語または意味(初期値)
    document.getElementById("usingFlashCards").innerHTML =
      newWordsAndMeanings[0][0];

    // 単語の意味を覚える
  } else if (checkbox.id == "checkboxMemorizeMeanings") {
    // 単語と意味の順番を逆に変更
    for (let i = 0; newWordsAndMeanings.length > i; i++) {
      newWordsAndMeanings[i].reverse();
    }
    // シャッフル
    shuffleFlashCardsOrder();
    // 最初の画面の単語または意味(初期値)
    document.getElementById("usingFlashCards").innerHTML =
      newWordsAndMeanings[0][0];

    // 全てランダムにして覚える
  } else {
    shuffleWordsAndMeanings();
    shuffleFlashCardsOrder();
    // 最初の画面の単語または意味(初期値)
    document.getElementById("usingFlashCards").innerHTML =
      newWordsAndMeanings[0][0];
  }
}

// 単語や意味を入力した順ではなく、ランダムにする
function shuffleFlashCardsOrder() {
  for (let i = newWordsAndMeanings.length - 1; 0 < i; i--) {
    let randomNumber = Math.floor(Math.random() * (i + 1));

    [newWordsAndMeanings[i], newWordsAndMeanings[randomNumber]] = [
      newWordsAndMeanings[randomNumber],
      newWordsAndMeanings[i],
    ];
  }
}

// 単語（スペル）を問うのか、意味を問うのかをランダムにする
function shuffleWordsAndMeanings() {
  for (let i = newWordsAndMeanings.length - 1; 0 <= i; i--) {
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == "0") {
    } else {
      newWordsAndMeanings[i].reverse();
    }
  }
}

// ボタンを使った、単語帳を前後に動かす処理
var num = 0;
function nextBackBtn(element) {
  // （シャッフル後）再び一元配列に変更
  var flatArray = newWordsAndMeanings.flat();
  
  if (element.id == "nextBtn") {
    if(num==flatArray.length-1){
      document.getElementById("usingFlashCards").innerHTML = flatArray[num];
      document.getElementById("nextBtn").style.pointerEvents ="none";
    }else{
      num = num + 1;
      document.getElementById("usingFlashCards").innerHTML = flatArray[num];
      document.getElementById("backBtn").style.pointerEvents ="auto";
    }
  } else {
    if(num==0){
      document.getElementById("usingFlashCards").innerHTML = flatArray[num];
      document.getElementById("backBtn").style.pointerEvents ="none";
    }else{
      num = num - 1;
      document.getElementById("usingFlashCards").innerHTML = flatArray[num];
      document.getElementById("nextBtn").style.pointerEvents ="auto";
    }
  }
}
