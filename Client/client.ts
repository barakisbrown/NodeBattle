/// <reference path="..\typing\node\node.d.ts" />
/// <reference path="../misc.ts"/>
/// <reference path="../player.ts" />

module NodeBattle.Client {
  var io = require('socket.io-client');
  var client = io.connect('http://localhost:3000');

  client.on('welcome', function(msg) {
      console.log(msg);
  });
}
