const is_zwrotna = ( n, array ) => {
  for ( let i = 0; i < n; i++ ){
    if ( array[i][i] == false ) {
      return false;
    }
  } 
  return true;
}