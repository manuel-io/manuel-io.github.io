---
layout: post
title: "12d1:1001 Huawei Technologies"
date: 2014-09-16 11:47
comments: true
categories:
  - 2014
  - programming
  - umts
  - ruby
---
    $ mkdir medion; cd medion
    $ gem install serialport
    $ curl -o medion.rb http://pastebin.com/raw.php?i=nm4nzmnf
    $ curl -o pdu.rb http://pastebin.com/raw.php?i=qVFUak4D

    Usage: medion.rb [options]
        -v, --[no-]verbose               Run verbosely
        -b, --[no-]balance               Print balance
        -d, --device STRING              Device file
        -p, --pin STRING                 Personal identification number
        -a, --ascii STRING               Convert ASCII
        -u, --pdu STRING                 Convert PDU

    $ ruby medion.rb -d /dev/ttyUSB2 
        /dev/ttyUSB2 responding ...

        Manufacturer: huawei
        Model: E160
        Revision: 11.608.06.00.52

[Gist][gist],
[Huawei E1550 3G modem][archlinux],
[MEDIONmobile web stick S4001][helber]

[gist]: https://gist.github.com/elektret/f64155e1963e041554b5
[helber]: http://www.helber.it/MEDIONmobile_web_stick_unter_U.websticks4001ubuntu.0.html
[archlinux]: https://wiki.archlinux.org/index.php/Huawei_E1550_3G_modem
