---
layout: post
title: "Orthogonale Operatoren"
date: 2012-11-14 19:37
comments: true
categories:
  - 2012
  - physics
  - mathematics
  - listing
---
<p>Hier geht es um reelle und endlichdimensionale Skalarprodukträume.
Ein Beispiel—das sich aber leicht erweitern lässt—gibt es für den <em>R<sup>2</sup></em>.
Eine wichtige Eigenschaft ist:</p>

<pre>
A<sup>*</sup> = A<sup>-1</sup> und  A<sup>*</sup>A = I
und für reelle Operatoren: A<sup>T</sup> = A<sup>-1</sup> und A<sup>T</sup>A = I
</pre>

<p>Gebraucht werden ein linearer orthogonaler oder unitärer Operator <em>A</em>
und zwei Vektoren <em>x, y</em>:</p>

<pre>
A: E &#x2192; F und x,y &#x2208; R<sup>2</sup>
</pre>

<p>Orthogonale Operatoren sind isometrisch, also längenerhaltend:</p>

<pre>
||Ax||<sup>2</sup> = (Ax, Ax) = (A<sup>*</sup>Ax, x) = (x, x) = ||x||<sup>2</sup>
</pre>

<p>Außerdem gilt die Winkeltreue:</p>

<pre>
(Ax, Ay) = (A(x<sub>1</sub>e<sub>x</sub> + x<sub>2</sub>e<sub>y</sub>), A(y<sub>1</sub>e<sub>x</sub> + y<sub>2</sub>e<sub>y</sub>)) = (x<sub>1</sub>Ae<sub>x</sub> + x<sub>2</sub>Ae<sub>y</sub>, y<sub>1</sub>Ae<sub>x</sub> + y<sub>2</sub>Ae<sub>y</sub>) =
         = x<sub>1</sub>y<sub>1</sub>(Ae<sub>x</sub>, Ae<sub>x</sub>) + x<sub>2</sub>y<sub>2</sub>(Ae<sub>y</sub>, Ae<sub>y</sub>) = x<sub>1</sub>y<sub>1</sub>(A<sup>*</sup>Ae<sub>x</sub>, e<sub>x</sub>) + x<sub>2</sub>y<sub>2</sub>(A<sup>*</sup>Ae<sub>y</sub>, e<sub>y</sub>) = 
         = x<sub>1</sub>y<sub>1</sub>(e<sub>x</sub>, e<sub>x</sub>) + x<sub>2</sub>y<sub>2</sub>(e<sub>y</sub>, e<sub>y</sub>) = x<sub>1</sub>y<sub>1</sub> + x<sub>2</sub>y<sub>2</sub> = (x, y)
</pre>

<p>Ein Anwendungsbeispiel ist z.B. die
<a href='https://de.wikipedia.org/wiki/Lorentz-Transformation'>Lorentz-Transformation</a>
mit der Zeit und Raum ineinander umgewandelt werden können.</p>
