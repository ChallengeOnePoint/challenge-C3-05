var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var postits = [];
http.listen(4242);


app.use(express.static(__dirname + '/public'));

app.get('/postits', function(req, res) {
	res.send(JSON.stringify(postits));
});
io.on('connection', function(socket){
	console.log('A');
	socket.on('new_post', function(data) {
		postits.push(data);
		updateBoard();
	});
	socket.on('edit_post', function(data) {
		postits[data.index] = data.object;
		updateBoard();
	});
	socket.on('delete_post', function(index) {
		postits.splice(index, 1);
		updateBoard();
	});

	function updateBoard() {
		socket.emit('update_board', postits);
	}
});
