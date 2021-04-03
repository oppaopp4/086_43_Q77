const btn = document.getElementById('btn');
btn.addEventListener('click', saiyomikomi);
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', FirstBattle);

const enemies = [
  { name: "スライム", hp: 10 },
  { name: "こうもり", hp: 20 },
  { name: "魔法使い", hp: 30 },
  { name: "ゴーレム", hp: 40 },
  { name: "ドラゴン", hp: 50 },
];


function FirstBattle() {
  let nyuuryokuti = GetRedio();

  ClearSetu();
  ClearMons();
  Encounter(nyuuryokuti);
}

function LastBattle() {
  let last_enemy_list = [
    { name: "魔法使い", hp: 30 },
    { name: "ドラゴン", hp: 50 },
    { name: "魔王", hp: 100 },
    { name: "ドラゴン", hp: 50 },
    { name: "ゴーレム", hp: 40 },
  ];

  let enemy = [];
  last_enemy_list.forEach(e => {
    enemy.push(new Monster(e.name, e.hp));
  });

  return enemy;
}

function saiyomikomi() {
  window.location.reload();
}


function GetRedio() { // ラジオボタン
  let target = document.getElementById("target");
  let s = target.hoge.value
  console.log(s);
  return s;
}

function Rensen() {
  ClearMons();
  Encounter('a');
}

function ClearMons() {
  const monsters = document.getElementById('monsters');
  while (monsters.firstChild) {
    monsters.removeChild(monsters.firstChild);
  };
}

function ClearSetu() {
  let setumei = document.getElementById('setumei');
  setumei.remove();
}

function Encounter(x) {
  // console.log(x);
  let ninzuu = 0;
  if (x === 'a') ninzuu = Math.floor(Math.random() * 6) + 1;
  if (x === 'b') ninzuu = Math.floor(Math.random() * 5) + 1;
  if (x === 'c') ninzuu = 6;
  // ninzuu = 6; // 魔王戦強制フラグ

  let enemy_list = [];
  if (ninzuu === 6) {
    enemy_list = LastBattle();
    comment.innerHTML = "魔王戦！</br>" + "絶対に負けられない戦いです！</br>";
  } else {
    comment.innerHTML = "";
    for (let i = 0; i < ninzuu; i++) {
      let n = Math.floor(Math.random() * enemies.length);
      enemy_list.push(new Monster(enemies[n].name, enemies[n].hp));
      comment.innerHTML += enemy_list[i].name + "が現れた！</br>";
    }
  }
  return enemy_list;
}

function fadeIn(id, time) {
  id.animate(
    // キーフレーム
    [
      { opacity: 0 },     // 最初の状態 (非表示)
      { opacity: 1 }      // 最後の状態（表示）
    ],
    // 1500   // 2000ミリ秒の長さでアニメーションを実行
    // オプション
    {
      duration: time,      // アニメが終了するまでの時間(ミリ秒)
      fill: 'forwards'    // アニメ完了後に最初の状態に戻さない
    }
  );
}

function fadeOut(id, time) {
  id.animate(
    // キーフレーム
    [
      { opacity: 1 },    // 最後の状態（表示）
      { opacity: 0 }     // 最初の状態 (非表示)
    ],
    // 1500   // 2000ミリ秒の長さでアニメーションを実行
    // オプション
    {
      duration: time,      // アニメが終了するまでの時間(ミリ秒)
      fill: 'forwards'    // アニメ完了後に最初の状態に戻さない
    }
  );
}