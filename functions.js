const themeToggleButton = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleButton.classList.add('dark-mode');
}

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleButton.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

function updateClock() {
    const now = new Date(); 
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    const seconds = String(now.getSeconds()).padStart(2, '0'); 

    const currentTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = currentTime;
}

setInterval(updateClock, 1000);

updateClock();

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit-id').addEventListener('click', function (event) {
        event.preventDefault(); // Užkerta kelią formos pateikimui

        const data = {
            firstName: document.getElementById('first-name-id').value,
            lastName: document.getElementById('last-name-id').value,
            email: document.getElementById('email-id').value,
            telephone: document.getElementById('telephone-number-id').value,
            address: document.getElementById('address-id').value,
            mathGrade: parseFloat(document.getElementById('math-id').value) || 0,
            physicsGrade: parseFloat(document.getElementById('physics-id').value) || 0,
            programmingGrade: parseFloat(document.getElementById('programming-id').value) || 0,
            economyGrade: parseFloat(document.getElementById('economy-id').value) || 0,
            communicationsGrade: parseFloat(document.getElementById('communications-id').value) || 0
        };

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(data.email)) {
            alert("Prašome įvesti teisingą el. pašto adresą.");
            return;
        }

        const phonePattern = /^\d{11}$/; 
        if (!phonePattern.test(data.telephone)) {
            alert("Prašome įvesti teisingą telefono numerį (10 skaitmenų).");
            return;
        }

        if (data.address.trim() === "") {
            alert("Prašome įvesti adresą.");
            return;
        }

        const grades = [
            data.mathGrade,
            data.physicsGrade,
            data.programmingGrade,
            data.economyGrade,
            data.communicationsGrade
        ];
        const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';

        const firstNameP = document.createElement('p');
        firstNameP.textContent = `Vardas: ${data.firstName}`;
        outputDiv.appendChild(firstNameP);

        const lastNameP = document.createElement('p');
        lastNameP.textContent = `Pavardė: ${data.lastName}`;
        outputDiv.appendChild(lastNameP);

        const emailP = document.createElement('p');
        emailP.textContent = `El. paštas: ${data.email}`;
        outputDiv.appendChild(emailP);

        const telephoneP = document.createElement('p');
        telephoneP.textContent = `Telefonas: ${data.telephone}`;
        outputDiv.appendChild(telephoneP);

        const addressP = document.createElement('p');
        addressP.textContent = `Adresas: ${data.address}`;
        outputDiv.appendChild(addressP);

        const averageP = document.createElement('p');
        averageP.textContent = `${data.firstName} ${data.lastName} (${data.email}): ${average.toFixed(2)}`;
        outputDiv.appendChild(averageP);

        document.getElementById('first-name-id').value = '';
        document.getElementById('last-name-id').value = '';
        document.getElementById('email-id').value = '';
        document.getElementById('telephone-number-id').value = '';
        document.getElementById('address-id').value = '';
        document.getElementById('math-id').value = '';
        document.getElementById('physics-id').value = '';
        document.getElementById('programming-id').value = '';
        document.getElementById('economy-id').value = '';
        document.getElementById('communications-id').value = '';
    });
});
