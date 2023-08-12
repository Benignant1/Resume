    document.addEventListener('DOMContentLoaded', function() {
        const topicRadios = document.querySelectorAll('input[name="topic"]');
        const otherTopicInput = document.getElementById('other-topic');
        
        topicRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'Other') {
                    otherTopicInput.style.display = 'block';
                    otherTopicInput.setAttribute('required', 'required');
                } else {
                    otherTopicInput.style.display = 'none';
                    otherTopicInput.removeAttribute('required');
                }
            });
        });
        
        const contactForm = document.getElementById('contact-me-form');
        
        contactForm.addEventListener('submit', function(event) {
            
            event.preventDefault();
        });
    });
    