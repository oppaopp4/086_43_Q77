class Monster{
    constructor(name, hp){
        this.name = name;
        this.hp = hp;

        this.damage_point = 0;
        this.alive = true;

        this.Init();
    }

    Init(){
        let comment = document.getElementById('comment');

        let monsters = document.getElementById('monsters');
        this.ref = document.createElement('img');
        this.ref.src = "img/" + this.name + ".png";
        monsters.appendChild(this.ref);

        this.ref.addEventListener('click', () => {
            this.ref.classList.add("damage_motion");
            this.damage_point = Math.floor(Math.random() * 5) + 1;
            this.damage(this.damage_point);
        });

        this.ref.addEventListener('animationend', () => {
            this.ref.classList.remove("damage_motion");
            if(!this.alive){
                this.ref.classList.add("nodisp");
                comment.innerHTML += this.name + "をやっつけた！";
            }
        });
    }

    damage(damage){
        this.hp -= damage;
        if(this.hp <= 0) this.alive = false;
        comment.innerHTML = this.name + "に " + damage + " ポイントの<br>ダメージをあたえた！<br>";

        console.log(this.name + ":" + this.hp);
    }
}