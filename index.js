const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  fs.appendFileSync('guest.txt', JSON.stringify(req.query) + '\n');
  res.redirect('http://localhost:8080/index.html');
});

app.listen(3000, () => console.log(`Example app listening on port ${3000}!`));
