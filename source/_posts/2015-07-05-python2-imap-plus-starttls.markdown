---
layout: post
title: "Python2 (IMAP+STARTTLS)"
date: 2015-07-05 12:41:35 +0200
comments: true
categories:
  - 2015
  - python
  - programming
  - listing
---
    #!/usr/bin/python2
    import imaplib
    import ssl
    
    Commands = {
      'STARTTLS': ('NONAUTH')
    }
    
    imaplib.Commands.update(Commands)
    
    class IMAP4_STARTTLS(imaplib.IMAP4, object):
      def __init__(self, host, port):
        super(IMAP4_STARTTLS, self).__init__(host, port)
        self.__starttls__()
        self.__capability__()
    
      def __starttls__(self, keyfile = None, certfile = None):
        typ, data = self._simple_command('STARTTLS')
        if typ != 'OK':
          raise self.error('no STARTTLS')
        self.sock = ssl.wrap_socket(self.sock,
          keyfile,
          certfile,
          ssl_version=ssl.PROTOCOL_TLSv1)
        self.file.close()
        self.file = self.sock.makefile('rb')
    
      def __capability__(self):
        typ, dat = super(IMAP4_STARTTLS, self).capability()
        if dat == [None]:
          raise self.error('no CAPABILITY response from server')
        self.capabilities = tuple(dat[-1].upper().split())
    
    # imap = IMAP4_STARTTLS(host, port)
    # print(imap.capabilities)
    # imap.login(user, password)
    # imap.logout()

* I've used this code with [Mailpile][mailpile].

**Update:** I've noticed the capabilities string is not automatically
updated. See https://gist.github.com/manuel-io/438c20d2f040ee797388 if
you're interested in further changes or refer to the official source.

[mailpile]: https://github.com/mailpile/Mailpile/issues/868#issuecomment-118563666
