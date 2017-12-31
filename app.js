const express = require ('express');
const path = require ('path');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const passport = require ('passport');
const mongoose = require ('mongoose');




const app = express();

const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

const users = require('./routes/users');
app.use('/users',users);


app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Home');
});


app.listen(port, () => console.log(port));

