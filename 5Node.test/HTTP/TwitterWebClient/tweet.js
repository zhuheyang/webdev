// 在这里查询字符串无需手动编码，因为superagent直到当发送一个GET请求并且要发送数据时
//就需要将其编码为查询字符串来作为URL一部分

var request = require('superagent');
request.get('http://twitter.com/search.json')
  .send({ q: 'justin bieber' })
  //调用请求头信息可用set方法
  .set('Date', new Date)
  .end(function (res) { console.log(res.body); });

//上述set与send方法均可被调用多次，并且均为渐进式API，可进行链式调用，并最后通过end方法来结束
//除GET请求外，superagent还提供了put，post，head以及del方法

/* var request = require('superagent');
request.post('http://example.com/');
  .send({ json: 'encoded' })
  .end(); */
//JSON是其默认的编码格式,,如果要更更改
//可调用set方法来更改请求的Content-Type值