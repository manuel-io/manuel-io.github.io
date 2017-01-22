---
layout: post
title: "Abfallgebühren 2016"
date: 2016-02-02 18:00:27 +0100
comments: true
categories:
  - 2016
  - plot
  - gnuplot
  - listing
---
Das Konzept ist schnell erklärt. Es gibt Mülltonnen unterschiedlicher
Größe mit jeweils einer Grundgebühr. In der Grundgebühr ist die
Leerung der Tonne für 6 mal schon enthalten. Jede weitere Leerung
kostet extra (5 € für 60 L. 6,70 € für 80 L ...). Laut Abfallkalender
2016 werden die Tonnen 25 mal im Jahr geleert. Es bleibt jedem
überlassen die Tonne zur Leerung an die Straße zu stellen.
Offensichtlich ist der Preisanstieg für alle Tonnen ab 6 Leerungen
gleich. Dennoch kann man für 1000 L Müll unterschiedlich viel
bezahlen. Zwei Szenarien:

- **1)** Ich habe 480 L Müll und besorge mir eine 80 L Tonne für eine
  Grundgebühr von 117, - Euro. Das sind `6 x 80 L = 480 L`. Passt.

- Ich könnte auch eine 60 L Tonne für 87,60 - Euro besorgen. Plus
  zwei zusätzliche Leerungen für je 5, - Euro. Also `6 x 60 L + 2 x
  60 L = 480 L` für insgesamt `87,60 + 2 x 5 = 97,60`. Einsparung:
  19,40 - Euro.

- **2)** Ich besorge mir eine 80 L Tonne. Möchte diese aber nur jedes zweite
  mal zum Leeren an die Straße stellen. Ich komme auf 13 Leerungen im
  Jahre. `13 x 80 L = 1040 L`. Kosten: `117 + 7 x 6,70 = 163,90`.

- Möglichkeit einer 60 L Tonne. Diese muss 18 mal abgeholt werden um
  auf 1080 L zu kommen. Kosten: `87,60 + 12 x 5 = 147.60`. Grundgebühr
  plus 12 Leerungen. Einsparung: 16,30 - Euro.

Beide Beispiele verdeutlichen, dass eine 80 L Tonne nur dann Sinn
macht, wenn diese konsequent genutzt wird und jedesmal zur Leerung an
die Straße gestellt wird. Wird die Tonne über 6 mal zurückgehalten
lohnt sich definitiv eine 60 L Tonne.

{% img 50% center /data/images/abfall16.png Abfallgebühren 2016 %}
    
    #!/usr/bin/env gnuplot
    set key left
    set encoding utf8
    set xlabel 'Menge [L]'
    set ylabel 'Preis [EUR]'
    set xrange [30:3000]
    set yrange [70:450]
    set grid mxtics mytics
    set mxtics 0
    set mytics 2
    set grid

    set xrange [300:3000]
    set yrange [80:500]
    set terminal png
    set output 'plot.png'

    f(x) = ((5.0/60.0) * x) + 57.6
    g(x) = ((6.7/80.0) * x) + 76.8
    h(x) = ((10.0/120.0) * x) + 115.2
    i(x) = ((20.0/240.0) * x) + 230.2

    # Plot
    plot (x > 360 && x < 1500) ? f(x) : (x < 360) ? 87.6 : 1/0 title '    60 L', \
      (x > 480 && x < 2000) ? g(x) : (x < 480) ? 117 : 1/0 title '    80 L', \
      (x > 720 && x < 3000) ? h(x) : (x < 720) ? 175.2 : 1/0 title '   120 L', \
      (x > 1440 && x < 6000) ? i(x) : (x < 1440) ? 350.4 : 1/0 title ' 240 L'
