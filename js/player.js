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