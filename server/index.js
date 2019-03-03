const express = require('express');
const app = express();

//Settings
//Use the port provided by the enviroment settings or the port 3000
app.set('port', process.env.PORT || 3000);

//Middlewares

//Routes

//Starting server
app.listen(app.get('port'), () => {
console.log("Server is listening on port: " + app.get('port') );
});