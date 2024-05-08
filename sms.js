const axios = require('axios');

const username = "daviddada360@gmail.com";
const password = "David_4141";
// const message = req.body.message; // Assuming you're using Express.js and 'message' is in the request body
const message = "Testing Testing 12";
const sender = "Olaoluwa";
const mobiles = "+2349075801828"; // Assuming 'phone' is in the request body

// Build the URL with variables
const url = `https://portal.nigeriabulksms.com/api/?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&message=${encodeURIComponent(message)}&sender=${encodeURIComponent(sender)}&mobiles=${encodeURIComponent(mobiles)}`;

// Send the HTTP request
axios.get(url)
    .then(response => {
        // Check if request was successful
        if (response.status === 200) {
            console.log("Message sent successfully");
            // Assuming you're using Express.js and want to redirect
        } else {
            console.error("Error: Message not sent");
            // Handle the error as needed
        }
    })
    .catch(error => {
        console.error("Error:", error);
        // Handle the error as needed
    });
