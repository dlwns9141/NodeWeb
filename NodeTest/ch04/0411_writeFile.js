var fs = require('fs');

fs.writeFile('NodeTest/ch04/output.txt', 'hello world!', function(err)
{
	if (err)
	{
		console.log('Error : ' + err);
	}
	console.log('output.txt 파일에 데이터 쓰기 완료.');
});
