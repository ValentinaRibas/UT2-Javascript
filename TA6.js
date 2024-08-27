function convertToCelsius(temp) {
    let celsius = (temp - 32) * 5 / 9;
    celsius = Math.round(celsius * 10) / 10;
    console.log(celsius);
}

function convertToFahrenheit(temp) {
    let fahrenheit = (temp * 9 / 5) + 32;
    fahrenheit = Math.round(fahrenheit * 10) / 10;
    console.log(fahrenheit);
}

convertToCelsius(55.4);  
convertToFahrenheit(13);