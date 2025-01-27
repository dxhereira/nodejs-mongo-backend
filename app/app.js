const grades = require("./routes/grades")
const devExpress = require("./routes/devExpress")
const express = require('express');
const http = require('http');
const path = require('path')

const app = express();

app.use(require('cors')());
app.use(express.json());
app.use("/api/grades", grades);
app.use("/grades", devExpress);

app.get('/frontend', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

const hostname = '0.0.0.0';

const httpServer = http.createServer(app);
httpServer.listen(process.env.HTTPPORT || 8080, hostname, function() {
  const port = httpServer.address().port;
  console.log('HTTP server running on port', port);
});
