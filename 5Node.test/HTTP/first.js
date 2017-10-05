require('http').createServer(function (req, res) {
  console.log(req.headers);
  res.writeHead(200, { 'content-Type': 'text/html' });
  res.end('Hello world');
}).listen(3000);

/* 对比TCP服务器与HTTP服务器的实现,可发现:
它们都调用了createServer方法,并且当客户端连入时都会执行一个回调函数.
其本质区别在于回调函数中的对象类型:在net服务器中是个连接(connection)对象,
而在HTTP服务器中则为请求与响应对象(req, res) */

/*
原因有两:
1HTTP服务器是更高层的API, 提供了控制和HTTP协议相关的一些功能
2浏览器在访问站点时不会只用一个连接.
尽管我们可以通过req.connection获取TCP连接对象,但为了不让我们疑惑这到底是请求还是连接,
则为我们提供了请求和响应的抽象.
 */