/*
 OR Operator
--------------------------------------------------------------------------
 If first value is Truthy, will be stick with it else move to next value
 If all are Falsy, last value will be taken then!
*/
console.log(3 || 'jonas');
console.log('' || 'Jonas');
console.log(false || 2);
console.log(0 || 'MetaName');
console.log(undefined || 'ok');

console.log(null || undefined);
console.log(null || undefined || 0 || '' || 'Hello' || 23 || null);

{
  const guest = 0;
  const finalGuest = guest ? guest : 10;
  console.log(finalGuest);

  // Better solution with short circuit...
  // [NOTE]: will not work with guest 0 so, fix it :(
  // const finalGuest2 = guest || 10;
  // use nullish operator which does care only nullish value like
  // null & undefined not(0 or '')
  const finalGuest2 = guest ?? 10;
  console.log(finalGuest2);
}

/*
 && Operator
----------------------------------------------------------------------------

If one of the operand false the whole operation will be falsy
It's Oposite of || or operator.

Stop from falsy value :) easy to remember
*/

console.log(2 && 4 && 'Metaname' && undefined && null && 'END');
console.log(null && 2 && 'more');
console.log('Hi' && '' && null);
