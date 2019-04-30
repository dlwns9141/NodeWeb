var fs = require('fs');
  var data = fs.readFile('NodeTest/ch04/호밀밭의 파수꾼.txt', 'utf8', function(err, data)
{
	console.log(data);
});
console.log('파일을 읽도록 요청했습니다.');
