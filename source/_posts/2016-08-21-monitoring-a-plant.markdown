---
layout: post
title: "Monitoring a plant"
date: 2016-08-21 09:44:38 +0200
comments: true
categories: 
  - 2016
  - gardening
  - atmega
  - electronics
---
I'm on an electrical construction. Since I have not done anything for
a long time and I'm not as experienced with such things, this is
actually a simple matter. This is a weatherstation based on the DHT11
sensor, FC-28 for soil humidity measurement  and a light dependent
resistor. Everything is cabled to the [ATmega8][atmega8] microcontroller.

{% img left /data/images/adconv.jpg 200 ADConv %}

{% img left /data/images/plant.jpg 200 Tomato %}

The ATmega8 is the heart and processes all the software instructions.
Especially the communication with the DHT11 module which is a 1-wire
two way serial line bus.

However, I'm not a fan of using a software library which is ready for
deployment. So I read the datasheets and wrote the piece of software
for the synchronization process by myself.

Nice thing, but I do not using any software library in general. Even
not for the voltage dividers which go to the analog digital
converters.  As usual you can find all the details and construction
orders on my [Github page][adconv].

Not to say. The whole project is free and open source and hopefully
well documented. But there are so many similar projects on the
internet.

[adconv]: https://github.com/manuel-io/adconv
[atmega8]: http://www.atmel.com/images/atmel-2486-8-bit-avr-microcontroller-atmega8_l_datasheet.pdf
