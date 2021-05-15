// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//the path to the reservation html

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'reservation.html')));




//the below code is when you make a reservation

//the event listener for when user submits

$("#submitReservation").on("click", function(event){
    event.preventDefault();

    const newReservations = {

        customersName: $("#reservation-name").val().trim(),
        customersNumber: $("#reservation-number").val().trim(),
        customersEmail: $("#reservation-email").val().trim(),
        customersID: $("#reservation-identification").val().trim(),
    };

    console.log(newReservations);

//this next part takes into account if tables are available through callback

$.post("api/tables", newReservations, function(data) {

    if(data) {

        modal("Congrats, a table is available!!!")
    } else {

        modal("We are going to have to put you on the waiting list.")
    }



    $("#reservation-name").val("");
    $("#reservation-number").val("");
    $("#reservation-email").val("");
    $("#reservation-identification").val("");

});

});













// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));