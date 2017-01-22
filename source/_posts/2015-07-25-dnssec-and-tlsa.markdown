---
layout: post
title: "DNSSEC &amp; TLSA (Lubuntu 14.04 LTS)"
date: 2015-07-25 16:50:23 +0200
comments: true
categories: 
  - 2015
  - dnssec
  - dane
  - tlsa
  - unbound
  - dns
---
{% img right /data/images/dnssec.png DNSSEC %}

First step is to disable `dnsmasq` which is an old version (2.68) and
doesn't support DNSSEC well. Later versions do. In
`/etc/NetworkManager/NetworkManager.conf` comment  `# dns=dnsmasq` and
restart the NetworkManager `sudo initctl restart network-manager`.

{% img right /data/images/dane.png DANE %}

Install unbound and configure it properly. [Unbound][unbound] is a validating,
recursive, and caching DNS server software product:

    sudo apt-get install unbound

See my [unbound.conf][unboundconf] or `man 5 unbound.conf`.
Configure NM to use your local dns-server. If you then `dig com. SOA
+dnssec` you should see the AD flag there:

    $ dig @127.0.0.1 sys4.de +dnssec | egrep 'flags: ([a-z]{2}\s)*ad.*;'
    ;; flags: qr rd ra ad; QUERY: 1, ANSWER: 2, AUTHORITY: 3, ADDITIONAL: 3

    $ ldns-dane verify posteo.de 443
    89.146.220.134 dane-validated successfully

At last see some failures:

    $ dig @127.0.0.1 sigfail.verteiltesysteme.net | grep SERVFAIL
    $ dig @127.0.0.1 servfail.sidnlabs.nl +dnssec | grep SERVFAIL

Even a simple ping request should be impossible:

    $ ping dnssec-failed.org
    ping: unknown host dnssec-failed.org

> info: validation failure <dnssec-failed.org. A IN>:
> no keys have a DS with algorithm RSASHA1 from 68.87.85.132 for key
> dnssec-failed.org. while building chain of trust

* Stats: [Use of DNSSEC Validation for Germany][dnssec]
* Browser Add-On: [DNSSEC/TLSA Validator][addon].
* Online-Tools: [DNSCheck][dnscheck], [University Duisburg-Essen][uni],
  [SIDN Labs][sidn], [VerisignLabs][verisign].
* Tutorials: [Unbound DNS][unboundtut].

[dnssec]: http://stats.labs.apnic.net/dnssec/DE
[unbound]: https://unbound.net/
[verisign]: http://dnssec-debugger.verisignlabs.com
[dnscheck]: http://dnscheck.ripe.net/
[addon]: https://www.dnssec-validator.cz/
[uni]: http://dnssec.vs.uni-due.de/
[sidn]: https://dnssectest.sidnlabs.nl/
[unboundtut]: https://calomel.org/unbound_dns.html
[unboundconf]: https://gist.github.com/manuel-io/ec0de71980aba83838d3#file-unbound-conf
