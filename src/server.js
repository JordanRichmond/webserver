const express = require("express");
const cors = require("cors");
const app = express();
// const {helloWorld} = require("./controllers");
const helloRouter = require("./routes")

app.use(express.json());
app.use(cors());

// app.get("/hello", helloWorld);
app.use(helloRouter);

app.listen(5000, () => {
    console.log("Listening on port 5000");
});

// in browser to check if working
// https://localHost:5000/hello

// make sure to kill terminal
// run 'node src/server.js' again and refresh browser

// run 'npm i nodemon --save-dev'
// enter "dev": "nodemon src/server.js" in package.json under "test"
// this updates browser automatically