const whereAmI = async function(country) {
  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  const [data] = await res.json();

  // work with data here...
}

whereAmI('bangladesh');