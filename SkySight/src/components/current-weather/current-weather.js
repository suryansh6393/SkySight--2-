import React from "react";
// import {format} from 'data-fns';
// import "./current-weather.css";


const CurrentWeather = ({ data, mode }) => {
  let sunrise=(data.sys.sunrise);
  let newsunrise=new Date(sunrise*1000);
  const hour=newsunrise.getHours();
  const min=newsunrise.getMinutes();

  let sunset =(data.sys.sunset);
  let newsunset= new Date(sunset*1000);
  const hours=newsunset.getHours();
  const mins=newsunset.getMinutes();
  
  
 


  return (
    <div class="container mt-4">
    <div class="card bg-transparent" >
      <div class="card-header">
        <h5 class="card-title"  style={{color: mode === 'dark' ? 'white' : 'black' }}>{data.city}</h5>
        <p class="card-text">{data.weather[0].description}</p>
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <p class="card-text" style={{color: mode === 'dark' ? 'white' : 'black' }}><h1>{Math.round(data.main.temp)}°C</h1></p>
          <img alt="weather" src={`icons/${data.weather[0].icon}.png`} class="weather-icon" />
        </div>
        <div class="details mt-3">
          <div class="row">
            <div class="col-sm" style={{color: mode === 'dark' ? 'white' : 'black' }}>
              {/* <p class="mb-0">Details</p> */}
              <p class="mb-0" >Feels like: {Math.round(data.main.feels_like)}°C</p>
              <p class="mb-0" >Wind: {data.wind.speed} m/s</p>
            </div>
            <div class="col-sm" style={{color: mode === 'dark' ? 'white' : 'black' }}>
              <p class="mb-0">Humidity: {data.main.humidity}%</p>
              <p class="mb-0">Pressure: {data.main.pressure} hPa</p>
            </div>
            <div class="col-sm" >
            <p class="mb-0" style={{color: mode === 'dark' ? 'white' : 'black' }}>sunrise/sunset: {hour}:{min} AM/ {hours}:{mins}PM</p>
            

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CurrentWeather;