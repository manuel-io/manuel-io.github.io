/*
* The MIT License (MIT)
* 
* Copyright (c) 2015 Manuel
* 
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
* IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
* CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
* TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
* SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var result = 0;
var points = 0;

$(document).ready(function() {
  $('#ohm').click(function() {
    if(submit()) softreset();
  });
  $('#reset').click(reset);
  $('#solve').click(solve);
  $('#number').keypress(function(e) {
    if(e.which == 13) if(submit()) softreset();
  });

/*
  if(window.top == window.self) {
    $('#body').prepend($('<h1>Resistor Color-Code Challenge</h1>'));
    var linklist = $('<p style="border-top:2px solid #888888;padding:5px;"></p>');
    linklist.append($('<a href="/">Blog</a>'));
    linklist.append($('<span> | </span>'));
    linklist.append($('<a href="/blog/2015/06/07/graphical-resistance-test/">Article</a>'));
    linklist.append($('<span> | </span>'));
    linklist.append($('<a href="/blog/about">About</a>'));
    $('#body').append(linklist);
  } */
  reset();
});

var ctable = [
  '#000000',
  '#8b4900',
  '#ff0000',
  '#ffb726',
  '#ffff00',
  '#00d200',
  '#0000d9',
  '#d900db',
  '#a0a0a4',
  '#ffffff'
];

var ntable = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

var mtable = [
  '#000000',
  '#8b4900',
  '#ff0000',
  '#ffb726',
  '#ffff00',
  '#00d200',
  '#0000d9',
];

function generate() {
  var value = 0;
  $('#ring2').css('display', 'none');

  var color0 = Math.floor(Math.random() * (ctable.length - 1)) + 1;
  var color1 = Math.floor(Math.random() * ctable.length);
  var color2 = Math.floor(Math.random() * ctable.length);
  var multiplier = Math.floor(Math.random() * mtable.length);

  $('#ring0').css('background-color', ctable[color0]);
  $('#ring0').attr('title', ntable[color0]);
  $('#ring1').css('background-color', ctable[color1]); 
  $('#ring1').attr('title', ntable[color1]);
  $('#multiplier').css('background-color', mtable[multiplier]);
  $('#multiplier').attr('title', ntable[multiplier]);

  if(Math.floor(Math.random() * 10) < 3) {
    $('#ring2').css('background-color', ctable[color2]);
    $('#ring2').css('display', 'block');
    $('#ring2').attr('title', ntable[color2]);
    value = (color0 * 100 + color1 * 10 + color2) * Math.pow(10, multiplier);
  }
  else {
    value = (color0 * 10 + color1) * Math.pow(10, multiplier);
  }

  return value;
}

function solve() {
  $('#number').val(result);
  if(points > 0) $('#points').html(points -= 1);
}

function submit() {
  var value = $('#number').val();

  if(parseInt(value) == result) {
    alert('Correct');
    $('#points').html(points += 1);
    return true;
  }
  else {
    alert('Wrong');
    if(points > 0) $('#points').html(points -= 1);
    return false;
  }
}

function softreset() {
  result = generate();
  $('#number').val('');
}

function reset() {
  softreset();
  $('#points').html(points = 0);
}
