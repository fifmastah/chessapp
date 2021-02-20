var board;
var game;

window.onload = function () {
  setGame()
}


setGame () {
var set = {
  var config = {
    draggable: true,
    position: 'start',
    onDrop: snapback,gameHandler
  }
}
}

var gameBoard = new Chessboard('gameBoard',set);
var game = new Chess();

function snapback (source, target, piece, newPos, oldPos, orientation) {
  if (piece.search(/b/) !== -1) {
    return 'snapback';
  }
}

function gameHandler(source,target) {
  var move = game.move({  from: source, to: target});
}
