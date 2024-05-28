// Primitives copies the reference
// Objects holds the reference

let country = 'Bangladesh';
const VISA  = {
    id: 239001008,
    to: 'Dubai',
    from: 'Bangladesh',
};

const manipulate = (c, v) => {
    c = 'Italy';
    v.id = Math.random() * 10000000000000;
};

manipulate(country, VISA);

// successfully manipulated
console.log(country, VISA);