class Athlete{
    //constructor means when the class is created, the code to run will be inside the constructor
    constructor(nameInput, speedInput){
        this.name = nameInput;
        this.health = 100;
        this.speed = speedInput;
        this.strength = 70;
    }

    //METHODS FOR THE CLASS BELOW
    competeInEvent(){
        //the "this" keyword represents whichever object calls the method
        this.health -= 10
    }

    displayStats(){
        //this method will print out all the athlete info in a nice format
        // console.log("Athlete info: \n Name: " + this.name + "\n Health: " + this.health)        console.log(`Athlete info: \n Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strength}`)
    }
    takeIceBath(){
        this.health +=10
    }
}


//creating sub classes, constructing a Sprinter with Athletes information from above
class Sprinter extends Athlete{
    //give the sprinter its own constructor IF the sprinter needs to have more attributes than the attributes it inherited from Athlete
    constructor(nameInput, speedInput, personal100MrecordInput){
        super(nameInput, speedInput) //super means run the constructor of the parent class

        //personal100MrecordInput is a specific property only for sprinters
        this.personal100Mrecord = personal100MrecordInput
    }
    sprint(){
        console.log("SPRINTING!")
        this.health -= 30;
    }
}

class Basketballer extends Athlete{
    constructor(nameInput, speedInput, VerticalInput){
        super(nameInput, speedInput)

        this.vertical = VerticalInput
    }
    slamDunk(){
        if(this.Vertical < 20){
            console.log("thats a layup")
            this.health -= 3
        }else{
            console.log("SLAM DUNK!")
            this.health -= 5
        }
    }
}

let athlete1 = new Athlete ("Murph", 60)
let sprinter1 =  new Sprinter("Bolt", 100, 9.58)
let basketballer1 = new Basketballer ("Ja", 88, 50)

sprinter1.sprint();
athlete1.takeIceBath();




console.log(sprinter1)
console.log(athlete1)

basketballer1.slamDunk();
console.log(basketballer1)
