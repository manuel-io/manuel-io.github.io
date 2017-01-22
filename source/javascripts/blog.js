(function() {
  if(window.top == window.self) {
    $(document.body).prepend($('<h1 style="margin-bottom:5px;padding:10px;">' + document.title + '</h1>'));
    var linklist = $('<p style="margin-top:20px;border-top:2px solid #888888;padding:10px;"></p>');
    linklist.append($('<a style="color: #000088; text-decoration:none;" href="/">Blog</a>'));
    linklist.append($('<span> | </span>'));
    linklist.append($('<a style="color: #000088; text-decoration:none;" href="' + $('link[rel=alternate]').attr('href') + '">Article</a>'));
    linklist.append($('<span> | </span>'));
    linklist.append($('<a style="color: #000088; text-decoration:none;" href="/blog/about">About</a>'));
    $(document.body).append(linklist);
  }
}).call(this);
