---
layout: post
title: "Responsive Webdesign"
date: 2015-05-04 21:44
comments: true
categories:
  - 2015
  - equation
  - theme
  - mathematics
  - listing
---
Maybe you have noticed there are a few changes on this site. I'm
working on a minimalistic [octopress-theme][cats] which is basically a
[mock-up][theme]. Main goal is to design a responsive website which
works on both mobile and desktop devices. This also includes math
equations:

### Cauchy's integral theorem
{% equation %}
  f(\zeta) = \frac{1}{2\pi i}\oint_\gamma \frac{f(z)}{z-\zeta}\, dz
{% endequation %}

### Gauss equation
{% equation %}
  \int_\Omega\bigtriangledown f(x)\,dx = \int_{\partial\Omega} f(x)\cdot v(x)\,dS(x)
{% endequation %}

### Normal distribution
{% equation %}
  \Phi(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{\frac{(x-\mu)^2}{2\sigma^2}}
{% endequation %}

###  Schrödinger equation
{% equation %}
  i\hbar\frac{\partial}{\partial t}\Psi(r, t) =
\left(\frac{-\hbar^2}{2m}\bigtriangledown^2 + V(r,t)\right)\Psi(r,t)
{% endequation %}

Please be patient if you don't like the new colors. Work is still in
progress.

[cats]: https://github.com/manuel-io/manuel-io.github.io/tree/source/.themes/cats
[theme]: https://github.com/rastersize/BlogTheme
