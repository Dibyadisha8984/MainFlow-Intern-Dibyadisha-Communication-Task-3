document.addEventListener("DOMContentLoaded", function() {
    // Interactive Menu
    const menuItems = document.querySelectorAll("#menu li a");
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            menuItems.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Form Validation
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("All fields are required.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Form submitted successfully!");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});