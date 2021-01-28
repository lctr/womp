{-
  PROJECT EULER -- PROBLEM 21: AMICABLE NUMBERS
  @ https://projecteuler.net/problem=21
-}

d :: Integral a => a -> a
d x = sum [ y | y <- l, x `mod` y == 0 ] 
  where l = [ 1 .. x - 1 ]

beAmicable :: Integral a => a -> Bool
beAmicable x = (x /= d x) && (x == d (d x))

amicablesUnder :: Integral a => a -> [a]
amicablesUnder x = [y | y <- [1 .. x], beAmicable y]

amicableSum :: Integral a => a -> a
amicableSum x = sum (amicablesUnder x)