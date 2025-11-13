// ===== CONTACT FORM SCRIPT =====
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  
  // Initialize EmailJS once (replace with your actual public key)
  emailjs.init("7eNuyLi6n36thnBZJ");
  
  // Automatically fill in current time if using {{time}} in template
  const timeInput = document.getElementById("time");
  if (timeInput) {
    timeInput.value = new Date().toLocaleString();
  }
  
  form.addEventListener("submit", function(e) {
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
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      status.textContent = "⚠️ Please enter a valid email address.";
      status.style.color = "orange";
      return;
    }
    
    // Show loading state
    status.textContent = "📤 Sending message...";
    status.style.color = "lightblue";
    
    // Disable submit button to prevent multiple submissions
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
    }
    
    // Send email using EmailJS
    emailjs.send("service_kesrds2", "template_as7mhyz", {
        name: name,
        email: email,
        message: message,
        time: new Date().toLocaleString()
      })
      .then((response) => {
        console.log("✅ SUCCESS:", response.status, response.text);
        status.textContent = "✅ Message sent successfully!";
        status.style.color = "lightgreen";
        form.reset();
      })
      .catch((error) => {
        console.error("❌ EmailJS Error:", error);
        
        // More detailed error message
        let errorMessage = "❌ Failed to send message. ";
        if (error.text) {
          errorMessage += error.text;
        } else {
          errorMessage += "Please check your EmailJS configuration.";
        }
        
        status.textContent = errorMessage;
        status.style.color = "red";
      })
      .finally(() => {
        // Re-enable submit button
        if (submitButton) {
          submitButton.disabled = false;
        }
      });
  });
});      status.textContent = "✅ Message sent successfully!";
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
