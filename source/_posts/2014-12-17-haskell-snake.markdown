---
layout: post
title: "Haskell: Snake"
date: 2014-12-17 23:07
comments: true
categories:
  - 2014
  - haskell
  - programming
  - snake
  - games
---
{% img right /data/images/snake.jpg 200 Snake %}

### Download
    git clone https://github.com/manuel-io/snake.git

### Update OS
    yum update
    yum install -y ghc-OpenGL-devel ghc-OpenGLRaw-devel
    yum install -y freeglut-devel

### Prepare
    cabal update
    cabal install cabal-install
    cabal sandbox init

### Build
    cabal install --only-dependencies --enable-tests
    cabal configure --enable-tests && cabal build && cabal test

### Run
    cabal run
