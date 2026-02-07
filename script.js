const form = document.getElementById('studentForm');
const confirmModal = document.getElementById('confirmModal');
const popupModal = document.getElementById('popupModal');

const cancelBtn = document.getElementById('cancelBtn');
const continueBtn = document.getElementById('continueBtn');
const okBtn = document.getElementById('okBtn');

const registrationForm = document.getElementById('registrationForm');
const dashboard = document.getElementById('dashboard');

// Form submit → show confirm modal
form.addEventListener('submit', e => {
    e.preventDefault();
    confirmModal.style.display = 'flex';
});

// Cancel → close confirm modal
cancelBtn.addEventListener('click', () => {
    confirmModal.style.display = 'none';
});

// Continue → close confirm modal, show success modal
continueBtn.addEventListener('click', () => {
    confirmModal.style.display = 'none';
    popupModal.style.display = 'flex';
});

// OK → close success modal, hide form, show dashboard
okBtn.addEventListener('click', () => {
    popupModal.style.display = 'none';
    registrationForm.style.display = 'none';
    dashboard.style.display = 'block';
});

// Click outside modal → close
window.onclick = (e) => {
    if (e.target === confirmModal) confirmModal.style.display = 'none';
    if (e.target === popupModal) popupModal.style.display = 'none';
};

// Password strength
const password = document.getElementById('password');
const fill = document.getElementById('passwordFill');
const text = document.getElementById('passwordText');
const passwordMessage = document.getElementById('passwordMessage');

password.addEventListener('input', () => {
    const len = password.value.length;

    if (len === 0) {
        fill.style.width = '0%';
        text.textContent = '';
        text.style.background = 'transparent';
        passwordMessage.textContent = 'Your password must be more than 4 and less than 16 characters.';
        passwordMessage.style.color = 'white';
        return;
    }

    let percent = 0, color = '', msg = '';

    if (len <= 5) { percent = 25; color = 'red'; msg = 'Weak Password'; }
    else if (len <= 7) { percent = 40; color = 'red'; msg = 'Weak Password'; }
    else if (len <= 11) { percent = 70; color = 'orange'; msg = 'Fair Password'; }
    else { percent = 100; color = 'green'; msg = 'Password Looks Good'; }

    fill.style.width = percent + '%';
    fill.style.background = color;

    text.textContent = msg;
    text.style.background = color;
    text.style.color = 'white';
    text.style.padding = '4px 8px';
    text.style.borderRadius = '6px';
    text.style.display = 'inline-block';
});