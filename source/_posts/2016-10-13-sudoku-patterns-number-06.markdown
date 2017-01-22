---
layout: post
title: "Sudoku patterns #06"
date: 2016-10-13 20:08:41 +0200
comments: true
categories:
  - sudoku
  - game
  - patterns
  - puzzle
---
__Aufgabe:__ Fülle den oberen, linken Block vollständing aus.

{% img left /data/images/sudoku06.png 200 Sudoku #06 %}

Manchmal ist die Situation sehr verzwickt und es gibt keine
offensichtliche Lösung. Als Beispiel dient hier der linke, obere
Block. Es fehlen zwei Zahlen. Die _6_ und _7_. Da aus dem Kontext kein
direkter Lösungsweg sichtbar ist, werden einfach diese beiden Zahlen
(in Gedanken) beliebig eingesetzt um mit dieser Arbeitsgrundlage
fortzufahren bis sich ein Widerspruch ergibt.

Setzen wir also zunächst die _6_ in die zweite Zeile auf Position
(2,2) ein und machen einen Sprung in den rechten, oberen Block.

In der zweiten Zeile fehlen noch die eins, _2_ und _7_. In der dritten
Zeile fehlt die _5_ oder _7_. Da die Sieben aber schon in zweiter Zeile
steht, legen wir uns auf die _5_ fest. Oben, in der ersten Zeile stehen
folgerichtig die _3_ und _6_.

Bis jetzt also noch kein Widerspruch, sondern die Fortführung unserer
zu Beginn getroffenen Entscheidung.

Machen wir mit der achten Spalte weiter und tragen offensichtlich die
_6_ auf Position (8,5) ein. Jetzt haben wir ein Problem! Da auf Position
(8,3) eine _5_ steht, haben wir nur noch zwei Felder frei. Es fehlen in
dieser Spalte auch nur noch zwei Zahlen (1 und 7). Problem ist nur
beide Zahlen dürfen nicht auf Position (8,4) stehen, sondern müssen
sich Position (8,2) teilen.

Also ein Widerspruch und die Entscheidung die _6_ auf Position (2,2) zu
setzen war falsch.

__Dies ist ein Beispiel aus der Serie
[Sudoku patterns](/blog/sudoku-patterns/)__.
