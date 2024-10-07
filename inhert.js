// Base class (Parent)
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Derived class (Child)
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls the parent class constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name}, the ${this.breed}, barks.`);
    }
}

// Usage
const animal = new Animal('Generic Animal');
animal.speak(); // Output: Generic Animal makes a sound.

const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak(); // Output: Buddy, the Golden Retriever, barks.
