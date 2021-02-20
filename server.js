const http = require('http');
const port = process.env.PORT || 3000;
const fs = require('fs');

const server = http.createServer((req,res) => {
  res.setHeader('Content-Type', 'text/html')
fs.readFile('./index.html', (error,data) => {
  if (error) {
    console.log('there was an error')

  } else {
    res.write(data)


  }
});
res.setHeader('Content-Type', 'text/css')
fs.readFile("./chessboardjs-1.0.0/css/chessboard-1.0.0.min.css", (error,data) => {
  if (error) {
    console.log('there was an error')

  } else {
    res.write(data)


  }
});
res.setHeader('Content-Type', 'text/css')
fs.readFile("./template.css", (error,data) => {
  if (error) {
    console.log('there was an error')

  } else {
    res.write(data)

  }
});


res.end()

})


server.listen(port, () => {
  console.log('listening to requests!');
})
