timeDisplay = document.getElementById('timeDisplay');

function myTimer(){
    const newtime = new Date();
    let hour = newtime.getHours();
    const meridian = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    hour = hour.toString().padStart(2, 0);
    const minutes = newtime.getMinutes();
    const seconds = newtime.getSeconds();
    const finalDisplay = `${hour}:${minutes}:${seconds} ${meridian}`;
    timeDisplay.textContent = finalDisplay;
}

myTimer();
setInterval(myTimer, 1000)