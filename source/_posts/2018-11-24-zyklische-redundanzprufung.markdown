---
layout: post
title: "Zyklische Redundanzprüfung (Theorie)"
date: 2018-11-24 19:57:36 +0100
comments: true
published: false
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

Diese Zahlenfolge $ v_i $ mit $ v_i \in \{0,1\} $ wird jetzt als
Vektor in dezimalen Zahlen abgebildet. Also als Polynom $ f $ mit
Definition von Addition und Multiplikation. Die Summe der
Koeffizienten entspricht dem Wert der Bitfolge:

{% equation %}
f(x) = \sum_{i = 0}^{i-1} v_i\cdot 2^i\cdot x^i = 1 + 4x^2 + 8x^3
{% endequation %}

$ f $ sind die Daten, die zwischen Sender und Empfänger ausgetauscht
werden sollen.

Das Generatorpolynom ist konstant und wird vom Sender verwendet um die
Prüfsumme von den Daten abzuleiten. Der Empfänger benutzt das
Polynom zu Fehlererkennung der empfangenen Daten.

{% equation %}
  g(x) = x^3 + x^2 + x
{% endequation %}

Mit einem Trägerpolynom $ t(x) $ sollen Daten und Prüfsumme in einem
Paket übertragen werden. Dazu werden Daten, die mit $ f $ abgebildet
werden durch Multiplikation mit $ x^{n} $ im oberen Bereich plaziert,
im unteren Bereich ist Platz für die Prüfsumme der Daten, die durch
addition angehängt wird. Die Prüfsumme hat maximal die Größe des
Generatorpolynoms wodurch der Wert von $ n= grad(g) $ bestimmt ist.

{% equation %}
  f^*(x) = (t\circ f)(x) = f(x)\cdot x^{n} = (8x^3 + 4x^2 + 1)\cdot x^3 = 8x^6 + 4x^5 + x^3
{% endequation %}

Das resultierende Polynom $ f^'(x)$ wird als Frame bezeichnet. Wie die
Prüfsumme von dem Frame gebildet wird und anschließend zum Frame
hinzugefügt wird soll hier theoretisch disskutiert werden.

Polynomdivision: Das Frame wird durch das Generatorpolynom geteilt und
der Rest ist das Polynom mit der Prüfsumme.

{% align %}
& 8x^6 + 4x^5+x^3 : 8x^3 + 4x^2 + 2^x= x^3 -\frac{1}{4}x + \frac{1}{4} \\
& -(8x^6 + 4x^5 + 2x^4) \nonumber\\
\hline
& -2x^4 + x^3 \nonumber\\
& -(-2x^4 - x^3 -\frac{1}{2}x^2) \nonumber\\
\hline
& 2x^3 +\frac{1}{2}x^2 \nonumber\\
& -(2x^3 + x^2 +\frac{1}{2}x) \nonumber\\
\hline
& -\frac{1}{2}x^2 -\frac{1}{2}x \nonumber\\ 
{% endalign %}

Polynomdivision: Das Polynom mit der Prüfsumme wird zu dem Frame
addiert und füllt die unteren Dimensionen. Anschließend wird das
Polynom vom Empfönger erneut durch das Generatorpolynom geteilt. Es
sollte sich dann kein Rest mehr ergeben und die Übertragung war
erfolgreich.

{% align %}
& 8x^6 + 4x^5 +x^3 +\frac{1}{2}x^2 +\frac{1}{2}x : 8x^3 + 4x^2 + 2^x= x^3 -\frac{1}{4}x + \frac{1}{4} \\
& -(8x^6 + 4x^5 + 2x^4) \nonumber\\
\hline
& -2x^4 + x^3 +\frac{1}{2}x^2 +\frac{1}{2}x\nonumber\\
& -(-2x^4 - x^3 -\frac{1}{2}x^2) \nonumber\\
\hline
& 2x^3 + x^2 +\frac{1}{2}x \nonumber\\
& -(2x^3 + x^2 +\frac{1}{2}x) \nonumber\\
\hline
& 0 \nonumber\\
{% endalign %}
