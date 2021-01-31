{-
  PROJECT EULER -- PROBLEM 20: FACTORIAL DIGIT SUM
  @ https://projecteuler.net/problem=8
-}

import Data.Char ( digitToInt )

factorialDigitSum :: (Show a, Num a, Enum a) => a -> Int
factorialDigitSum n = sum . factorialDigits $ n
  where 
    factorial n = foldl (*) 1 [1..n]
    digits s = map digitToInt . show $ s
    factorialDigits n = digits . factorial $ n

main = do 
  putStrLn "the sum of the digits of 100! is"
  return . factorialDigitSum $ 100