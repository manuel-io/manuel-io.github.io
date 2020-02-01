---
layout: post
title: "Fortsetzung"
date: 2019-05-05 20:10:02 +0200
comments: true
categories: 
  - 2019
  - informatics
  - mathematics
  - teaching
---
Zuletzt habe ich die Addition von Dezimal- und Binärzahlen visuell
gegenüber gestellt und gezeigt, dass beide male das gleiche Schema zur
Anwendung kommt. Damit eine arithmetische Logikeinheit ([ALU][alu], aka Computer) mit
dem binären Schema umgehen kann müssen sämtliche Rechenoperationen durch binäre
Operatoren ausgedrückt werden. In dem Fall `and`, `or` und `xor`. Diese
Operatoren können wiederum durch elektrische Schaltelemente umgesetzt werden.

Operatoren sind eine Abbildung von zwei binären Zahlen auf eine:
{% align %}
f: B\times B\to{B} = \{0, 1\},\\
\hbox{und }(d_1, d_2)\mapsto f(d_1, d_2),\nonumber\\
x, y_i, z_i, d_i\in B,\,\,i\in\mathbb{N}\nonumber
{% endalign %}

Das genaue Verhalten für einen Operator $f$ ist in [Logiktabellen][table] aufgelistet.
Wir benutzen:

{% align %}
\lfloor(y_i + x)/2\rfloor &\Leftrightarrow y_i \hbox{ and } x \\
y_i + x\,(\hbox{mod } 2) &\Leftrightarrow y_i \hbox{ xor } x\nonumber\\
(z_1 · z_2) + z_1 + z_2\,(\hbox{mod } 2) &\Leftrightarrow z_1 \hbox{ or } z_2\nonumber
{% endalign %}

Bei der Addition von zwei Zahlen wird zunächst immer geprüft, ob es einen
Übertrag in den nächst höheren Stellenwert gibt. Dieser Übertrag muss bei der
Berechnung der Stelle ggf. immer hinzuaddiert werden. Dadurch kommt es zur
Addition von drei Zahlen (vgl. [hier][hier]). Operatoren wirken aber nur
zwischen zwei Zahlen. Die Addition muss also gemäß Assoziativgesetz in zwei
Rechenoperationen aufgeteilt werden, aber auch dann kann bei der Addition von
zwei Zahlen ein Übertrag entstehen und dieser  Übertrag muss bei der nächsten
Addition von zwei Zahlen hinzuaddiert werden. So würde es immer weiter gehen.
Der Trick ist: Bei dem Rechenschritt $y_i + d_1 + d_2$ entsteht maximal eine
Zahl die immer noch kleiner ist als die doppelte Zahlenbasis (in dem Fall
kleiner 4):

{% equation %}
max(y_i + d_1 + d_2) = 3 < 4
{% endequation %}

Es entsteht also maximal ein Übertrag. Bei der Addition von $d_1 + d_2$ oder
$y_i + (d_1 \hbox{ und } d_2)$. Die Lösung ist also herauszufinden ob dieser Übertrag ggf. bei
der ersten oder zweiten Addition entstanden ist. Und dafür wird der Operator
`or` gebraucht.

{% img center 800 /data/images/base200.svg Base 2 %}

[alu]: https://de.wikipedia.org/wiki/Arithmetisch-logische_Einheit
[hier]: /blog/2019/04/14/base2/
[table]: https://de.wikipedia.org/wiki/Wahrheitstabelle
