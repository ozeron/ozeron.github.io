window.QUIZES = {
  'default': "<div data-fsid='e.589f8953090c6f010096c1bc' data-width='100%' data-height='auto'></div>",
  'vegan': '<div data-fsid="e.589f8953090c6f010096c0f9" data-width="100%" data-height="auto"></div>'
};

$('#quiz').ready(function(){
  var root = $('#quiz');
  var script = document.createElement('script');
  var query = Url.parseQuery();
  var quiz = QUIZES[query.quiz] || QUIZES['default'];
  var div = $.parseHTML(quiz);

  $(script).attr('src', 'https://4screens.net/4screens-service-loader.js');
  $(script).prop('async');
  root.append(div);
  root.append(script);
});
