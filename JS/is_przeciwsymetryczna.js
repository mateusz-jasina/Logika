const is_przeciwsymetryczna = (n, array) => {
  for ( let i = 0; i < n; i++ ){
    if ( array[i][i] == true ) {
      return false;
    }
  } 
  for ( let y = 0; y < n; y++ ) {
    for ( let x = 1 + y; x < n; x++ ) {
      if ( array[y][x] && array[x][y] ) return false;
    }
  }
  return true;
}