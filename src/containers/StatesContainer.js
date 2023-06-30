// import { useState, useEffect } from "react"
// import StatesList from "../components/StatesList"
// import StateCard from "../components/StateCard";


// const StatesContainer = () => {
//   const [states, setStates] = useState([]);
//   useEffect(() => {
//     fetch('http://localhost:9393/states')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         setStates(data)
//       })
//   }, []);

//   const stateCards = states.map((state,index) => <StateCard key ={index} state={state} />)

//   return (
//     <>
//       <h2>Our States</h2>
//       <StateCard />
//       <StatesList states={states} />
//     </>
//   )
// }

// export default StatesContainer