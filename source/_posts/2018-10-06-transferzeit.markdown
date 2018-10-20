---
layout: post
title: "Transferzeit"
date: 2018-10-06 23:49:33 +0200
comments: true
categories:
  - 2018
  - equation
  - mathematics
  - physics
  - teaching
---
{% img left /data/images/hohmann.png 300 Hohmann-Transfer %}

Dieser Eintrag beschreibt die Zeit auf einem [Hohmann-Transfer][ht]
zwischen zwei Kreisbahnen um einen Zentralkörper und ist im Weiteren
auch für einen [Bi-elliptischen-Transfer][bi] interessant. Die Bahn
für den Transfer ist dabei immer eine Ellipse mit der großen Halbachse
$a = \frac{r_1 + r_2}{2}$ Dabei ist $r_1$ Radius der inneren
Kreisbahn und $r_2$ Radius der äußeren Bahn.

Die Frage nach der Transferzeit $T$ auf einer Ellipse kann durch das
3. Keplersche Gesetz beantwortet werden. Nachdem gilt: Die Periode der
quadratischen Umlaufzeit auf einer Ellipsenbahn ist proportional zu
der dritten Potenz der Halbachse $a$:

{% equation %} 
\label{eq:test}
T^2\sim a^3\quad\Leftrightarrow\quad T^2 = c\cdot a^3,\quad c\in\mathbb{R}
{% endequation %}

Da die Halbachse bereits bestimmt wurde, muss hier noch der
Proportionalitätsfaktor $c$ bestimmt werden.

Dieser wird hier durch eine möglichst einfache Ellipse bestimmt. Die
Ausgangskreisbahn umkreist den gleichen Zentralkörper mit der Masse $M$
wie auch die Transfer-Ellipse somit ergibt sich die gleiche Konstante.
Für die gilt:

{% equation %}
\label{eq:kreisbahn}
T^2\sim r^3\quad\Leftrightarrow\quad T^2 = c\cdot r^3,\quad c\in\mathbb{R}
{% endequation %}

Damit sich ein Körper auf einer Kreisbahn befindet müssen sich
Zentripetalkraft und Gravitationskraft ausgleichen. Da die Vektoren
stets in entgegengesetzte Richtung zeigen, sind hier nur die Beträge
wichtig:

{% equation %}
F_z = F_g\quad\Leftrightarrow\quad m\frac{v^2}{r} = \gamma\frac{M\cdot m}{r^2},\quad\gamma\in\mathbb{R}
{% endequation %}

$\gamma$ ist die Gravitationskonstante. Damit ergibt sich die
Kreisbahngeschwindigkeit:

{% equation %}
\Rightarrow\quad v = \sqrt{\frac{\gamma\cdot M}{r}}
{% endequation %}

Mit dem Kreisumfang $2\cdot r\cdot\pi$ für die gesamte Strecke einer
Periode ergibt sich dann die Zeit $T$ nach $v = \frac{2\cdot
r\cdot\pi}{T}$ mit dem gewöhnlichen Weg-Zeit-Gesetz. Die Konstante $c$
kann resultierend in $\eqref{eq:kreisbahn}$ aufgelöst werden:

{% equation %}
T^2 = \frac{4\cdot\pi^2\cdot r^3}{\gamma\cdot M}\quad\Rightarrow\qquad c = \frac{4\cdot\pi^2}{\gamma\cdot M}
{% endequation %}

Damit ist für die ursprüngliche Transfer-Ellipse $\eqref{eq:test}$,
mit der großen Halbachse $a = \frac{r_2 + r_1}{2}$ und dem Wert für
$c$, die Periode gegeben:

{% equation %}
T^2 = c\cdot a^3\quad\Leftrightarrow\quad T^2 = \frac{4\cdot\pi^2}{\gamma\cdot M}\cdot \frac{(r_2 + r_1)^3}{8}
{% endequation %}

Da die Transfer-Ellipse nur aus einer halben Ellipse besteht, wird hier
auch nur die Hälfte der Periode genommen:

{% equation %}
T = \pi\sqrt{\frac{(r_2 + r_1)^3}{2\cdot\gamma\cdot M}} ,\quad T_{1/2} = \pi\sqrt{\frac{(r_2 + r_1)^3}{8\cdot\gamma\cdot M}}
{% endequation %}

Damit ist die Transferzeit $ T_{1/2} $ gegeben.

Hintergrund ist, dass diese Transferzeit auch für den
[Bi-elliptischen][bi] Transfer erweitert werden kann und dass die
ESA in einem Video „[Soyuz rendezvous and docking explained][vi]“ den Flug
zur ISS mit jenem Manöver beschreibt.

[bi]: https://de.wikipedia.org/wiki/Benutzer:Manuel_Bieling/Bi-elliptischer_Transfer
[vi]: https://www.youtube-nocookie.com/embed/M2_NeFbFcSw
[ht]: https://de.wikipedia.org/wiki/Hohmann-Transfer
