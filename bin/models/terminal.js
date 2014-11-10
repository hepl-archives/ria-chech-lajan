/* Chèch Lajan
 *
 * /models/terminal.js - Terminals MongoDB Model
 *
 * started @ 10/11/14
 */

"use strict";

var root = __dirname + "/..";

module.exports = function( db, Mongoose, MongooseUtils ) {

    var oSchema = Mongoose.Schema( {
        "latitude": {
            "type": Number
        },
        "longitude": {
            "type": Number
        },
        "address": {
            "type": String
        },
        "empty": {
            "type": Boolean,
            "default": false
        },
        "bank": {
            "type": Mongoose.Schema.Types.ObjectId,
            "ref": "Bank"
        }
    } );

    oSchema.plugin( MongooseUtils.paranoid );

    return db.model( "Terminal", oSchema );

};
