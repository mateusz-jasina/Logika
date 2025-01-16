const is_przeciwzwrotna = (n, array) => {
  for ( let i = 0; i < n; i++ ){
    if ( array[i][i] == true ) {
      return false;
    }
  } 
  return true; 
}
