import React, { useEffect } from "react"

import classStyles from "./WeatherBlock.module.css"
import { connect } from "react-redux"

import {fetchDataStart} from '../../store/actions' 

const WeatherBlock = (props) => {

  useEffect(() => {
    props.uploadData()
  }, [])

  
  return (
    <div className={classStyles.Block}>
      {props.error || props.loading && 'Loading...'}
      {props.weather && (
        <div>
          <h3>WeatherBlock in {props.weather.name}</h3>
          <p>{props.weather.weather[0].main}</p>
          <p>Temperature now: {(+props.weather.main.temp - 273.15).toFixed(0)}C</p>
        </div>
      )}
    </div>
  )
}


const mapStateToProps = state => {
  return {
    weather: state.weatherBlock.data,
    loading: state.weatherBlock.loading,
    error: state.weatherBlock.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadData: () => dispatch(fetchDataStart())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherBlock)
