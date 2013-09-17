var controller = require('./controllers/view_controller');
module.exports = function( app ){

    app.get( '/',  controller('main') );
    app.get( '/query', controller('query') );
    //app.get( '/*', controller('q') );
    
}