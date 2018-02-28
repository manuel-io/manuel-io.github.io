---
layout: post
title: "My Work in February"
date: 2018-02-27 13:10:52 +0100
comments: true
categories: 
  - 2018
  - diy
  - handson
  - documentation
  - kitchen
  - esp8266
---
### DIY: 7 Segment Display
My work on the do it yourself 7-segment-display with two digits at the
moment. It is a matrix of some led's which are driven by a hardware
board. The driver consists of two shift registers and some cords.

{% img left /data/images/7seg.jpg 300 Seven Segment Display %}

Obviously there is a software part required to make useful things.
However this project is still in an early stage and I will deliver
some code and build instructions on my GitHub [repository][repo] soon.

Actually I was looking for a cheap display big enough to fit my needs
but I failed and constructed my own one in the size of 297x210 mm per
digit. Costs are less then 5 Euros.

---

{% img left /data/images/recipes.png 300 Web Application %}
### Kitchen: Web App & Database

Recent work on my [kitchen app][app]. Since I [started the project in
june][june] last year a lot of has changed. Some fixes and
improvements are still required but I considerer this app in a good
development state. Also, some tests would harden the project for the
future and a better, responsive user interface would be awesome too.
There is still some work and usually it is more then it seems to be at
the moment. Due to lack of translation you can only [visit a
preview][preview] in german language. As mentioned earlier I publish
only sources at the moment.

---

{% img left /data/images/airrohr.jpg 300 Airrohr %}
### Airrohr: Measuring air pollution

A project to measure air pollution using the [ESP8266
controller][esp8266] and SDS011 particle sensor. Background of the
project is to motivate people building there own hardware and sending
local air pollution data to a centralized place. At the end you get an
[overview][map] on a map. Interestingly the project is designed to
give all people without background knowladge the possibility to
participate.  Just follow [the introduction][airrohr].

That worked well but doesn't fit my needs. I want to share the
wireless hardware with a second project and have to modify the
firmware. The project suggests using the [NodeMCU firmware][node] on
the ESP8266 controller but it doesn't. The original [airrohr
firmware][firmware] is not scripted in lua. It is more a native
application with some Arduino foo. This was a bit annoying because I
ensured in advance to have the tools [building the latest NodeMCU
firmware][building]. Now I decided to script my own measurement
software using lua. But this is a story for the next article.

[esp8266]: https://www.espressif.com/en/products/hardware/esp8266ex/overview
[firmware]: https://github.com/opendata-stuttgart/sensors-software/tree/master/airrohr-firmware
[building]: https://github.com/pfalcon/esp-open-sdk
[node]: https://github.com/nodemcu/nodemcu-firmware
[repo]: https://github.com/manuel-io
[preview]: https://vkitchen.herokuapp.com
[june]: /blog/2017/06/03/recipes
[airrohr]: https://luftdaten.info
[map]: http://deutschland.maps.luftdaten.info
[app]: https://github.com/manuel-io/kitchen
