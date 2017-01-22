---
layout: post
title: "Zeichnen von Signalpegeln"
date: 2012-02-15 15:36
comments: true
categories:
  - 2012
  - physics
---
{% img /data/images/schaltung2.png %}

In den letzten Tagen musste ich für eine digitale Schaltung—also für eine
regenerationsfähige Schaltung in der nur diskrete Spannungen genutzt werden—die
Signalpegel, an den Ein- und Ausgängen der einzelnen Bauelemente, in einem
Diagramm darstellen.

Für die Umsetzung habe ich mir überlegt ein kleines [Computerprogramm][hlevel]
zu schreiben, das eine Textdatei ließt und die graphische Darstellung in Form
einer _png_-Datei ausgibt.

Hier ist ein [Beispiel][beispiel] zu der folgenden Datei:

    # Example ###############
    HLHLHLHLHLHLHLHLHLHLHLHLH : Timebase
    HHHHHHLLHHHHHHHHHHHHHHHHH : S
    HHHHHHHHHHHHHHHHHHHLLHHHH : R
    LLLLLLHHHHHHHHHHHHHLLLLLL : Q
    LLLLLLHLHLHLHLHLHLHLLLLLL : Q AND Timebase
    #########################

Vielleicht ist es auch möglich mit diesem Befehl die Funktionalität des
ungetesteten und unspezifizierten Programm nachzuvollziehen:

    hl-evel example.hl example.png

Dabei ist example.hl die Eingabedatei und example.png die Ausgabedatei. Tests
als Ersatz für die Spezifikation schreibe ich noch, wenn ich das mal gelernt
habe. Dann bleibt noch zu erwähnen, dass neben der Ruby Standard Library 1.9.3
auch chunky_png benötigt wird.

Etwa:

    export GEM_HOME=~/gems/1.9.3/
    gem install chunky_png

[hlevel]: https://gist.github.com/manuel-io/a4ef8c188d321d95d097
[beispiel]: /data/images/schaltung.png
