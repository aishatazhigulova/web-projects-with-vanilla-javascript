const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;


function sestMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex)
  localStorage.setItem('selectedMoviePrice', moviePrice)
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  //Copy selected seats
  //Map through array
  //Return a new array of indexes
  let seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

  localStorage.setItem('selectedSeats', JSON.stringify(seatIndex))


  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}
 


// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  sestMovieData(e.target.selectedIndex, e.target.value)
    updateSelectedCount();
});




// Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
 
// Initial count and total set
updateSelectedCount();
