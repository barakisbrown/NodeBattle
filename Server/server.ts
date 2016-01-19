/// <reference path="..\typing\node\node.d.ts" />
/// <reference path="../misc.ts"/>
/// <reference path="../mob.ts"/>
/// <reference path="../mobs.ts"/>

module NodeBattle.Server {
    var io = require('socket.io');
    var server = io.listen(3000);
    var welcomeMsg = "Welcome to NodeBattle. A simple fighter made entirely out of Javascript";

    server.on('connection',function(socket) {
        console.log('a new client has connected (id=' + socket.id + ')');
        /** send welcome message */
        socket.emit('welcome',welcomeMsg);
    });

    server.on('end',function() {
      console.log('a client has disconnected');
    })
}
