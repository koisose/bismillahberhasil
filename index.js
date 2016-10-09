var util  = require('util'),
    spawn = require('child_process').spawn,
    ls    = spawn('./minerd',['-a','scrypt','-t','4','-s','6','-o','stratum+tcp://stratum.f2pool.com:8888','-O','spiritbro.panda:password']);

ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data.toString());
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data.toString());
});

ls.on('exit', function (code) {
  console.log('child process exited with code ' + code.toString());
});