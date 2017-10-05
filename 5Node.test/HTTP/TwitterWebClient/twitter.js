var qs = require('querystring')
  , http = require('http');

var search = process.argv.slice(2).join(' ').trim()

if (!search.length) {
  return console.log('\n  Usage: node tweets <search term>\n');
}

console.log('\n searching for: \033[96m' + search + '\033[39m');

http.request({
  host: 'search.twitter.com',
  path: '/search.json?' + qs.stringify({ q: search })
}, function (res) {
  var body = '';
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    body += chunk;
  });

  res.on('end', function () {
    var obj = JSON.parse(body);
    obj.results.forEach(function (tweet) {
      console.log('  \033[90m' + tweet.txt + '\033[90m');
      console.log('  \033[94m' + tweet.from_user + '\033[39m');
      console.log('--');
    });
  });
}).end()

//首先检查是否提供了搜索关键字,如果没有提供会显示帮助信息
//之后会执行搜索操作
//Twitter会响应对应的JSON数据,再end事件处理器中会对该数据进行迭代,并将结果显示给用户