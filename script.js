document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const createAccountBtn = document.querySelector('.create-account');
    const errorElement = document.createElement('div');

    errorElement.classList.add('error-message');
    errorElement.textContent = "*Passwords do not match";

    const toggleError = (showError) => {
        if (showError) {
            passwordInput.classList.add('error');
            confirmPasswordInput.classList.add('error');

            if (!passwordInput.nextElementSibling || !passwordInput.nextElementSibling.classList.contains('error-message')) {
                passwordInput.insertAdjacentElement('afterend', errorElement.cloneNode(true));
            }

            if (!confirmPasswordInput.nextElementSibling || !confirmPasswordInput.nextElementSibling.classList.contains('error-message')) {
                confirmPasswordInput.insertAdjacentElement('afterend', errorElement.cloneNode(true));
            }
        } else {
            passwordInput.classList.remove('error');
            confirmPasswordInput.classList.remove('error');

            if (passwordInput.nextElementSibling && passwordInput.nextElementSibling.classList.contains('error-message')) {
                passwordInput.nextElementSibling.remove();
            }

            if (confirmPasswordInput.nextElementSibling && confirmPasswordInput.nextElementSibling.classList.contains('error-message')) {
                confirmPasswordInput.nextElementSibling.remove();
            }
        }
    };

    createAccountBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleError(passwordInput.value !== confirmPasswordInput.value);
    });

    passwordInput.addEventListener('input', () => toggleError(passwordInput.value !== confirmPasswordInput.value));
    confirmPasswordInput.addEventListener('input', () => toggleError(passwordInput.value !== confirmPasswordInput.value));
});
