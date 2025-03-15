function updateClock() {
    // Get the current UTC time
    let now = new Date();

    // Convert to Eastern Time (UTC-5 or UTC-4 during Daylight Saving Time)
    // Offset in milliseconds (-5 * 60 * 60 * 1000 for UTC-5)
    let offset = -5 * 60 * 60 * 1000; // Adjust this for other US time zones
    let easternTime = new Date(now.getTime() + offset);

    // Extract hours, minutes, and seconds
    let hours = easternTime.getUTCHours().toString().padStart(2, '0');
    let minutes = easternTime.getUTCMinutes().toString().padStart(2, '0');
    let seconds = easternTime.getUTCSeconds().toString().padStart(2, '0');

    // Display the time in the clock element
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Display the time when the page first loads
updateClock();