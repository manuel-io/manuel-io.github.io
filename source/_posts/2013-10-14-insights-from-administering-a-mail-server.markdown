---
layout: post
title: "Insights from administering a mail server"
date: 2013-10-14 11:58
comments: true
categories:
  - 2013
  - mail
  - administration
---
* [Monitoring][monitoring] is one of the most important things.

* To ensure what your configuration effects consider to write tests. For
  instance make use of [XCLIENT][xclient]
  and use tools like [Babushka][babushka]. This also helps your successors.

* [Disable root login][openssh]. And also disable any other user who receives
  emails.  Actually disable password login at all. Most imported don't enable
  services (like ftp) which reveal passwords.

* Use tools like [fail2ban][fail2ban] to keep your log files clean.

* Make sure you are aware of [backscatter][backscatter] mail and how to
configure a mail server to reject undeliverable messages as soon as possible.

* If you need authentication to send messages don't use [POP before SMTP][pop]
  or any other crunch. Use [SASL][sasl] on a dedicated [port][submission]
  (587). Your costumers will appreciate that.

* These days using policy services is inescapable. In particular
  [postfwd][postfwd] or postgrey or ...

* In case your web application needs a decent [MTA][mta]. Chose a slim one.

[monitoring]: https://en.wikipedia.org/wiki/Network_monitoring
[xclient]: http://www.postfix.org/XCLIENT_README.html
[babushka]: http://babushka.me/
[openssh]: http://www.openssh.org/cgi-bin/man.cgi?query=sshd_config
[fail2ban]: http://www.fail2ban.org/wiki/index.php/Main_Page
[backscatter]: https://en.wikipedia.org/wiki/Backscatter_(email)
[pop]: https://en.wikipedia.org/wiki/POP_before_SMTP
[sasl]: https://en.wikipedia.org/wiki/Simple_Authentication_and_Security_Layer
[submission]: https://en.wikipedia.org/wiki/Mail_submission_agent
[postfwd]: http://postfwd.org/
[mta]: https://en.wikipedia.org/wiki/Message_transfer_agent
