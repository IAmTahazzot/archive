const greeting = () => {
    // returning brand-new function
    return name => console.log('Hello ' + name);
};

greeting()('Tahazzot');