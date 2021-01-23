---
layout: post
title: "Fortschritt/Ausblick 20/21"
date: 2021-01-17 00:30:00 +0100
comments: true
categories:
  - 2021
  - meta
  - documentation
---
{% img center /data/images/way2021.jpg Feldweg ins Ungewisse %}

Da dachte der Mensch zuletzt noch er wäre das einzige valide Virus auf der Erde
und dann kommt so ein junger Spross daher und bietet ordentlich Paroli.
Während das eine Virus seine Streitkräfte Biontech, Moderna, Curevac,
AstraZeneca, Johnson & Johnson und wie sie alle heißen mobilisiert, antwortet
der Gegner einfach mit neuen Mutationen. Das Ziel ist wie bei jedem Streit am
Ende auf der Gewinnerseite zu stehen um wie zuvor normal weiter machen zu
können. Und wie bei jedem andauernden Streit geht es irgendwann nicht mehr um
Ursachen sondern um den Streit selbst.

Was sonst noch im letzten Jahr war:

### Breitband:

{% img left 300 /data/images/glasfaser.jpg Glasfaser %}

Im letzten Jahr wurde hier auf dem Land Glasfaser verbuddelt. Die Zeit der
Telefonmasten die hier noch vieler Orts zu sehen sind und bestimmt,
eigentlich nur noch [SIP](https://de.wikipedia.org/wiki/SIP-Telefon)
transportieren, ist vorbei. Zu viel möchte ich noch gar nicht schreiben und
erstmal viel testen, aber die Rahmendaten sind schon sehr erfreulich. Die 2
MBit/s, von denen weniger als 1 MBit/s ankamen sind jetzt für den gleichen
Preis in 25 facher Geschwindigkeit zu haben. Und auch mit dem Regionalzuschlag,
mit dem sich der Netzbetreiber das Ganze noch vergolden lassen hat, ist dann
vorbei. Da gibt es wirklich [gruselige
Geschichten](https://wendland-net.de/post/seit-wochen-ohne-festnetz-telefon-chaos-bei-der-telekom-11520).
Zuletzt gab es noch die Hoffnung Elon Musk mit seinem [Internet über
Satelliten](https://www.starlink.com/) würde die Sache retten, aber dann kam
die [NGN Telecom](https://www.ngn-tele.com/). →  Später mehr.

### Minicloud:

Da ist zunächst die Minicloud. Eine Python3-Webapp basierend auf dem Flask
Framework um Dateien und Informationen zwischen verschieden Geräten
auszutauschen. Darüber hinaus kann die App auch mit einem DLNA-Server verbunden
werden und so Audio und Video im lokalen Netz finden und wiedergeben. Für mich
ist die Applikation im lokalen Netzwerk schon sehr nützlich geworden. Die Frage
ist noch wie ich die Konfigurations-Möglichkeiten und Dokumentation noch
verbessern kann um die App allgemein zugänglicher zu machen. Eigentlich wollte
ich schon im letzten Jahr eine Release veröffentlichen, aber dafür gibt es
einfach noch zu viele Todos auf der Liste. →
[https://github.com/manuel-io/minicloud](https://github.com/manuel-io/minicloud)

### Kitchen App:

Ich habe irgendwann mal angefangen meine Rezepte in einer digitalen Datenbank
abzuspeichern. Um neue Rezepte hinzuzufügen und auszulesen gibt es die
Ruby-Applikation basierend auf dem  Ruby on Rails Framework, allgemein ist das
System für mich auch noch sehr hilfreich, ich habe aber aufgehört die
Datenbasis zu pflegen und so wurden inzwischen viele Rezepte verändert, aber
nicht auf den aktuellen Stand gebracht. Was das Rails-Framework angeht bin ich
der Meinung, dass das mir inzwischen einfach zu groß geworden ist und mit zu
vielen Abhängigkeiten kommt. Dass macht es nicht einfach den Programmiercode auf
dem aktuellen Stand zu halten. Die Programmiersprache Ruby, Objektorientiert
und mit vielen funktionalen Elementen, finde ich gar nicht so schlecht. Also
hier würde es dann weitergehen wenn die Minicloud einen Release Status erreicht
hat.  →
[https://github.com/manuel-io/kitchen](https://github.com/manuel-io/kitchen)

### City4Sim:

{% img center /data/images/sl200.jpg MAN SL200 %}

Eine Applikation basierend auf Javascript. Viel ist hier noch nicht passiert
bis auf eine Karte in einer isometrische Projektion auf der Tiles dargestellt
werden können. Hier versuche ich auch immer wieder neue Ansätze: Zuerst [C++
und SDL2](https://github.com/manuel-io/openCTS/tree/master), später mit
[Javascript und Canvas](https://github.com/manuel-io/openCTS/tree/canvas) und
dann mit Haskell und SDL2. Ich würde gerne viel mehr mit Haskell machen, aber
merke dann, dass meine Denkweise noch zu viel in die Richtung iterativer,
imperativer und prozeduraler Programmierung geht. Später mehr. →
[https://city4sim.zahlenpresse.de/](https://city4sim.zahlenpresse.de/)
