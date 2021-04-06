class Player {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;

    this.damage_point = 0;
    this.alive = true;
    this.comment = null;
    this.content = null;

    this.Hangeki();
  }

  Hangeki() {

    this.comment = document.getElementById('comment');

    this.content = document.getElementById('commentbox');
    this.content.addEventListener('animationend', () => {
      this.content.classList.remove("damage_motion");
    });
  }

  damage(name, point) {
    this.content.classList.add("damage_motion");
    this.hp -= point;
    console.log(this.name + ": " + this.hp);

    // this.comment.innerHTML += "<br>";
    this.comment.innerHTML += name + "の反撃<br>";
    this.comment.innerHTML += this.name + "は" + point + "のダメージを受けた";

    if(this.hp <= 0) {
      this.alive = false;
      this.GameOver();

    }
  }

  GameOver() {
    this.comment.innerHTML += "<br>" + this.name + "は 死んでしまった";
    document.getElementById('content').classList.add('noclick');
  }
}

  //   let monsters = document.getElementById('monsters');
  //   let child_nodes_count = monsters.childElementCount;

  //   if (child_nodes_count > 0) {


  //   monsters.addEventListener('click', () => {

  //     console.log(this.name + ":hp" + this.hp);

  //     this.damage_point = Math.floor(Math.random() * 5) + 1;
  //     this.damage(this.damage_point);
  //     // comment.innerHTML += this.name + "は" + this.damage_point + "のダメージをうけた</br>";
  //   });

  //   comment.addEventListener('animationend', () => {
  //     comment.classList.remove("damage_motion");
  //     //     this.ref.classList.remove("kaisin_motion");
  //     //     // this.ref.classList.remove("mukou_motion");// 無効モーション追加

  //     if (!this.alive) {
  //       comment.innerHTML += this.name + "は死んでしまった</br>";

  //     }
  //   });
  // }
  // }

  // damage(damage) {

  //   this.hp -= damage;
  //   if (this.hp <= 0) this.alive = false;
  //       comment.innerHTML += this.name + "は " + damage + " のダメージをうけた<br>";

  //       console.log(this.name + ":" + this.hp);
//   }
// }