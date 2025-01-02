const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", (e) => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        e.preventDefault(); // Prevent form submission
        alert("Please fill out all fields.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
    }
});

