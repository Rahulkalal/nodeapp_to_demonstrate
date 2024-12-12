const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Only start the server if the file is executed directly
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server listening at http://localhost:3000');
  });
}

module.exports = app; // Export the app for testing

