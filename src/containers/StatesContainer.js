import { useState, useEffect } from "react"
import StatesList from "../components/StatesList"

const StatesContainer = () => {
  const [states, setStates] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9393/states')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setStates(data)
      })
  }, []);

  return (
    <>
      <h2>Our States</h2>
      <StatesList states={states} />
    </>
  )
}

export default StatesContainer