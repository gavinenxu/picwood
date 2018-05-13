const user = require('./user');
const picture = require('./picture');

const constructorMethod = app => {
    app.use('/', user);
    app.use('/picture', picture);

    app.use('*', (req, res) => {
        //console.log("error");
        //res.redirect('/require_auth');
        res.status(500).json({error: 'server error'});
    });
}

module.exports = constructorMethod;