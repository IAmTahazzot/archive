
// Old way
// const req = new XMLHttpRequest();
// req.open('GET', 'https://restcountries.com/v3.1/name/bd');
// req.send();
// req.addEventListener('load', handleCountryData);
//
//
// function handleCountryData() {
//   const data = JSON.parse(this.responseText);
//
//   console.log(data);
//   console.table(data[0]);
// }

// new way