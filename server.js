const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve all files from the current folder
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
