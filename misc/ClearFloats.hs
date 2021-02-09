-- a small exercise in addressing floating point error in arithmetic operations
module ClearFloats where 
import Data.List

plus :: Fractional a => a -> a -> a
plus x y = (x * 10 + y * 10) / 10

minus :: Fractional a => a -> a -> a
minus x y = (x * 10 - y * 10) / 10

times :: Fractional a => a -> a -> a
times x y = x * 10 * y / 10

over :: Fractional a => a -> a -> a
over x y =  x * 10 / y / 10

main :: IO ()
main = do 
  let 
    a = 0.1
    b = 0.2
    c = 0.3
    a' = 1.2
    b' = 3
    c' = 4
    log lbl val = intercalate " " [
        "", lbl, 
        show a, "-", show b, "+", show c, 
        "=", show val
      ]
  putStrLn "Additive"
  putStrLn $ log "default:" (a + b - c)
  putStrLn $ log "cleared:" (a `plus` b `minus` c)
  putStrLn "Multiplicative"
  putStrLn $ log "default:" (a' * b' / c')
  putStrLn $ log "cleared:" (a' `times` b' `over` c') 


