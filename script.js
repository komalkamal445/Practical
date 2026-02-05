        const form = document.getElementById('studentForm');
        const modal = document.getElementById('popupModal');
        const okBtn = document.getElementById('okBtn');
        const registrationForm = document.getElementById('registrationForm');
        const dashboard = document.getElementById('dashboard');

        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission
            modal.style.display = 'flex'; // Show popup
        });

        okBtn.addEventListener('click', function () {
            modal.style.display = 'none';
            registrationForm.style.display = 'none'; // Hide form
            dashboard.style.display = 'block'; // Show dashboard
        });

        window.onclick = function (event) {
            if (event.target == modal) { modal.style.display = "none"; }
        }
        const passwordInput = document.getElementById('password');
        const passwordFill = document.getElementById('passwordFill');
        const passwordText = document.getElementById('passwordText');
        const passwordMessage = document.getElementById('passwordMessage');

        passwordInput.addEventListener('input', function () {
            const value = passwordInput.value;
            const len = value.length;

            // Reset if empty
            if (len === 0) {
                passwordFill.style.width = '0%';
                passwordText.textContent = '';
                passwordMessage.textContent = 'Your password must be more than 4 and less than 16 characters.';
                passwordMessage.style.color = 'white';
                return;
            }

            let strengthPercent = 0;
            let text = '';
            let color = '';

            if (len <= 5) {
                strengthPercent = 25;
                text = 'Your Passwords looks Not Good/Weak';
                color = 'red';
            } else if (len <= 9) {
                strengthPercent = 50;
                text = 'Your Passwords looks Fair';
                color = 'orange';
            } else if (len <= 15) {
                strengthPercent = 75;
                text = 'Your Passwords looks Good';
                color = 'yellow';
            } else if (len <= 20) {
                strengthPercent = 100;
                text = 'Your Passwords looks Good & Strong ';
                color = 'green';
            }

            // Apply fill
            passwordFill.style.width = strengthPercent + '%';
            passwordFill.style.background = color;

            // Text below bar
            passwordText.textContent = text;
            passwordText.style.color = color;

            // Message
            passwordMessage.textContent = 'Your password must be more than 4 and less than 16 characters.';
            passwordMessage.style.color = 'white';
        });