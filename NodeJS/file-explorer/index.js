var fs = require('fs')
    , stdin = process.stdin
    , stdout = process.stdout
    , cwd = process.cwd();

//first part, list the file folder's files!
fs.readdir(cwd, function (err, files){
    var stats = [];//为避免再次执行fs.stat,应在file函数中将Stat对象保存下来;
    console.log(' '); //为了输入更友好,输出空行

    //如果files数组为空,则输出提示
    if(!files.length){
        return console.log('    \033[31m No files to show!\033[39m\n');
        //用return直接就结束下面语句的执行了
    }

    console.log('    Select which file or directory you want to see\n');
    
    //定义了一个数组中每个元素i都会执行的函数
    //串行执行--一种异步流控制模式
    function file(i) {
        var filename = files[i];
         
        //fs.stat给出文件或目录的元数据
        fs.stat(__dirname + '/' + filename, function(err, stat) {

            stats[i] = stat;//为避免再次执行fs.stat,应在file函数中将Stat对象保存下来;

            if(stat.isDirectory()){
                console.log('    ' + i + '    \033[36m' + filename + '/\033[39m');
            } else{
                console.log('    ' + i + '    \033[90m' + filename + '/\033[39m');
            }

            if(++i == files.length) {
                read();
            } else{
                file(i); //如果还有未处理的文件,则递归调用该函数进行处理,直至列出所有文件.
            }
        });
    }
    
    //read user's input when files are shown
    function read() {
        console.log('');

        stdout.write('    \033[33m Enter your choice: \033[39m');
        stdin.resume();
        stdin.setEncoding('utf8');

        stdin.on('data', option); //监听data事件
    }

    // called with the option supplied by the user
    function option(data) {
        //Number('1')会将utf8编码的字符串data变成Number类型以方便检查
        //Number(data)
        var filename = files[Number(data)];
        if(!filename) {
            stdout.write('    \033[31m Enter your choice: \033[39m');
        } else{
            stdin.pause();

            if(stats[Number(data)].isDirectory()) {
                fs.readdir(__dirname + '/' + filename, function(err, files) {
                    console.log(' ');
                    console.log('    (' + files.length + ' files)');
                    files.forEach(function(file){
                        console.log('    -   ' + file);
                    });
                }); //反正自己看到有括号就记得加分号就好!养成好的习惯,记住编码原则
                //逐渐逐渐就会形成条件反射的了
            } else{
                fs.readFile(__dirname + '/' + filename, 'utf8', function(err, data){
                    console.log(' ');
                    //这里使用了正则表达式添加一些辅助缩进后将文件内容输出
                    console.log('\033[90m' + data.replace(/(.*)/g, '    $1') + '\033[39m');
                });
            }
        }
    }

    file (0); //从头开始执行该函数,由0开始
});

