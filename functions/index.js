const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51MIIkuSDaFeSrTp9nLr4SaMfCikJ9s5kU9L7C2euzsb6XMLDrrczRWpXJvoT44aFnIhr5AI5H0QDPfxAsgiCP2i500VHvAwUUm');

// App config
const app = express();

// Middlewares
app.use(cors({origin:true}));
app.use(express.json());
s
// API routes
app.get('/', (request,response)=>response.status(200).send('Hello World!'));

// Listen Command
exports.api =functions.https.onRequest(app);
