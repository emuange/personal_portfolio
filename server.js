const express = require("express")
const router = express.router();
const cors = require("cors");
const nodemailer = require("nodemailer");


// server used to send emails
const app = express();
app.use(cors());
