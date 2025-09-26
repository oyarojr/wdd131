const temp = document.querySelector('#temp').textContent;
const wind = document.querySelector('#wind').textContent;
const windchill = document.querySelector('#windchill');

const tempint = parseInt(temp, 10);
const windint = parseInt(wind, 10);


function windch(temper, windy) {
    return 13.12 + (0.6215 * temper) - 11.37 * (windy ** 0.16) + 0.3965 * temper * (windy ** 0.16);
}

const unfwindchi = windch(tempint, windint);
const fowindchi = unfwindchi.toFixed(2);

if (tempint <= 10 && windint > 4.8) {
    windchill.textContent = fowindchi;
} else {
    windchill.textContent = "N/A";
}




document.getElementById('currentyear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;