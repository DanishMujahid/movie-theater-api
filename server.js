const express = require('express');
const app = express();
const router = require('./routes/router');
const seed = require('./seed');

seed();

app.use('/', router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
