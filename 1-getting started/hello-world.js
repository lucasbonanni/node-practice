const http = require('http');

var server = http.createServer((res, req)=> {
    res.end('Hello world\n')
});

server.listen(4242, () => {
    console.log('Server is running...');
    console.log('Hello world!!');
  });