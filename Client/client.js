var NodeBattle;
(function (NodeBattle) {
    var Client;
    (function (Client) {
        var io = require('socket.io-client');
        var client = io.connect('http://localhost:3000');
        client.on('welcome', function (msg) {
            console.log(msg);
        });
    })(Client = NodeBattle.Client || (NodeBattle.Client = {}));
})(NodeBattle || (NodeBattle = {}));
