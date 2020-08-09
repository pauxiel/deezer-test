const express = require('express');
const deezer = require('api-deezer');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cookieParser = require('cookie-parser');
// data.app_id = process.env.APP_ID;
// var data = {
//     app_id: process.env.APP_ID,
//     url: process.env.CLIENT_URL,
//     secret_key: process.env.APP_KEY
// }
require('dotenv').config();


//app
const app = express();


//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())


app.get('/api', (req, res) => {
    res.json({time: Date().toString()})
})



app.get('/login', (req, res) => {
    res.redirect("https://connect.deezer.com/oauth/auth.php?app_id=" + process.env.APP_ID + "&redirect_uri=" + process.env.CLIENT_URL + "&perms=basic_access,offline_access,manage_library,delete_library");

})









// app.get('/login', deezer.login);



// port
const port = process.env.PORT || 8800 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})