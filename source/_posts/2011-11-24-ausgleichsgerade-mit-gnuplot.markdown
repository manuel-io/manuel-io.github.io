---
layout: post
title: "Ausgleichsgerade mit GnuPlot"
date: 2011-11-24 16:13
comments: true
categories:
  - 2011
  - physics
  - listing
  - plot
  - gnuplot
---
Dies ist eine schnelle Anleitung zur Erstellung einer Ausgleichsgerade
mit GnuPlot. Dazu sollen hier die Messwerte eines
Geiger-Müller-Zählers in Abhängigkeit der anliegenden Spannung
betrachtet und im Plateaubereich eine Ausgleichsgerade konstruiert
werden.

    #!/usr/bin/env gnuplot

    unset key
    set encoding utf8
    set xlabel 'Spannung U[V]'
    set ylabel 'Impulsrate N[1/s]'
    set xrange [300:710]
    set yrange [65:120]
    set grid
    set terminal png
    set output 'geiger_mueller_plateau.png'

    f(x) = m*x + b
    fit [395:665] f(x) 'geiger_mueller_plateau.dat' \
      using ($3>390 & $3<670 ? $3 : 1/0):4 via m,b

    plot (x>395 & x<665) ? f(x) : 1/0 title 'Ausgleichsgerade', \
      'geiger_mueller_plateau.dat' using ($3>0 & $3<710 ? $3:1/0):4:($4*$5)  \
      with yerrorbars title 'Impulsrate'

Zunächst wird mit dem _fit_-Befehl die Ausgleichgerade _f_ durch die
[Messwerte][messwerte] im gewünschten Bereich konstruiert. Im
_plot_-Befehl wird _f_ dann nur für den Plateaubereich definiert. Der
Rest ist undefiniert: _1/0_.

[messwerte]: /data/dat/messwerte.dat
