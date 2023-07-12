const question = "お酢に卵を殻ごといれると卵はどうなるでしょう？";

const answers = [
  "透明な卵になる",
  "鏡のようになんでもうつる卵になる",
  "卵が溶けてなくなる",
  "卵が石のように堅くなる",
];

const correct = "透明な卵になる";

// HTMLオブジェクトを定数にする(わかりやすいように頭に$をつけるのが良い)
const $button = document.getElementsByTagName("button");

// クイズ作成関数
const setupQuiz = () => {
  // 問題文の書き換え
  document.getElementById("js-question").textContent = question;
  // ボタンのテキストを書き換え
  for (let i = 0; i < 4; i++) {
    $button[i].textContent = answers[i];
  }
};

setupQuiz();

// 正誤判定関数
// e:イベントオブジェクト
const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解");
  }
};

// 出力関数
for (let i = 0; i < 4; i++) {
  $button[i].addEventListener("click", (e) => {
    clickHandler(e);
  });
}
