var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//var cart = [];
function addToCart(item) {
<<<<<<< HEAD
      cart.push({ itemName : item, itemPrice : Math.floor(Math.random()*100+1) });
 return `${item} has been added to your cart.`;
=======
      cart.push({ itemName : `${item}`, itemPrice : Math.floor(Math.random()*100+1) });
 return `${item}` + ' ' + 'has been added to your cart.';
>>>>>>> b318302274dd62ffe7ab424b46e109bed77a8096
}



function viewCart() {
<<<<<<< HEAD
  var sen = 'In your cart, you have';
=======
  var sen = 'In your cart, you have ';
>>>>>>> b318302274dd62ffe7ab424b46e109bed77a8096
    //var cart = [{  itemName:"bananas", itemPrice: 17 }, { itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", itemPrice: 49 }]
  if(cart.length >= 2 ){
      for(var item = 0; item < cart.length; item++){

              if(item ===  cart.length -1){
<<<<<<< HEAD
        sen = `${sen} and ${cart[item].itemName} at $${cart[item].itemPrice}.`;
      }
            else{             //cart.slice(-1)[0]
      sen = `${sen} ${cart[item].itemName} at $${cart[item].itemPrice},`;
=======
        sen = sen +'and'+ ' '+ `${cart[item].itemName}` +' '+ 'at' +' '+ '$'+ `${cart[item].itemPrice}`+'.';
      }
            else{             //cart.slice(-1)[0]
      sen = sen +  `${cart[item].itemName}` +' '+ 'at' +' '+ '$'+ `${cart[item].itemPrice}`+','+' ' ;
>>>>>>> b318302274dd62ffe7ab424b46e109bed77a8096
        }
    }
    return sen;
    }
  else if (cart.length === 1){
<<<<<<< HEAD
          sen = `${sen} ${cart[0].itemName} at $${cart[0].itemPrice}.`;
          return sen;
} else{
          return 'Your shopping cart is empty.';
}

}

=======
          sen = sen + `${cart[0].itemName}` +' '+ 'at' +' '+ '$'+ `${cart[0].itemPrice}`+'.';
          return sen;
} else{
          return 'Your shopping cart is empty.';
}

}

>>>>>>> b318302274dd62ffe7ab424b46e109bed77a8096



function total() {
  var totalCost = 0;
    // 3       > 0
if(cart.length > 0){
    for(var item = 0; item < cart.length; item++){
             parseInt(`${cart[item].itemPrice}`,10);
  //indexes 0,1,2 === 3-1 =2 => 2=2
if(item  === cart.length ){
        totalCost = totalCost;
}else {
        totalCost = totalCost + parseInt(`${cart[item].itemPrice}`,10) ;
}
<<<<<<< HEAD
}
}
  return totalCost;
=======
>>>>>>> b318302274dd62ffe7ab424b46e109bed77a8096
}
}
  return totalCost;
}



function removeFromCart(item) {
<<<<<<< HEAD
  //var removed=[];
  //var d;
        for(var i = 0; i < cart.length; i++){

      if(getCart()[i].itemName === item) {                  cart[i].itemName
              getCart().splice(i,1);
              return getCart()  ;           //cart.splice(`${cart[item]}`.itemName,1)
      }
}
return 'That item is not in your cart.'
=======
  var removed=[];

    if(cart.length > 0){
      for (var item = 0;item < cart.length; item++){
    if(item === true){
          cart.splice(item,1);
}   else{
        removed.push(cart.splice(item,1));
}return removed;
}
}return 'That item is not in your cart.'
>>>>>>> b318302274dd62ffe7ab424b46e109bed77a8096
}



<<<<<<< HEAD


=======
>>>>>>> b318302274dd62ffe7ab424b46e109bed77a8096
//const cardNumber = Math.floor(Math.random() * 100000000)        //81387323

function placeOrder(cardNumber) {
  const cartTotal = total();

        if(cardNumber === undefined ){
              return `Sorry, we don't have a credit card on file for you.`
        }else{
<<<<<<< HEAD
            //removeFromCart();
            cart = [];
            return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
        }

=======
            removeFromCart();
        }
return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
>>>>>>> b318302274dd62ffe7ab424b46e109bed77a8096
}
