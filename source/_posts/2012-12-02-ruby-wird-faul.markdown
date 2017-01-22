---
layout: post
title: 'Ruby wird faul'
date: 2012-12-02 14:18
comments: true
categories:
  - 2012
  - ruby
---
Und das macht mich wirklich sehr glücklich.  Kurz vor Mitternacht
(Japan Standard Time) wurde gestern die nächste Vorschau von _Ruby
2.0.0_ auf einer [Mailingliste][mail] vorgestellt. Ich verweise
hier—durch Links auf die entsprechenden Unit-Tests—auf ein paar
Neuerungen:

* [Keyword arguments][keyword]
* [Enumerable#lazy][enum]
* [Module#prepend][module]
* [#to_h: Convention for conversion to Hash][object]
* [%i: A literal for symbol array][literal]
* [Regexp engine was changed to Onigmo][regexp]

Die Faulheit von Ruby erlaubt es jetzt auch unendliche Mengen zu behandeln.
Das geht etwa sowie im echten Leben: Man kann eine Menge von sämtlichen,
natürlichen Zahlen erstmal definieren, aber zur Laufzeit dann nur den Teil
bearbeiten der auch wirklich gebraucht wird:

    #!/usr/bin/env ruby-2
    require 'prime'
    (1..Float::INFINITY).lazy.map { |n| n**2+1 }.select { |m| m.prime? }
      .take(42).each { |value| puts value }


Noch ein Beispiel:

    #!/usr/bin/env ruby-2
    (23..Float::INFINITY).lazy.take_while { |value| value &lt; 43 }
      .each { |value| puts value }

[regexp]: https://github.com/ruby/ruby/blob/trunk/test/ruby/test_regexp.rb
[literal]: https://github.com/ruby/ruby/blob/trunk/test/ruby/test_literal.rb
[object]: https://github.com/ruby/ruby/blob/trunk/test/ruby/test_object.rb
[module]: https://github.com/ruby/ruby/blob/trunk/test/ruby/test_module.rb
[enum]: https://github.com/ruby/ruby/blob/trunk/test/ruby/test_lazy_enumerator.rb
[keyword]: https://github.com/ruby/ruby/blob/trunk/test/ruby/test_keyword.rb
[mail]: http://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-core/50443
