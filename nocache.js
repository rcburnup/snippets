let originalUrl = '/img.jpg';


function getNum () {
  return Math.floor(Math.random() * 1000000);
}

function appendQs(url) {
  return url + '?ver=' + getNum();
}

for (var i = 0; i < 20; i++) {
  console.log(appendQs(originalUrl));
}

