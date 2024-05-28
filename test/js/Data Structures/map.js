const tree = new Map();

tree
    .set('name', 'Pineapple tree')
    .set('height', '.5m')
    .set('fruits', 5);

console.log(
    // tree.has('height')
    // tree.get('fruits')
    // tree.size
    // tree.keys()
    // tree.entries()
    // tree.values()
);

// more example
const computer = new Map([
    ['CPU', 'AMD Ryzen 9 9550X'],
    ['GPU', 'RTX (anything that would be good)'],
    ['Motherboard', 'ASUS'],
    ['Monitor', 'BENQ'],
]);
