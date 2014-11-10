/* Chèch Lajan
 *
 * /routes/pages.js - express routes for static pages
 *
 * started @ 03/11/14
 */

"use strict";

// [GET] / - homepage
var homepage = function( oRequest, oResponse ) {
    oResponse.json( "Hello, World!" );
};

// [GET] /jade.test - serving jade file for test purposes
var showFirstJade = function( oRequest, oResponse ) {
    oResponse.render( "index.jade", {
        firstname: "Pierre-Antoine",
        lastname: "Delnatte",
        age: 29,
        cats: [
            { name: "Skitty", gender: "female" },
            { name: "Pixel", gender: "male" }
        ]
    } );
};

// Declare routes
exports.init = function( oApp ) {
    oApp.get( "/", homepage );
    oApp.get( "/jade.test", showFirstJade );
};
