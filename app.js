const quiz = [
  {
    question: "お酢に卵を殻ごといれると卵はどうなるでしょう？",
    answers: [
      "透明な卵になる",
      "鏡のようになんでもうつる卵になる",
      "卵が溶けてなくなる",
      "卵が石のように堅くなる",
    ],
    correct: "透明な卵になる",
  },
  {
    question:
      "しゃっくりはある調味料をなめると止まります。ある調味料とはなんでしょう？",
    answers: ["お酢", "砂糖", "醤油", "塩"],
    correct: "砂糖",
  },
  {
    question:
      "甘くて美味しい羊羹ですが、羊羹はもともとあるものを煮込んだスープのことでした。あるスープとはなんでしょう？",
    answers: ["牛の血", "牛乳", "羊の肉", "馬の肉"],
    correct: "羊の肉",
  },
  {
    question: "おぼうさんが木魚をたたく意味はなんでしょう？",
    answers: [
      "1お経にリズムをつけるため",
      "亡くなった人が天国にいけるようにと祈るため",
      "眠くならないようにするため",
      "悪い霊を寄せ付けないため",
    ],
    correct: "眠くならないようにするため",
  },
  {
    question: "「アホウドリ」の名前の由来はなんでしょう？",
    answers: [
      "アホーと鳴くから",
      "人間にすぐつかまるから",
      "アホみたいな顔をしているから",
      "阿波踊りみたいに踊っているように飛ぶから",
    ],
    correct: "人間にすぐつかまるから",
  },
];

// クイズ番号
let quizIndex = 0;

// 正解数
let score = 0;

// HTMLオブジェクトを定数にする(わかりやすいように頭に$をつけるのが良い)
const $button = document.getElementsByTagName("button");

// クイズ作成関数
const setupQuiz = () => {
  // 問題文の書き換え
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  // ボタンのテキストを書き換え
  for (let i = 0; i < 4; i++) {
    $button[i].textContent = quiz[quizIndex].answers[i];
  }
};

setupQuiz();

// 正誤判定関数
// e:イベントオブジェクト
const clickHandler = (e) => {
  // 正誤判定
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解");
  }

  quizIndex++;

  // 今何問目か確認
  if (quizIndex < quiz.length) {
    setupQuiz();
  } else {
    window.alert(
      "終了!あなたの正解数は" + score + "/" + quiz.length + "です！"
    );
  }
};

// 出力関数
for (let i = 0; i < 4; i++) {
  $button[i].addEventListener("click", (e) => {
    clickHandler(e);
  });
}
