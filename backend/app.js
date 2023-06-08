const express=require('express');
const app=express();

//const dataRoutes = require('./Router/data.js'); //  importing the file from router folder


const bodyParser=require('body-parser');
const router =require('./routers/route.js');

var cors = require('cors');

const sequelize = require('./util/database.js');

const User = require('./models/user.js');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(router);



sequelize.sync().then((result)=>{
    app.listen(3000);
}).catch(err=>{
    console.log(err);
});