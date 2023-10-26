const axios = require('axios');
const readline = require('readline-sync');

const apiKey = 'c1b38dd7c55e74a402886aef5bab6563';

async function getWeather(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const weatherData = response.data;
    console.log(`Clima en ${city}:`);
    console.log(`- Temperatura: ${weatherData.main.temp}°C`);
    console.log(`- Condiciones: ${weatherData.weather[0].description}`);
  } catch (error) {
    console.error('No se pudo obtener el pronóstico del clima.');
  }
}

const city = readline.question('Ingresa el nombre de la ciudad: ');
getWeather(city);