// contactus.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the form data to the server
    fetch('/send-email', { // Update this URL to your server endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message, recipient: 'kaleembasha54@gmail.com' }) // Added recipient email
    })
    .then(response => {
        if (response.ok) {
            console.log('Email sent successfully');
            this.reset(); // Reset the form on success
        } else {
            console.error('Error sending email');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

    // Here you can handle the form data, e.g., send it to a server
    console.log('Form submitted:', { name, email, message });
    console.log("hekko world")
});

