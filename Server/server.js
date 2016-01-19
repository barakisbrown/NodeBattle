var NodeBattle;
(function (NodeBattle) {
    var Server;
    (function (Server) {
        var io = require('socket.io');
        var server = io.listen(3000);
        var welcomeMsg = "Welcome to NodeBattle. A simple fighter made entirely out of Javascript";
        server.on('connection', function (socket) {
            console.log('a new client has connected (id=' + socket.id + ')');
            socket.emit('welcome', welcomeMsg);
        });
        server.on('end', function () {
            console.log('a client has disconnected');
        });
    })(Server = NodeBattle.Server || (NodeBattle.Server = {}));
})(NodeBattle || (NodeBattle = {}));
