// PROJECT EULER -- PROBLEM 21: AMICABLE NUMBERS
//   @ https://projecteuler.net/problem=21
// Let d(n) be defined as the sum of proper divisors of n (numbers 
//   less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair 
//   and each of a and b are called amicable numbers.
// For example, the proper divisors of 220 are 
//   1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. 
//   The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

console.time('p21');

class N {
  constructor (n) {
    this.amicables = N.arr(n - 1)
      .map((x, i) => i + 1)
      .filter(x => x !== N.d(x) && x == N.d(N.d(x)));
  }

  // utility to generate an array of length n with nonempty elements
  static arr(n) {
    return new Array(n).fill(1);
  }

  // compute the sum of proper divisors of a given integer
  static d(n) {
    let sum = 0;
    N.arr(n)
      .forEach((x, i) => {
        if (n % i == 0) sum += i;
      });
    return sum;
  };

  // compute the sum of americable numbers collected
  get amicableSum() {
    return this.amicables
      .reduce((s, v) => s + v);
  }
}

// the sum of all amicable numbers < 10000 is
const problem21 = {
  q: 'Evaluate the sum of all the amicable numbers under 10000.',
  a: new N(10000).amicableSum
};

console.timeEnd('p21');
console.log(problem21);
