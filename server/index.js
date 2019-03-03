const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//Settings
//Use the port provided by the enviroment settings or the port 3000
app.set('port', process.env.PORT || 3000);

//Middlewares
//See details of request
app.use(morgan('dev'));
//Management json request
app.use(express.json());

//Routes
app.use('/api/employees',require('./routes/employee.routes'));

//Starting server
app.listen(app.get('port'), () => {
    console.log("Server is listening on port: " + app.get('port'));
});