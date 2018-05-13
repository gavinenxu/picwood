const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cookie = require('cookie-parser');
const session = require('express-session')

const configRoutes = require('./api')
const config = require('./config/config')
const allowCrossDomain = require('./headers/cross-domain')

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookie('express_react_cookie'));
app.use(session({
    secret:'express_react_cookie',
    resave: true,
    saveUninitialized:true,
    cookie: {maxAge: 60 * 1000 * 30}//过期时间30min,单位毫秒
}));

mongoose.Promise = require('bluebird');
mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/${config.database}`, function (err) {
    if (err) {
        console.log(err, "\ndatabase connect fail");
        return;
    }
    console.log('\ndatabase connect succeed');
});

app.listen(config.port,(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log(`===>open http://${config.host}:${config.port} in a browser to view the app`);
    }
});

//crawler
const schedule = require('./crawler/schedule')
schedule.pic_crawler();

configRoutes(app);