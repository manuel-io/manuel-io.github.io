---
layout: post
title: "Flask: Progressive Download &amp; Large Objects"
date: 2019-10-26 21:57:41 +0200
comments: true
categories:
- 2019
- flask
- python
- programming
- http
- documentation
---
Often a progressive download is described as a stream but when it comes to the technical side it is important to distinguish. And we are talking about python's flask framework so we are talking about the capabilities of HTTP too. The feature of HTTP for using progressive download is the HTTP range request. And because it is rarely documented how to enable this feature in flask. I decided to write an article about my experiences.

During the implementation it is good to have the  appropriate RFC document at hand ([RFC7233][rfc7233]).

As far as I can say you can use the build in [function][function] `send_from_directory` which supports the feature.
Let's try it in a curl session, requesting a server which supports HTTP range:

    curl -vI -r 10-20  http://localhost:5000/files/download/e8cca36cbc06f670

Asking the server for a certain Range `Range: bytes=10-20` and receiving a valid answer:

    HTTP/1.0 206 PARTIAL CONTENT
    Content-Type: image/jpeg
    Accept-Ranges: bytes
    Content-Range: bytes 10-20/2870224
    Content-Length: 11

The server supports bytes and is returning `11 bytes` of a file with `2870224 bytes` in total. This is a nice feature but how about files that do not lie in the file system. I often store files in a database. This is when you have to implement the whole procedure by yourself. But it's still possible and thanks to the [large objects][lo] feature of PostgreSQL you can fetch for a certain range of bytes from a file stored in the database.

I'm using this technique in a newer development version of the minicloud project. Check out my example on the [Github page][github].

[github]: https://github.com/manuel-io/minicloud/blob/f00d9c3136954929d193fbb74a683f8dea773d0c/files.py#L243-L289
[rfc7233]: https://tools.ietf.org/html/rfc7233
[function]: https://flask.palletsprojects.com/en/1.1.x/api/#flask.send_from_directory
[lo]: https://www.postgresql.org/docs/10/largeobjects.html
