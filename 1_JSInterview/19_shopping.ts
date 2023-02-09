const cart = [
    {
        item: "🍭",
        price: 2.99,
        type: "sweet",
        onSale: true
    },
    {
        item: "🍫",
        price: 1.99,
        type: "sweet",
        onSale: true
    },
    {
        item: "🥫",
        price: 1.99,
        type: "savory",
        onSale: false
    },
    {
        item: "🍬",
        price: .89,
        type: "sweet",
        onSale: false
    },
    {
        item: "🥦",
        price: 3.99,
        type: "savory",
        onSale: false
    },
    {
        item: "🍖",
        price: 3.99,
        type: "savory",
        onSale: true
    },
];

/*  
    Use reduce() to total the groceries. 
    Then find a method that will round the total to 2 decimal places.
*/

function total(arr) {
    const total = arr.reduce((accumulator, obj) => accumulator + obj.price, 0).toFixed(2);
    return total;
};

console.log(total(cart));
