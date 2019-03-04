const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
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
//Management cors
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/employees',require('./routes/employee.routes'));

//Starting server
app.listen(app.get('port'), () => {
    console.log("Server is listening on port: " + app.get('port'));
});