
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;


function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

let temp = 10; 
let windSpeed = 5; 

if (temp <= 10 && windSpeed > 4.8) {
    document.getElementById('windchill').textContent = calculateWindChill(temp, windSpeed) + '°C';
} else {
    document.getElementById('windchill').textContent = "N/A";
}
