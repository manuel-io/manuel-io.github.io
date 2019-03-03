(function() {
  $(document).ready(function() {
    $('.embedded-container').each(function () {
      img = $('<img>')
      img.attr('src', '/data/images/black.png');
      $(this).append(img);

      $(this).click(function () {
        iframe = $('<iframe>')
        iframe.attr('src', 'https://www.youtube-nocookie.com/embed/' + $(this).attr('id'))
        $(this).append(iframe);
      });
    });

    $('h3').each(function (i, tag) {
      var jmp = $(tag).text().toLowerCase().replace(/[^a-z]/g , '');
      $(tag).attr('id', jmp);
    });
  });
}).call(this);
