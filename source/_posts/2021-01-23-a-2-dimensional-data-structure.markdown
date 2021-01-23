---
layout: post
title: "A two dimensional data structure"
date: 2021-01-23 14:38:11 +0100
comments: true
categories: 
  - 2021
  - programming
  - memory
  - x86
---

How does a 2 dimensional data structure look like in different programming
languages. Using the C-Language you have to allocate the required memory by
youself.

    #include <stdio.h>
    #include <stdlib.h>
    #include <stdint.h>

Think of a map with x and y but keep in mind that the memory of a computer is
still a one-dimensional linear thing. In addition each point of the map (x,y)
requires some memory for the payload.

    /* Payload */
    struct tile {
      uint8_t id;
      uint8_t type;
    };

    int
    main(int argc, char **argv) {

In this example we use a map with an equal size of width and height.

      struct tile *tiles = NULL;
      uint8_t width = 12, height = 12;

Thus the total line memory is `sizeof(payload) * width * height`. Next each
point can be accessed with `offset + (y * height) + x`. Where offset is the
return value of the POSIX C function `malloc`. Modern computers have a memory
management unit, which is operated and controlled by the operating system. In
this case malloc returns the start address of the granted memory area.

      tiles = (struct tile *)malloc(sizeof(struct tile) * width * height);

      if (tiles == NULL) {
        printf("Memory allocation failed\n");
        return 1;
      }

We initialize the allocated memory area with our example payload. Thanks to
pointer arithmetic we no longer have to care about the size of the payload.

      /* Initialization */
      for (uint8_t y = 0; y < height; y++) {
        for (uint8_t x = 0; x < width; x++) {
          (tiles + (y * height) + x)->id = y * height + x;
          (tiles + (y * height) + x)->type = 0;
        }
      }

      /* Print */
      for (uint8_t y = 0; y < height; y++) {
        for (uint8_t x = 0; x < width; x++) {
          printf("%d:\t(%d,%d)\t0x%lx\n", (tiles + (y * height) + x)->id, x, y, (uintptr_t)(tiles + (y * height) + x));
        }
      }

The size of a tile (example payload) should be 2 Bytes and the total reserved
memory area 12 * 12 * 2 = 288 Bytes. The offset address can't be predicted at
this point. Note: Due to unpredictable compiler optimizations, deviations may
occur. See [https://gist.github.com/manuel-io/bbc5e7b0e899a5c13672b1e3d72bb0d0](https://gist.github.com/manuel-io/bbc5e7b0e899a5c13672b1e3d72bb0d0).

      printf("\nSize of a tile: %ld bytes\n", sizeof(struct tile));
      printf("Offset address 0x%lx\n", (uintptr_t)tiles);
      printf("Reserved memory: %ld bytes\n", sizeof(struct tile) * width * height);

      free(tiles);
      return 0;
    }
