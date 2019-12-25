import React from 'react';
import './App.css';




function App(){

  let[weightNumber,setweightNumber]=React.useState(null);
  let[heightNumber,setheightNumber]=React.useState(null);
  let[result,setresult]=React.useState(0);
  let[textResult,settextResult]=React.useState('');

  let[myColor,setmycolor]=React.useState('');
 
  
 let isHidden=true
   
  function handleWeightNumber(event) {
        setweightNumber(event.currentTarget.value);
         }

  function handleHeightNumber(event) {
        setheightNumber(event.currentTarget.value);
        }

        function calculatBMI(){
     
          setresult(Math.round(weightNumber/(heightNumber*heightNumber)));
          
          let result=(Math.round(weightNumber/(heightNumber*heightNumber)));
      
            if (result>=18&&result<25) {
              settextResult("Normal");
              setmycolor("green");
                   } 
            else 
                if (result>=25&&result<30) {
                    settextResult("over weight");
                    setmycolor("orange");
                    
                      } 
                else if (result>=30){
                      settextResult("Obese");
                      setmycolor("red")
                 }
                    else if (result<18){
                       settextResult("Under weight");
                       setmycolor("blue")
                 }
                    else{
                       settextResult("Please enter numbers only");
                       setresult('');
                       }
      
               setweightNumber('');
               setheightNumber('');     
          
        }

   return(
       <div>
            


<div className="BMI-container">
          <legend>Body Mass Index (BMI) Calculator</legend>
       

          <div className="BMIcalculato">
          <label>Enter your weight in kg </label>

          <input
           type="number"
           value={weightNumber}
           onChange={handleWeightNumber}
          />
          </div>

          <div className="BMIcalculato">
            <label>Enter your height in meter </label>
            <input
             type="number"
             value={heightNumber}
             onChange={handleHeightNumber}
             />
          </div>

          <div className="display">
                 
                 <p>Your BMI result is... {result}</p>

                  <div className="my-result">
                    <p>You are...</p>
                    <p style={{color:myColor}}>{textResult}</p>
                    </div>
            </div>
          
          <div className="result-button">
          <button className="BMIcalculato" 
            onClick={calculatBMI}>
            result</button>
          </div>  
</div>

 
      </div>
      )
  
}

export default App;
