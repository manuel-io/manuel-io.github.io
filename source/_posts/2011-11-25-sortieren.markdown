---
layout: post
title: "Sortieren"
date: 2011-11-25 22:54
comments: true
categories:
  - 2011
  - unix
  - sort
---
Sortieren ist toll und der Unix-Befehl _sort_ ist auch toll.
Hier sind mal ein paar Beispiele für die Verwendung von _sort_.

Welche Programme am häufigsten ausgeführt werden kann man durch Ausgabe und
Sortierung der Unix-history erfahren:

    history | tail -1000 | awk '{print $2}' | \
      awk 'BEGIN {FS="|"} {print $1}' | \
      sort | uniq -c | sort -rn | head -10 | cat -n

Bei mir sind das die folgenden Programme:

     1      192 ls
     2      130 cd
     3       29 vim
     4       19 clear
     5       18 su
     6       15 rm
     7       14 du
     8       12 ssh
     9       10 firefox
    10        7 history

Nützlich ist _sort_ auch um Logdateien auf häufige Fehler zu durchsuchen.
Hier ein Beispiel für _404-Fehler_:

    cat httpd.log | grep GET | grep 404 | \
      sed 's/^.*GET \([^ ]*\) .*$/\1/' | \
      sort | uniq -c | sort -rn | head -10 | cat -n

Dazu habe ich auch eine großartige Liste:

     1      161 /favicon.ico
     2       54 /blog/default.css
     3       27 /blog/valid-xhtml10.png
     4        9 /pma/scripts/setup.php
     5        9 /phpMyAdmin/scripts/setup.php
     6        9 /phpmyadmin/scripts/setup.php
     7        8 /myadmin/scripts/setup.php
     8        7 /MyAdmin/scripts/setup.php
     9        4 /blog/LiberationSerif-Regular.ttf/
    10        3 /valid-xhtml10.png

