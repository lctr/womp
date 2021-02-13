import System.Environment (getArgs)

gcd'' :: Int -> Int -> Int 
gcd'' x 0 = abs x
gcd'' x y = gcd'' b (mod a b)
  where a = abs x
        b = abs y

main :: IO () 
main = do 
  args <- getArgs
  let 
    args' = map (\ x -> read x :: Int) args
    [x, y] = case args' of 
      [] -> [0, 0]
      [x] -> [0, x]
      (x:y:_) -> [x, y]
  let result = show (gcd'' x y)
  putStrLn result 
  return ()
