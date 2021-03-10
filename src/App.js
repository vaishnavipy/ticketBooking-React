
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [input,setInput] = useState("joker");

  const [selectedArr,setSelectedArr] = useState([])

  const price = {joker : 10, girlOnTrain : 8, lionKing : 11, avengers : 12 }

  function handleChange(e){
    setInput(e.target.value)
  }

  const [seatArr ] = useState( Array(40).fill(null))
  



 function handleSeatSelection(e){

  if(selectedArr.includes(Number(e.target.id))){

    setSelectedArr(prevState => prevState.filter(seatNo => seatNo !== Number(e.target.id)));

  }else{

    setSelectedArr(prevState => [...prevState,Number(e.target.id)])  ;

  }

 }
 let everyThirdColumn = 2; let everyEighthColumn = 5;

  const seats = seatArr.map((seat,i) => {
    if(i === everyThirdColumn  ){
      
      return <div key={i} id={i}></div>
    }
    else if(i === everyEighthColumn+everyThirdColumn){
      everyThirdColumn = everyThirdColumn+10;
      return <div key={i} id={i}></div>
    }
    else{
      return <div className= {selectedArr.includes(i) ? "seat occupied" : "seat un-occupied"} key={i} id={i} onClick={handleSeatSelection}></div>
    }
    
  })

 

  return (
    <div className="container">
      <h1>Book Tickets</h1>

      <select value={input} onChange={handleChange}>
        <option value="joker">Joker (10$)</option>
        <option value="girlOnTrain">The girl On the Train (8$)</option>
        <option value="lionKing">Lion King (11$)</option>
        <option value="avengers">Avengers (12$)</option>
      </select>

      <div className="flex">
        <div className="seat un-occupied"></div>
        <span>UnOccupied</span>
        <div className="seat occupied"></div>
        <span>Occupied</span>
      </div>

      <div className="screen">

      </div>

      <div className="seat-div">
        {seats}
      </div>
     <p> You have selected <span className="selection"> {selectedArr.length} </span> seats and your total price is <span className="selection">{ selectedArr.length * price[input]}$</span></p>
    </div>
  );
}

export default App;
