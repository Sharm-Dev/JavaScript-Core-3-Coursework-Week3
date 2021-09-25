let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];




function allOrders(orders) {
  let total = 0;
  console.log("QTY  ITEM            TOTAL");
  
  orders.forEach(function(getOrder) {
    orderTotal(getOrder);
    total += getOrder.unitPrice * getOrder.quantity;
  });
  console.log('')
  console.log(`Total: ${total}`);
};


function orderTotal({quantity, itemName, unitPrice}){
  console.log(
    `${quantity}    ${itemName}          ${(quantity * unitPrice).toFixed(2)}`
  );
}


allOrders(order)







