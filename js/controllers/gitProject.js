var project;

$.ajax({
  url:'https://api.github.com/users/bhavyaab/repos',
  type: 'GET',
  header: {'Authorization': 'token '+ 'd84b247301c2e6b81481aefd520afd60ff5d0c6f'},
  success: function(data, message, xhr){
    project = data.filter(function(item){return item.stargazers_count > 0;}).slice();
    git();
  }
});
var x = project.filter(function(item){return item.watchers_count > 0;});
