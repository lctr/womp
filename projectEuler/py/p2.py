# PROJECT EULER - -PROBLEM 2: EVEN FIBONACCI NUMBERS
#   @ https://projecteuler.net/problem=2
#
# NOTE: avoid generating fibonacci sequence term values 
#   using function recursion due to increases in stack size with 
#   each iteration.

# maximum value, 4 000 000
m = 4 * 10 ** 6
# fibonacci base case vals
a = [0, 1]
# sum
s = 0
# calculate array index only once
i = len(a)

while True:
  v = a[i - 1] + a[i - 2]
  if v > m:
    break
  a.append(v)
  i += 1
  if not v % 2:
    s += v

print(
  '\t• Let E = {x | x is even, x ≤ 4 million}\n',
  '\t  be the set of even-valued Fibonacci terms\n',
  '\t  with values not exceeding 4 million.\n',
  '\t• Then sum of all x in E is sum E =', f'{s}.'
)