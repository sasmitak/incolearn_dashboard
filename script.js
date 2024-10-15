let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})


// Sample graph using Chart.js
const ctx = document.getElementById('progressGraph').getContext('2d');
const progressGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Monthly Progress',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Simple one-month calendar
// Improved calendar
const calendar = document.getElementById('calendar');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();

monthElement.textContent = month;
yearElement.textContent = year;

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const firstDay = new Date(year, date.getMonth(), 1).getDay();
const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();

days.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.textContent = day;
    dayElement.style.fontWeight = 'bold';
    if (day === 'Sun') {
        dayElement.style.color = 'red';
    }
    calendar.appendChild(dayElement);
});

for (let i = 0; i < firstDay; i++) {
    const emptyElement = document.createElement('div');
    calendar.appendChild(emptyElement);
}

for (let i = 1; i <= daysInMonth; i++) {
    const dateElement = document.createElement('div');
    dateElement.textContent = i;
    if ((firstDay + i - 1) % 7 === 0) { // Sundays
        dateElement.classList.add('sunday');
    }
    calendar.appendChild(dateElement);
}