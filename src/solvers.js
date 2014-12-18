/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  //create new board
  var board = new Board ({n:n});
  //toggle first element
    // check for conflicts. if conflict, move down a row
  for (var i = 0; i < n; i++){
    for (var j = 0; j < n; j++) {
      board.togglePiece(i, j);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(i, j);
      }
    }
  }
  //move down one row
    //check for anyRooksconflicts. if conflict, move over a column
      //check for conflicts. if no conflict, toggle

  //return board;
  return board.rows();
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// window.countNRooksSolutions = function(n) {
//   var board = new Board({n:n});
//   var solutionCount = 0; //fixme


//   var inspect = function(input, startRow) {
//     if(startRow === n){
//       solutionCount++;
//       return;
//     }

//     for (var i = 0; i < n; i++){
//       input.togglePiece(startRow, i);
//       if(!input.hasAnyRooksConflicts()){
//         inspect(input, startRow + 1);
//       }
//       input.togglePiece(startRow , i);
//     }
//   };

//   inspect(board, 0);

//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);

//   return solutionCount;
// };



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solution;

  var inspect = function(input, startRow) {
    if(startRow === n){
      var solution = board.rows();
      return solution;
    }

    for (var i = 0; i < n; i++){
      input.togglePiece(startRow, i);
      if(!input.hasAnyQueensConflicts()){
        inspect(input, startRow + 1);
      }
      input.togglePiece(startRow , i);
    }
  };

  inspect(board, 0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
