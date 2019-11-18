var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.uploadDir = "D:/tmp";            // err Error: EXDEV: cross-device link not permitted : 임시 폴더를 변경 하기 같은 파티션으로
    
    form.parse(req, function (err, fields, files) {
          var oldpath = files.filetoupload.path;
          var newpath = 'D:/USER_PATH/uploadFiles/' + files.filetoupload.name;
          
          fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
          });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});    // 한글파일 이름 제대로 출력되게 charset=utf-8 추가
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);