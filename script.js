document.getElementById("book-ride").addEventListener("submit", function(event) {
    event.preventDefault();

    const pickup = document.getElementById("pickup-location").value;
    const dropoff = document.getElementById("dropoff-location").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    alert(`Your ride from ${pickup} to ${dropoff} on ${date} at ${time} has been booked!`);
});
