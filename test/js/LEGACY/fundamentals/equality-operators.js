const age = 18;

// Strict Equality (Recommended)
if (age === 18) {
  console.log('You are a grown person! Congrats!');
}

{
  // Loose Equality (Type Coercion Happen here, Be careful) (Not recommended)
  const age = '18';

  if (age == 18) {
    console.log('You are an Adult now!');
  }
}
