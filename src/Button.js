import React from 'react';

function Button(props){
    console.log(props);
    let [clicks,setClicks]=React.useState(0);

    function handle(){
        setClicks(clicks+1);
    }
    return(
        <button onClick={handle} >Clicked {clicks} {props.thing} times
       
         </button>

        


    )
}

export default Button;
