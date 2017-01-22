---
layout: post
title: "Tage im Monat"
date: 2012-11-12 15:00
comments: true
categories:
  - 2012
  - programming
  - ruby
  - listing
---
<p>Ich brauchte mal eine kurze Formal um die Anzahl der Tage in
einem Monat zu berrechnen.
Hier ist mal eine Lösung:</p>

<pre>
k &#8804; µ &lt; l : 1/8 &#8804; µ und µ &lt; 1/7
</pre>

<p>Es gibt eine untere <em>k</em>- und obere <em>l</em>-Schranke
zwischen denen ein Skalierungsfaktor <em>µ</em> gewählt werden kann.
Für einen beliebigen Monat <em>x</em> ergibt sich dann die Anzahl der Tage
<em>f(x)</em> mit den
<a href='https://de.wikipedia.org/wiki/Abrundungsfunktion_und_Aufrundungsfunktion'>Gaußklammern</a>
<em>[]</em>:</p>

<pre>
f(x) = 30 + [(1 + µ) &#xd7; x] (mod 2), x &#x2208; { 1, 3, ..., 12 }
</pre>

<p>Beispiel:</p>

<pre>
#!/usr/bin/env ruby
require 'date'

class Date
  def days_in_february
    leap? ? 29 : 28
  end

  def days_in_month(given_month = month)
    raise ArgumentError unless (1..12).include? given_month
    given_month == 2 ? days_in_february : 30 + (given_month * 1.125).to_i % 2
  end

  private :days_in_february
end

(1..12).each { |month| puts "Days in %s: %s" %
  [ (m = Date.new 2012, month).strftime("%B"), m.days_in_month ] }
</pre>

<p>Das funktioniert, weil der Nachkommabereich durch die Gaußklammern
ignoriert wird. Es sei denn, er wird größer als <em>1</em>. Und das passiert
nach dem 7. und vor dem 8. Monat.
</p>
