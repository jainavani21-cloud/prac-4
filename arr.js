class SquareIterator {
    constructor(numbers) {
        this.numbers = numbers;
        this.index = 0;
    }

    next() {
        if (this.index < this.numbers.length) {
            const value = this.numbers[this.index] ** 2;
            this.index++;
            return { value, done: false };
        } else {
            return { done: true };
        }
    }
}

// Usage Example:
const numbers = [1, 2, 3, 4, 5];
const iterator = new SquareIterator(numbers);

let result = iterator.next();
while (!result.done) {
    console.log(result.value); // Prints square of each number
    result = iterator.next();
}
