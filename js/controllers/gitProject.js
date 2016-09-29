var project;

$.ajax({
  url:'https://api.github.com/users/bhavyaab/repos',
  type: 'GET',
  header: {'Authorization': 'token '+ gitToken},
  success: function(data, message, xhr){
    project = data.filter(function(item){return item.watchers_count > 0;}).slice();
    git();
  }
});
