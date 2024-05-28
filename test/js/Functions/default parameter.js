const sum = (n1 = 0, n2 = 0) => {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }

    return 0;
};

console.log(sum())