const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 CI/CD Pipeline Working with Github Actions 🚀');
});

app.listen(3001, () => console.log('Server running'));