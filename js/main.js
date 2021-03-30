Encounter();
// let cb = document.getElementById('cb'); // チェックボックス

let btn = document.getElementById('btn');
btn.addEventListener('click', saiyomikomi);


// let enemy = new Monster(enemies[0].name, enemies[0].hp);
function Encounter() {
  let enemies = [
    { name: "スライム", hp: 10 },
    { name: "こうもり", hp: 20 },
    { name: "魔法使い", hp: 30 },
    { name: "ゴーレム", hp: 40 },
    { name: "ドラゴン", hp: 50 },
    // {name: "魔王", hp: 60},
  ];
  let enemy_list = [];
  let ninzuu = Math.floor(Math.random() * 6) + 1;
  // console.log(ninzuu);

  // ninzuu = 6; // 魔王戦強制フラグ

  if (ninzuu === 6) {
    enemy_list = LastBattle();
    comment.innerHTML = "魔王戦！</br>" + "絶対に負けられない戦いです！</br>";
  } else {
    for (let i = 0; i < ninzuu; i++) {
      let n = Math.floor(Math.random() * enemies.length);
      enemy_list.push(new Monster(enemies[n].name, enemies[n].hp));
      comment.innerHTML += enemy_list[i].name + "が現れた！</br>";
    }
  }
  // console.log(enemy_list.length);
  return enemy_list;
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
