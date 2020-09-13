---
layout: post
title: "Zahnradgetriebe"
date: 2020-09-13 12:57:52 +0200
comments: true
categories: 
- 2020
- equation
- physics
- teaching
---
Als Fortsetzung zum letzten Beitrag möchte ich hier nochmal darstellen wie es
zur Umwandlung von Drehmoment und Drehzahl kommt. Gebraucht wird hier nur das
Hebelgesetz von Archimedes:

> Die Krafteinwirkung an einem Drehpunkt erhöht sich proportional zu Länge des Hebels.

Alle Elemente sind an einem Zahnrad zur finden. Der Hebel ist der Radius vom
Zahnrad und der Drehpunkt ist die Achse auf der das Zahnrad montiert ist.

{% equation %}
M\propto F \quad\hbox{und}\quad M = r\cdot F
{% endequation %}

{% img left /data/images/gear_train.png Gear Train %}

Ein Beispiel ist in der Abbildung zu sehen. An dem kleinen Zahnrad auf
Achse (1) hängt ein Gewicht. Mit der Gravitationsbeschleunigung $g$
wirkt also eine Kraft senkrecht zum Hebelarm, die eine Rotation in
Pfeilrichtung am Drehpunkt von Achse (1) bewirkt. Nach Archimedes wird ein
Drehmoment auf Achse (1) erzeugt.

{% equation %}
F_1 = 1kg\cdot 10\frac{m}{s^2} = 10N
{% endequation %}

Da das kleine Zahnrad auf Achse (1) mit dem 3-mal so großen Zahnrad auf Achse
(2) verzahnt ist, gibt es so die Kraft $F_1$ weiter. In Folge fängt auch das
große Zahnrad an sich entgegengesetzt zu drehen und erzeugt auf der Achse (2)
ebenfalls ein Drehmoment.

Das große Zahnrad hat dreimal so viele Zähne und braucht dementsprechend drei
mal länger für eine Umdrehung. Dementsprechend ist die Drehzahl auf Achse (2)
nur noch $1/3$ von der Ursprünglichen.

Der Hebelarm beim großen Zahnrad auf Achse (2) ist aber drei mal Länger (3r) als
beim Kleinen auf Achse (1) und dementsprechend ist das Drehmoment bei
gleichbleibender Kraft $F_1$ drei mal größer.

Resultieren kann das Ergebnis an dem kleinen Zahnrad auf Achse (2) betrachtet
werden. Dieses Zahnrad ist nur noch Abhängig von dem Drehmoment und der
Drehzahl auf Achse (2) hat aber die gleiche Größe wie das Kleine auf Achse (1).

Wenn das Drehmoment auf Achse (2) $3\times$ größer geworden und der Hebelarm ($r$)
gleich geblieben ist, muss also nach Archimedes die dreifache Kraft auf den
Drehpunkt von Achse (2) wirken.

{% equation %}
F_2 = 3\cdot 1kg\cdot 10\frac{m}{s^2} = 30N
{% endequation %}
