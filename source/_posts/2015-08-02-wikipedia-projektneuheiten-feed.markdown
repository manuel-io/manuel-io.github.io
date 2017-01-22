---
layout: post
title: "Wikipedia: Projektneuheiten (Feed)"
date: 2015-08-02 11:42:20 +0200
comments: true
categories:
  - 2015
  - wikipedia
  - ruby
  - atom
  - rss
  - feed
---
Schon seit einiger Zeit kümmere ich mich um einen Feed für die
Wikipedia: Projektneuheiten. Jetzt war mal wieder ein bisschen Pflege
notwendig um das im Hintergrund laufende Skript stabiler zu machen.
Ziel ist es u.a. das [RSS][rss] und [Atom][atom]-Format parallel anzubieten und genau das
wird jetzt auch gemacht. Mit `?type=rss` und `?type=atom` kann das
entsprechende Format ausgewählt werden. Fallback ist das neuere
Atom-Format:

    [...]
    FORMAT = case WEB['type']
      when 'rss' then :rss
      when 'atom' then :atom
      else :atom
    end
    [...]

Siehe den gesamten [Quelltext][gist].

[rss]: https://tools.wmflabs.org/projektneuheiten-feed/?type=rss
[atom]: https://tools.wmflabs.org/projektneuheiten-feed/?type=atom
[gist]: http://git.io/vOZ2l
