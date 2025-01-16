const is_symetryczna = ( n, array ) => {
  for ( let y = 0; y < n; y++ ) {
    for ( let x = 1 + y; x < n; x++ ) {
      if ( !( array[y][x] && array[x][y] ) ) return false;
    }
  }
  return true;
}