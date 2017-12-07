---
layout: post
title: "Fotowiderstand"
date: 2017-12-07 22:16:06 +0100
comments: true
categories:
  - 2017
  - mathematics
  - equation
  - electronics
  - atmega
---

{% img left /data/images/ldr.png 200 Light Dependent Resistor %}

Ich stehe vor der Herausforderung, dass ich einen Mikrocontroller
([Atmega8][atmega8]) über die umgebenen Lichtverhältnisse informieren möchte und
dafür auch schon einen licht-abhängigen Widerstand habe ([A
906011][a906011]). Dieser Widerstand ändert seinen Wert in Abhängekit des
Umgebungslichtes. Dabei bedeutet viel Licht einen kleiner
Widerstandswert und umgekehrt wenig Licht oder gar Dunkelheit einen
großen Widerstand. Die genauen Werte ergeben sich aus dem Datenblatt.

Jetzt geht es um den Anschluss am Mikrocontroller. Dieser verfügt über
einen Analog-Digital-Wandler und kann in Abhängigkeit einer
Referenzspannung analoge Spannungswerte auf einen 10 bit großen
nummerischen Wert abbilden (10 bit bedeutet 2^10 = 1024. Also ein
Zahlenbereich von 0 bis 1023).

Damit an dem  licht-abhängigen Widerstand eine Spannung abfällt, muss
dieser in einfacher Weise zu einem Spannungsteiler verschaltet werde
(siehe Abbildung).

Formal stellt lässt sich die Situation durch zwei Formeln beschreiben.
Die Maschenregel und das Ohmsche Gesetz:

$ U = \oint_G E\, ds = 0 $ oder $ U – U_1 – U_2 = 0 $ oder $ U = U_1 + U_2 $

{% equation %}
\label{eq:ohm}
U = R_1 \cdot I + R_2 \cdot I
\Leftrightarrow U = (R_1 + R_2) \cdot I
\Leftrightarrow I = \frac{U}{R_1 + R_2}
{% endequation %}

$ U_2 $ ist hier unserer licht-abhängigen Widerstand:

$ U_2 = R_2 \cdot I \quad\hbox{mit}\quad I = \frac{U}{R_1 + R_2} \quad\hbox{aus (\ref{eq:ohm})} $

{% equation %}
\label{eq:ldr}
U_2 = U \cdot \frac{R_2}{R_2 + R_1}
{% endequation %}

Damit ist die Spannung am licht-abhängigen Widerstand gegeben. Wie
schon in der Einleitung beschrieben ändert dieser Widerstand seinen
Wert $ R_2 $ in Abhängigkeit des Umgebungslichtes. Dabei nimmt der Wert
zwei Extrema an:

$ R_i $ bei besonders viel Licht und $ R_x $ bei besonders wenig Licht.

Ziel ist jetzt den Widerstand $ R_1 $ so zu dimensionieren, dass am
licht-abhängigen Widerstand ein möglichst großes Spannungsspektrum
abfällt. Dazu werden die Werte für $ R_i \hbox{ und } R_x \hbox{ für } R_2
\hbox{ in (\ref{eq:ldr})} $ eingesetzt und die Differenzspannung weiter diskutiert.

{% equation %}
\Delta U(R_1) = U \cdot \frac{R_x}{R_x + R_1} – U \cdot \frac{R_i}{R_i + R_1}
{% endequation %}

Jetzt wird die erste Ableitung gebildet  und gleich Null gesetzt, um
die maximale Differenzspannung ermitteln zu können:

{% equation %}
\frac{d\Delta U(R_1)}{dR_1} = U \cdot (\frac{R_i}{R_i + R_1^2} - \frac{R_x}{R_x + R_1^2})
{% endequation %}

Weiter wird die Ableitung gleich Null gesetzt: $ \frac{d\Delta
U(R_1)}{dR_1} \overset{!}{=} 0 $. Da ein Produkt immer Null ist, wenn
einer der Faktoren Null ist und die Spannung $ U $ per
Definition größer als Null ist, wird $ U $ hier nicht mehr gebraucht:

{% equation %}
R_i \cdot (R_x + R_1)^2 =  R_x \cdot (R_i + R_1)^2
{% endequation %}

Ausmultiplizieren und $ R_1 $ ausklammern gibt weiter:

{% equation %}
R_1^2 = \frac{R_i \cdot R_x^2 - R_x \cdot R_i^2}{R_x - R_i}
{% endequation %}

Und da $ R_x > R_i > 0 $ angenommen wird, steht unter der Wurzel immer
etwas positives. Und auch das Ergebnis der Wurzel ist nur positiv
sinnvoll:

{% equation %}
R_1 = \sqrt{R_x \cdot \frac{R_i \cdot R_x - R_i^2}{R_x – R_i}}
{% endequation %}

Für meinen Fall beträgt der Widerstand bei maximalen Lichteinfall $
3,5k\Omega $ und bei Dunkelheit $ 180k\Omega $. Damit ist für $ R_1 =
25k\Omega $ gegeben. Die Differenzspannung beträgt $ \Delta U = 3,78 V
$, die minimale Spannung beträgt $ U_i = 0.61 V $ und die maximale
Spannung beträgt $ U_x = 4.39 V $.

Im Analog-Digital-Wandler des Mikrocontrollers werden die analogen
Werte nummerisch abgebildet:

{% equation %}
ADC = \frac{U_i}{U}\cdot 1024\quad\hbox{und}\quad ADC = \frac{U_x}{U}\cdot 1024
{% endequation %}

Es ergibt sich ein Wertebereich von 125 bis 900 von viel Licht bis
wenig Licht. Die Betriebsspannung von $ 5V $ für den Mikrocontroller
entspricht bei mir auch der Referenzspannung des
Analog-Digital-Wandlers.

Da es bei meiner Anwendung nicht um hohe Präzision geht, kann ich den
Analog-Digital-Wandlers Left-Adjusted betreiben werden und auf die
unteren 2 bit verzichten.

[a906011]: https://cdn-reichelt.de/documents/datenblatt/A500/A90xxxx%23PE.pdf
[atmega8]: http://www.atmel.com/Images/Atmel-2486-8-bit-AVR-microcontroller-ATmega8_L_datasheet.pdf

