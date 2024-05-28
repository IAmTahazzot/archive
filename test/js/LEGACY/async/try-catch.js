try {
  // an error below...
  x + yield;
} catch( error ) {
  console.log(error);
}