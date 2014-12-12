/* Chèch Lajan
 *
 * /router.js - backbone router
 *
 * started @ 12/12/14
 */

"use strict";

var _ = require( "underscore" ),
    Backbone = require( "backbone" ),
    jeolok = require( "jeolok" );

Backbone.$ = require( "jquery" );

var MainView = require( "./views/main" );
var HeaderView = require( "./views/header" );
var TerminalsCollection = require( "./collections/terminals" );
var TerminalsListView = require( "./views/terminals-list" );

var oPosition;

module.exports = Backbone.Router.extend( {

    "views": {},

    "routes": {
        "terminals/list": "showTerminalsList",
        "terminals/map": "showTerminalsMap",
        "terminals/details/:id": "showTerminalDetails",
        "": "showTerminalsList"
    },

    "start": function() {
        console.log( "Router:started" );

        // 1. define & init views
        ( this.views.main = new MainView() ).render();
        this.views.main.initHeader( ( this.views.header = new HeaderView() ).render() );

        // 2. get geoposition of user
        jeolok.getCurrentPosition( { "enableHighAccuracy": true }, function( oError, oGivenPosition ) {
            oPosition = oGivenPosition.coords;
            if( oError ) {
                console.error( "oups" );
                oPosition = {
                    latitude: 50.84275,
                    longitude: 4.35154
                };
            }
            // 3. launch router
            Backbone.history.start( {
                "pushState": true
            } );
        } );
    },

    "showTerminalsList": function() {
        console.log( "showTerminalsList" );
        var that = this;
        this.views.main.loading( true );
        var oTerminalsCollection = new TerminalsCollection();
        ( this.views.list = new TerminalsListView( oTerminalsCollection ) )
            .collection
                .fetch( {
                    "data": {
                        "latitude": oPosition.latitude,
                        "longitude": oPosition.longitude
                    },
                    "success": function() {
                        that.views.main.clearContent();
                        that.views.main.initList( that.views.list.render() );
                        that.views.main.loading( false, oTerminalsCollection.length + " résultats" );
                    }
                } );
    },

    "showTerminalsMap": function() {
        console.log( "showTerminalsMap" );
    },

    "showTerminalDetails": function() {
        console.log( "showTerminalDetails" );
    }

} );
