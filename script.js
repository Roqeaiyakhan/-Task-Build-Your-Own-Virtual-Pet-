let pet = {
    name: "puppy",
    type: "dog",
    age: 3,
   happiness: 66,
   hunger: 70,

//    feeding method
    feed: function(){
    this.hunger -= 20;
    if (this.hunger < 0) {
        this.hunger = 0;
    }
    alert(`${this.name} has been feed! hunger level is now ${this.hunger}.`)

    },


// play 
play: function () {
    this.happiness += 20;
    if(this.happiness > 100){
        this.happiness = 100;
    }

    
    
}













}