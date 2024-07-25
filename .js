"use strict";

let wordsAndMeanings = new Array();
let newWordsAndMeanings = new Array();

// 文字が入力されている時だけボタンが出現する処理
function appearSaveBtn() {
  if (
    document.getElementById("words").value !== "" ||
    document.getElementById("meanings").value !== ""
  ) {
    document.getElementById("nextBtnContainer").style.display = "flex";
  } else {
    document.getElementById("nextBtnContainer").style.display = "none";
  }
}

// 配列に英単語と意味を加える処理
function nextBtn() {
  if (
    document.getElementById("FlashCardsWords").style.display != "none" &&
    document.getElementById("words").value !== ""
  ) {
    wordsAndMeanings.push(document.getElementById("words").value);
    document.getElementById("FlashCardsWords").style.display = "none";
    document.getElementById("words").value = "";
    document.getElementById("nextBtnContainer").style.display = "none";
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
    document.getElementById("nextBtnContainer").style.display = "none";
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
  // console.log(wordsAndMeanings);
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
  // console.log(newWordsAndMeanings);
}

function deleteBtn(element) {
  console.log(wordsAndMeanings);
  if (element.id == "deleteWordsBtn") {
    // 配列の最新の要素（＝一番最後の要素）を抽出し、消去する
    wordsAndMeanings.pop();
    console.log(wordsAndMeanings);
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
    console.log(wordsAndMeanings);
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

    // 単語の意味を覚える
  } else if (checkbox.id == "checkboxMemorizeMeanings") {
    // 単語と意味の順番を逆に変更
    for (let i = 0; newWordsAndMeanings.length > i; i++) {
      newWordsAndMeanings[i].reverse();
    }
    // シャッフル
    shuffleFlashCardsOrder();

    // 全てランダムにして覚える
  } else {
    console.log(newWordsAndMeanings);
    shuffleWordsAndMeanings();
    shuffleFlashCardsOrder();
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
  console.log(newWordsAndMeanings);
}

// 単語（スペル）を問うのか、意味を問うのかをランダムにする
function shuffleWordsAndMeanings() {
  for (let i = newWordsAndMeanings.length - 1; 0 <= i; i--) {
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == "0") {
      ;
    } else {
      newWordsAndMeanings[i].reverse();
    }
  }
  console.log(newWordsAndMeanings);
}

// function shuffleWordsAndMeanings(){
//   for(let i = (newWordsAndMeanings.length-1); 0 <= i; i--){
//     let randomNumber = Math.floor(Math.random()*2);
//     console.log(randomNumber)
//     if(randomNumber==0&&i!==0){
//       console.log(i);
//       let j = 1;
//       [newWordsAndMeanings[i][randomNumber],newWordsAndMeanings[i][j]] = [newWordsAndMeanings[i][j],newWordsAndMeanings[i][randomNumber]];
//       console.log(newWordsAndMeanings)
//       // break;
//     }else if(randomNumber==1&&i!==0){
//       console.log(i);
//       let j=0;
//       [newWordsAndMeanings[i][j],newWordsAndMeanings[i][randomNumber]] = [newWordsAndMeanings[i][randomNumber],newWordsAndMeanings[i][j]];
//       console.log(newWordsAndMeanings)
//       // break;
//     }
//   }
// }
