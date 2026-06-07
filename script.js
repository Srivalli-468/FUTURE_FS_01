alert("JavaScript is connected successfully!");
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Stops the page from refreshing

            const nameInput = document.getElementById('name');
            const name = nameInput ? nameInput.value : 'there';

            alert(`Thank you, ${name}! Your message has been simulated successfully.`);

            contactForm.reset(); // Clears the form fields
        });
    }
});