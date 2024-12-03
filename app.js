const express = require("express");
const app = express();
const path = require("path");


app.set("view engine", "ejs");
app.set('views', [path.join(__dirname, "views/user"), path.join(__dirname, "views/admin")]);
app.use(express.static("public"));

const userRouter = require("./routes/userRouter");

app.use("/", userRouter);


app.listen(3000, (err) => {
  if (err) {
    console.log("failed to start server", err);
  } else {
    console.log(`server is running on http://localhost:3000`);
  }
});

module.exports = app;
