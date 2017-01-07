var fs = require('fs');
var path = require('path');
var recursive = require('recursive-readdir-sync');
var git = require('simple-git');
var posts_data = __dirname + '/../data/posts_dates.json';

createFile(posts_data);

var listOfPosts = recursive(__dirname + '/../posts/');

var cleanedListOfPosts = listOfPosts.filter(function (f) {
  return path.extname(path.basename(f)) === '.md'
});

cleanedListOfPosts.forEach(function (file) {
  git().log(
      ['--diff-filter=A', '--follow', '--format=%aI', '--', file ],
      function(err, data) {
        writeToJsonFile(path.basename(file), data.latest.hash, posts_data);
      });
});

function createFile(filename) {
  fs.open(filename,'r',function(err, fd){
    if (err) {
      fs.writeFileSync(filename, '{}');
      console.log("The file was saved!");
    } else {
      console.log("The file exists!");
    }
  });
}

function writeToJsonFile(key, value, fileName) {
  var file = require(fileName);
  file[key] = value;
  fs.writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
    if (err) return console.log(err);
    console.log('writing ' + key + ' : ' + value + ' to ' + fileName);
  });
}
