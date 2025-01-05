const total = document.getElementById('total');
const count = document.getElementById('num');
const container = document.querySelector('.container');
const selectedSeat = document.querySelectorAll('.row .seat:not(.occupied)');
const selectedMovie = document.getElementById('movie-selector');
let ticketPrice = +selectedMovie.value
// console.log(typeof ticketPrice);

populateUI();
//function to store index and price of Movie.
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('movieIndex', movieIndex)
    localStorage.setItem('moviePrice', moviePrice)
}
//function to update seat count and total amount.
function updateCount() {
    const Seat = document.querySelectorAll('.row .seat.selected')
    const seatsIndex = [...Seat].map((seat) => {
        return [...selectedSeat].indexOf(seat)
    })
    localStorage.setItem('Seat', JSON.stringify(seatsIndex))

    let selectedSeatCount = Seat.length;
    count.innerText = selectedSeatCount;
    total.innerText = selectedSeatCount * ticketPrice;
    // console.log(selectedSeatCount);

}
// updateCount()

// function to populate the UI to as it was before page load.

function populateUI(){
    const selectedSeatIndex = JSON.parse(localStorage.getItem('Seat'))
    console.log(selectedSeatIndex);
    
    if (selectedSeatIndex !== null && selectedSeatIndex.length > 0) {
        selectedSeat.forEach((seat, index)=>{
            if(selectedSeatIndex.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('movieIndex')
    if(selectedMovieIndex !== null){
        selectedMovie.selectedIndex = selectedMovieIndex
    }
}

// Movie Event Listner
selectedMovie.addEventListener('change', (e) => {
    ticketPrice = e.target.value;
    setMovieData(e.target.selectedIndex,e.target.value);
    updateCount();
})


// Seat Event Listner
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateCount();
    }
})


updateCount();