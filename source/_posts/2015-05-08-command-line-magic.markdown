---
layout: post
title: "Command Line Magic"
date: 2015-05-11 14:09
comments: true
categories:
  - 2015
  - administration
  - unix
  - bash
  - debian
---
### Progress of dd:
Start by running a _dd_ process. Suspend the process and run it in
the background:


    dd if=/dev/urandom of=random01.img bs=4096
    # (Ctrl-z)
    bg

Next send a signal to the newest _dd_ process and watch the output.
At last bring the _dd_ process back to the foreground and kill it:

    pkill -USR1 -nx dd
    fg
    # (Ctrl-c)

### Finding unlinked files (still in use) with lsof:

    lsof +L1

### Finding deleted shared objects (still in use):

    sudo grep --color=auto -Hin 'deleted' /proc/*/maps

The debian tool `checkrestart` might have the same functionality.

### Monitoring with less:
Another tool worth reading it's manpage is _less_. For instance:

     less +F /var/log/kern.log

It is similar to `tail -f /var/log/kern.log` but allows you to leave
the monitoring mode for editing or a terminal. At the end you can go
back to monitoring without a terminal multiplexer.
