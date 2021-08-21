const express = require('express');
const app = express();
const port = process.env.PORT || 5000;






if(process.env.NODE_ENV === "production"){
  app.use(express.static("../build"));
}
app.listen(port, () => console.log("Server is running on port : " + port));