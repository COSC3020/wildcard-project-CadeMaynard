const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

cb = [[]];
assert(nQueenSolution(cb) === true);

cb = [[1]];
assert(nQueenSolution(cb) === true);

cb = [[1,0,0],
      [0,0,1],
      [0,1,0]];
assert(nQueenSolution(cb) === false); // This guy is causing trouble.

cb = [[1,0,0],
      [0,1,1],
      [0,0,0]];
assert(nQueenSolution(cb) === false);

cb = [[0,0,1,0],
      [1,0,0,0],
      [0,0,0,1],
      [0,1,0,0]];
assert(nQueenSolution(cb) === true);

cb = [[0,0,1,0],
      [0,0,0,0],
      [0,1,0,1],
      [0,0,1,0]];
assert(nQueenSolution(cb) === false);

// https://people.sc.fsu.edu/~jburkardt/datasets/tsp/tsp.html
cb = [[0,0,0,1,0],
      [0,1,0,0,0],
      [0,0,0,0,1],
      [0,0,1,0,0],
      [1,0,0,0,0]];
assert(nQueenSolution(cb) == true);

console.log(lQueen(4))
assert(nQueenSolution(lQueen(4)))

console.log(lQueen(5))
assert(nQueenSolution(lQueen(5)))

console.log(lQueen(9))
assert(nQueenSolution(lQueen(9)))
