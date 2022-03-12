class Ninja{
    constructor(nameInput){
        this.name = nameInput;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        this.stats = Ninja
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor (nameInput){
        super(nameInput)

        this.wisdom = 10;
    }
    speakWisdom(){
        console.log("Here is some wisdom")
    }
}


let ninja1 = new Ninja ("Murph")
let sensi1 = new Sensei("Pat")

ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
sensi1.showStats();
sensi1.speakWisdom();

console.log(ninja1)
console.log(sensi1)