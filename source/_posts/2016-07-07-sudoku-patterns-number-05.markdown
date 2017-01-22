---
layout: post
title: "Sudoku patterns #05"
date: 2016-07-07 16:00:11 +0200
comments: true
categories:
  - sudoku
  - game
  - patterns
  - puzzle
---

__Aufgabe:__ Fülle die 1. Zeile vollständing aus.

{% img left /data/images/sudoku05.png 200 Sudoku #05 %}

Nun, in der ersten Zeile stehen schon sehr viele Zahlen. Es fehlen nur
noch die eins, 5 und 6. Die Frage ist nur nach der Reihenfolge.

Die 6 fehlt in der 1. Zeile und 3. Spalte, darf in diesem Block aber
nur 1-mal stehen. Es gibt nur eine Position, die alle drei Kriterien
erfüllt, Position (3,1).

Jetzt betrachten wir den untersten Block. Wir wissen jetzt, dass die 6
in der mittleren Spalte steht (2. Spalte). Zugleich bleibt diese
Spalte auch für die 2. Also stehen die 3 und 5 in erster Spalte.

Resultierend steht die 5 im oberen, linken Block auf Position (2,1).
Und die 1, trivialer Weise, auf Position (1,1).

__Dies ist ein Beispiel aus der Serie
[Sudoku patterns](/blog/sudoku-patterns/)__.
