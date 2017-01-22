---
layout: post
title: "DLNA/UPnP Debugging"
date: 2015-09-20 19:00:30 +0200
comments: true
categories:
  - 2015
  - upnp
  - dlna
  - minidlna
  - administration
---
Die Tage habe ich einen Medien-Server ([miniDLNA][minidlna]) aufgesetzt.
Im Prinzip kein Problem. Nur die Firewall musste ich zusätzlich konfigurieren.
Tcpdump und dieser [Artikel][dlna] waren dabei hilfreich. Etwa:

    sudo tcpdump -i wlan0 udp port 1900 -vv -X

### Topografie

Server und Player befinden sich in einem Netzwerk _192.168.2.0/16_.
Server (_192.168.2.102_), Player (_192.168.2.106_).

### Discover

Zunächst sendet der Player (Client) ein UDP Paket an eine multicast
Adresse: `192.168.2.106:39250 > 239.255.255.250:1900`. Der
Quellport ist beliebig, der Zielport ist _1900_.

    M-SEARCH * HTTP/1.1
    MX: 3
    ST: ssdp:all
    HOST: 239.255.255.250:1900
    MAN: ssdp:discover

Die Antwort von einem UPnP-Server geht von Port _1900_ an Ursprungsadresse
und Port `192.168.2.102:1900 > 192.168.2.106:39250`:

    HTTP/1.1 200 OK
    CACHE-CONTROL: max-age=1210
    DATE: Sun, 20 Sep 2015 17:04:12 GMT
    ST: urn:microsoft.com:service:X_MS_MediaReceiverRegistrar:1
    USN: uuid:4d696e69-444c-164e-9d41-f0def14a0058::urn:microsoft.com:service:X_MS_MediaReceiverRegistrar:1
    EXT:
    SERVER: 3.2.0-61-generic.DLNADOC/1.50 UPnP/1.0 MiniDLNA/1.1.2
    LOCATION: http://192.168.2.102:8200/rootDesc.xml
    Content-Length: 0

Damit teilt der Server sein Vorhandensein mit und gibt weitere
Informationen. Die URL in der Antwort (unter LOCATION) kann im
Browser geöffnet werden:

`curl -I http://192.168.2.102:8200/rootDesc.xml`.

    HTTP/1.1 200 OK
    Content-Type: text/xml; charset="utf-8"
    Connection: close
    Content-Length: 2204
    Server: 3.2.0-61-generic DLNADOC/1.50 UPnP/1.0 MiniDLNA/1.1.2
    Date: Sun, 20 Sep 2015 17:48:56 GMT
    EXT:

Für mich bedeutet das zusätzliche Regeln in der Firewall für den
Server:

    -A INPUT -p tcp -m tcp -s 192.168.0.0/16 -m state --state NEW,ESTABLISHED --dport 8200 -j ACCEPT
    -A OUTPUT -p tcp -d 192.168.0.0/16 -m state --state ESTABLISHED --sport 8200 -j ACCEPT

    -A INPUT -p udp -s 192.168.0.0/16 -d 239.255.255.250 --dport 1900 -j ACCEPT
    -A OUTPUT -p udp -s 192.168.0.0/16 -d 192.168.0.0/16 --sport 1900 -j ACCEPT

Und für den Player (Client):

    -A INPUT -p tcp -m tcp -s 192.168.0.0/16 -d 192.168.0.0/16 -m state --state ESTABLISHED --sport 8200 -j ACCEPT
    -A OUTPUT -p tcp -s 192.168.0.0/16 -d 192.168.0.0/16 -m state --state NEW,ESTABLISHED --dport 8200 -j ACCEPT

    -A INPUT -p udp -s 192.168.0.0/16 -d 192.168.0.0/16 --sport 1900 -j ACCEPT
    -A OUTPUT -p udp -s 192.168.0.0/16 -d 239.255.255.250 --dport 1900 -j ACCEPT

Dass müsste gehen. Es kann sein, dass der Server noch einige
Fehlermeldungen wirft: `error: sendto(udp_notify=8, 192.168.2.102):
Operation not permitted`. Dann hilft es die Firewallregeln des Players
zusätzlich dem Server zu geben--der Server ist auch ein Client. Es
müsste aber auch einfach so gehen.

[dlna]: http://www.upnp-hacks.org/upnp.html
[miniDLNA]: http://sourceforge.net/projects/minidlna/
