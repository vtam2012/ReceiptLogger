const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Serving starting on ${PORT}`);
  });
  
  function gracefulShutdown() {
    console.log("Closing http server.");
    server.close();
  }
  process.on("SIGTERM", gracefulShutdown);
  process.on("SIGINT", gracefulShutdown);