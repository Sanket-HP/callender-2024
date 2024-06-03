document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const monthYearDisplay = document.querySelector('.month-year');
    const daysContainer = document.querySelector('.days');

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let date = new Date();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    function renderCalendar() {
        monthYearDisplay.textContent = `${months[currentMonth]} ${currentYear}`;
        daysContainer.innerHTML = '';
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const lastDay = new Date(currentYear, currentMonth + 1, 0).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        const daysFromPrevMonth = firstDay === 0 ? 6 : firstDay - 1;
        const daysFromNextMonth = lastDay === 0 ? 0 : 7 - lastDay;

        for (let i = 1 - daysFromPrevMonth; i <= daysInMonth + daysFromNextMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');

            if (i <= 0 || i > daysInMonth) {
                dayElement.classList.add('empty');
            } else {
                dayElement.textContent = i;
                if (i === date.getDate() && currentMonth === date.getMonth() && currentYear === date.getFullYear()) {
                    dayElement.classList.add('selected');
                }
            }

            daysContainer.appendChild(dayElement);
        }
    }

    prevBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    nextBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });

    renderCalendar();
});
