//Business Logic
let price = 10;

function Ticket(age, time, movie) {
  this.age = age;
  this.time = time;
  this.movie = movie;
}

 //  if (Ticket[i] == 1) {
  //   console.log(Ticket[i]);
  //   price -= 3;
  //   }else if (Ticket[i] == 3) {
  //     price -= 3;
  //   }else  if(Ticket[i] == 5) {
  //     price += 2;
  //   }else {
  //     console.log(price);
  //   } 


Ticket.prototype.ticketprice = function() {
  if (this.age = 1) {
    price -= 2;
  }
  if (this.time = 4) {
    price -= 2;
  }
  if (this.movie = 5) {
    price +=1;
  }
  console.log(price);
  return price;
};







// UI Logic

// function showPrice(answers) {
//   $("#show-prices").show();
// }

// $("form#ticketPrice").submit(function (event) {
//   event.preventDefault();
  // let age = $("#age").val();
  // let time = $("#time").val();
  // let movie = $("#movie").val();
  // let newTicket = new Ticket(age, time, movie);
//   $("#finalTicketPrice").Text(newTicket.movieCost());
//   });
// });

$(document).ready(function() {
$("form#ticketPrice").submit(function (event) {
  event.preventDefault();
  let age = parseInt($("input:radio[name=age]:checked").val());
  let time = parseInt($("input:radio[name=time]:checked").val());
  let movie = parseInt($("input:radio[name=movie1]:checked").val());
  let newTicket = new Ticket(age, time, movie);
  $('#finalTicketPrice').text(newTicket.ticketprice());
  console.log(finalTicketPrice);
});
});