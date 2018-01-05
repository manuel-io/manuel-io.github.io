---
layout: post
title: "Reactions to Meltdown and Spectre"
date: 2018-01-05 14:36:22 +0100
comments: true
categories:
  - 2018
  - security
  - administration
  - links
  - debian
---
{% img /data/images/meltdown-and-spectre.jpg Meltdown and Spectre %}

A recent [illustration][illustration]* by [CommitStrip][commit] got
the point. Some [researchers][research] discovered a huge leak in the
hardware which is accompaning our daily life. Many products are
effected. This is a collection of some reactions and voices until now:

### ** 15.11.2017 **
* [Jonathan Corbet](https://lwn.net/Articles/738975/): KAISER: hiding the kernel from user space

## ** 26.12.2017 **
* [Intel](https://www.intel.com/content/www/us/en/support/articles/000025619/software.html): Intel Management Engine Critical Firmware Update (Intel-SA-00086) 

### ** 03.01.2018 **
* [Project Zero](https://googleprojectzero.blogspot.de/2018/01/reading-privileged-memory-with-side.html): Reading privileged memory with a side-channel
* [Mozilla Security Blog](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/): Mitigations landing for new class of timing attack
* [Linus Torvalds](https://lkml.org/lkml/2018/1/3/797): Comment

### ** 04.01.2018 **
* [TU Graz](https://www.tugraz.at/en/tu-graz/services/news-stories/tu-graz-news/singleview/article/schwere-sicherheitsluecke-tu-graz-forscher-zentral-beteiligt/): Researchers discover serious security vulnerabilities
* [Alan Cox](https://plus.google.com/+AlanCoxLinux/posts/Z6inLSq4iqH): Advice
* [LLVM](https://reviews.llvm.org/D41723): Introduce the "retpoline" x86 mitigation technique
* [Steinar H. Gunderson](https://blog.sesse.net/blog/tech/2018-01-04-23-46_loose_threads_about_spectre_mitigat): Loose threads about Spectre mitigation

### ** 05.01.2018 **
* [Anders Fogh](https://cyber.wtf/2018/01/05/behind-the-scene-of-a-bug-collision/): Behind the scenes of a bug collision
* [Raspberry Pi](https://www.raspberrypi.org/blog/why-raspberry-pi-isnt-vulnerable-to-spectre-or-meltdown/): Why Raspberry Pi isn't vulnerable to Spectre or Meltdown
* [Apple](https://support.apple.com/en-us/HT208394): About speculative execution vulnerabilities in ARM-based and Intel CPUs
* [Amazon](https://aws.amazon.com/de/security/security-bulletins/AWS-2018-013/): Processor Speculative Execution Research Disclosure


### ** 06.01.2018 **
* [Greg Kroah-Hartman](http://kroah.com/log/blog/2018/01/06/meltdown-status/): Meltdown and Spectre Linux Kernel Status

In addition my laptop has reached the [end of life][lenovoeol] and is
no longer supported by the manufacturer and it looks like there are
many systems they have the same problem. Many people don't even know
they have a problem. We all can only apply software patches if they're
reaching us. Holders of most smartphones just bought a buggy device.
The dream of multi-user-tasking devices got disruptions. Actually, the
whole idea of memory protection based on the hardware protection mechanism
which separates the kernel space from the userspace.

*If you're still confused by the events which are shaking the IT world so
much and do not understand why action is required maybe the
[XKCD][xkcd] can help.*

*) Published with [friendly permissions][cm] on a non-commercial blog.

{% quotation Eben Upton %}
Meltdown and Spectre are examples of what happens when we reason about
security in the context of that abstraction, and then encounter minor
discrepancies between the abstraction and reality.
{% endquotation %}

[illustration]: http://www.commitstrip.com/en/2018/01/04/reactions-to-meltdown-and-spectre-exploits/
[commit]: http://www.commitstrip.com/
[cm]: http://www.commitstrip.com/en/about/
[lenovoeol]: https://download.lenovo.com/eol/
[research]: https://meltdownattack.com/
[xkcd]: https://xkcd.com/1938/
