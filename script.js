// ===== GET ELEMENTS =====
const form = document.getElementById('studentForm');
const registrationForm = document.getElementById('registrationForm');
const dashboard = document.getElementById('dashboard');

// Modals
const confirmModal = document.getElementById('confirmModal');
const popupModal = document.getElementById('popupModal');

// Buttons
const cancelBtn = document.getElementById('cancelBtn');
const continueBtn = document.getElementById('continueBtn');
const okBtn = document.getElementById('okBtn');

// Password strength
const password = document.getElementById('password');
const fill = document.getElementById('passwordFill');
const text = document.getElementById('passwordText');
const passwordMessage = document.getElementById('passwordMessage');

// ===== PASSWORD STRENGTH =====
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

// ===== FORM SUBMIT: SHOW CONFIRM MODAL =====
form.addEventListener('submit', e => {
    e.preventDefault();
    confirmModal.style.display = 'flex';
});

// ===== CONFIRM MODAL BUTTONS =====
cancelBtn.addEventListener('click', () => {
    confirmModal.style.display = 'none';
});

continueBtn.addEventListener('click', () => {
    confirmModal.style.display = 'none';
    popupModal.style.display = 'flex';
});

// ===== SUCCESS MODAL =====
okBtn.addEventListener('click', () => {
    popupModal.style.display = 'none';
    registrationForm.style.display = 'none';
    dashboard.style.display = 'block';

    // ===== GET USER INPUT VALUES =====
    const roll = form.querySelector('input[placeholder="Enter Roll Number"]').value;
    const firstName = form.querySelector('input[placeholder="First Name"]').value;
    const lastName = form.querySelector('input[placeholder="Last Name"]').value;
    const father = form.querySelector('input[placeholder="Father\'s Full Name"]').value;
    const dob = form.querySelector('input[type="date"]').value;
    const mobile = form.querySelector('input[placeholder="Enter Mobile Number"]').value;
    const email = form.querySelector('input[placeholder="Enter Email"]').value;
    const gender = form.querySelector('input[name="g"]:checked')?.parentElement.textContent.trim();
    const course = form.querySelector('select').value;
    const country = form.querySelectorAll('select')[1].value;
    const city = form.querySelector('input[placeholder="Enter City"]').value;
    const address = form.querySelector('textarea').value;

    // ===== POPULATE DASHBOARD =====
    dashboard.innerHTML = `
        <h1>🎉 Welcome, ${firstName} ${lastName}!</h1>
        <p style="text-align:center; font-size:16px;">All your registration details are saved & sent. Here are your details:</p>
        <div style="background: rgba(0,0,0,0.05); padding: 20px; border-radius: 12px; margin-top:20px; color:black;">
            <p><b>Roll No:</b> ${roll}</p>
            <p><b>Student Name:</b> ${firstName} ${lastName}</p>
            <p><b>Father Name:</b> ${father}</p>
            <p><b>DOB:</b> ${dob}</p>
            <p><b>Mobile:</b> ${mobile}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Gender:</b> ${gender}</p>
            <p><b>Course:</b> ${course}</p>
            <p><b>Country:</b> ${country}</p>
            <p><b>City:</b> ${city}</p>
            <p><b>Address:</b> ${address}</p>
        </div>
    `;
});

// ===== CLICK OUTSIDE MODALS =====
window.onclick = (e) => {
    if (e.target === confirmModal) confirmModal.style.display = 'none';
    if (e.target === popupModal) popupModal.style.display = 'none';
};
