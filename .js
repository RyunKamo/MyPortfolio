"use strict";

// 文字が入力されている時だけボタンが出現する処理
function appearSaveBtn() {
  if (document.getElementById("contentFlashCards").value == "") {
    document.getElementById("nextBackBtn").style.display = "none";
  } else {
    console.log("ok");
    document.getElementById("nextBackBtn").style.display = "flex";
  }
}
