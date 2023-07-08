const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = require();

app.use(cors());
app.use(express());

mongoose.connect();

app.listen(5000, console.log("server started"));
