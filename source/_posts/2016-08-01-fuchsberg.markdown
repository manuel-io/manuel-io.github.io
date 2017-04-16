---
layout: post
title: "Fuchsberg"
date: 2016-08-01 01:32:44 +0200
comments: true
categories:
  - 2016
  - physics
  - mathematics
  - listing
  - gnuplot
  - plot
---
Hier möchte ich meinen Weg zur Arbeit diskutieren. Der Weg lässt sich
in zwei Teile gliedern. Der erste Teil mit dem Fahrrad der zweite Zeit
mit einem Bus. Interessant ist hier der erste Teil---der mit dem
Fahrrad.

{% img left /data/images/fuchsberg.png Fuchsberg %}
Dieser beinhaltet eine Bergfahrt. Die Frage ist nun: Welche
potentielle Energie bei der Auffahrt gewonnen wird bzw. wie viele
Kalorien dabei umgewandelt werden.

Da der Rückweg bergab führt, wird die gewonnene Energie wieder
abgegeben. Oder auch: $ \oint F\cdot ds = 0$. Das Kraftfeld ist
[konservativ][konservativ]!

Kräfte die durch Reibung entstehen (etwa Luftwiderstand), werden
ignoriert. Da mir die Höhe des Berges nicht bekannt ist, ist eine
Messreihe unumgänglich.

Gemessen wird die Steigung $\varphi_{j\in\mathbb{N}}$---während des
700m langen Anstiegs an vier verschiedenen Punkten---mittels eines
[Pendels][pendel].

Diese 4 diskreten Punkte werden mit einem [Lagrange-Polynom][lagrange]
3-grades verbunden und bilden eine kontinuierliche Kurve
$C:\mathbb{R}\rightarrow\mathbb{R}^2 $ im Raum.

Das Kraftfeld ist konstant $F = (0, m\cdot g)$. Es ergibt sich:
{% equation %}
W_{2,1} = \int_{C}F\cdot\,ds
{% endequation %}

Die Steigung $\varphi(t)$ wird nach Messung durch folgendes Polynom angenommen:
{% equation %}
\varphi(t) = \frac{t^3}{26250000}-\frac{3\cdot t^2}{25000}+\frac{433\cdot t}{5250}
{% endequation %}

{% img center /data/images/fuchsberg-plot.png Fuchsberg-Plot %}
Kein Höhenprofil sondern ein [Steigung-Weg Diagramm][gnuplot].

Die Strecke t wird in einen x- und y-Teil zerlegt. Entscheidend ist
hier, dass die Gravitationskraft nur auf die y-Komponente wirkt.

Die Kurve ist mit $0 \le t\le 700$:
{% equation %}
\binom{x}{y} = \binom{t\cdot\cos(\varphi(t))}{t\cdot\sin(\varphi(t))} = \
\binom{c_x(t)}{c_y(t)} = c(t)
{% endequation %}

Insgesamt ergibt sich folgendes [Kurvenintegral zweiter Art][kurvenintegral]:
{% equation %}
W_{2,1} = \int_C F\cdot\dot c(t)\,dt = \int_0^{700}\binom{0}{m\cdot g}\cdot\binom{\dot c_x(t)}{\dot c_y(t)}\,dt
{% endequation %}

{% equation %}
W_{2,1} = m\cdot g\int_0^{700}\dot c_y(t)\,dt = c_y(t)\,|^{700}_{0}
{% endequation %}

Damit ergibt sich als Lösung $W_{2,1}\approx 100kJ$ und
($100kJ\\approx 24kcal$). Jetzt ist noch die Höhendifferenz des Berges zu
bestimmen. Hier wird der Ansatz eines wegunabhängigen Feldes genommen:

{% equation %}
W_{2,1} = W_2 - W_1 = m\cdot g\cdot\Delta h\quad\Leftrightarrow\quad\frac{W_2 - W_1}{m\cdot g} = \Delta h
{% endequation %}

Ergebnis: Δh = 146m.

{% equation %}
\hbox{Konstanten:}\quad g = 9.81\frac{m}{s^2},\quad m = 70kg
{% endequation %}

[konservativ]: https://de.wikipedia.org/wiki/Konservative_Kraft
[kurvenintegral]: https://de.wikipedia.org/wiki/Kurvenintegral#Kurvenintegral_zweiter_Art
[bogenmaß]: https://de.wikipedia.org/wiki/Radiant_(Einheit)
[pendel]: /data/images/fuchsberg-pendulum.jpg
[lagrange]: https://de.wikipedia.org/wiki/Polynominterpolation#Lagrangesche_Interpolationsformel
[gnuplot]: http://pastebin.com/0W7q6V1P
