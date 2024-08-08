export const getPlace = async (places,setAirQuality, setData, setImage) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${places}&appid=8d1f4d8a950db29867916713b0b1c1e0`;
  const unsplashUrl = `https://api.unsplash.com/search/photos?query=${places}&client_id=fmzM0JyuMGe8Zmtw6R7BbfGSRmVV7dqJvFqL4e2cfbo`;

  try {
    const weatherResponse = await fetch(weatherUrl);
    if (!weatherResponse.ok) {
      throw new Error("Network response was not ok");
    }
    const weatherData = await weatherResponse.json();
    setData(weatherData);

    const {lat , lon} = weatherData.coord;
    const airQualityUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=8d1f4d8a950db29867916713b0b1c1e0`

    const airQualityResponse = await fetch(airQualityUrl)
    if (!airQualityResponse.ok) {
        throw new Error("Network response was not ok");
      }

    const  airQualityData = await airQualityResponse.json()
    const airQuality = await airQualityData.list[0]
    setAirQuality(airQuality)

    const imageResponse = await fetch(unsplashUrl);
    if (!imageResponse.ok) {
      throw new Error("Network response was not ok");
    }
    const imageData = await imageResponse.json();
    if (imageData.results && imageData.results.length > 0) {
      setImage(imageData.results[0].urls.regular);
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};
