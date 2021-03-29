class Monster {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;

        this.damage_point = 0;
        this.alive = true;

        this.Init();
    }

    Init() {
        let comment = document.getElementById('comment');

        let monsters = document.getElementById('monsters');
        this.ref = document.createElement('img');
        this.ref.src = "img/" + this.name + ".png";
        this.ref.classList.add("renda");// 連打クラスを付ける
        monsters.appendChild(this.ref);

        this.ref.addEventListener('click', () => {
            this.ref.classList.add("damage_motion");
            this.damage_point = Math.floor(Math.random() * 5) + 1;
            this.damage(this.damage_point);
        });

        this.ref.addEventListener('animationend', () => {
            this.ref.classList.remove("damage_motion");
            this.ref.classList.remove("kaisin_motion");

            let sitai = document.getElementsByClassName('nodisp');
            let renda = document.getElementsByClassName('renda');

            if (!this.alive) {
                this.ref.classList.add("nodisp");
                comment.innerHTML += this.name + "をやっつけた！</br>";
                // 勝利時コメントを追加
                if (renda.length === sitai.length) {
                    comment.innerHTML += "戦闘に勝利した！！";
                }
                // console.log(sitai.length);
                // console.log(renda.length);
                // if () {
                //     comment.innerHTML += "戦いに勝利した！";
                // }
            }
        });
    }

    damage(damage) {
        comment.innerHTML = "";

        let r = Math.floor(Math.random() * 4);
        if (r == 0) {
            comment.innerHTML += "会心の一撃！！</br>";
            damage *= 10;
            this.ref.classList.add("kaisin_motion");
        } else {
            this.ref.classList.add("damage_motion");
        }

        this.hp -= damage;
        if (this.hp <= 0) this.alive = false;
        comment.innerHTML += this.name + "に " + damage + " ポイントの<br>ダメージをあたえた！<br>";

        console.log(this.name + ":" + this.hp);
    }
}