---
layout: post
title: "Ausgleichsmandate"
date: 2013-09-06 01:36
comments: true
categories:
  - 2013
  - equation
  - election
  - mathematics
---
Wer weiß wie das [neue Wahlrecht][netzpolitik] funktioniert?
Angenommen es ergibt sich eine Verteilung nach Zweitstimmen für drei Parteien
A: 45%, B: 30%, C: 25% in einem Parlament mit 20 Sitzen. Partei B bekommt 2 Überhangmandate.
Diese sollen jetzt duch Ausgleichsmandate (für A und C) kompensiert werden, sodass das Ergebnis der
Zweitstimmenverteilung wieder gerecht wird. Frage: Wie sieht die Sitzverteilung aus?

Antwort: Es wird erstmal eine Größe gebraucht die heißt „Zuteilungsdivisor“:

{% equation %}
\hbox{Zuteilungsdivisor} = \frac{\hbox{Zweitstimmen (Gesammt)}}{\hbox{Sitze im Parlament}}
{% endequation %}

Ohne Berücksichtigung der Überhangmandate für Partei B ergibt sich dann:

{% equation %}
\hbox{Sitze} = \frac{\hbox{Zweitstimmen (Partei)}}{\hbox{Zuteilungsdivisor}} = \frac{\hbox{Anteil}\cdot\hbox{Zweitstimmen (Gesammt)}}{\hbox{Zuteilungsdivisor}}
{% endequation %}

Zuteilungsdivisor von oben einsetzen und die Sitzverteilung berechnen:

    A: 0,45 (Anteil) · 20 (Sitze im Parlament) = 9 
    B: 0,30 · 20 + (2 Überhangmandate)         = 8
    C: 0,25 · 20                               = 5

Soweit nichts Neues. Um die zwei Überhangmandate von Partei B auszugleichen wird der
Zuteilungsdivisor neu berechnet. Dafür wird einfach rückwärts gerechnet.
Für Sitze wird 2 eingesetzt und Sitze im Parlament heißt jetzt Auffüllsitze:

{% equation %}
\hbox{Zuteilungsdivisor} = \frac{\hbox{Zweitstimmen (Gesammt)}}{\hbox{Auffüllsitze}}
{% endequation %}

{% equation %}
2 = \frac{0,30\cdot\hbox{Zweitstimmen (Gesammt)}}{\hbox{Zuteilungsdivisor}}
{% endequation %}

Zuteilungsdivisor einsetzen und nach „Auffüllsitze“ auflösen.

    Auffüllsitze = 2 / 0,30 ≈ 6,67 ≈ 7

Das Parlament muss also um 7 Sitze vergrößert werden. Davon gehen 2 Sitze
durch die Überhangmandate an Partei B. Die restlichen 5 Sitze werden unter Partei A und C aufgeteilt:

    A: 0,45 (Anteil) · 7 (Auffüllsitze) = 3,15 ≈ 3
    C: 0,25 · 7                         = 1,75 ≈ 2

Vielen Dank an nad.

**Update:** [www.wahlrecht.de](http://www.wahlrecht.de/).
[netzpolitik]: https://netzpolitik.org/2013/bundestagswahl-erklaert-ueberhangmandate-ausgleichsmandate
