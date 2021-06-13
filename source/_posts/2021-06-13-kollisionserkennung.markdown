---
layout: post
title: "Kollisionserkennung"
date: 2021-06-13 07:25:45 +0200
comments: true
categories: 
  - 2021
  - haskell
  - listing
---

Kleine Fingerübung im Sachen Kollisionserkennung. Es gibt im Internet auch noch
andere [Beispiele][casting].

<div style="display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;width:100%;">
  <div style="flex-shrink:0;flex-grow:0;width:233px;"><img style="width:100%;" src="/data/images/rectangle.gif" title="Rectangle"></div>
  <div style="flex-shrink:0;flex-grow:0;width:233px;"><img style="width:100%;" src="/data/images/circle.gif" title="Circle"></div>
  <div style="flex-shrink:0;flex-grow:0;width:233px;"><img style="width:100%;" src="/data/images/polygon.gif" title="Polygon"></div>
</div>

...

    data Point = Point Float Float deriving (Show, Eq)
    data Shape = Circle Point Float
               | Rectangle Point Point
               | Polygon [Point] deriving (Show, Eq)

...

    intersects :: Point -> Shape -> Bool
    intersects (Point u v) (Rectangle (Point x1 y1) (Point x2 y2))
      | ((u >= x1) && (u <= x2) && (v >= y1) && (v <= y2)) = True
      | otherwise = False
    intersects (Point u v) (Circle (Point x y) radius)
      | ((u - x) ^ 2 + (v - y) ^ 2) <= radius ^ 2 = True
      | otherwise = False
    -- Ray casting algorithm
    intersects (Point u v) (Polygon polygon)
      | (Point u v) `intersects` bounds = (odd . fst) (raycasting 0 (offset bounds) (Point u v) (Polygon polygon))
      | otherwise = False
      where
        offset (Rectangle (Point x1 _) (Point _ _)) = x1
        bounds = boundary (Polygon polygon)
        raycasting :: Int -> Float -> Point -> Shape -> (Int, Shape)
        raycasting acc o (Point u v) (Polygon (point:[])) = (acc, (Polygon (point:[])))
        raycasting acc o (Point u v) (Polygon ((Point x1 y1):(Point x2 y2):polygon))
          | (t >= 0) && (t <= 1) && (s >= 0) && (s <= 1) = raycasting (acc + 1) o (Point u v) (Polygon ((Point x2 y2):polygon))
          | otherwise = raycasting (acc + 0) o (Point u v) (Polygon ((Point x2 y2):polygon))
          where
            t = (v - y1) / (y2 - y1)
            s = ((x1 - o) / (u - o)) + (t / (u - o)) * (x2 - x1)

[Gist][gist]

[casting]: https://rosettacode.org/wiki/Ray-casting_algorithm#Haskell
[gist]: https://git.io/JZ59q
