// ===== CONTACT FORM SCRIPT =====
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  // Automatically fill in current time if using {{time}} in template
  const timeInput = document.getElementById("time");
  if (timeInput) {
    timeInput.value = new Date().toLocaleString();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Get form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (!name || !email || !message) {
      status.textContent = "⚠️ Please fill in all fields.";
      status.style.color = "orange";
      return;
    }

    // Initialize EmailJS (replace with your actual public key)
    emailjs.init("7eNuyLi6n36thnBZJ"); // Example: "D3khs79LDa_9z5q"
    emailjs.send("service_kesrds2", "template_as7mhyz", {
      name: name,
      email: email,
      message: message,
      time: new Date().toLocaleString()
    }, "YOUR_PUBLIC_KEY")
    .then((response) => {
      console.log("✅ SUCCESS:", response);
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "lightgreen";
      form.reset();
    })
    .catch((error) => {
      console.error("❌ EmailJS Error:", error);
      status.textContent = "❌ Failed to send message.";
      status.style.color = "red";
    });
  });
});