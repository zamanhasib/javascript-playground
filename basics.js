let items = [1, 2, 3, 4, 5];
//items.unshift(10, 12);
//items.shift();
//items = items.slice(1,2);
items.splice(2,1);
console.log(items.toString());
//console.log(items.join('-'));
items[100] = 100;
const [first, second, ...rest] = items;
const item = {
    'one': 1,
    'two': 'two',
    three: [1, 2, 3],
    four: {a: 10, b: 20}
}
//const one = items[0];
//const {one, two, three, four} = item;
const {one: item1, ...restOfObject} = item;
//console.log(item1, restOfObject);
//console.log(first, second);
//console.log(rest);
//console.log(items[99]);
let foo = () => {
    const str = 'this is a \'string\' \nand second line';
    console.log(str);
}
//foo();

