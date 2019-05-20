const hello = when => {
    console.log('Hello after '+ when + ' seconds');
  };
  var time = 4;
  setTimeout(hello, time * 1000, time);
  var time = 8;
  setTimeout(hello, time * 1000, time);