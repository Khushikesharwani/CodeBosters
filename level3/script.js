// Toggle dark/light mode
document.getElementById('toggleMode').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
});

// Set interval to update time
setInterval(() => {
    const dateElement = document.querySelector("#date");
    const timeElement = document.querySelector("#time");
    let date = new Date();

    // Time formatting
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if (hours >= 12) {
        day_night = "PM";
        if (hours > 12) {
            hours = hours - 12;
        }
    }
    if (hours === 0) {
        hours = 12;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let timeString = hours + ":" + minutes + ":" + seconds + " " + day_night;

    // Date formatting
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-indexed
    let year = date.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    let dateString = month + "/" + day + "/" + year;

    // Set the content
    dateElement.textContent = dateString;
    timeElement.textContent = timeString;
}, 1000);
