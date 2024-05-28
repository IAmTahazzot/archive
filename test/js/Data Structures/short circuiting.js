/*
&& return the first falsy value
|| return the first truthy value
?? nullish coalescing operator return first NOT nullish values which means
it only excludes null & undefined.

 */


// or (||)
console.log( '' || false || true || 20 ); // true

// and (&&)
console.log( 'beautiful' && null && '' && true ); // null

// nullish (??)
console.log( null ?? undefined ?? 0 ?? false ?? true ); // 0