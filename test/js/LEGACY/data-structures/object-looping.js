// Object iteration
const days = {
  sat: { status: 'open' },
  sun: { status: 'closed' },
  mon: { status: 'open' },
  tue: { status: 'open' },
  wed: { status: 'open' },
  thu: { status: 'open' },
  fri: { status: 'closed' },
};

// Using Object keys
for (let item of Object.keys(days)) {
  console.log(item + ': ' + days[item].status);
}

console.log(Object.values(days)); // Values
console.log(Object.keys(days)); //Keys
console.log(Object.entries(days)); // entire object details

for (let [item, { status }] of Object.entries(days)) {
  console.log(item + ': ' + status);
}
