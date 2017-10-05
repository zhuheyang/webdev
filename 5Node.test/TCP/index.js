/* 模块依赖 module_dependencies */

var net = require('net');

  /* 追踪连接数 chase the connect count */
  /* users是状态变量来的 */
  var count = 0
  , users = {};


/* 创建服务器 create server */
/* createServer 回调函数在每次有新连接建立时都会执行
它会接收一个对象--流(stream), 同时它传递的是net.stream,
该对象通常可读又可写. */
var server = net.createServer(function (conn) {
  var nickname;
  conn.setEncoding('utf8');  

  conn.write(
    '\n > welcome to \033[92mnode-chat\033[39m!'
  + '\n > ' + count + ' other people are connected at this time.' 
  + '\n > please write your name and press enter: '
  );
  count++;

  function broadcast (msg, exceptMyself) {
    for (var i in users) {
      if(!exceptMyself || i != nickname) {
        users[i].write(msg);
      }
    }
  }

  conn.on('data', function (data) {
    data = data.replace('\r\n', '');
    
    // console.log(data);
    // Eg:接收到的第一份数据应当是用户输入的昵称!

    if (!nickname) {
      if (users[data]) {
        conn.write('\033[93m > nickname already in use. try again: \033[39m');
        return;
      } else {
        nickname = data;
        users[nickname] = conn;
        
        broadcast('\033[90m > ' + nickname + ' joined the room\033[39m\n');
      }
    } else {
      //否则视为聊天信息
      //这里将exceptMyself设置为true, 则相对应!exceptMyself为false
      //则会进行if(i != nickname)的判断条件,不会在自己的服务器中出现自己的聊天信息!
      broadcast('\033[96m > ' + nickname + ':\033[39m ' + data + '\n', true);
      }
  });
  
  conn.on('close', function () {
    count--;
    delete users[nickname];
    broadcast('\033[90m > ' + nickname + 'left the room\033[39m\n');
  });
});

/* 监听 watch */

server.listen(3000, function() {
  console.log('\033[96m    server listening on *:3000\033[39m');
});

