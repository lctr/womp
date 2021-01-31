{-
  PROJECT EULER -- PROBLEM 9: SPECIAL PYTHAGOREAN TRIPLET
  @ https://projecteuler.net/problem=9
-}

-- a + b + c = 1000, a^2 + b^2 = c^2
-- a + b + sqrt(a^2 + b^2)
pythagoreanTriplets :: (Ord c, Enum c, Floating c) => c -> c
pythagoreanTriplets n = product . triplet $ ab
  where 
    ab = [(a, b) | a <- ints n, b <- ints n, formTriplet a b n]
    ints n = takeWhile(< n) [2..n]
    formTriplet a b n = a < b && a + b + sqrt (a^2 + b^2) == n
    triplet [(a, b)] = [a, b, sqrt (a^2 + b^2)]

main :: IO Double
main = return . pythagoreanTriplets $ 1000