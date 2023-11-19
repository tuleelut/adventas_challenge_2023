const cities = [
  { name: "Los Angeles", temperature: 60.0 },
  { name: "Atlanta", temperature: 52.0 },
  { name: "Detroit", temperature: 48.0 },
  { name: "New York", temperature: 80.0 },
];

function convertToFahrenheit(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

const filterCities = (citiesArray) => {
  return citiesArray
    .filter((city) => city.temperature < 70)
    .map((city) => {
      city.temperature = Math.floor(convertToFahrenheit(city.temperature));
      return city;
    });
};

console.log(filterCities(cities));
