function nQueenSolution(chessBoard){
    solution = true;
    for(let i = 0; i < chessBoard.length; i++)
        for(let j = 0; j < chessBoard.length && solution === true; j++)
            if(chessBoard[i][j] === 1)
                solution = queenAttacking(chessBoard, i, j)
    return solution
}

function queenAttacking(chessBoard, i, j){
    for(let a = j + 1; a < chessBoard.length; a++)
        if(chessBoard[i][a] === 1) {
            console.log("Horozontal failure - Cell: [" + i + "] [" + j + "]")
            return false;}

    for(let a = i + 1; a < chessBoard.length; a++)
        if(chessBoard[a][j] === 1){
            console.log("Vertical failure - Cell: [" + i + "] [" + j + "]")
            return false;}
    
    for(let a = i + 1, b = j - 1; a < chessBoard.length && b >= 0; a++, b--)
        if(chessBoard[a][b] === 1){
            console.log("Left diagonal failure - Cell: [" + i + "] [" + j + "]")
            return false;}

    for(let a = i + 1, b = j + 1; a < chessBoard.length && b < chessBoard.length; a++, b++)
        if(chessBoard[a][b] === 1){
            console.log("Right diagonal failure - Cell: [" + i + "] [" + j + "]")
            return false;}

    return true;
}

function lQueen(n){
    chessBoard = []
    for(let i = 0; i < n; i++){
        chessBoard[i] = []
        for(j = 0; j < n; j++)
            chessBoard[i][j] = 0;
    }

    for(let i = 0, j = 1; i < n; i++, j += 2){
        if(j >= n)
            j = 0;
        chessBoard[i][j] = 1;
    }
    if(nQueenSolution(chessBoard) == true)
        return chessBoard;
    else {
        for(let i = 0; i < n; i++){
            chessBoard[i] = []
            for(j = 0; j < n; j++)
                chessBoard[i][j] = 0;
        }
        for(let i = 0, j = 1; i < n; i++, j += 2){
            chessBoard[i][j % n] = 1;
        }
        return chessBoard
    }
}
