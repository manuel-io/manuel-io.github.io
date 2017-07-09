---
layout: post
title: "Creating an APT Repository"
date: 2017-07-09 13:35:27 +0200
comments: true
categories:
  - 2017
  - debian
  - bash
  - administration
---
{% figure left /data/images/stretch.png Debian 9.0 Stretch %}

While celebrating the release of [Debian Stretch][stretch] I decided
to write a tutorial on how to create a local Debian Repository. This
follows [a huge discussion][discussion] about how to improve Debian in
the future.

My motivation is to build a Debian distribution based on my
personalized settings which makes a re-installation much simpler and
faster. For obvious reasons [this project][project] includes a local
APT repository and makes a network connection unnecessary.

Fortunately the Debian team has build some tools (`dpkg-scanpackages`,
`apt-ftparchive`) to automate this process. Make sure you have the
required tools installed (`sudo apt-get install dpkg-dev apt-utils
gpg`). You will need a GPG key for signing. If you don't have an
existing GPG key consider reading [this guide][gpg].

### 1) Basic

    mkdir -p /repository/amd64
    cd /repository/amd64

Now download deb-files into this directory and execute some commands to
build the repository:

    dpkg-scanpackages -a amd64 . > Packages
    apt-ftparchive release . > Release
    gpg -a --yes --clearsign --output InRelease --local-user $(id -un) --detach-sign Release

I'll give further explanations in the section about [APT](#apt). So
read on.

### 2) Advanced

A more advanced example could be used together with `debootstrap`.
First build the required directory structure and create a file for
further configuration ` release.conf `:

    mkdir -p /repository/amd64/pool/main
    mkdir -p /repository/amd64/dists/stable/main/binary-amd64
    
    mkdir -p /repository/amd64/pool/contrib
    mkdir -p /repository/amd64/dists/stable/contrib/binary-amd64
    
    mkdir -p /repository/amd64/pool/non-free
    mkdir -p /repository/amd64/dists/stable/non-free/binary-amd64
    
    cd /repository/amd64
    
    cat > release.conf <<BLOCK
    APT::FTPArchive::Release::Codename "stable";
    APT::FTPArchive::Release::Components "main contrib non-free";
    APT::FTPArchive::Release::Label "Local APT Repository";
    APT::FTPArchive::Release::Architectures "amd64";
    BLOCK
 
Now download* deb-files into `pool/main`, `pool/contrib` and
`pool/non-free` directories. Next use the `apt-ftparchive` command to
build Packages and Contents files:

    apt-ftparchive --arch amd64 packages pool/main > dists/stable/main/binary-amd64/Packages
    gzip -k dists/stable/main/binary-amd64/Packages

    apt-ftparchive --arch amd64 packages pool/contrib > dists/stable/contrib/binary-amd64/Packages
    gzip -k dists/stable/contrib/binary-amd64/Packages

    apt-ftparchive --arch amd64 packages pool/non-free > dists/stable/non-free/binary-amd64/Packages
    gzip -k dists/stable/non-free/binary-amd64/Packages

    apt-ftparchive contents pool/main > dists/stable/main/Contents-amd64
    gzip -k dists/stable/main/Contents-amd64

    apt-ftparchive contents pool/contrib > dists/stable/contrib/Contents-amd64
    gzip -k dists/stable/contrib/Contents-amd64 
    
    apt-ftparchive contents pool/non-free > dists/stable/non-free/Contents-amd64
    gzip -k dists/stable/non-free/Contents-amd64

    apt-ftparchive release dists/stable/main/binary-amd64 > dists/stable/main/binary-amd64/Release
    apt-ftparchive release dists/stable/contrib/binary-amd64 > dists/stable/contrib/binary-amd64/Release
    apt-ftparchive release dists/stable/non-free/binary-amd64 > dists/stable/non-free/binary-amd64/Release
    apt-ftparchive release -c release.conf dists/stable > dists/stable/Release

    # Replace $(id -un) with your desired gpg signing key    

    gpg -a --yes --output dists/stable/Release.gpg --local-user $(id -un) --detach-sign dists/stable/Release
    gpg -a --yes --clearsign --output dists/stable/InRelease --local-user $(id -un) --detach-sign dists/stable/Release

### APT

Give all files appropriate permissions:

    find /repository -type f -exec chmod a+r {} \;
    find /repository -type d -exec chmod a+rx {} \;

Make your local repository is available to the apt tool:

    # 1) If you have a basic repository
    echo "deb file:/repository/amd64 ./" | sudo tee /etc/apt/sources.list.d/local.list > /dev/null

    # 2) In case you chose the advanced type
    echo "deb file:/repository/amd64 stable main contrib non-free" | sudo tee /etc/apt/sources.list.d/local.list > /dev/null

And also your public signing key should be copied to
`/etc/apt/trusted.gpg.d`:

    gpg --export $(id -un) | sudo tee /etc/apt/trusted.gpg.d/local.gpg > /dev/null

Then modify the file access modes and update your sources:

    sudo chmod a+r /etc/apt/sources.list.d/local.list
    sudo chmod a+r /etc/apt/trusted.gpg.d/local.gpg
    sudo apt-get update

*) My project includes a [script][script] which can handle the
download process of the deb packages.

[script]: https://github.com/manuel-io/debian-install/blob/master/config/includes.chroot/packages/amd64/build.sh
[discussion]: https://news.ycombinator.com/item?id=14579080
[project]: https://github.com/manuel-io/debian-install
[gpg]: https://help.github.com/articles/generating-a-new-gpg-key/
[stretch]: https://bits.debian.org/2017/06/stretch-released.html
