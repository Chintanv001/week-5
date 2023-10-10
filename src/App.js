import './App.css'
import React, { useEffect, useState } from 'react'
import { debounce } from 'lodash'

function App() {
  const [numbersArray] = useState([])
  const [number, setNumber] = useState('')

  const logAnswer = (num) => {
    console.log('logAnswer called')
    const debounceNumber = debounce(() => {
      let crestCount = 0
      let infotechCount = 0
      let crestInfotechCount = 0
      console.log('Number is : ', num)
      for (let i = 1; i <= num; i += 1) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log('Crest Infotech')
          crestInfotechCount += 1
        } else if (i % 3 === 0) {
          console.log('Crest')
          crestCount += 1
        } else if (i % 5 === 0) {
          console.log('Infotech')
          infotechCount += 1
        } else {
          console.log(i)
        }
      }

      console.log('Crest-count :', crestCount)
      console.log('Infotech-count :', infotechCount)
      console.log('CrestInfotech-count :', crestInfotechCount)
      console.log('*-*-*-*-*-*-*-*')
    }, 1000)
    debounceNumber(num)
  }

  const submitNumber = (e) => {
    e.preventDefault()
    const checkNumber = numbersArray.find((num) => number === num)

    if (number === undefined || number === '0') {
      alert('Enter number between 1 to n')
    } else if (checkNumber) {
      alert('Number is already exists')
    } else {
      numbersArray.push(number)
      logAnswer(number)
    }
    setNumber('')
  }

  const showAllResult = () => {
    numbersArray.sort((a, b) => a - b).map((num) => logAnswer(num))
  }

  useEffect(() => {
    console.log(number)
    console.log(numbersArray)
  }, [number])

  return (
    <>
      <h1 className="mainheading-text">Week-5 Task</h1>
      <div className="maininputbox">
        <div className="inputbox">
          <h2 className="headinginsidebox">Enter a Number</h2>
          <form onSubmit={submitNumber}>
            <div className="inputdiv">
              <input
                className="inputnumber"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
              />
            </div>
            <div className="buttondiv">
              <button className="submitbutton" type="submit">
                Get Result
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mainoutputbox">
        <div className="outputbox">
          <h2 className="headinginsidebox">Previous Searches</h2>
          <div className="mainlistdiv">
            <div className="listdiv">
              {numbersArray
                .sort((a, b) => a - b)
                .map((num, index) => (
                  <button
                    key={index}
                    type="submit"
                    className="listitem"
                    onClick={() => logAnswer(num)}
                  >
                    {num}
                  </button>
                ))}
            </div>
          </div>
          <div>
            <div className="buttondiv">
              <button
                className="submitbutton"
                type="submit"
                onClick={showAllResult}
              >
                Get All Result
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
