---
layout: post
title: "CAN LCD Testboard"
date: 2013-08-09 22:52
comments: true
categories:
  - 2013
  - electronics
---
{% img right /data/images/hd44780.jpg %}

This project aims to control a HD44780 LCD display over the [CAN bus][can].
This is a common scenario in every modern automobile.
For instance the tachometer or speedometer.
Looking at the latest developments in car industries
as well as security researches it seems worth
for getting a better understanding about the message-based protocol.
I designed a [test circuit][canlcd] which should receive data from
a CAN bus and transfer them to the display.

Other basic devices might be connected to the same bus:

* [Laborboard][laborboard]
* [CAN Debugger][testboard]

[can]: https://en.wikipedia.org/wiki/CAN_bus
[canlcd]: /data/mirror/canlcd.pdf
[laborboard]: https://www.das-labor.org/wiki/Laborboard
[testboard]: http://www.kreatives-chaos.com/artikel/can-debugger
