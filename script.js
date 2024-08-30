document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();ss

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (you can add more complex validation here)
    if (name && email && message) {
        console.log('Message sent:', { name, email, message });
        alert('Thank you for your message! I will get back to you soon.');
        document.getElementById('contactForm').reset();
    } else {
        alert('please fill out');
    }
});
