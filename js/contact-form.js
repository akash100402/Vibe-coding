document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                showFormMessage('Please fill in all required fields', 'error');
                return;
            }
            
            // Here you would typically send the data to a server
            // For this example, we'll just simulate a successful submission
            simulateFormSubmission(data);
        });
    }
    
    function simulateFormSubmission(data) {
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate network request
        setTimeout(() => {
            // Show success message
            showFormMessage('Your message has been sent successfully!', 'success');
            contactForm.reset();
            
            // Reset button
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }, 1500);
    }
    
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.opacity = '0';
            setTimeout(() => {
                formMessage.className = 'form-message';
                formMessage.style.opacity = '1';
            }, 300);
        }, 5000);
    }
});