  const firebaseConfig = {
    apiKey: "AIzaSyALL242aB3thMoHpOos8-Ne4q9OVABdvkQ",
    authDomain: "housewarming-rsvp-51eb5.firebaseapp.com",
    databaseURL: "https://housewarming-rsvp-51eb5-default-rtdb.firebaseio.com",
    projectId: "housewarming-rsvp-51eb5",
    storageBucket: "housewarming-rsvp-51eb5.appspot.com",
    messagingSenderId: "969003818225",
    appId: "1:969003818225:web:3773ed545addb926d7dd50",
    measurementId: "G-0LF8E1YLJB"
  };

  firebase.initializeApp(firebaseConfig);
  var RsvpAttendees= firebase.database().ref("attendees")
  document.getElementById('rsvpForm').addEventListner('submit',AddAttendees);

  function AddAttendees(e) {
            e.preventDefault();
            const attendeeCount = parseInt($("#attendeeCount").val());
            const attendeeNames = [];

            // Get the names of attendees from the input fields and store them in an array
            for (let i = 1; i <= attendeeCount; i++) {
                const name = $(`#attendeeName${i}`).val();
                attendeeNames.push(name);
            }
            console.log(attendeeNames,attendeeCount)
            // // Store the attendee details in Firebase
            // const db = firebase.database();
            // db.ref("rsvp_responses").push({
            //     count: attendeeCount,
            //     names: attendeeNames,
            //     timestamp: firebase.database.ServerValue.TIMESTAMP
            // });

            // Show a confirmation message to the user
            alert("Thank you for your response!");

            // Close the RSVP modal
            $("#rsvpModal").modal("hide");
        }; 