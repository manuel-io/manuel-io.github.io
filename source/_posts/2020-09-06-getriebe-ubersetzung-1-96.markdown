---
layout: post
title: "Getriebe-Übersetzung (1:96)"
date: 2020-09-06 15:38:39 +0200
comments: true
categories:
- 2020
- equation
- physics
- teaching
---
{% img center /data/images/gear_ratio.png Compound Gear Train %}

Als Nachtrag zum damaligen [Papercraft Car][papercraft] möchte ich noch etwas
bringen. Es ging damals um den Antrieb. Ich habe mich für einen
Gleichstrom-Motor entschieden. So brauchte es kein Schaltgetriebe sondern ein
Wechsel der Fahrtrichtung konnte durch einfache Umpolung erreicht werden. Die
Umpolung macht dann eine H-Brücke (z.B. [L293x][l293x] von Texas Instruments).

Die Charakteristik für den DC-Motor sieht folgendermaßen aus:

* Leistung: $ 3W $
* Spannung: $ 6V $
* Drehzahl: $ 11520rpm\,\hbox{bzw.}\, 192Hz $ (Leerlaufdrehzahl)

Die Räder am Papercraft Car haben einen Durchmesser von $d = 45mm$ also ein
Radius von $22,5mm$. Oder besser gesagt, da es hier um Kraftübertragungen geht,
der Lastarm beträgt $r = 22,5mm$.

Im Weiteren wird davon Ausgegangen, dass die gesamte Energie die in den
DC-Motor gesteckt wird auch an der Antriebsachse zur Verfügung steht. Es ergibt
sich dann:

{% equation %}
Leistung (P) = Drehmoment (M) \cdot Drehzahl (n)
{% endequation %}

Für die Achse am DC-Motor ergibt sich dann ein Drehmoment:

* Drehmoment: $ M_1= 3W \cdot s/192 = 1,5625 \cdot 10^{-2}Nm $
* Drehzahl: $ n_1 = 192Hz $
* Bahngeschwindigkeit: $ v_1 = \hbox{?} $

{% equation %}
Bahngeschwindigkeit (v) = Drehzahl (n)\cdot Radumfang (\pi\cdot d)
{% endequation %}

Und damit eine Bahngeschwindigkeit:

{% equation %}
v_1 = 192Hz \cdot\pi\cdot 45\cdot 10^{-3}m = 27,1434m/s \approx 97,7km/h 
{% endequation %}

Mit Getriebe-Übersetzung (1:96): Ein Zahnradgetriebe zwischen Antriebsachse
(driver gear) und Radachse (driven gear) ergibt die Rechnung:

* Drehmoment: $ M_2 = 96 \cdot 1,5625 \cdot 10^{-2}Nm = 1,5Nm $
* Drehzahl: $ n_2 = P/M_2 = 3W/1,5Nm = 2Hz $
* Bahngeschwindigkeit: $ v_2 = 0,2827m/s \approx 1,02km/h $

Die Drehzahl und damit auch die Bahngeschwindigkeit ist durch das Getriebe
einiges langsamer geworden. Wo ist also jetzt der Vorteil? Aufgefallen ist
vielleicht, dass die Leistung mit und ohne Getriebe die Gleiche geblieben ist.
In der hier idealen Welt gibt es keine Verluste also muss die Gesamtleistung im
System konstant bleiben.

Durch das Getriebe wird ein größeres Drehmoment auf der Radachse erreicht und
da der Lastarm am Rad eine konstante Länge hat, ergibt sich für die Lastkraft:

{% equation %}
Drehmoment (M) = Lastkraft (F) \cdot Lastarm (r)
{% endequation %}

Je ein Lastkraft $F_1, F_2$:

{% align %}
F_1 = M_1 / r = &1,5625\cdot 10^{-2}Nm/(22,5\cdot 10^{-3}m) \\
F_2 = M_2 / r = &1,5Nm/(22,5\cdot 10^{-3}m) \nonumber
{% endalign %}

Und das Verhältnis ist:

{% equation %}
\frac{F_2}{F_1} = \frac{66,67N}{0,69N}
{% endequation %}

Auffällig ist vielleicht das sich der Faktor $96$ hier durchzieht. Da die
Zwischenergebnisse hier immer wieder gerundet dargestellt werden kommt es zu
kleineren Abweichungen.

[papercraft]: /blog/2017/12/25/papercraft-car/
[l293x]: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi06bed3NTrAhWN_aQKHXmSDy0QFjAAegQIAhAB&url=https%3A%2F%2Fwww.ti.com%2Flit%2Fds%2Fsymlink%2Fl293.pdf&usg=AOvVaw1YcskQ0KtfiQT_cj4hg6Op
