const question = "お酢に卵を殻ごといれると卵はどうなるでしょう？";

const answers = [
  "透明な卵になる",
  "鏡のようになんでもうつる卵になる",
  "卵が溶けてなくなる",
  "卵が石のように堅くなる",
];

const correct = "透明な卵になる";

// 問題文の書き換え
document.getElementById("js-question").textContent = question;

// 選択ボタンの書き換え
document.getElementsByTagName("button")[0].textContent = answers[0];
document.getElementsByTagName("button")[1].textContent = answers[1];
document.getElementsByTagName("button")[2].textContent = answers[2];
document.getElementsByTagName("button")[3].textContent = answers[3];

// 正誤判定
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[0].textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解");
  }
});

document.getElementsByTagName("button")[1].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[1].textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解");
  }
});

document.getElementsByTagName("button")[2].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[2].textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解");
  }
});

document.getElementsByTagName("button")[3].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[3].textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解");
  }
});
