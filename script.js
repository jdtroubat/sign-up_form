document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const createAccountBtn = document.querySelector('.create-account');

    const createErrorElement = () => {
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = "Passwords do not match";
        return errorElement;
    };

    const validatePasswords = () => {
        const passwordErrorElement = passwordInput.nextElementSibling;
        const confirmPasswordErrorElement = confirmPasswordInput.nextElementSibling;

        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordInput.classList.add('error');
            confirmPasswordInput.classList.add('error');

            if (!passwordErrorElement || !passwordErrorElement.classList.contains('error-message')) {
                passwordInput.insertAdjacentElement('afterend', createErrorElement());
            }

            if (!confirmPasswordErrorElement || !confirmPasswordErrorElement.classList.contains('error-message')) {
                confirmPasswordInput.insertAdjacentElement('afterend', createErrorElement());
            }
        } else {
            passwordInput.classList.remove('error');
            confirmPasswordInput.classList.remove('error');

            if (passwordErrorElement && passwordErrorElement.classList.contains('error-message')) {
                passwordErrorElement.remove();
            }

            if (confirmPasswordErrorElement && confirmPasswordErrorElement.classList.contains('error-message')) {
                confirmPasswordErrorElement.remove();
            }
        }
    };

    createAccountBtn.addEventListener('click', (e) => {
        e.preventDefault();
        validatePasswords();
    });

    passwordInput.addEventListener('input', validatePasswords);
    confirmPasswordInput.addEventListener('input', validatePasswords);
});