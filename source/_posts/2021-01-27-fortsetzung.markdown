---
layout: post
title: "Fortsetzung (I)"
date: 2021-01-30 05:18:11 +0100
comments: true
categories:
  - 2021
  - programming
  - memory
  - x86
---
Im letzten Beispiel habe ich mal dargestellt wie eine zweidimensionale
Datenstruktur im Speicher abgebildet werden kann und dazu die
Programmiersprache C benutzt. Jetzt könnte es Einwende geben z.B. „Ich habe ein
Programmierbuch gelesen und darin wird von Arrays mit eckigen Klammern geredet,
dass macht die Sache doch viel anschaulicher“. Dass ist hier im Beispiel
natürlich auch möglich. Ein Datenpaket im Speicher würde dann mit `tiles[y][x]`
angesprochen werden können. Das kostet aber 96 Bytes mehr.

{% img center /data/images/mem2d.png Memory Map 2D Array %}

    struct tile **tiles = NULL;
    uint8_t width = 12, height = 12;
    struct tile *base = NULL;

Im letzten Beispiel haben wir für 12 Reihen und 12 Spalten mit einer Nutzlast
von 2 Bytes insgesamt 288 Bytes alloziert. Jetzt wollen wir jede Reihe einzeln
ansprechen `tiles[y]` und dafür muss die Speicheradresse von jeder Reihe
nochmal gespeichert werden. Auf einem 64 Bit Computer besteht eine Speicheradresse
gewöhnlich aus 8 Bytes und da es 12 Reihen sind ergibt sich ein Wert von 96:

    tiles = (struct tile **)malloc((width * height * sizeof(struct tile)) + (height * sizeof(struct tile *)));

Den von `malloc` erhaltenen Speicher teilen wir anschließend
auf. Im unteren Bereich (Lower) speichern wir für jede Reihe
mit y ∈ {0, 1, 2, …, 11} die Speicheradresse.

Im oberen Bereich (Upper) wird wie im letzten Beispiel die
zweidimensionale Datenstruktur abgebildet. Hier muss nur
bedacht werden, dass nicht direkt die offset Adresse von
`malloc` verwendet werden kann. Damit wir im oberen
Speicherbereich landen müssen hier noch 96 Bytes dazu addiert
werden (Data base):

    /*
    When writing in pointer arithmetic (tiles + height), is actually:
    (tiles + height * sizeof(struct tile *))
    */
    base = (struct tile *)(tiles + height);

Im Weiteren wird dann noch eine zusätzliche Initialisierung
gebraucht. Der ersten Adresse im Speicher (Offset address)
muss z.B. als Wert die Adresse (0x55947d9e7300) der ersten
Reihe im Speicher zugewiesen werden und so dann auch für die
Reihen 2, 3, 4 usw:

    for (uint8_t y = 0; y < height; y++) {
      /*
      Pointer Arithmetic: (tiles + y) is equal to (tiles + (y * sizeof(struct tile *)))
      and (base + (width * y) to (base + (y * width * sizeof(struct tile)))
      */
      *(tiles + y) = (struct tile *)(base + (width * y));
      printf("0x%lx\n", (uintptr_t)(tiles + y));
    }

Das war's. Jetzt können wir wie zuvor vorgehen und das
zweidimensionale Array verwenden:

    /* Initialization II */
    for (uint8_t y = 0; y < height; y++) {
      for (uint8_t x = 0; x < width; x++) {
        tiles[y][x].id = y * height + x;
        tiles[y][x].type = 0;
      }
    }

Für weitere technische Erklärungen verweise ich auf den
[Quelltext](https://gist.github.com/manuel-io/bbc5e7b0e899a5c13672b1e3d72bb0d0#file-mem2d-c)
des Beispiels.
