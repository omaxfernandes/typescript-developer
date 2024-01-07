// Declared interfaced
interface IceCream {
    flavor: string;
    scoops: number;
};

// let myIceCream = {
//     flavor: "vanilla",
//     scoops: 5,
// };

// console.log(myIceCream.flavor, myIceCream.scoops);

// function tooManyScoops(dessert: IceCream) { 
//     if (dessert.scoops >= 4) {
//         return dessert.scoops + " is too many scoops!";
//     } else {
//         return "Your order will be ready soon!"
//     }
// };


// console.log(tooManyScoops({ flavor: "vanilla", scoops: 5 }));


// Interface extended

interface Sundae extends IceCream{
    sauce: "Chocolate" | "Caramel" | "Strawberry";
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: boolean;
}


let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'Caramel',
    nuts: true
}



function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'Caramel'}));