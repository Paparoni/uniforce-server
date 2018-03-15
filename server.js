var app = require("express")();

var server = app.listen(process.env.PORT, function() {
    console.log("Server Online!")
})

var io = require("socket.io")(server);
var totalPlayers = 0;
var data = 0;
io.on('connection', function(client){
    totalPlayers++
    console.log(client.id+ ' Connected!')
    client.on('hi', function() {
        console.log('hi');
    })
    
    client.on('player-connected', function(){
        client.emit('online-players', totalPlayers);
    })
    
    client.on('disconnect', function(){
        totalPlayers--
    })
})
