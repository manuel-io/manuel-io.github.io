---
layout: post
title: "Lichtdose"
date: 2017-11-14 14:05:56 +0100
comments: true
categories: 
  - 2017
  - handson
  - diy
  - electronics
---

{% img left /data/images/lightcan.jpg 200 Lichtdose %}

Wieder einmal eine kleine Spielerei mit Leuchtdioden. Dieses mal ganz
ohne Mikrocontroller, eine kleine Fingerübung um mit den Bausteinen
`74HC4017` und `NE555` warm zu werden.

In eine leere Blechdose werden Löcher gebohrt und Leuchtdioden in
diesen mit Heißkleber fixiert. Eine Steuereinheit innerhalb der Dose
sorgt für abwechselt aufleuchtende Dioden.

Die Schaltung ist für 3V ausgelegt. Es darf aber auch eine etwas
größere Potentialdifferenz sein. Im Zweifel die Datenblätter lesen.
Bei 3V eignet sich eine Knopfzelle als Spannungsquelle. Etwa
`CR2032`. Diese sollte auch noch Platzt in der Dose haben.

Etwas dokumentiert habe ich das Projekt auch. [Hier
ist ein Schema](/data/images/lightcan-schematic.png) wie die LED's
angesteuert werden und ein Abbild der Logikeinheit auf einer
Lochrasterplatine:

{% img /data/images/lightcan-pcb.png Lichtdose %}
