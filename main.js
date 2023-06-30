const express = require("express");
const app = express();

app.use(express.static("./"));

const port = 8080; // Port server yang akan digunakan
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
