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
  var board = new Board ({n:n});
  // var matrix = [];

  // //board.togglePiece(0,0);

  // // Iterate over the first row
  // for(var i = 0; i < n; i++){

  //   for(var j = 0; j < n; j++){
  //   // Check if there are any row conflicts
  //     if(!board.hasRowConflictAt(i) && !board.hasColConflictAt(j)){
  //       // if no conflict, toggle first element and push to matrix
  //       board.togglePiece(i,j);
  //       // board should have [[1,0],[0,0]]
  //   //matrix.push(board.rows(i));
  //       // matrix looks like [[1,0]]
  //     }
  //   }
  // // Move on to the next row
  //   // Check if there's any row and column conflicts
  //     // if there are conflicts, move to next element
  //     // if no conflicts in next element, toggle it
  //     // Push to matrix

  // }
  //   matrix.push(board.get(0));
  //   matrix.push(board.get(1));
  // console.log(matrix);
  //   return matrix;
  var inspector = function(node) {
    //if node passes conflict tests, toggle the node
      //recursive inspector function on child
      //return the modified board
  }

  //initialize inspector on first row
  //return result
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n:n});



  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
