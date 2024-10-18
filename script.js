// Toggle navigation menu
let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

if (menuicn && nav) {
    menuicn.addEventListener("click", () => {
        nav.classList.toggle("navclose");
    });
}

// Sample graph using Chart.js
const ctx = document.getElementById('progressGraph');
if (ctx) {
    const progressGraph = new Chart(ctx.getContext('2d'), {
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
} else {
    console.warn('Canvas element with id "progressGraph" not found.');
}

// Improved one-month calendar
const calendar = document.getElementById('calendar');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

if (calendar && monthElement && yearElement) {
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
        if ((firstDay + i - 1) % 7 === 0) { 
            dateElement.classList.add('sunday');
        }
        calendar.appendChild(dateElement);
    }
} else {
    console.warn('Calendar elements (calendar, month, year) not found.');
}

// Dropdown functionality for .option3
const option3 = document.querySelector('.option3');
if (option3) {
    option3.addEventListener('click', function () {
        const dropdownMenu = this.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        }
    });
} else {
    console.warn('Element with class "option3" not found.');
}

// Profile dropdown toggle
const profileIcon = document.getElementById('dp');
const profileDropdown = document.getElementById('profileDropdown');

if (profileIcon && profileDropdown) {
    profileIcon.addEventListener('click', function (event) {
        profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation(); 
    });

    document.addEventListener('click', function (event) {
        const isClickInside = profileIcon.contains(event.target);
        if (!isClickInside) {
            profileDropdown.style.display = 'none'; 
        }
    });
} else {
    console.warn('Profile icon or dropdown not found.');
}
