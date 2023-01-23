const input = require("sync-input");
let totalTickets = 0;
//Array
let gifts = [
  { id: 1, name: "Teddy Bear", price: 10 },
  { id: 2, name: "Big Red Ball", price: 5 },
  { id: 3, name: "Huge Bear", price: 50 },
  { id: 4, name: "Candy", price: 8 },
  { id: 5, name: "Stuffed Tiger", price: 15 },
  { id: 6, name: "Stuffed Dragon", price: 30 },
  { id: 7, name: "Skateboard", price: 100 },
  { id: 8, name: "Toy Car", price: 25 },
  { id: 9, name: "Basketball", price: 20 },
  { id: 10, name: "Scary Mask", price: 75 },
];

function welcome() {
  console.log(
    "WELCOME TO THE CARNIVAL GIFT SHOP!\nHello friend! Thank you for visiting the carnival!\nHere's the list of gifts:\n"
  );
}
function showMenu() {
  console.log(
    "\nWhat do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop"
  );
  let option = Number(input());
  return option;
}
function buyGift() {
  if(gifts.length>0){
    console.log("Enter the number of the gift you want to get:");
    let element = Number(input());
    if (element > 0 && element <= 10) {
      let result = gifts.find((item) => item.id === element);
      switch (result) {
        case undefined:
        case null:
          console.log("Wow! There are no gifts to buy.");
          break;
        default:
          if (result.price > totalTickets) {
            console.log(
              `You don't have enough tickets to buy this gift.\nTotal tickets: ${totalTickets}`
            );
          } else {
            console.log(
              `Here you go, one ${result.name}!\nTotal tickets: ${
                totalTickets - result.price
              }`
            );
            totalTickets -= result.price;
            return result;
          }
      }
    } else if(element >10 || element<1) {
      console.log("There is no gift with that number!");
    }else{
      console.log("Please enter a valid number!");
    }

  }else{
    console.log("Wow! There are no gifts to buy.");
  }

}
function addTickets() {
  console.log("Enter the ticket amount: ");
  let element = Number(input());
  if (element >= 0 && element <= 1000) {
    console.log(`Total tickets: ${totalTickets + element}`);

    return element;
  } else {
    console.log("Please enter a valid number between 0 and 1000.");
  }
}
function checkTickets() {
  console.log(`Total tickets: ${totalTickets}`);
}
function showGiftsUser() {
  if (gifts.length > 0) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(
        `${gifts[i].id}- ${gifts[i].name}, Cost: ${gifts[i].price} tickets`
      );
    }
  } else {
    console.log("Wow! There are no gifts to buy.");
  }

  // gifts.forEach(showGifts);
}
function deleteItem(element) {
  let res = gifts.indexOf(element);
  gifts.splice(res, 1);
}
function main() {
  welcome();
  showGiftsUser();
  let option;
  do {
    option = showMenu();
    switch (option) {
      case 1:
        let element = buyGift();
        if(element!=undefined ||element!=null ){
        deleteItem(element);
        };
        break;
      case 2:
        totalTickets += addTickets();
        break;
      case 3:
        checkTickets();
        break;
      case 4:
        console.log("Here's the list of gifts:\n");
        showGiftsUser();
        break;
      case 5:
        console.log("Have a nice day!");
        break;
      default:
        console.log("Please enter a valid number!");
    }
  } while (option != 5);
}
//RUN APP:
main();
