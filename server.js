const express = require("express");
const fs = require("fs");
const path = require("path");
const viewroutes = require("./routes/view")
const PORT = process.env.PORT || 3001;
const app = express();

const apiroutes=require("./routes/api")

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static("public"));
app.use(viewroutes);

app.use(apiroutes);

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});