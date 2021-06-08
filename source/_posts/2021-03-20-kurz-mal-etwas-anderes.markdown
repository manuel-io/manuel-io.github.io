---
layout: post
title: "Themenwechsel"
date: 2021-03-20 12:36:06 +0100
comments: true
categories:
  - 2021
  - meta
  - javascript
  - css
---
Ich habe ja schon [geschrieben][next], dass die Kitchen App auch mal erneuert
werden kann und da meine Projekte hier auch immer etwas Experimentelles haben,
was mit dem neuesten Javascript und CSS Gedöns so möglich ist, soll es auf
jeden Fall spielerischer und interaktiver werden. Dafür bastle ich schon an neuen
Elementen. Wie zum Beispiel hier:

<iframe id="iframe3242" src="/data/vkitchen/overview.html" style="width:100%;height:520px" frameborder="0">
</iframe>

<script>
  let iframe = document.getElementById('iframe3242');
  if (iframe.offsetWidth < 500) iframe.style.height = '340px';
  else iframe.style.height = '520px';
</script>

    let images =  document.querySelectorAll('img');

    let list = Array.from(images).map((image) => {
      return new Promise((resolve, reject) => {
        image.onload = (e) => resolve('okay');
        image.src = image.dataset.src;
      });
    });

    Promise.all(list).then((values) => {
      ...
    });

[next]: https://manuel-io.github.io/blog/2021/01/17/fortschritt-slash-ausblick-20-slash-21/
