var project;
//proxy express call setup
$.when(
  $.get('/github/users/bhavyaab/repos').done(function(data){project = data.filter(function(item){return item.watchers_count > 0;}).slice();}).done(git)
);
