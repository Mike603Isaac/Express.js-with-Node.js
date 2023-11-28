import express from "express";
const app = express();
const port = 2000;

// Lisening to request
app.listen(port, () => {
  console.log("Server is runing on port 2000");
});

