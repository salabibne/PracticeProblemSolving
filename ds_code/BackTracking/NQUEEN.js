

const board = [
   [0, 0, 0, 0],
   [0, 0, 0, 0],
   [0, 0, 0, 0],
   [0, 0, 0, 0]
]

const isSafe = (board,row,col) => {
   //Top check
   for (i = row; i >-1; i--) {
      if (board[i][col] === 1) {
         return false;
      }
   }
      
   // Top  Left Diagonal check
   for (i = row, j = col; i > -1 && j > -1;i--&&j--){
      if (board[i][j] === 1) {
      return false
      }
   }
   
   
   // Top Right Diagonal check
   for (i = row, j = col; i > -1 && j <= 4; i-- && j++){
      if (board[i][j] === 1) {
         return false
      }

   }

   return true

   
      

}

const nQueen = (board, row, col) => {
   
   // Terminates 
   if (row === board.length) {
      console.log(board);
      return 

   }

   // Placement a Queen
   
   for (let i = 0; i < col; i++) {
      if (isSafe(board, row, i)) {
         board[row][i] = 1;
         nQueen(board, row + 1, 4)
         board[row][i] = 0;
      }
   }



      
}


console.log(nQueen(board,0,4));


