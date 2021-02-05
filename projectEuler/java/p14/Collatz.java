/**
 * PROJECT EULER -- LONGEST COLLATZ SEQUENCE
 *   @ https://projecteuler.net/problem=14
 */

public class Collatz {
  int steps;
  int term;
  
  public static void main(String[] args) {
    int n;
    if (args.length > 0) { 
      try {
        n = Integer.parseInt(args[0], 10);
      } catch (Exception e) {
        System.out.printf("%s is not a valid integer. Resorting to default of 1000000", args[0]);
        n = 1000000;
      }
    } else {
      System.out.println("No argument provided. Using default 1000000");
      n = 1000000;
    }

    Collatz seq = new Collatz(n); 
    seq.toArgmax();
    System.out.printf("term: %s%nsteps: %s%n", 
      seq.term, seq.steps);
  }

  public static long next(long n) {
    if (n == 1)
      return 1;
    else if (n % 2 == 0) 
      return n / 2;
    else 
      return 3 * n + 1;
  } 

  Collatz(int n) {
    this.term = n;
    this.steps = 0;
  }

  public void toArgmax() {
    long tmpTerm = term; 
    int tmpSteps = 0;
    for (int i = term - 1; i > 1; i--) {
      tmpTerm = next(i); 
      tmpSteps = 1;
      while (tmpTerm > 1) {
        tmpTerm = next(tmpTerm);
        tmpSteps++;
      }
      if (tmpSteps > steps) {
        steps = tmpSteps; 
        term = i; 
        System.out.printf("i = %s, termLength = %s%n", i, steps);
      }
    }
  }
}