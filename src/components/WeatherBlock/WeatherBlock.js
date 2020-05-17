import React, { useEffect, useState } from "react"
import axios from "axios"

import classStyles from "./WeatherBlock.module.css"
import { connect } from "react-redux"

const WeatherBlock = (props) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    console.log(props)
    props.onUpload()
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Riga&appid=89368938e6d0b7f841e535c2e58fa33d"
      )
      .then(({ data: data }) => setWeather(data))
      .catch((e) => console.log(e.message))
  }, [setWeather])

  return (
    <div className={classStyles.Block}>
      {weather && (
        <div>
          <h3>WeatherBlock in {weather.name}</h3>
          <p>{weather.weather[0].main}</p>
          <p>Temperature now: {(+weather.main.temp - 273.15).toFixed(0)}C</p>
        </div>
      )}
    </div>
  )
}


const mapStateToProps = state => {
  return {
    weather: state.weatherBlock
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpload: () => dispatch({type: "FETCH_WEATHER_START"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBlock)
