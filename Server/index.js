import express from "express";

const app = express();
const PORT = 3600;

app.listen(PORT, () => {
  console.log("Server up and running at http://localhost:3600");
});
