window.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // ఇది పేజీ రీఫ్రెష్ అవ్వకుండా ఆపుతుంది

            const nameInput = document.getElementById('name');
            const name = nameInput ? nameInput.value : 'there';

            alert("Thank you, " + name + "! Your message has been simulated successfully.");

            this.reset();
        });
    }
});