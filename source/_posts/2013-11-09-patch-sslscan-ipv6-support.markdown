---
layout: post
title: "Patch: SSLScan IPv6 support"
date: 2013-11-09 20:52
comments: true
categories:
  - 2013
  - ipv6
---
[SSLScan][sslscan] queries SSL services, such as HTTPS, in order to
determine the ciphers that are supported. I wrote a [patch][patch] to give
_sslscan_ the ability to scan IPv6 hosts. Here I like to give you some
hints how to use the new version:

    $ wget sslscan-1.8.2
    $ tar -xvf sslscan-1.8.2.tgz
    $ cd sslscan-1.8.2
    $ wget -O sslscan-ipv6.patch http://git.io/sFU24g
    $ patch -p2 < sslscan-ipv6.patch

You want to patch the _Makefile_:

    $ wget http://pkgs.fedoraproject.org/cgit/sslscan.git/plain/sslscan-makefile.patch
    $ patch < sslscan-makefile.patch
    $ make

How to scan IPv6:

    $ ./sslscan --no-failed [2a00:1450:4001:c02::66]:443
    $ ./sslscan -6 --no-failed google.com
    $ ./sslscan --starttls --verbose --no-failed your.mail.server:587

_2013-11-10 19:15:30_ -- One night of sleep revealed what was missing. The new
[patch][patch] has much better backward compatibility.

[sslscan]: http://sourceforge.net/projects/sslscan/
[patch]: http://git.io/sFU24g
