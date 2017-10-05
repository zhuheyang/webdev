//首先调用request方法,生成了http.Client Request对象
var http = require('http')
  , qs = require('querystring');
  
function send (theName) {
  http.request({
    host: '127.0.0.1',
    port: 11111,
    url: '/',
    method: 'POST'
  }, function (res) {
    res.setEncoding('utf8');
    res.on('end', function () {
      console.log('\n  \033[96m    request complete!\033[39m\n');
      process.stdout.write('\n  your name: ');
    });
  }).end(qs.stringify({ name: theName}));
}

process.stdout.write('\n  your name: ');
process.stdin.resume(); 
process.stdin.setEncoding('utf-8');
process.stdin.on('data', function (name) {
  send(name.replace('\n', ''));

});


  