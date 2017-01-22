---
layout: post
title: 'Just "Hello!"'
date: 2015-01-11 16:12
comments: true
categories:
  - 2015
  - haskell
  - programming
  - listing
---
<pre>return "Hello!" :: Maybe [Char]</pre>

    (++ "!") `fmap` Just "Hello"
    Just "Hello" >>= return . (++ "!")
    Just (Just "Hello") >>= (fmap . fmap) (++ "!") . return
    [ Just "Hello" ] >>= return . fmap (++ "!")
    [ Just "Hello" ] >>= \(Just x) -> return (x ++ "!")
    Just "Hello" : [] >>= \x -> return (x >>= return . (++ "!"))
    maybe [] (\x -> x ++ "!") $ Just "Hello"
    (\(Just x:Just y:_) -> x ++ y) [Just "Hello", Just "!"]
    [Just "Hello", Just "!"] >>= foldl1 (++) . \(Just x) -> return x
    fmap Just ["Hello"] >>= return . (++ "!") . \(Just x) -> x
    (++ "!") $ (>>=) (fmap Just "Hello") (\(Just x) -> return x)
