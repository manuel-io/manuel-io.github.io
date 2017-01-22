---
layout: post
title: "Firefox Environment Variables"
date: 2016-02-06 14:15:23 +0100
comments: true
categories:
  - 2016
  - firefox
  - browser
  - variables
  - extension
---
Recently ,I've noticed that the firefox browser sync doesn't include
all configuration variables. So I'm looking for a solution. Most
important for me the parent directory of the cache. Actually, it is
common to configure unix-like systems using environment variables but
firefox ignores them. I aimed at coding an extension which could act
as an agent between the envoirnment and the app.

The result is a preview which can handle certain variables, and place
them in the firefox configuration:

    export HOSTNAME=$(uname -n)
    export USERAGENT="Mozilla/5.0 (Linux) Firefox/44.0"
    export CACHEPARENT=/home/workspace

If you have some more variables in mind, please make a pull request. I
guess proxy variables are useful too. At the end, I like to give you
some hints, how to build the firefox extension by yourself, in case
you prefer your own way.

### Build
    git clone https://github.com/manuel-io/use-env.git
    cd use-env
    sudo apt-get install nodejs nodejs-legacy npm
    npm install jpm
    jpm run -b /usr/bin/firefox
    jpm xpi
    jpm sign --api-key ${AMO_API_KEY} --api-secret ${AMO_API_SECRET}

Give it a try and download the [latest release][release].

[release]: https://github.com/manuel-io/use-env/releases/latest
[pull]: https://github.com/manuel-io/use-env
