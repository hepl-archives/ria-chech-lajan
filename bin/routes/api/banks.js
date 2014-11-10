/* Chèch Lajan
 *
 * /routes/api/banks.js - express routes for banks api calls
 *
 * started @ 10/11/14
 */

"use strict";

var root = __dirname + "/../..";

var api = require( root + "/core/middlewares/api.js" ),
    db = require( root + "/core/db.js" );

var Bank = db.get( "Bank" );

// [GET] /api/banks

var list = function( oRequest, oResponse ) {
    Bank
        .find()
        .sort( "name" )
        .exec( function( oError, aBanks ) {
            if( oError ) {
                return api.error( oRequest, oResponse, oError.type, oError );
            }
            if( !aBanks ) {
                aBanks = [];
            }
            api.send( oRequest, oResponse, aBanks );
        } );
};

// Declare routes
exports.init = function( oApp ) {
    oApp.get( "/api/banks", list );
    // oApp.get( "/api/banks/:id", detail );
};
