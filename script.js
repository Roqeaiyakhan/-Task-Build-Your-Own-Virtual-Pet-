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
    alert(`${this.name} is  happeir! Happiness level is now ${this.happiness}.`); 
},


agepet: function () {
    this.happiness -= 5;
        this.hunger += 10;

        if (this.happiness < 0) {
            this.happiness = 0;
        }
        if (this.hunger > 100) {
            this.hunger = 100;
        }

        alert(`${this.name} is now ${this.age} years old! Happiness: ${this.happiness}, Hunger: ${this.hunger}`);
    },

}

    
let action;
do {
    action = prompt("Choose an action for your pet: 'feed', 'play', 'age', or 'exit' to quit.").toLowerCase();
    switch (action) {
        case 'feed':
            pet.feed();
            break;
        case 'play':



    }
};