var shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
shoppingList.push('fruit loops');
//console.log(shoppingList);
 shoppingList.splice(4,1, "fair trade coffe");
//console.log(shoppingList);
 shoppingList.splice(2,2, 'rice', 'beans');
// console.log(shoppingList);
 cart = [];
 lastitem = shoppingList.pop();
//  console.log(shoppingList);
 cart.unshift(lastitem);
//console.log(cart);//[ 'fruit loops' ]
 firstitem = shoppingList[0];//pop tarts
shoppingList.shift(firstitem);
//console.log(shoppingList);
  cart.unshift(firstitem);

//console.log(cart);//[ 'pop tarts', 'fruit loops' ]
// console.log(shoppingList);//[ 'ramen noodles', 'rice', 'beans', 'fair trade coffe' ]

 while (shoppingList.length > 0){
   for(i=0; i<= shoppingList.length; i++){
    var item=shoppingList.pop();
    cart.unshift(item);
  
  }
} 
 console.log(cart);
cart.sort();
console.log(cart);





