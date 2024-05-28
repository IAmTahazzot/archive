const toUpperCase = str => {
    const [firstWord, ...others] = str.split(' ');
    return [firstWord.toUpperCase(), ...others].join(' ');
};

const capitalize = str => {
    const wList = str.split(' ');
    return wList.map( value => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }).join(' ');
};

// HOF
const transformer = (str, callback) => callback(str);

console.log(transformer('JavaScript is awesome!', toUpperCase));
console.log(transformer('JavaScript is awesome!', capitalize));
