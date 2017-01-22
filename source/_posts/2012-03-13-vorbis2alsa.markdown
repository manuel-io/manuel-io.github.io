---
layout: post
title: "vorbis2alsa"
date: 2012-03-13 16:34
comments: true
categories:
  - 2012
  - programming
  - audio
  - debian
---
Als Vorbereitung auf eines meiner, möglicherweise, nächsten Projekte
habe ich mit _vorbis2alsa_ einen minimalistischen
[Audioplayer][player] geschreiben. Das Programm kann ein _ogg vorbis
file_ öffnen und den Stream an das _alsa default interface_
weitergeben:

    https://github.com/manuel-io/petridish/tree/master/vorbis2alsa

Es wird in Zukunft auch keine grundlegenden Änderungen geben. Für mich
waren nur die Grundlagen von _libvorbis_ und _asoundlib_ wichtig,
sowie deren Kommunikation untereinander. Interessant finde ich aber
noch in welcher Form die Metainformationen in einer ogg-Datei
dargestellt werden können. Da wird es noch etwas geben. Eine große
Hilfe beim Umgang mit den Bibliotheken war der Quelltext von
[XMMS][xmms]:

**Update:** Added Opus and MP3 support.

[xmms]: http://www.xmms.org
[player]: https://github.com/manuel-io/petridish/tree/master/vorbis2alsa
