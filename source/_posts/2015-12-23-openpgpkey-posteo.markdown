---
layout: post
title: "OPENPGPKEY & POSTEO"
date: 2015-12-23 21:30:53 +0100
comments: true
categories:
  - 2015
  - dns
  - pgp
  - openpgpkey
  - dnssec
---
First generate a public-private key-pair with gpg as usual. Next
export the public key:

    gpg2 -a --export --export-options export-minimal [KEY-ID] > pub.asc

* [Does my S/MIME or OpenPGP key need to fulfil certain criteria?][criteria]
* [How do I publish the public PGP key for my Posteo email address in the Posteo key directory?][upload]

Make sure you have a proper version of the `dig` tool (use `DiG
9.10.3-P2`). And your firewall rules allow global dns requests:

    dig +short +vc OPENPGPKEY \
      141fa5a54515c9fbb2ff131b23fb5b51339365324ece6efe1cabae37._openpgpkey.posteo.org \
      @8.8.8.8 | sed 's/ //g' | base64 -d | gpg2

However, this request is not fully verified.

It is a good idea to publish your public key at a second place (e.g.
Website, [Key Server][keyserver]) in case your email provider publishes any rubbish.

Sources: [sys4.de][sys4], [ietf.org][ietf], [heise.de][heise]

[heise]: http://www.heise.de/netze/artikel/DNSSEC-und-DANE-Hilfestellung-zur-Mail-Verschluesselung-2619026.html
[keyserver]: https://pgp.mit.edu/
[ietf]: https://tools.ietf.org/html/draft-wouters-dane-openpgp
[sys4]: https://sys4.de/de/blog/2015/03/08/openpgpkey-mit-unix-bordmitteln/
[criteria]: https://posteo.de/en/help/policies-for-public-keys
[upload]: https://posteo.de/en/help/publishing-public-pgp-key-for-posteo-email-address
