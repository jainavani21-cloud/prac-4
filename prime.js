function* primeGenerator(limit) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let num = 2;
    while (num <= limit) {
        if (isPrime(num)) {
            yield num;
        }
        num++;
    }
}

// Usage Example:
const primes = primeGenerator(20);

for (let prime of primes) {
    console.log(prime); // Prints prime numbers up to the specified limit (20 in this case)
}
