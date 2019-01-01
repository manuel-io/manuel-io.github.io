---
layout: post
title: "Just my two cent"
date: 2018-12-09 12:58:29 +0100
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
{% img center /data/images/twocent.png Just my two cent %}

Recently, I saw an example of how to solve [a problem in different
programming languages](https://twitter.com/hukl/status/1065670048407306243).
The title was: "In Erlang, the Ruby code example would look like
this". Actually, I don't know how the ruby code example looks like to solve the
same problem, however from the point of what it does I can guess:

    [-> a {a+10}, -> a {a*10}, -> a {a-5}].reduce(23) {|a, b| b.call a}

Right? No, Ruby is a fundamental object oriented programming language
and the example would probably look different. But also, Ruby has
some functional features. Like others:

    Phython:    reduce(lambda x, y: y(x), [lambda a: a+10, lambda a: a*10, lambda a: a-5], 23)
    Javascript: [a => a+10, a => a*10, a => a-5].reduce((a, i) => i(a), 23)
    Haskell:    foldl (\x y -> y(x)) 23 [(+10), (*10), (+(-5))]
    Racket:     (foldl (λ (b a) (b a)) 23 (list (λ (a) (+ a 10)) (λ (a) (* a 10)) (λ (a) (- a 5))))
