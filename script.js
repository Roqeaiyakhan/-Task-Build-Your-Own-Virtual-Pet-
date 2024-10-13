let pet = {
    name: "puppy",
    type: "dog",
    age: 3,
    happiness: 66,
    hunger: 70,

    // Feeding method
    feed() {
        this.hunger = Math.max(this.hunger - 15, 0);
        alert(`${this.name} is fed! Current hunger level: ${this.hunger}`);
    },

    // Playing with the pet increases happiness 
    play() {
        this.happiness = Math.min(this.happiness + 15, 100);
        alert(`${this.name} is having fun! Happiness level is now ${this.happiness}`);
    },

    age() {
        this.age++;
        alert(`${this.name} is now ${this.age} years old!`);
    }
};

 var action;
do {
    action = prompt("Choose an action for your pet: 'feed', 'play', 'age', or 'exit' to quit.").toLowerCase();
    switch (action) {
        case 'feed':
            pet.feed();
            break;
        case 'play':
            pet.play();
            break;
        case 'age':
            pet.growOlder();
            break;
        case 'exit':
            alert("Thanks for taking care of your pet. Goodbye!");
            break;
        default:
            alert("Oops! That's not a valid action. Try 'feed', 'play', 'age', or 'exit'.");
    }
} while (action !== 'exit');

