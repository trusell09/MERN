// Create a blueprint for what every athlete should have (attributes/properties, name, health) and be able to do (methods, show stats, take ice bath)

// Python Syntax
// class Athlete:
//     def __init__(self):
//         self.name = "Kobe"
//         self.health = 100;
//         self.speed = 70;
//         self.strength = 70;




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
        // console.log("Athlete info: \n Name: " + this.name + "\n Health: " + this.health)
        console.log(`Athlete info: \n Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strength}`)
    }
    takeIceBath(){
        this.health +=10
    }
}

//instances of a class (can also be called objects)
const athlete1 = new Athlete("Kobe", 76)
const athlete2 = new Athlete("Ronaldo", 95)
const athlete3 = new Athlete("Lebron", 84)

//console.log(athlete1.name) . can be used to pull one specific piece of information, this example will print: Kobe 
console.log(athlete1)
console.log(athlete2)
console.log(athlete3)

console.log("Competitions in events are happening below. Athletes competing will lose health")
athlete1.competeInEvent() //90 health
athlete1.competeInEvent() //80 health
athlete1.displayStats()   // display stats
athlete1.takeIceBath()    //90 health
athlete1.displayStats()   //display stats

console.log(athlete1)
console.log(athlete2.displayStats())
console.log(athlete3.displayStats())


