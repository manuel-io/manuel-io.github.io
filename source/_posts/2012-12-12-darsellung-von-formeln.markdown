---
layout: post
title: "Darsellung von Formeln"
date: 2012-12-12 11:11
comments: true
categories:
  - 2012 
---
Wollte man früher mathematische Symbole im Web darstellen hat man
diese erst in TeX oder LaTeX geschreiben, dann in Bilder umgewandelt
und dann diese in Web-Seiten eingebunden. Das ist heute noch zum Teil
[best practice][bp]. Hat aber den Nachteil, dass alle Informationen
über Textfluss und Schriftgrad sowie semantische Informationen
verloren gehen und Änderungen sehr zeitaufwändig sind.

Es gibt einige Bestrebungen ([jsMath][jsmath], [jqMath][jqmath]) das
doch mal zu ändern. Das vielversprechendste Projekt [MathJax][mathjax]
versteht verschiedene Syntaxen und kann diese auch ineinander
umwandeln:

[MathJax: Converts TeX to MathML][gist]

Damit können Formeln erstmal in TeX geschrieben werden—bzw.
XML-Dokumente mit MathML erweitert werden—und später im Web
dargestellt werden.

**Update:** https://khan.github.io/KaTeX/

[bp]: https://de.wikipedia.org/wiki/Hilfe:TeX
[jsmath]: http://www.math.union.edu/~dpvc/jsmath
[jqmath]: http://mathscribe.com/author/jqmath.html
[mathjax]: https://www.mathjax.org
[gist]: https://gist.github.com/elektret/6407629
