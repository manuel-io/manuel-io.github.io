---
layout: post
title: "The Turtle is Dancing"
date: 2013-05-29 21:56
comments: true
categories:
  - 2013
  - ipv6
---
Heute habe ich [IPv6][wikipedia] auch für meinen Internetanschluss [angemacht][kame].
Weil ich von meinem Internetprovider noch kein IPv6-Internet bekomme,
habe ich einfach einen zweiten Internetprovider dazwischen geschaltet.
[SixXS][sixxs] macht es möglich. Dann habe ich noch ein [Plugin][showip] installiert
um die Benutzung von IPv6 nachzuvollziehen.

Weitere Möglichkeiten für IPv6 gibt es auf dieser [Seite][fedora].
Vielleicht sind dann noch ein paar [Einstellungen][forum]
nötig um die Benutzung von IPv6 zu präferieren.
Ein kleines Programm zur _precedence_ gibt es [hier][github].
Geht aber auch viel schneller mit diesem Befehl: 

    ruby -r 'socket' -e 'Addrinfo.foreach("www.sixxs.net", 80, nil, :STREAM) { |x| puts x.inspect }'

[wikipedia]: https://de.wikipedia.org/wiki/IPv6
[sixxs]: https://www.sixxs.net/
[kame]: http://www.kame.net/
[showip]: http://opensource.teqneers.com/showip.html
[fedora]: https://fedoraproject.org/wiki/IPv6Guide
[forum]: https://lwn.net/Articles/425985/
[github]: https://github.com/manuel-io/petridish/blob/master/misc/gai.c
