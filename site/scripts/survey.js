/**
 * survey.js - Dynamic Survey Form Generator
 * 
 * This script dynamically generates a survey form with validation and submission handling.
 * It replaces static HTML with JavaScript-generated content while maintaining all original functionality.
 * 
 * Features:
 * - Dynamically builds the survey form structure
 * - Handles form validation
 * - Preserves Formspree submission functionality
 * - Provides visual feedback for invalid fields
 */

/**
 * Main function that creates and initializes the survey form
 * This function:
 * 1. Gets the container element where the form will be inserted
 * 2. Generates the complete form HTML structure
 * 3. Sets up event listeners for form submission
 * 4. Implements validation logic
 */
function createSurveyForm() {
    // Get the container element where we'll insert our generated form
    const container = document.getElementById('creating-a-web-form');
    
    /**
     * Generate the complete HTML structure for the survey form
     * Note: This maintains all original fields, attributes, and accessibility features
     */
    container.innerHTML = `
        <h1>Survey</h1>
        <form action="https://formspree.io/f/xvgrrwyd" method="post">
            <section>
                <p>
                    <label for="name_field">What is your name? <abbr title="required" aria-label="required">*</abbr></label>
                    <input type="text" id="name" name="name_field" required />
                </p>
                <p>
                    <label for="email">
                        <span>What is your email? </span>
                        <strong><span aria-label="required">*</span></strong>
                    </label>
                    <input type="text" id="email" name="email_field" required />
                </p>
                <p>
                    <label for="whole_number">
                        <span>Which whole number is best? </span>
                    </label>
                    <input type="number" min="0" step="1" id="whole_number" name="best_whole_number" />
                </p>
                <p>
                    <label for="date">
                        <span>Which day is best? </span>
                    </label>
                    <input type="date" id="date" name="best_day" />
                </p>
                <p>
                    <label for="best_bear">Which bear is best? <abbr title="required" aria-label="required">*</abbr></label>
                    <select id="best_bear" name="best_bear" required aria-required="true">
                        <option selected value="">&nbsp;</option>
                        <option value="Black">Black</option>
                        <option value="Brown">Brown</option>
                        <option value="Care">Care</option>
                        <option value="Panda">Panda</option>
                        <option value="Polar">Polar</option>
                        <option value="Teddy">Teddy</option>
                    </select>
                </p>
                <fieldset>
                    <legend>Do you like radio buttons?</legend>
                    <ul>
                        <li>
                            <label for="yes"><input type="radio" id="yes" name="enjoys_radio_buttons" value="yes">Yes</label>
                        </li>
                        <li>
                            <label for="no"><input type="radio" id="no" name="enjoys_radio_buttons" value="no">No</label>
                        </li>
                        <li>
                            <label for="none"><input type="radio" id="none" name="enjoys_radio_buttons" value="?" checked>None of your business</label>
                        </li>
                    </ul>
                </fieldset>
                <p>
                    <label for="life?">
                        <span>What is the meaning of life? </span>
                    </label>
                    <textarea id="life?" name="life_meaning" rows="5" cols="50" placeholder="Enter the correct answer here"></textarea>
                </p>
                <section>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </section>
            </section>
        </form>
    `;

    // Get reference to the form element after it's been created
    const form = container.querySelector('form');

    /**
     * Event listener for form submission
     * This prevents submission if validation fails and shows an error message
     */
    form.addEventListener('submit', function(e) {
        // Basic validation example - you can expand this
        if (!validateForm()) {
            e.preventDefault();
            alert('Please fill out all required fields correctly.');
        }
        // Form will submit to Formspree if validation passes
    });

    /**
     * validateForm - Validates all form fields
     * @returns {boolean} True if form is valid, false if there are errors
     * 
     * Validation rules:
     * 1. All required fields must be filled
     * 2. Email must be in valid format (if provided)
     * 3. Visually highlights invalid fields with red border
     */
    function validateForm() {
        let isValid = true;
        
        // Check required fields
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '';
            }
        });

        // Check email format
        const emailField = form.querySelector('#email');
        if (emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
            isValid = false;
            emailField.style.borderColor = 'red';
        }

        return isValid;
    }
}

window.addEventListener('DOMContentLoaded', createSurveyForm);