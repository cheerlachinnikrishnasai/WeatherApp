import React from 'react'
import { useState } from 'react'
import "./App.css"

const App = () => {
  const [city, setCity] = useState("")
  const [result,setResult] =useState("")

  const changeHandler = (e) => {
    setCity(e.target.value)
  }
  
  const submitHandler = (e) =>{
    e.preventDefault();
    //console.log(city)
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e1bc2351efd2d8345c2a386cda95e8b3&units=metric`)
      .then(response => 
        response.json()
      ).then((data) =>{
        const cityNameInApi = (data.name).toLowerCase()
        const cityLower = city.toLowerCase()
        if(cityLower !== cityNameInApi)
        {
          setResult(`Please provide valid city name`)
        }
        else{
          setResult("The Temperature at " + city + " is " +  data.main.temp + "°C")
        }
      })
      setCity("")
    }
  return (
    <div className='App'>
      <center>
        <br />
        <br />
        <h2>
          <b>Weather App</b>
        </h2>
        <br/>
        <form onSubmit={submitHandler}>
          <input className = 'inputField' type="text" size={30} name="city" value={city} onChange = {changeHandler} />
          <br />
          <br />
          <button className = 'submitField' type="submit">Get Temperature</button>
          <br />
          <br />
          <div className='result'>
            <i><big><font size="+8" >{result}</font></big></i>
          </div>
        </form>
        <footer>Please type the firt letter as capital letter for city ,For Example :London.<br />
                <hr />
                Note: For Tirupati Weather Report , Please type the input field as "Tirumala - Tirupati"
        </footer>
      </center>
    </div>
  )
}

export default App

