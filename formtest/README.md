### 动态网页隐藏url参数传递
动态网站在各个页面中参数,且参数名称都会在url地址栏中被暴露出来.
参数的名称有可能是数据库中某个字段的名称:
1. 不安全
2. 不方便搜索引擎收录
3. url中参数含有中文而导致某些浏览器出错(Eg: FireFox中用get方式传递中文参数时会出错)

用表单来传递参数,将参数的值放在表单的input中,同时设表单为隐藏.
而表单中有两个隐藏域分别为data1,data2,要传递的是设置的value值.
(<form>标签里设置属性是不会显示出来的,但<input>会,所以将input中的属性type设为hidden即可)

### action与method在form中的应用
1. action为处理表单信息的url.(也可以是某个文件地址,例如这里即为放在同一个文件夹中的htmer.asp)
2. method则为浏览器提交表单的HTTP方法,有post与get两种.
post:表单数据包含在表单的正文中并发送到服务器;  
get: 表单数据附加到action属性url，并具有'？'作为分隔符，并将生成的URI发送到服务器。  
当表单没有副作用且只包含ASCII字符时使用此方法。  
(所以如果用中文字符会出错)  
3. name: form表单的名称,它在文档中的表单中必须是唯一的，而不仅仅是HTML 5中的空字符串。

### 想法
在index.html设置一个表单 表单中包含机器的mcode.
用户扫码后登陆该html,同时发送get请求,get请求中
form action="localhost:3000/loading" method="get"
input type="hidden" value="mcode=a1b2c3d4"
input type="hidden" value="opid=b1n2m3z2x2c3v4b5n5"
input type="hidden" value="customerclient=weixin"

设置一个隐藏表单.然后用户扫码时自动跳转.
先用最笨的方法实现,最重要是要有结果!(这也是数模教给你的!)

那么就是如何在另外一端接受该数据并存储起来的问题了.
(不一定要用数据库这么硬朗的方法吧?)简单地用一个json文件按照键值存储即可?


用户传输过来的应该只有机器mcode及其来源(client),然后处理表单信息的url,根据这两项为其分配一个opid,然后存储起来.
现在要找思路!
if mcode=``` 
then opid=```

script```
var credentials= require('./lib/credentials.js);

if(credentials.mcode && credentials.customerclient) { opid = ```;}
module.exports = opid;
script

node ./impulse.js 是建了一个服务器,如果你发送get请求过来,它会识别你请求的url
同时返回res.render 相对应的模板网页给你.

所以如果你表单提交后的url是localhost:3000/loading,node服务器这边会返回对应的页面给你的
或者你自己redirect去那个loading网站.




