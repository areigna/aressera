const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));

app.get('/guests', (req, res) => {
  console.log(req.query);
  fs.appendFileSync('guest.txt', JSON.stringify(req.query) + '\n');
  res.redirect('success.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
