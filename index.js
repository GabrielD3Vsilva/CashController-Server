const routes = require('./routes/Routes');
const express = require('express');
const cors = require('cors');
const app = express( );

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(8080, ()=>console.log('app connected!'))