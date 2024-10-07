function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return reject('Both arguments must be numbers.');
        }

        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    reject('Division by zero is not allowed.');
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject('Invalid operation. Valid operations are: add, subtract, multiply, divide.');
        }
    });
}

// Usage Example:
calculator(10, 5, 'add')
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.error(`Error: ${error}`));

calculator(10, 2, 'divide')
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.error(`Error: ${error}`));
