var page = require('webpage').create();

module.exports = {
    'take' : function( url ){
        page.open( url, function(){
          page.render('imgs/snapshot.png');
          phanton.exit();
            
        });
      
    }
}