(function() {
  $(document).ready(function() {
    $('h3').each(function (i, tag) {
      var jmp = $(tag).text().toLowerCase().replace(/[^a-z]/g , '');
      $(tag).attr('id', jmp);
    });
  });
}).call(this);
