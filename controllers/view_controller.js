var fs = require('fs');
var Haml = require('haml');
var path = require('path');
var querystring = require('querystring');
var snapshot = require('../tool/snapshot');

module.exports = function( topic ){
    var decorate_page = function( file_path ){
        return Haml.compile( fs.readFileSync(file_path,  "utf8") );
    }
    var not_found_page = function( req, res ){
        res.render('not_found');
    }
    
    var snapshot_test;
    
    var controller = {
        
        'main' : function( req, res ){
            res.render('home', {
                hello_world : 'hello world~!!',
                content: function( text ){
                    return decorate_page( path.normalize(  __dirname + '/../views/header.haml') );
                },
                snapshot : snapshot_test
            });
        
        },
        
        'draw' : function( req, res ){
            res.render('draw', {
               
            
            });
        
        },
        
        'query' : function( req, res ){
            //parse req, get url
            var url = querystring.parse( req.url.split('?')[1] );
            var resource_path = snapshot.take( url );
            //snapshot this url and return the resoure url
            res.end( resource_path );
        }
        
        
    }
    
    
    if( controller[topic] == undefined )
        return not_found_page;
    return controller[topic];
}



