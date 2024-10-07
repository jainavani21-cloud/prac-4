class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Student extends Person {
    constructor(name, age, rollNo) {

        super(name, age);

        if (rollNo <= 0) {
            throw new Error("Roll number must be greater than zero.");
        }

        this.rollNo = rollNo;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Roll No: ${this.rollNo}`);
    }
}

try {
    // Creating a valid Student object
    const student1 = new Student("Jai navani", 20, 0);
    student1.displayInfo();

} catch (error) {
    console.error(error.message);
}
