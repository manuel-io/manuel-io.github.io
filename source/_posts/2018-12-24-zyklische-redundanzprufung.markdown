---
layout: post
title: "Zyklische Redundanzprüfung (Theorie)"
date: 2018-12-24 01:12:36 +0100
comments: true
published: true
categories: 
  - 2018
  - equation
  - mathematics
  - informatics
  - teaching
---
Hier geht es um Vektorrechnung. Dazu habe ich ja schon hier und da
etwas gehabt: Komplexe Zahlen, Polynome, Vektorintegral. Jetzt geht es
um Bitvektoren. Also nehmen wir hier als Beispiel eine Zahlenfolge aus
4 Bit 1101. Mit 4 Bit können $ 2^{4} $ Zahlen/Zustände abgebildet
werden (hier 16 Zahlen).

Diese Zahlenfolge $ v_i $ mit $ v_i \in \{0,1\} $ wird jetzt als Vektor in
dezimalen Zahlen abgebildet. Also als Polynom $ f $ mit Definition von Addition
und Multiplikation.  Die Summe der Koeffizienten entspricht dem Wert der
Bitfolge. Hier: $ 13 $.

{% equation %}
f(x) = \sum_{i = 0}^{i-1} v_i\cdot 2^i\cdot x^i = 8x^3 + 4x^2 + 1
{% endequation %}

$ f $ sind die Daten, die zwischen Sender und Empfänger ausgetauscht
werden sollen.

Das Generatorpolynom $ g $ ist konstant und wird vom Sender verwendet um die
Prüfsumme von den Daten abzuleiten. Der Empfänger benutzt das
Polynom zu Fehlererkennung der empfangenen Daten.

{% equation %}
  g(x) = x^3 + x^2 + x\quad\hbox{mit}\quad grad(g) \leq grad(f)
{% endequation %}

Mit einem Trägerpolynom $ t(x) $ sollen Daten und Prüfsumme in einem
Paket übertragen werden. Dazu werden Daten, die mit $ f $ abgebildet
werden, durch Multiplikation mit $ x^{n} $ im oberen Bereich plaziert,
im unteren Bereich ist Platz für die Prüfsumme der Daten, die durch
addition angehängt wird. Die Prüfsumme hat maximal die Größe des
Generatorpolynoms wodurch der Wert von $ n= grad(g) $ bestimmt ist.

{% equation %}
  f^*(x) = (t\circ f)(x) = f(x)\cdot x^{n} = (8x^3 + 4x^2 + 1)\cdot x^3 = 8x^6 + 4x^5 + x^3
{% endequation %}

Wie die Prüfsumme gebildet wird und anschließend mit den Daten transportiert
wird soll hier theoretisch disskutiert werden: Die Annahme ist, dass das
Polynom $ f^* $ in einen ganzrationalen Anteil und einen echt
gebrochenrationalen Anteil zerlegt werden kann:

{% equation %}
\label{eq:div}
  f^*(x) = q(x)\cdot g(x) + r(x)\quad\Leftrightarrow\quad\frac{f^*(x)}{g(x)} = q(x) + \frac{r(x)}{g(x)}
{% endequation %}

Es gilt dann zunächst $ grad\(r\) < grad(f) $. Durch iterierte Anwendung von
\eqref{eq:div} kann der Rest immer wieder Zerlegt werden bis $ grad\(r\) < grad\(g\) $ gilt.
Bekannt ist das Verfahren unter dem Namen: Polynomdivision.

{% equation %}
  q(x)\cdot g(x) + r(x) = q(x)\cdot g(x) + (q_1(x)\cdot g(x) + r_1(x)) = ...
{% endequation %}

Der verbleibende Anteil $ r(x) $ mit $ grad\(r\) < grad\(g\) = n $ bildet die
Prüfsumme. Der Träger $ t $ aus $ f^* $ und $ r $  wird durch
Umformung aufgelöst:

{% equation %}
  t(x) = f^*(x) - r(x) = f(x)\cdot x^n - r(x) = q(x)\cdot g(x)
{% endequation %}

Polynomdivision: Die Daten $ f^* $ werden durch das Generatorpolynom sukzessive
geteilt. Das verbleibende Restpolynom bildet die Prüfsumme ab:

{% align %}
& 8x^6 + 4x^5 + x^3 : x^3 + x^2 + x= 8x^3 - 4x^2 + 9 \\
& -(8x^6 + 8x^5 + 8x^4) \nonumber\\
\hline
& - 4x^5 - 8x^4 + x^3 \nonumber\\
& -(- 4x^5 - 4x^4 - 4x^3) \nonumber\\
\hline
& -4x^4 + 5x^3 \nonumber\\
& -(- 4x^4 - 4x^3 - 4x^2) \nonumber\\
\hline
& 9x^3 + 4x^2 \nonumber\\ 
& -(9x^3 + 9x^2 + 9x) \nonumber\\
\hline
& - 5x^2 - 9x \nonumber\\ 
{% endalign %}

Das Polynom aus Daten und Prüfsumme $ f^*(x) - r(x) $ hat entsprechend
folgendes aussehen:

{% equation %}
  t(x) = f(x)\cdot x^n - r(x) = 8x^6 + 4x^5 + x^3 + 5x^2 + 9x 
{% endequation %}

Polynomdivision: Die Daten $ t $ werden übertragen. Das
Polynom vom Empfänger erneut durch das Generatorpolynom $ g $ geteilt. Es
sollte sich dann kein Rest mehr ergeben und die Übertragung war
erfolgreich.

{% align %}
& 8x^6 + 4x^5 +x^3 + 5x^2 + 9x : x^3 + x^2 + x = 8x^3 - 4x^2 - 4x + 9 \\
& -(8x^6 + 8x^5 + 8x^4) \nonumber\\
\hline
& - 4x^5 - 8x^4 + x^3 + 5x^2 + 9x \nonumber\\
& -(- 4x^5 - 4x^4 - 4x^3) \nonumber\\
\hline
& - 4x^4 + 5x^3 + 5x^2 + 9x \nonumber\\
& -(- 4x^4 - 4x^3 - 4x^2) \nonumber\\
\hline
& 9x^3 + 9x^2 + 9x \nonumber\\
& -(9x3 + 9x^2 + 9x) \nonumber\\
\hline
& 0 \nonumber\\
{% endalign %}

Um die eigentlichen Daten $ f $ aus dem Träger zu extrahieren, muss dieses durch
das Polynom $ x^{n} $ mit $ n = grad(g) $ sukzessive geteilt werden:

{% equation %}
8x^6 + 4x^5 +x^3 + 5x^2 + 9x : x^3 = 8x^3 + 4x^2 + 1 + Rest
{% endequation %}

Der Rest ist in dem Fall uninteressant. Nur der ganzrationale Anteil spiegelt
die Daten wieder.

Wie das Verfahren in der Praxis konkret aussieht, dann im Polynomring $ \mathbb{Z_2]}[x] $,
wird hier nicht Thematisiert. Es vereinfacht sich aber einiges mit binären
Operatoren. Es sei $ a,b,c\in\mathbb{Z_2}$ und $ x,y,z\in\mathbb{Z} $:

{% align %}
& a\hbox{ xor }b = c\quad\Leftrightarrow\qquad x + y \equiv z \mod 2\\
& a\hbox{ and }b = c\quad\Leftrightarrow\qquad x\cdot y \equiv z\mod 2 \nonumber\\
{% endalign %}

Und macht das Verfahren dadurch praktikabel. Ein [PDF][pdf] vom MPI-INF hat
eine Erklärung. Einen guten Einstieg bietet auch die [Wikipedia][wiki].

[pdf]: https://resources.mpi-inf.mpg.de/departments/d1/teaching/ss10/MFI2/kap31.pdf
[wiki]: https://de.wikipedia.org/wiki/Zyklische_Redundanzpr%C3%BCfung
