---
layout: post
title: "List operations"
date: 2018-10-27 15:41:08 +0200
comments: true
categories: 
  - 2018
  - programming
  - ruby
  - python
  - haskell
  - javascript
  - ecmascript
---
Apply a function to each member of a list:

    Ruby:       [1,2,3].map { |x| x * 2 }
    Python:     map(lambda x: x * 2, [1,2,3])
    Haskell:    map (*2) [1,2,3]
    Javascript: [1,2,3,4].map(x => x * 2)
    Racket:     (map (λ (x) (* x 2)) (list 1 2 3))

Flatten a list of multiple sublists:

    Ruby;       [[1,2,3],[4,5,6],[7,8,9]].flatten
    Python:     [item for list in [[1,2,3],[4,5,6],[7,8,9]] for item in list]
    Haskell:    concat [[1,2,3],[4,5,6],[7,8,9]]
    Javascript: [].concat(...[[1,2,3],[4,5,6],[7,8,9]])

Multiply all members of a list:

    Ruby:       [1,2,3,4].reduce(1,:*)
    Python:     reduce((lambda x, y: x * y), [1,2,3,4], 1)
    Haskell:    foldl (*) 1 [1,2,3,4]
    Javascript: [1,2,3,4].reduce((accu, item) => accu * item, 1)
    Racket:     (foldl * 1 (list 1 2 3 4))

Filter all even members from a list:

    Ruby:       [0,1,2,3,4,5,6,7,8,9].select &:even?
    Python:     filter(lambda x: not x % 2, [0,1,2,3,4,5,6,7,8,9])
    Haskell:    filter (even) [0,1,2,3,4,5,6,7,8,9]
    Javascript: [0,1,2,3,4,5,6,7,8,9].filter(x => x % 2 == 0)
    Racket:     (filter even? (list 0 1 2 3 4 5 6 7 8 9))

Sort a list ascending:

    Ruby:       [5,9,0,1,3,2,4,8,6,7].sort
    Python:     sorted([5,9,0,1,3,2,4,8,6,7])
    Haskell:    Data.List.sort [5,9,0,1,3,2,4,8,6,7]
    Javascript: [5,9,0,1,3,2,4,8,6,7].sort()
    Racket:     (sort (list 5 9 0 1 3 2 4 8 6 7) <)

Element is member of the list:

    Ruby:       [0,1,2,3,4,5,6,7,8,9].include? 5
    Python:     5 in [0,1,2,3,4,5,6,7,8,9]
    Haskell:    5 `elem` [0,1,2,3,4,5,6,7,8,9]
    Javascript: [0,1,2,3,4,5,6,7,8,9].includes(5)
    Racket:     (if [member 5 (list 0 1 2 3 4 5 6 7 8 9)] #t #f)

List of numbers between 100 and 200:

    Ruby:       (100..200).to_a
    Python:     range(100,200 + 1)
    Haskell:    [100..200]
    Javascript: Array(100 + 1).fill(100).map((e,i) => e + i)

Two lists and return a list of corresponding pairs:

    Ruby:       [1,2,3,4,5].zip([5,4,3,2,1])
    Python:     zip([1,2,3,4,5], [5,4,3,2,1])
    Haskell:    zip [1,2,3,4,5] [5,4,3,2,1]

Minimum and Maximum of a list:

    Ruby:       [:min, :max].map { |m| [5,2,6,2,1,7,3].method(m).call }
    Python:     [m([5,2,6,2,1,7,3]) for m in [min, max]]
    Haskell:    [m [5,2,6,2,1,7,3] | m <- [minimum, maximum]]
    Javascript: [Math.min, Math.max].map(m => m.apply(null, [5,2,6,2,1,7,3]))
    Racket:     (map (λ (f) (apply f (list 5 2 6 2 1 7 3))) (list min max))

Print each member of a list:

    Ruby:       [1,2,3,4,5].each { |v| puts v }
    Python:     print '\n'.join(str(p) for p in [1,2,3,4,5])
    Haskell:    mapM_ (putStrLn . show) [1,2,3,4,5]
    Javascript: [1,2,3,4,5].forEach(x => console.log(x))
    Racket:     (map (λ (x) (println (number->string x))) (list 1 2 3 4 5))

Multiple lines to one single line string:

    Ruby:       "Hello\nprograming\n world".lines.map(&:strip).join ' '
    Python:     ' '.join([line.strip() for line in "Hello\nprograming\n world".splitlines()])
    Haskell:    Data.Text.unpack $ Data.Text.unwords $ map(Data.Text.strip) $ Data.Text.lines $ Data.Text.pack "Hello\nprograming\n world"
    Javascript: "Hello\nprograming\n world".split('\n').map(x => x.replace(' ', '')).join(' ')
